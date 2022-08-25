import { useState, useEffect } from 'react'
import { NavLink, useParams, useNavigate } from 'react-router-dom'
import '../Profile.css'
import '../App.css'

const Profile = () => {
    const [entries, setEntries] = useState([])
    const [selectedEntry, setSelectedEntry] = useState({})
    let navigate = useNavigate()

    const user_id = document.cookie.split('=')[1]
    let params = useParams()
    const getEntries = async () => {
        const req = await fetch(`http://127.0.0.1:3000/entries/user`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Cookie" : document.cookie},
            body: JSON.stringify({user_id: user_id})
        }) //TODO: Change to dynamic id!!
        const res = await req.json()
        setEntries(res)
    }


    useEffect(() => {
        getEntries()

    }, [])

    const handleEntryLiClick = (e) => {
        setSelectedEntry(entries[e.target.id])
    }

    const handleDeleteClick = () => {
        window.confirm('Delete Entry?') ? fetch(`http://127.0.0.1:3000/entries/delete/${selectedEntry.id}`, { method: "DELETE" }) : console.log('No Delete')
        getEntries()
    }

    const entries_lis = entries.length !== 0 ?
        entries.map((entry, index) => <li key={entry.title} className='profile-entry'>
            <span className='profile-entry-date'>{entry.created_at}</span> | <span className='profile-entry-title' onClick={handleEntryLiClick}><b id={index}>{entry.title}</b></span>
        </li>) :
        <li id='no-entries'>You have no entries</li>



    return (
        <>
            <NavLink
                className="profile-navlink-new-entry"
                style={{ margin:"auto", alignSelf:"center", display:"flex", justifyContent:"center"}}
                to='/entry'>
                New Entry
            </NavLink>
            <div className='profile-container'>
                <div id="profile-entries-list-container">
                    <label id='profile-entries-label' htmlFor='entries-list'><h2>Entries</h2></label>
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
                                <button onClick={handleDeleteClick}>Delete Entry</button>
                                <NavLink to={`/entry/${selectedEntry.id}`}>Edit Entry</NavLink>
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