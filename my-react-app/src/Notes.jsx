function Notes({note, children}) {
    return(
        <div>
            <p>Here is my note for the day: {note}</p>
            <p>Any children will go after this.</p>
            <p>{children}</p>
        </div>
    );
}

export default Notes;