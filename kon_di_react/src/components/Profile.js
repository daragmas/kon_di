import { useState, useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'

const Profile = () => {
    const [entries, setEntries] = useState([])
    const [selectedEntry, setSelectedEntry] = useState({})

    let params = useParams()

    useEffect(() => {
        const getEntries = async () => {
            const req = await fetch(`http://127.0.0.1:3000/entries/2`) //TODO: Change to dynamic id!!!
            const res = await req.json()
            setEntries(res)
        }
        getEntries()
    }, [])

    const handleEntryLiClick = (e) => {
        // console.log(e.target.id)
        setSelectedEntry(entries[e.target.id])
        console.log(entries[e.target.id])
    }

    const entries_lis = entries.length !== 0 ?
        entries.map((entry, index) => <li key={entry.title} className='profile-entry'>
            <span className='profile-entry-date'>{entry.created_at}</span> | <span className='profile-entry-title' id={index} onClick={handleEntryLiClick}>{entry.title}</span>
        </li>) :
        <li id='no-entries'>You have no entries</li>

    const handleDeleteClick = () => {
        window.confirm('Delete Entry?') ? fetch(`http://127.0.0.1:3000/entries/delete/${selectedEntry.id}`) : console.log('No Delete')
    }

    return (
        <div>
            <div className="profile-entries-list-container">
                <ul className='entries-list'>
                    {entries_lis}
                </ul>
            </div>
            <div className='profile-selected-entry-container'>
                <h3 className='profile-selected-entry-title'>{selectedEntry.title}</h3>
                <small>{selectedEntry.created_at}</small>
                <p>{selectedEntry.content}</p>
                {selectedEntry.id ? 
                    (
                        <>
                            <button onClick={handleDeleteClick}>Delete Entry</button>
                            <NavLink to={`/entry/${selectedEntry.id}`}>Edit Entry</NavLink>
                        </>
                    ):
                    null
                }

            </div>
            <NavLink to='/entry'>New Entry</NavLink>
        </div>
    )
}

export default Profile