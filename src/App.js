import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import SearchBar from "./components/SearchBar";
import "./style.css"

const App = () => {
  // const [data, setData] = useState(PRODUITS);
  const [robots, setRobot] = useState([]);
  const [booleen, setBooleen] = useState(true);
  const [afficheDetails, setAfficheDetails] = useState({}); 
  useEffect(function () {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then(function (data) {
        
        let tableauRobotBoucle = data.map(function (robot) {
          return robot;
        });
   
        console.log(tableauRobotBoucle)
        setRobot(tableauRobotBoucle);
        // setRefreshRobot(tableauRobotBoucle);
      });
  }, []);

  // const [refreshRobot, setRefreshRobot] = useState(robot)

  // function handleChange (event) {
  //   event.preventDefault();
  //   const filterRobots = robot.filter(function(robot){
  //     return robot.name.toLowerCase().includes(event.target.value.toLowerCase());
  //   })

  //   setRefreshRobot(filterRobots)

  // }
  return (
    <div>
      <h1>Mes amis robots</h1>
      <SearchBar />
      <div className="container">
        {booleen ? (
          robots.map((robot, index) => {
            return (
              <Card
              key={index}
              name={robot.name}
              email={robot.email}
              phone={robot.phone}
              address={robot.address}
              city={robot.address.city}
              company={robot.company.name}
              website={robot.website}
              street={robot.address.street}
              url={`https://robohash.org/${robot.id}`}
                Click={() => {
                  setAfficheDetails(robot);
                  setBooleen(!booleen);
                  
                }}
              />
            );
          })
        ) : (
          <Card
          name={afficheDetails.name}
          email={afficheDetails.email}
          phone={afficheDetails.phone}
          address={afficheDetails.address}
          city={afficheDetails.address.city}
          company={afficheDetails.company.name}
          website={afficheDetails.website}
          street={afficheDetails.address.street}
          url={`https://robohash.org/${afficheDetails.id}`}
            Click={(e) => setBooleen(!booleen)}
          />
        )}
      </div>
    </div>
  );
};

export default App;

