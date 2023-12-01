import "./App.css";
import ScrollIntoView from "react-scroll-into-view";

function App() {
  return (
    <div class="main">
      <nav>
        <div class="menu">
          <ul>
            <li>
              <ScrollIntoView selector={"#profile"}>
                <button className="mdl-button mdl-js-button mdl-button--raised">
                  Profile
                </button>
              </ScrollIntoView>
            </li>
            <li>
              <ScrollIntoView selector={"#experience"}>
                <button className="mdl-button mdl-js-button mdl-button--raised">
                  Experiences
                </button>
              </ScrollIntoView>
            </li>
            <li>
              <ScrollIntoView selector={"#ability"}>
                <button className="mdl-button mdl-js-button mdl-button--raised">
                  Abilities
                </button>
              </ScrollIntoView>
            </li>
            <li>
              <ScrollIntoView selector={"#project"}>
                <button className="mdl-button mdl-js-button mdl-button--raised">
                  Projects
                </button>
              </ScrollIntoView>
            </li>
            <li>
              <ScrollIntoView selector={"#contact"}>
                <button className="mdl-button mdl-js-button mdl-button--raised">
                  Contact
                </button>
              </ScrollIntoView>
            </li>
          </ul>
        </div>
      </nav>
      <div>
        <div className="navbar">
          <div className="profile">
            <h1>PROFILE</h1>
            <span>I'm a student</span>
          </div>
        </div>
        <div className="container">
          <div className="Menu">
            <div className="firstbox">
              <div className="aboutme">
                <h2>OBJECTIVE</h2>
                <span>
                  I want to be exposed to a higher level to improve my
                  knowledge, skills, experience and help myself improve. From
                  there, it helps me to have enough confidence and understanding
                  to show my worth.
                </span>
              </div>
              <img
                src="https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-1/292726387_1748984332120972_3920023126473528481_n.jpg?stp=dst-jpg_p320x320&_nc_cat=107&ccb=1-7&_nc_sid=5740b7&_nc_ohc=OKencPbpp9UAX-Gg9nP&_nc_ht=scontent.fsgn5-10.fna&oh=00_AfBRoPzFPoKtBMSP2P33_r_VLrNB7_5zM3ofCbgALpBtrA&oe=656E0050"
                alt=""
              />
              <div className="details">
                <h2>Details</h2>
                <span className="title">Name:</span>
                <span> Nguyen Văn Tân</span>
                <span className="title">Age:</span>
                <span> 21 years</span>
                <span className="title">Location:</span>
                <span> UIT, VNU-HCM</span>
              </div>
            </div>
            <div className="secondbox">
              <div className="title">
                <h1>Experience</h1>
              </div>
              <div className="content">
                <hr />
                <h2>Educations</h2>
                <div className="box">
                  <div className="ct">
                    <h3>UIT, VNU-HCM</h3>
                    <p>Apr 2020 - June 2025</p>
                  </div>
                  <div className="text">
                    <h4>Information System</h4>
                    <p>
                      My primary focus during my education was on a foundational
                      System Design course. However, I also gained insights into
                      various other fields such as Web Development and Data
                      Analysis. During my college years, I honed my skills in
                      Object-Oriented Programming (OOP) and delved into the
                      realm of data science. Currently, I am expanding my
                      knowledge in web development..
                    </p>
                  </div>
                </div>
                <hr />
              </div>
            </div>
            <div className="thirdbox">
              <section className="content">
                <h2>Skills</h2>
                <hr className="light" />

                <ul>
                  <div className="po">
                    <p>Html, Css</p>
                    <div className="cool">
                      <div style={{ width: "100%" }} className="inner" />
                    </div>
                  </div>
                  <div className="po">
                    <p>SQL</p>
                    <div className="cool">
                      <div style={{ width: "100%" }} className="inner">
                        {" "}
                      </div>
                    </div>
                  </div>
                  <div className="po">
                    <p>JQuery</p>
                    <div className="cool">
                      <div style={{ width: "100%" }} className="inner">
                        {" "}
                      </div>
                    </div>
                  </div>
                  <div className="po">
                    <p>JavaScript</p>
                    <div className="cool">
                      <div style={{ width: "100%" }} className="inner">
                        {" "}
                      </div>
                    </div>
                  </div>
                </ul>
                <ul>
                  <div className="po">
                    <p>Object Oriented Programming</p>
                    <div className="cool">
                      <div style={{ width: "100%" }} className="inner" />
                    </div>
                  </div>
                  <div className="po">
                    <p>React</p>
                    <div className="cool">
                      <div style={{ width: "100%" }} className="inner">
                        {" "}
                      </div>
                    </div>
                  </div>
                </ul>
              </section>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
