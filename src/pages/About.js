import React from "react";
import "./style.css";

// function About() {
//   return (
//     <div>
//       <img src="chen.jpg" width="25%" height="25%" />
//       <br></br>
//       <p>
//         Name :Chen Qiu <br></br>School: University of Florida
//         <br></br>Major : Industrial System Engineering
//         <br></br>Fun Fact: Has a Big Dick
//       </p>
//     </div>
//   );
// }

function About() {
  return (
    <div className="about-background">
      <img src="chen.jpg" width="35%" height="30%" className="center" />
      <h3 className="about-h1">Name: Chen Qiu</h3>

      <div className="timeline">
        <div className="container left">
          <div className="content">
            <h2>2020</h2>
            <p>Certified: HTML, CSS, JavaScrip, React, Redux</p>
          </div>
        </div>
        <div className="container right">
          <div className="content">
            <h2>2018</h2>
            <p>
              Engineering Manager: Trinova Inc <br></br>
            </p>
          </div>
        </div>
        <div className="container left">
          <div className="content">
            <h2>2017</h2>
            <p>Private Business Owner: Fancy Sushi Restaurants</p>
          </div>
        </div>
        <div className="container right">
          <div className="content">
            <h2>2016</h2>
            <p>
              Graduated: University of Florida. <br></br>Major: Industrial
              System Enginneering.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export { About };
