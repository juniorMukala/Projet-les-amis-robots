import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import SearchBar from "./components/SearchBar";
import Loader from './components/loader';
import CardDetailsRobots from './components/cardDetailsRobots'
import "./style.css"

const App = () => {
  const [robots, setRobots] = useState([]);
  console.log(robots);
  const [binaryState, setbinaryState] = useState(true);
  const [loading, setLoading] = useState(true);
  const [detailsRobots, setdetailsRobots] = useState({}); 
  useEffect(() => {
    setLoading(true)
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data=> {
      let answer = data.map(({id,name,email,username,phone,city,company, website, street,address}) => {    
          return {id,name,email,username,phone,city,company,website,street,address };
      })
      setRobots(answer)
      })
      .catch(e=>{
        setLoading(false)
        console.log("Une erreur est survenue");
      })
  }, []);
  if (loading) return <h1>Chargement ...</h1>
  return (
    <div>
      <h1>Mes amis robots</h1>
      <SearchBar />
      <div className="container">
        {binaryState ? (
          robots.map((robot, index) => {
            return (
              robots?
              <Card
              key={index}
              name={robot.name}
              url={`https://robohash.org/${robot.id}`}
                Click={() => {
                  setdetailsRobots(robot);
                  setbinaryState(!binaryState);
                  
                }}
              /> : <Loader/>
            );
          })
        ) : (
          <CardDetailsRobots
          name={detailsRobots.name}
          username={detailsRobots.username}
          email={detailsRobots.email}
          phone={detailsRobots.phone}
          city={detailsRobots.address.city}
          company={detailsRobots.company.name}
          website={detailsRobots.website}
          url={`https://robohash.org/${detailsRobots.id}`}
            Click={(e) => setbinaryState(!binaryState)}
          />
        )}
      </div>
    </div>
  );
};

export default App;

