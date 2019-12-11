import React, {useState, useEffect} from "react";
import TitleDate from './components/TitleDate';
import ImageDisplay from './components/ImageDisplay';
import Explain from './components/Explain';
import axios from 'axios';
import "./App.css";

function App() {
  const [photoData, setPhotoData] = useState([]);

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=hJK5m8gB7G78sk77SdkOLysES6qGL2PL7smjjfLy`)
      .then(res => {
        setPhotoData([res.data]);
      })
      .catch(err => {
        console.log('Could not get data', err);
      })
  }, []);

  return (
    <div className="container">

      <div className="logo-title-container">
        <h1>NASA</h1>
        {photoData.map((item, index) => {
          return <TitleDate key={index} date={item.date} title={item.title} />
        })}
      </div>

      <div className="image-container">
        {photoData.map((item, index) => {
          return <ImageDisplay key={index} hdurl={item.hdurl} />
        })}
      </div>

      <div className="description-container">
        {photoData.map((item, index) => {
          return <Explain key={index} explanation={item.explanation} />
        })}
      </div>

    </div>
  );
}

export default App;
