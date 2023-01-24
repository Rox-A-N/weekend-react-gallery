import { useState } from "react";
import "./GalleryItem.css";

function GalleryItem({gallery}) {
    // const handleGalleryClick = () => {
    const [isDisplayed, setIsDisplayed] = useState(true);
    
    const [love, setLove] = useState(0);
    

    const toggleDisplay = () => {
        console.log('display image');
        setIsDisplayed(!isDisplayed);
    }

    // }
    return (
        <>
            {/* <h3>Gallery Items</h3> */}
            <div className="gallery">
                <figure>
                    {isDisplayed &&
                    <img src={gallery.path}   height="165px" width="125"  />
                }
                    {!isDisplayed &&
                    <p>Description: {gallery.description}</p>
                    }                  
                        {/* {gallery.path} */}
                        {/* {gallery.description}  // I originally was using a <div> tag and getting alll this info
                        {gallery.likes} */}
                </figure>
                <p>{love} people love this!</p>
                        <button className="button" onClick={() => setLove(love + 1)}>love it!</button>
                        <button className="button" onClick={toggleDisplay}>Description</button>
            </div>
        </>

    );

} 

export default GalleryItem;

// onClick={handleGalleryClick} // originally inside the div tag which is now <img> tag