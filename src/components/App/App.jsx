import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  let [galleryItem, setGalleryItem] = useState([]);
  const galleryItemProp = useState([]);

  useEffect(() => {
    fetchGallery();
  }, []);

  const fetchGallery = () => {
    axios({
      method: "GET",
      url: "/galleryItems", // get galleryItems from gallery.router.js (I think? or is it galleryItems)
    })
      .then((response) => {
        console.log("response from GET galleryItems", response.data);
        setGalleryItem(response.data);
      })
      .catch((error) => {
        console.log("error getting items", error);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <p>Gallery goes here</p>
      <p>{JSON.stringify(gallery)}</p>
      <div>
        {galleryItemProp.map((gallery) => (
          <li key={gallery.id}>
            {gallery.path},{gallery.description},{gallery.likes}
          </li>
        ))}
      </div>
      <img src="images/goat_small.jpg" />
    </div>
  );
}

export default App;
