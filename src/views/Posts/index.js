import { useEffect, useState } from "react";
import Post from "../../component";
import { getAllAds } from "../../config/Firebase"
// import { useSelector } from "react-redux";

function Posts ({searchedItem}) {

    const [data, setData] = useState([])                            
    // const theme = useSelector(state => state.theme)

    useEffect(async () => {
        const data = await getAllAds()
        setData(data)
        console.log('post===>' ,data)
    },[])

    const dlet = (index) => {
        // console.log("index: ", index)
        const tempPost = [...data]
        tempPost.splice(index, 1)
        setData(tempPost)
    }

    // const themeClass = `${theme}-postTheme`


    return(
        <div className="post-content">
            {data.map((item,index) => {
                return <div>
                    <Post title={item.title} images={item.images} description={item.description} price={item.price} dlet={()=>dlet(index)}/>
                </div>
            })}
        </div>
    );
}

export default Posts