import React, {useState, useEffect} from "react";
import Title from './components/Title';
import Date from './components/Date';
import ImageDisplay from './components/ImageDisplay';
import Explain from './components/Explain';
import axios from 'axios';
import { Button } from 'reactstrap';
import * as StyledComps from './style';
import "./App.css";

function App() {
  const [photoData, setPhotoData] = useState([]);

  const [whichDate, setWhichDate] = useState("2018-02-13");

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=hJK5m8gB7G78sk77SdkOLysES6qGL2PL7smjjfLy&date=${whichDate}`)
      .then(res => {
        setPhotoData([res.data]);
      })
      .catch(err => {
        console.log('Could not get data', err);
      })
  }, [whichDate]);

  function getTodaysDate(){
    let newDate = new Date();
    let year = newDate.getFullYear();
    let month = newDate.getMonth() + 1;
    let day = newDate.getDate();
    
    let todaysDate = `${year}-${month}-${day}`;
    
    return todaysDate;
  };

  function lastYearsDate(){
    let newDate = new Date();
    let year = newDate.getFullYear();
    let month = newDate.getMonth() + 1;
    let day = newDate.getDate();
    
    let lastYearToday = `${year - 1}-${month}-${day}`;
    
    return lastYearToday;
  };
  
  function twoYearsAgoDate(){
    let newDate = new Date();
    let year = newDate.getFullYear();
    let month = newDate.getMonth() + 1;
    let day = newDate.getDate();
    
    let twoYearsAgoToday = `${year - 2}-${month}-${day}`;
    
    return twoYearsAgoToday;
  };

  return (
    <div className="container">

    {/* HEADER CONTAINER THE LOGO / TITLE OF PHOTO / AND DATE  */}
      <StyledComps.Header>
        <div className="logo-container">
          <h1>NASA</h1>
        </div>

        <div className="title-container">
          {photoData.map((item, index) => {
            return <Title key={index} title={item.title}/>
          })}
        </div>

        <div className="date-container">
          {photoData.map((item, index) => {
            return <Date key={index} date={item.date} getTodaysDate={ getTodaysDate } lastYearsDate={ lastYearsDate } twoYearsAgoDate={ twoYearsAgoDate }/>
          })}
        </div>
      </StyledComps.Header>
    {/* END OF HEADER */}


    {/* IMAGE CONTAINER */}
      <div className="image-container">
        {photoData.map((item, index) => {
          return <ImageDisplay key={index} hdurl={item.hdurl} />
        })}
      </div>
    {/* IMAGE CONTAINER ENDS */}

    
    {/* DESCRIPTION CONTAINER */}
      <StyledComps.DescriptionContainer>
        {photoData.map((item, index) => {
          return <Explain key={index} explanation={item.explanation} />
        })}
      </StyledComps.DescriptionContainer>
    {/* DESCRIPTION CONTAINER ENDS */}

    {/* FOOTER CONTAINER */}
      <StyledComps.Footer>
        <p>All rights reserved by NASA</p>
      </StyledComps.Footer>

    </div>
  );
}

export default App;
