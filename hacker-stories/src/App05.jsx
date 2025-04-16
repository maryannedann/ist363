import { useState } from "react";
import About from "./About";
// ./ means same folder as the App.jsx file


function Home () {
    return (
        <div>
            <h1>Home</h1>
        </div>
    );
}

// conditional rendering aka navigation SPAs 
function App () {
    const [page, setPage] = useState('home');
    return (
        <div className="container">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
        <div className="container-fluid">
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <button
                  className={`nav-link btn btn-link ${page === "home" ? "active" : ""}`}
                  onClick={() => setPage("home")}
                >
                  Home
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link btn btn-link ${page === "about" ? "active" : ""}`}
                  onClick={() => setPage("about")}
                >
                  About
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="text-center">
        <h1>Hello World!</h1>
        {page === "home" && <Home />}
        {page === "about" && <About />}
      </div>
    </div>
    );
}
export default App;

