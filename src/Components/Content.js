import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";
import Planet from "./Planet";
import Vehicle from "./Vehicle";

function Planets() {
  const [planets, setPlanets] = useState([]);
  const [planet_name, setPlanet_name] = useState([]);
  const [vehicle_name, setVehicle_name] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [token, setToken] = useState([]);
  const [final_result, setFinal_result] = useState(null);

  let index = [1, 2, 3, 4];

  const getPlanetData = () => {
    axios
      .get(`https://findfalcone.herokuapp.com/planets`)
      .then((data) => setPlanets(data.data))
      .catch((error) => {
        console.log(error);
      });
  };

  const handlePlanet_name = (e) => {
    setPlanet_name((planet_name) => [...planet_name, e]);
  
  };

  const handleVehicle_name = (e) => {
    setVehicle_name((vehicle_name) => [...vehicle_name, e]);
  };

  const getVehicleData = () => {
    axios
      .get("https://findfalcone.herokuapp.com/vehicles")
      .then((data) => setVehicles(data.data))
      .catch((error) => {
        console.log(error);
      });
  };

  const getToken = () => {
    axios
      .post(
        "https://findfalcone.herokuapp.com/token",
        {},
        {
          headers: {
            Accept: "application/json", // Necessary header for using API
          },
        }
      )
      .then((data) => {
        setToken(data.data.token);
      })
      .catch((error) => console.log(error));
  };

  const getFinalResult = () => {
    axios
      .post(
        "https://findfalcone.herokuapp.com/find",
        {
          token: token,
          planet_names: planet_name,
          vehicle_names: vehicle_name,
        },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      )
      .then((data) => setFinal_result(data.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getPlanetData();
    getVehicleData();
    getToken();
  }, []);

  console.log(token)
  console.log(planet_name)
  console.log(vehicle_name)
  console.log(final_result)

  return (
    <React.Fragment>
      {final_result === null ? <React.Fragment>

      <div>
        {index.map((i) => {
          return (
            <Planet
              key={i}
              destination={`Select Destination ${i}`}
              planetList={planets}
              handlePlanet_name={handlePlanet_name}
            />
          );
        })}
      </div>
      <div>
        {planet_name.length === 4 &&
          planet_name.map((i) => {
            return (
              <Vehicle
                vehicleList={vehicles}
                formLabel={i}
                handleVehicle_name={handleVehicle_name}
              />
            );
          })}
      </div>
      <div>
        {planet_name.length === 4 && vehicle_name.length === 4 && (
          <Button variant="contained" onClick={getFinalResult}>
            Find Falcone
          </Button>
        )}
      </div>


      </React.Fragment> : final_result.status === "success" ? <div>
        <h1>Success! Congratulations on Finding Falcone.King Shan is mighty pleased. Planet name : {final_result.planet_name}</h1>
      </div> : <div>
        <h2>Sorry!!! Falcone is somewhere else</h2></div>}

    </React.Fragment>
  );
}

export default Planets;
