import { submitPost, getAllAds } from "../../../config/Firebase";
import { useState, useEffect } from 'react'
import { useHistory } from "react-router";
import { useSelector } from "react-redux";

function PostAd({setHome}){

    const [form, setForm] = useState({})
    const [ads, setAds] = useState([])
    const history = useHistory()
    const theme = useSelector(state => state.theme)
    
    useEffect(async () => {
        const tempAds = await getAllAds()
        setAds(tempAds)
    }, [])

    const createAd = () => {
        submitPost(form)
    }

    const onChangeValues = (key, e) => {
        const value = key === 'images' ? e.target.files : e.target.value
        setForm({ ...form , [key]: value})
    }

    const closeAd = () => {
        // setHome()
        history.push('/')

    }

    // console.log('form ===> ' ,form)
    console.log('ads ===>',ads)

    let themeClass = `${theme}-postAdTheme`

    
    return (
        <div className="postCard" style={{background: theme}}>

            <div className={themeClass}>

                <button className="close-post" onClick={closeAd}><i class="far fa-times-circle"></i></button><br/>

                <h1 className="post-title">Create Ad</h1>
                <input  className="form-input" type="text" onChange={(e) => onChangeValues('title' , e)} placeholder="Title"/>
                <input className="form-input" type="text" onChange={(e) => onChangeValues('description' , e)} placeholder="Description"/>
                <input className="form-input" type="number" onChange={(e) => onChangeValues('price' , e)} placeholder="Price"/>
                <input className="form-input" type="file" onChange={(e) => onChangeValues('images' , e)} placeholder="Image" multiple/>

                <button className="post-button" onClick={createAd}> Submit Ad</button>

            </div>

        </div>
    );

}

export default PostAd