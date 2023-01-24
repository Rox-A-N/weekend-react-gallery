import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import GalleryList from "../GalleryList/GalleryList";


function App() {
  let [galleryList, setGalleryList] = useState([]);
  let [loveCounter, setLoveCounter] = useState([]);

  useEffect(() => {
    fetchGallery();
  }, []);

  useEffect(() => {
    fetchLoveCounter();
  }, []);

  const fetchLoveCounter =  () => {
  console.log('PUT counter for loves');
    axios({
      method: 'PUT',
      url: "/gallery/like/:id",
      data: { loveCounter }
    })
    .then((response) => {
      console.log('PUT response from router', response);
      // res.sendStatus(201); // error popped up with this: res not defined, no errors after I commented it out
      setLoveCounter();
   
    })
    .catch((error) => {
      console.log( error );
      res.sendStatus(500);
    })
  } // IDK if this is what the PUT is supposed to be doing, but its not erring out

  const fetchGallery = () => {
    axios({
      method: "GET",
      url: "/gallery", // get galleryItems from gallery.router.js 
    })
      .then((response) => {
        console.log("response from GET gallery", response.data);
        setGalleryList(response.data);
      })
      .catch((error) => {
        console.log("error getting items", error);
      })
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      {/* <p>{JSON.stringify(galleryList)}</p> // splatted the gallery.data on the DOM, no images */}

      <GalleryList galleryList={galleryList}/>
      
      {/* <img src="images/goat_small.jpg" /> */}
    </div>
  );
}

export default App;
