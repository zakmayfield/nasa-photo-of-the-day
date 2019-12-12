import React, {useState, useEffect} from "react";
import Title from './components/Title';
import Date from './components/Date';
import ImageDisplay from './components/ImageDisplay';
import Explain from './components/Explain';
import axios from 'axios';
import "./App.css";

function App() {
  const [photoData, setPhotoData] = useState([]);
  // cosnt [specificDate, setSpecificDate] = useState('')

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


    {/* HEADER CONTAINER THE LOGO / TITLE OF PHOTO / AND DATE  */}
      <div className="header">
        <div className="logo-container">
          <h1>NASA</h1>
        </div>

        <div className="title-container">
          {photoData.map((item, index) => {
            return <Title key={index} title={item.title} />
          })}
        </div>

        <div className="date-container">
          {photoData.map((item, index) => {
            return <Date key={index} date={item.date} />
          })}
        </div>
      </div>
    {/* END OF HEADER */}


    {/* IMAGE CONTAINER */}
      <div className="image-container">
        {photoData.map((item, index) => {
          return <ImageDisplay key={index} hdurl={item.hdurl} />
        })}
      </div>
    {/* IMAGE CONTAINER ENDS */}

    
    {/* DESCRIPTION CONTAINER */}
      <div className="description-container">
        {photoData.map((item, index) => {
          return <Explain key={index} explanation={item.explanation} />
        })}
      </div>
    {/* DESCRIPTION CONTAINER ENDS */}

    {/* FOOTER CONTAINER */}
      <div className="footer-container">
        <p>All rights reserved by NASA</p>
      </div>

    </div>
  );
}

export default App;
