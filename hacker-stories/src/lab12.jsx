import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [pioneers, setPioneers] = useState([
    {
      id: 1,
      name: "Elizabeth J. Feinler",
      image: "https://upload.wikimedia.org/wikipedia/commons/6/6d/ElizabethFeinler-2011.jpg",
      bio: "Helped develop ARPANET and the first domain name system.",
      viewed: false
    },
    {
      id: 2,
      name: "Tim Berners-Lee",
      image: "https://upload.wikimedia.org/wikipedia/commons/8/8d/LS3_4919_%28cropped%29.jpg",
      bio: "Invented the World Wide Web.",
      viewed: false
    },
    {
      id: 3,
      name: "Ray Tomlinson",
      image: "https://upload.wikimedia.org/wikipedia/commons/d/dd/Ray_Tomlinson.jpg", 
      bio: "Implemented the first networked email system.",
      viewed: false
    }
  ]);

  const [selectedPioneer, setSelectedPioneer] = useState(null);

  const handleClick = (id) => {
    const updated = pioneers.map((p) =>
      p.id === id ? { ...p, viewed: true } : p
    );
    setPioneers(updated);
    const selected = updated.find((p) => p.id === id);
    setSelectedPioneer(selected);
  };

  const handleBack = () => {
    setSelectedPioneer(null);
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Internet Pioneers Bio</h1>

      {selectedPioneer ? (
        <div className="card p-4">
          <button className="btn btn-secondary mb-3" onClick={handleBack}>
            ← Back
          </button>
          <img
            src={selectedPioneer.image}
            alt={selectedPioneer.name}
            className="img-fluid mb-3"
            
          />
          <h2>{selectedPioneer.name}</h2>
          <p>{selectedPioneer.bio}</p>
        </div>
      ) : (
        <div className="row">
          {pioneers.map((pioneer) => (
            <div className="col-md-4 mb-4" key={pioneer.id}>
              <div
                className="card h-100 text-center p-3"
                style={{ cursor: "pointer" }}
                onClick={() => handleClick(pioneer.id)}
              >
                <img
                  src={pioneer.image}
                  alt={pioneer.name}
                  className="card-img-top img-fluid w-100 h-100"
                />
                <h5 className="card-title">{pioneer.name}</h5>
                {pioneer.viewed && (
                  <span className="badge bg-danger">Viewed</span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
