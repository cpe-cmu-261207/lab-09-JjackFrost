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
              src="image/profile.jpg"
              width="150"
              height="150"
              class="rounded-circle"
              style={{ objectFit: "cover" }}
            />
          </div>
          <br />

          <div className="vstack" style={{ textAlign: "center" }}>
            <h6>
              Name <br />
              <span style={{ color: "grey" }}>Supawit Chaidej</span>
            </h6>
            <br />
            <h6>
              Nickname <br />
              <span style={{ color: "grey" }}>Jay</span>
            </h6>
            <br />
            <h6>
              Address
              <br />
              <span style={{ color: "grey" }}>
                98, Su Thep6/1, Su Thep, Mueang Chiang Mai District, Chiang Mai
                50200
              </span>
            </h6>
            <br />
            <h6>
              Facebook <br />
              <a href="https://www.facebook.com/nongjj.jay/" target="_blank">
                https://www.facebook.com/nongjj.jay/
              </a>
            </h6>
            <br />
            <h6>
              Email <br />
              <a href="mailto:supawit_chaidej@cmu.ac.th">
                supawit_chaidej@cmu.ac.th
              </a>
            </h6>
            <h6>
              Phone <br />
              <span style={{ color: "grey" }}>0823472158</span>
            </h6>
            <br />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
