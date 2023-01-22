function GalleryItem({gallery}) {
    const handleGalleryClick = () => {

    }
    return (
        <>
            {/* <h3>Gallery Items</h3> */}

            <img src="gallery.path" key={gallery.id} width="100px" height="100px"/>
                {/* {gallery.path} */}
                {/* {gallery.description}
                {gallery.likes} */}
          
        </>

    );

} 

export default GalleryItem;

// onClick={handleGalleryClick} // originally inside the div tag which is now <img> tag