import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React from "react";
export default function Home() {
  return (
    <div
      style={{
        maxWidth: "100vw",
        backgroundColor: "rgba(102, 255, 255,0.7)",
        padding: "1rem",
      }}>
      <div style={{ background: "white", width: "100%", height: "100%" }}>
        <Navbar />
        <div className="hstack;">
          <br />
          <div className="d-flex justify-content-center">
            <h2>Home</h2>
          </div>

          <div className="d-flex ms-5">
            <img
              src="image/Logo Percival.jpg"
              width="150"
              height="150"
              className="rounded-circle"
              style={{ objectFit: "cover" }}
            />
            <div className="d-flex flex-column p-2">
              <span className="fw-bold">Supawit Chaidej</span>
              <span style={{ color: "grey;" }}>
                Hi My name is Supawit or you can call me Jay. I graduated from
                Debsirin school. I'm currently studying in Faculty of
                Engineering at Chiangmai University. My major is computer
                engineering. I'm interested in programming and game development.
              </span>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <h3>My Skills</h3>
          </div>
          <div>
            <div className="card-group">
              <div className="card">
                <img
                  className="card-img-top"
                  src="image/Programming.jpg"
                  alt="Card image cap"
                  width="346"
                  height="250"
                  style={{ objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">Programming</h5>
                  <p className="card-text" style={{ color: "grey" }}>
                    I'm interested in programming and coding. I know it's too
                    hard but I want to practice more{" "}
                  </p>
                </div>
              </div>
              <div className="card">
                <img
                  className="card-img-top"
                  src="image/esport.jpg"
                  alt="Card image cap"
                  width="346"
                  height="250"
                  style={{ objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">Gaming</h5>
                  <p className="card-text" style={{ color: "grey" }}>
                    I'm interested in computer games and esport
                  </p>
                </div>
              </div>
              <div className="card">
                <img
                  className="card-img-top"
                  src="image/photographer.jpeg"
                  alt="Card image cap"
                  width="346"
                  height="250"
                  style={{ objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">Photographer</h5>
                  <p className="card-text" style={{ color: "grey" }}>
                    Photography has been one of my favorite hobbies. It helps me
                    record events and memories
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
