import '../Entry.css'

const Entry = () => {
return (
    <div className="entry">
        <form className="entry-form">
        <input type='text' className="entry-title" placeholder="Title"/>
        <textarea className="entry-main-content" placeholder="Add an entry..."/>
        <div className="entry-btn-container">
        <button className="btn-hover">Discard Changes</button>
        <button className="btn-hover">Save</button>
        </div>
        </form>
    </div>
)
}

export default Entry