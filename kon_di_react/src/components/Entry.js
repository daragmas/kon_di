import '../Entry.css'
import { useParams } from 'react-router-dom'
import {useState, useEffect} from 'react'

const Entry = () => {
    const [formData, setFormData] = useState({
        title:'',
        content:''
    })

    let params = useParams()
    // console.log('params: ', params)

    useEffect(() => {
        const getData = async () => {
            let req = await fetch(`http://localhost:3000/entries/edit/${params.entryid}`)
            let res = await req.json()
            setFormData(res)
        }
        if(params.entryid) {getData()}
    }, [])

    const handleInputChange = (e) =>{
        const key= e.target.name
        const value = e.target.value
        setFormData({...formData, [key]:value})
    }

    // console.log(formData)

    return (
        <div className="entry">
            <form className="entry-form">
                <input 
                    type='text' 
                    className="entry-title" 
                    placeholder="Title" 
                    onChange={handleInputChange}
                    value={formData.title}
                    name='title' 
                    />
                <textarea 
                    className="entry-main-content" 
                    placeholder="Add an entry..."
                    onChange={handleInputChange} 
                    value={formData.content} 
                    name='content'/>
                <div className="entry-btn-container">
                    <button className="btn-hover">Discard Changes</button>
                    <button className="btn-hover">Save</button>
                </div>
            </form>
        </div>
    )
}

export default Entry