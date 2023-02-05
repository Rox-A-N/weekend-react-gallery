import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList({ galleryList, fetchGallery }) {
  return (
    <>
      {/* <h3>Gallery List</h3> */}
      
      {galleryList.map((gallery) => {
        return (
          <GalleryItem fetchGallery={fetchGallery} gallery={gallery} key={gallery.id}/>
          // <GalleryItem gallery={gallery} key={gallery.id} fetchLoveCounter={fetchLoveCounter}/>  // new code, but it broke the app

        );
      })}
    </>
  );
}

export default GalleryList;
