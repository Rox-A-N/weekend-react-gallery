import { useState } from "react";
import "./GalleryItem.css";
import Axios from "axios";

function GalleryItem({gallery, fetchGallery}) {
    // const handleGalleryClick = () => {
    const [isDisplayed, setIsDisplayed] = useState(true);
    
    
    const toggleDisplay = () => {
        console.log('display image');
        setIsDisplayed(!isDisplayed);
    }

    const fetchLoveCounter =  (id) => {
        console.log('PUT counter for loves');
          Axios({
            method: 'PUT',
            url: `/gallery/like/${id}`,
          })
          .then((response) => {
            console.log('PUT response from router', response);
            // res.sendStatus(201); // error popped up with this: res not defined, no errors after I commented it out
            // setLoveCounter();
         fetchGallery();
          })
          .catch((error) => {
            console.log( error );
            res.sendStatus(500);
          })
        } 
        

    // }
    return (
        <>
            <div className="gallery">
                <figure>
                    {isDisplayed &&
                    <img src={gallery.path}   height="165px" width="125" onClick={toggleDisplay} />
                }
                    {!isDisplayed &&
                    <p onClick={toggleDisplay}>Description: {gallery.description}</p>
                    }                  
                 
                </figure>
                <p>{gallery.likes} people love this!</p>
                        <button className="button" onClick={() => fetchLoveCounter(gallery.id)}>love it!</button>
                       
            </div>
        </>

    );

} 

export default GalleryItem;

