import { useState } from "react";
import PostAd from "../Auth/PostAd";

function Home () {

    const [screen, setScreen] = useState('home')

    const setCreateAd = () => {
        setScreen('postAd')
    }

    const setHome = () => {
        setScreen('home')
    }

    return(
        <div className="home-content">
            <div className="header">
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

                {screen === 'postAd' ? <PostAd setHome={setHome}/> : <button onClick={setCreateAd} className="create-btn">Create Ad</button>}




            </div>
            <div className="home-body">

                

            </div>
            <div className="footer">

            </div>
        </div>
    );
}

export default Home