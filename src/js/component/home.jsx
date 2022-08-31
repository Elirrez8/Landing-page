import React from "react";
import { Navbar } from "./navbar";
import { Footer } from "./footer";

const Home = () => {
  return (
    <>
      <Navbar />

      <div className="container">
        <div className="Jumbotor">
          <div className="items">
          <h1>A Warm Welcome!</h1>
          <span>
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit... Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit"
          </span>
          <button>Call to Action</button>
          </div>
        </div>

        <div className="Card">
          <div>
            <div className="pic">500x300</div>
            <h2>Card title</h2>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua."
            </p>

            <button>Find out more</button>
          </div>

        <div>
            <div className="pic">500x300</div>
            <h2>Card title</h2>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua."
            </p>

            <button>Find out more</button>
          </div>
          <div>
            <div className="pic">500x300</div>
            <h2>Card title</h2>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua."
            </p>

            <button>Find out more</button>
          </div>

          <div>
            <div className="pic">500x300</div>
            <h2>Card title</h2>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua."
            </p>

            <button>Find out more</button>
          </div>
        </div>
    
      


      </div>
		<Footer />


    </>
  );
};

export default Home;
