import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <div
      style={{
        maxWidth: "100vw",
        backgroundColor: "rgba(102, 255, 255, 0.7)",
        padding: "1rem",
      }}>
      <div style={{ background: "white", width: "100%", height: "100%" }}>
        <Navbar />
        <br />
        <div className="d-flex justify-content-center">
          <h2>My Experience</h2>
        </div>

        <div class="vstack">
          <div class="d-flex justify-content-center">
            <img
              src="image/Logo Percival.jpg"
              width="150"
              height="150"
              class="rounded-circle"
              style={{ objectFit: "cover" }}
            />
          </div>
          <br />
          <div class="d-flex ms-5">
            <img
              src="image/Jaturamitr.jpg"
              width="220"
              height="220"
              class="rounded-circle"
            />
            <div class="d-flex flex-column p-2">
              <h4>Jaturamitr</h4>
              <p style={{ color: "gray" }}>
                I had an experience in volunteering at jaturamitr sport
                competition participated by the four schools in Thailand:
                Suankularb Wittayalai School, Debsirin School, Assumption
                College, and Bangkok Christian College. My responsibility was to
                be in charge of supervising the events.
              </p>
            </div>
          </div>
          <br />
          <div class="d-flex ms-5">
            <img
              src="image/board game.jpg"
              width="200"
              height="200"
              class="rounded-circle"
            />
            <div class="d-flex flex-column p-2">
              <h4>Making board game project</h4>
              <p style={{ color: "gray" }}>
                making the creative board game for improving the communication
                skill and relationship among people.
              </p>
            </div>
          </div>
          <br />
          <div class="d-flex ms-5">
            <img
              src="image/robot.jpg"
              width="200"
              height="200"
              class="rounded-circle"
            />
            <div class="d-flex flex-column p-2">
              <h4>Basic robot programming</h4>
              <p style={{ color: "gray" }}>
                Participated in robot programming club
              </p>
            </div>
          </div>
          <br />
          <div class="d-flex ms-5">
            <img
              src="image/Scratch.jpeg"
              width="200"
              height="200"
              class="rounded-circle"
            />
            <div class="d-flex flex-column p-2">
              <h4>Scratch</h4>
              <p style={{ color: "gray" }}>Making a scratch game</p>
            </div>
          </div>
          <br />
        </div>
      </div>
      <Footer />
    </div>
  );
}
