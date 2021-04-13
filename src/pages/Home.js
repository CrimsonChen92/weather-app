import React from "react";

function Home() {
  return (
    <div>
      <h2>HOME</h2>
      <p className="pinfo">Welcome to The Weather App </p>
      <img
        src="https://wi-images.condecdn.net/image/doEYpG6Xd87/crop/2040/f/weather.jpg"
        class="img-thumbnail"
        alt="Weather Image"
        width="50%"
        height="50%"
        className="center"
      />
    </div>
  );
}

export { Home };
