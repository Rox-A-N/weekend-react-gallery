import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList({ galleryList }) {
  return (
    <>
      <h3>Gallery List</h3>
      
      {galleryList.map((gallery) => {
        return (
          <GalleryItem gallery={gallery}/>
        );
      })}
    </>
  );
}

export default GalleryList;
