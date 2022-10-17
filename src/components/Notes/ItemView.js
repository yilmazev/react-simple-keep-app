const ItemView = ({ note }) => {
    return (
        <div className="notes-item">
            <span className="notes-title">{note.title}</span>
            <span className="notes-text">{note.text}</span>
        </div>
    )
}

export default ItemView