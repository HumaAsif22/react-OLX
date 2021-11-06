import { useSelector } from "react-redux";

function Post ({title,images,description,price,dlet}) {

    const theme = useSelector(state => state.theme)
    const themeClass = `${theme}-postTheme`

    return (
        <div className={themeClass}>
            {/* <h3>ID : {item.id}</h3> */}
            <img style={{width:'300px',height:'200px'}} src={images[0]}/>
            <br/>
            <h4>{title}</h4>
            <br/>
            <p>Description: {description}</p>
            <br/>
            <h5>Price: {price} </h5>
            <br/>
            <div>
            <button className="dlt" onClick={dlet}>Delete</button>
            {/* <button className="edit">Edit</button> */}
            </div>
        </div>
    );
}

export default Post