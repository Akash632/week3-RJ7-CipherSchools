import React,{useState} from 'react';
import Axios from "axios";

function Photos() {
    const[photo,setPhoto]=useState([]);
    const[isLoading,setIsLoading]=useState(true);

    useEffect(()=>{
        // fetch("https://jsonplaceholder.typicode.com/photos")
        // .then((response)=>response.json())
        // .then((json)=>setPhoto(JSON.parse(json)))
        // .finally(()=>setIsLoading(false));

        Axios.get("https://jsonplaceholder.typicode.com/photos")
        .then((response)=>
        {
            let foundPhotos=response.data;
            setPhotoList(foundPhotos);
        })
        .catch((err)=>console.err(err))
        .finally(()=>setIsLoading(false));
    },[]);
    if (isLoading){
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        )
    }
    return (
        <div>
            {photosList.map((photo,index)=>{
                <div>
                    <img src={photo.url} alt={photo.title} />
                    </div>
            })}
            </div>
    );
}

export default Photos;
