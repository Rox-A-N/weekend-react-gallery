import "./GalleryItem.css";

function GalleryItem({gallery}) {
    // const handleGalleryClick = () => {

    // }
    return (
        <>
            {/* <h3>Gallery Items</h3> */}
            <div className="gallery">
                <figure>
                    <img src={gallery.path}   height="165px" width="125"  />
                    <figcaption>
                        <button>love it!</button>
                    </figcaption>
                        {/* {gallery.path} */}
                        {/* {gallery.description}  // I originally was using a <div> tag and getting alll this info
                        {gallery.likes} */}
                </figure>
            </div>
        </>

    );

} 

export default GalleryItem;

// onClick={handleGalleryClick} // originally inside the div tag which is now <img> tag