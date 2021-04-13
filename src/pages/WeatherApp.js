import React, { useEffect, useState } from "react";

function Weather() {
  const [position, setPosition] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    // function success(POS) {         version1 using fetch and .then .catch
    //   console.log(POS);
    //   // setPosition({ lat: POS.coords.latitude, lon: POS.coords.longitude });
    //   fetch(
    //     `http://www.7timer.info/bin/api.pl?lon=${POS.coords.longitude}&lat=${POS.coords.latitude}&product=astro&output=json`
    //   )
    //     .then((response) => response.json())
    //     .then((data) => {
    //       setPosition(data);
    //     })
    //     .catch((error) => console.log(error));
    // }
    function successAsync(POS) {
      console.log("test2");
      //version2 using async await
      (async () => {
        try {
          const response = await fetch(
            `http://www.7timer.info/bin/api.pl?lon=${POS.coords.longitude}&lat=${POS.coords.latitude}&product=astro&output=json`
          );
          const data = await response.json();
          setPosition(data);
          console.log(data);
        } catch (error) {
          console.log("testerror");
          alert(error.message);
        } finally {
          setLoading(false);
        }
      })();
    }
    function error(e) {
      setError("Geolocation Denied");
      setLoading(false);
      console.log("test2.1");
    }
    //navigator.geolocation.getCurrentPosition(success, error);
    // setLoading(false);
    console.log("test1");
    try {
      navigator.geolocation.getCurrentPosition(successAsync, error);
    } catch (error) {
      console.log(error);
    }

    console.log("test3");
  }, [navigator]);

  let titleC = "";
  let titleF = "";
  let wind = "";
  let cloudy = "";

  if (position) {
    const cel = position.dataseries[0].temp2m;
    const fah = cel * 1.8 + 32;
    const windS = position.dataseries[0].wind10m.speed;
    const windD = position.dataseries[0].wind10m.direction;
    const cloudInfo = position.dataseries[0].cloudcover;

    titleC = `Temperature : ${cel} C`;
    titleF = `Temperature : ${fah} F`;
    wind = `Wind Speed ${windS}knot and Direction ${windD}`;
    cloudy = `Cloud Cover: ${cloudInfo}`;
  } else if (error) {
    titleC = error;
    wind = error;
  }

  if (isLoading) {
    return <div className="loader"></div>;
  }
  return (
    <div>
      <header className="weather-app-header">
        Weather at your current location
      </header>
      <h1>{titleC}</h1>
      <h1>{titleF}</h1>
      <h1>{wind}</h1>
      <h1>{cloudy}</h1>

      <img
        src="cloudcover.jpg"
        className="center-right"
        alt="cloudcover Image"
        width="20%"
        height="35%"
      />
      <img
        src="windspeed.jpg"
        className="center-newright"
        alt="windspeed Image"
        width="32%"
        height="35%"
      />
    </div>
  );
}

export { Weather };
