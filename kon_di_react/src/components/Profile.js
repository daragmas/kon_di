import { useState, useEffect } from 'react'
import { NavLink, useParams, useNavigate } from 'react-router-dom'
import '../styles/Profile.css'
import '../styles/App.css'

const Profile = ({ loginState }) => {
    const [entries, setEntries] = useState([])
    const [selectedEntry, setSelectedEntry] = useState({})
    let navigate = useNavigate()


    let params = useParams()

    const getEntries = async () => {
        const user_id = document.cookie.split('=')[1]
        try {
            const req = await fetch(`http://localhost:3000/entries/user`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Cookie": document.cookie
                },
                body: JSON.stringify({ user_id: user_id })
            })
            const res = await req.json()
            setEntries(res)
        }
        catch {
            if (!loginState) navigate('/login')
        }
    }


    useEffect(() => {
        getEntries()
    }, [])

    const handleEntryLiClick = (e) => {
        setSelectedEntry(entries[e.target.id])
    }

    const handleDeleteClick = () => {
        window.confirm('Delete Entry?') ? fetch(`http://localhost:3000/entries/delete/${selectedEntry.id}`, { method: "DELETE" }) : console.log('No Delete')
        getEntries()
    }

    const formatCreatedAt = (entry) => {
        let created_atDateSplit = entry.created_at.split('T')[0].split('-')
        return (created_atDateSplit[1] + "/" + created_atDateSplit[2] + "/" + created_atDateSplit[0])
    }

    const entries_lis = entries.length !== 0 ?
        entries.map((entry, index) => <li key={entry.title} className='profile-entry'>
            <span className='profile-entry-date'>{formatCreatedAt(entry)}</span> | <span className='profile-entry-title' onClick={handleEntryLiClick}><b id={index}>{entry.title}</b></span>
        </li>) :
        <li id='no-entries'>You have no entries</li>

    return (
        <>
            <NavLink
                className="profile-navlink-new-entry"
                style={{ margin: "auto", alignSelf: "center", display: "flex", justifyContent: "center" }}
                to='/entry'>
                New Entry
            </NavLink>
            <div className='profile-container'>
                <div id="profile-entries-list-container">
                    <h3 id='profile-entries-label'>Entries</h3>
                    <ul className='entries-list'>
                        {entries_lis}
                    </ul>
                </div>
                <div id='profile-selected-entry-container'>
                    <h3 className='profile-selected-entry-title'>{selectedEntry.title}</h3>
                    <small>{selectedEntry.created_at}</small>
                    <p>{selectedEntry.content}</p>
                    {selectedEntry.id ?
                        (
                            <>
                                <button id="profile-entry-delete-button" onClick={handleDeleteClick}>Delete Entry</button>
                                <NavLink style={{
                                    alignItems:"center",
                                    backgroundColor: "#73A9AD",
                                    border: "3px solid #A1E6EB",
                                    borderRadius: "2px",
                                    color: "white",
                                    display: "flex",
                                    flexDirection:"row",
                                    justifyContent:"center",
                                    textAlign: "center",
                                    textDecoration:'none',
                                    width: "25%"
                                }} to={`/entry/${selectedEntry.id}`}>Edit Entry</NavLink>
                            </>
                        ) :
                        null
                    }
                </div>

            </div>

        </>
    )
}

export default Profile