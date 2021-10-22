function Data ({id,userId,title,body,dlet}) {

    return (
        <div className="data-content">
            <h3>ID : {id}</h3>
            <br/>
            <h4>Title : {title}</h4>
            <br/>
            <p>{body}</p>
            <br/>
            <div>
            <button className="dlt" onClick={dlet}>Delete</button>
            <button className="edit">Edit</button>
            </div>
        </div>
    );
}

export default Data