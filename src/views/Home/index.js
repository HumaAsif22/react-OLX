import { useState } from "react";
import  PostAd from "../Auth/PostAd";
import Posts from "../Posts";
import { logout } from "../../config/Firebase";
import { useHistory } from "react-router";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { themeUpdate } from '../../store/actions/themeAction' 
import { useDispatch, useSelector } from "react-redux";


// import { callAllData } from "../../config/Firebase"

function Home () {

    const [screen, setScreen] = useState('home')
    const history = useHistory()
    const auth = getAuth()
    const [name, setName] = useState()
    const themeColor = useSelector(state => state.theme)
    const dispatch = useDispatch()

    let displayName = ""

     onAuthStateChanged(auth, async (user) => {
        if (user) {
            displayName = user.displayName
            console.log('displayName==>', user)
           await setName(displayName)
            console.log('name', name)
        }
        else{
            console.log("Dashboard no user")
        }
      });
      

    const setCreateAd = () => {
        setScreen('postAd')
        history.push('/postAd')
    }

    const setHome = () => {
        setScreen('home')
        // history.push('/home')
    }

    const onColorSelect = (theme) => {
        dispatch(themeUpdate(theme))
    }

    let themeClass = `${themeColor}-homeTheme`   



    return(
        <div className="home-content" >
            <div className="header" style={{background: themeColor}}>
                <img src="https://www.olx.com.pk/assets/logo_noinline.1cdf230e49c0530ad4b8d43e37ecc4a4.svg" className="logo"/>

                {/* <div className="location">
                <select>Location</select>
                <option>karachi</option>
                
                </div> */}
                
                <div className="search">
                <input className='header-input' 
                placeholder="Find Cars, Mobile phones and more..."
                type='text'/>
                <button><i class="fas fa-search"></i></button>
                </div>

                <div>
                <button className="create-btn" onClick={logout}>Logout</button>

                {screen === 'postAd' ? <PostAd setHome={setHome}/> : <button onClick={setCreateAd} className="create-btn">Create Ad</button>}
                </div>

                <div style={{padding:'19px 0'}}>
                    <div 
                    onClick={() => onColorSelect('whitesmoke')}
                    style={{width:'35px', height:'35px', background:'whitesmoke',display:'inline-block',borderRadius:'50%',marginRight:'5px'}}></div>
                    
                    <div 
                    onClick={() => onColorSelect('black')}
                    style={{width:'35px', height:'35px', background:'black',display:'inline-block',borderRadius:'50%'}}></div>
                </div>

                




            </div>
            <div className={themeClass}>

                <br/><h3 style={{textTransform:'capitalize'}}>Welcome: {name}</h3>

                <Posts/>

            </div>
            <div className="footer">

            </div>
        </div>
    );
}

export default Home