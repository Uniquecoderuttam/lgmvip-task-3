import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import "./App.css";


function App() {
  const [isDateLoaded, setIsDateLoaded] = React.useState(false);
  const [userData, setUserData] = React.useState([]);
  const [isButtonClick, setisButtonClick] = React.useState(false);
  const handleClick = () => {
    setisButtonClick(true);
    // To fetch data from https://reqres.in/api/users?page=1
    fetch("https://reqres.in/api/users?page=1")
      .then((response) => response.json())
      .then((res) => {
        setUserData(res.data);
        setInterval(() => {
          setIsDateLoaded(true);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <Router>
        <section className="wholecontainer">
          <div class="topnav" id="myTopnav">
            <a
              rel="noreferrer"
              href="https://uttam07.netlify.app/"
              target="_blank"
              class="active"
            >
              Uttam Card Grid
            </a>
            <a href="#getusers" class="btn" onClick={handleClick}>
              Get Users
            </a>
          </div>

          <div className="container">
            <div className="row justify-content-center ">
              {isButtonClick ? (
                isDateLoaded ? (
                  <Cards userData={userData} />
                ) : (
                  <div class="loader"></div>
                )
              ) : (
                <div className="instruction">
                              <a href="#getusers" class="btn" onClick={handleClick}>
<p>Click on "Get Users" button !!</p>
</a>
                </div>
              )}
            </div>
          </div>
        </section>
        <section>
          <Footer />
        </section>
      </Router>
    </>
  );
}

export default App;