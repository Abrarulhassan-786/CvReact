import React from "react";
import ReactDom from "react-dom";
import imagePath from "./abrar1.jpg";
import "./style.css";

function Hi() {
  return (
    <div id="mainDiv">
      <div id="leftSideDiv">
        <div id="aboutMe">
          <div id="imageMe">
            <img src={imagePath} alt="imge not found" />
          </div>
          <div id="abouthead" className="headings">
            <h1>About Me</h1>
          </div>
          <div id="aboutDescriotion">
            <p>
              Hello this is me Abrar ul Hassan from karachi pakistand. Do you
              know how to speak fulenty english i know and teach you if you are
              interested i will teach u just in two mint. ok if you are
              interested dm me quickly More about me:
              abrarulhassan970@gmail.com or 03032033694
            </p>
          </div>
        </div>
        <div id="skills">
          <div id="abouthead" className="headings">
            <h1>Skills</h1>
          </div>
          <ul>
            <div id="attention" className="listmenu">
              <li>Attention</li>
              <div className="range" >
                <div id="ranges1">60%</div>
              </div>
            </div>
            <div id="Creativity" className="listmenu" class="listmenu">
              <li>Creativity</li>
              <div className="range" >
                <div id="ranges2">70%</div>
              </div>
            </div>
            <div id="Positivity" className="listmenu" class="listmenu">
              <li>Positivity-</li>
              <div className="range" class="range">
                <div id="ranges3">80%</div>
              </div>
            </div>
            <div id="Descipline" className="listmenu" class="listmenu">
              <li>Desciplan</li>
              <div className="range" class="range">
                <div id="ranges4">90%</div>
              </div>
            </div>
          </ul>
        </div>
        <div id="language">
          <div id="languageheading" className="headings">
            <h1>Languages</h1>
          </div>
          <div id="languagesBox">
            <div id="English" className="lang">
              <p>English</p>
            </div>
            <div id="Urdu" className="lang">
              <p>Urdu</p>
            </div>
            <div id="Sindhi" className="lang">
              <p>Sindhi</p>
            </div>
          </div>
        </div>
      </div>
      <div id="rightSideDiv">
        {/* right sidie start from here */}
        <div id="headingName">
          <h1>Abrar ul Hassan</h1>
          <p>Front End Developer</p>
        </div>
        <div id="workExperince">
          <h1>Work Exerinces </h1>
          <div id="juniorDevelopers">
            <h2>Junior Developer</h2>
            <hr />
            <p>22-3-1982 Present</p>
            <hr />
            <p>
              This is me Abrar ul Hassan i am junior Web developer you can talk
              me i will guide you related to projects i have many projects but
              some of them are uploaded on gihub
            </p>
            <div id="developerDescip">
              <h2>Achievement</h2>
              <ul>
                <li>Worked on many Projects</li>
                <li>Achieve the Sneior many thingd</li>
                <li>Good work and best team</li>
                <li>performance get better before</li>
              </ul>
            </div>
            <div id="universityProj">
              <h2>University Project</h2>
              <hr />
              <p>11-3-2019</p>
              <hr />
              <p>
                This is me Abrar ul Hassan i am junior Web developer you can
                talk me i will guide you related to projects i have many
                projects but some of them are uploaded on gihub
              </p>
              <div id="projectTitle">
                <h2>Projects</h2>
                <ul>
                  <li>Bakery Management System</li>
                  <li>Transport Management System</li>
                  <li>Phone Book</li>
                  <li>Railway Management System</li>
                </ul>
              </div>
            </div>
            <div id="internship">
              <h2>Internship</h2>
              <hr />
              <p>11-3-2019</p>
              <hr />
              <p>
                This is me Abrar ul Hassan i am junior Web developer you can
                talk me i will guide you related to projects i have many
                projects but some of them are uploaded on gihub
              </p>
              <div id="SoftwareHouse">
                <h2>Software House</h2>
                <ul>
                  <li>A-0 Zero Versiom</li>
                  <li>Zero to Hero</li>
                  <li>Phanit Hksladjkas</li>
                  <li>Human Help software</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
ReactDom.render(<Hi />, document.querySelector("#root"));
