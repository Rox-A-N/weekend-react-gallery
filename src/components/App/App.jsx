import React, { useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';


function App() {
  let [galleryArray, setGalleryArray] = useState([]);

  useEffect(() => {
    fetchGallery();
  }, []);

  const fetchGallery = () => {
    axios.get('/gallery') // get galleryItems from gallery.data.js
    .then((response) => {
      console.log('response from GET galleryItems', response.data);
      setGalleryArray(response.data);
    })
    .catch((error) => {
      console.log('error getting items', error);
    })
  }
    
  
  
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <img src="images/goat_small.jpg"/>
      </div>
    );
}

export default App;
