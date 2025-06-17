import React, { useState } from 'react';
import './App.css';
import { FaPlaneDeparture, FaPlaneArrival, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const sections = {
  departures: [
    { flight: 'LS123', destination: 'Vice City', time: '08:15', gate: 'A1', status: 'On Time' },
    { flight: 'LS456', destination: 'Liberty City', time: '09:40', gate: 'B3', status: 'Boarding' },
    { flight: 'LS789', destination: 'San Fierro', time: '11:10', gate: 'C2', status: 'Delayed' },
  ],
  arrivals: [
    { flight: 'VC321', origin: 'Vice City', time: '07:50', gate: 'A2', status: 'Landed' },
    { flight: 'LC654', origin: 'Liberty City', time: '09:00', gate: 'B1', status: 'On Time' },
    { flight: 'SF987', origin: 'San Fierro', time: '10:45', gate: 'C4', status: 'Delayed' },
  ],
  destinations: [
    { city: 'Vice City', code: 'VCI', price: '$199' },
    { city: 'Liberty City', code: 'LBC', price: '$249' },
    { city: 'Cayo Perico', code: 'CYP', price: '$299' },
    { city: 'San Fierro', code: 'SFO', price: '$179' },
    { city: 'Las Venturas', code: 'LVT', price: '$189' },
  ]
};

function App() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const allFlights = [
    ...sections.departures.map(f => ({
      type: 'Departure',
      icon: <FaPlaneDeparture />,
      city: f.destination,
      ...f
    })),
    ...sections.arrivals.map(f => ({
      type: 'Arrival',
      icon: <FaPlaneArrival />,
      city: f.origin,
      ...f
    }))
  ];

  return (
    <div className="App">
      <nav className="navbar">
        <h1>LSIA</h1>
        <ul>
          <li><a href="#flights">Flights</a></li>
          <li><a href="#destinations">Destinations</a></li>
        </ul>
      </nav>

      <header className="hero">
        <h2>Welcome to Los Santos International Airport</h2>
        <p>Book flights, track arrivals & departures in style.</p>
      </header>

      <section id="flights">
        <h2>Flight Status</h2>
        <div className="flight-list">
          {allFlights.map((f, i) => {
            const isExpanded = expandedIndex === i;
            return (
              <div
                key={i}
                className={`flight-card ${f.type.toLowerCase()}`}
                onClick={() => setExpandedIndex(isExpanded ? null : i)}
              >
                <div className="flight-summary">
                  <div className="flight-icon">{f.icon}</div>
                  <div className="flight-info">
                    <strong>{f.flight}</strong> — {f.type} to/from <strong>{f.city}</strong>
                  </div>
                  <div className="flight-time">{f.time}</div>
                  <div className={`status ${f.status.toLowerCase().replace(' ', '-')}`}>
                    {f.status}
                  </div>
                  <div className="expand-icon">
                    {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
                  </div>
                </div>
                {isExpanded && (
                  <div className="flight-details">
                    <p><strong>Gate:</strong> {f.gate}</p>
                    <p><strong>Status:</strong> {f.status}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <section id="destinations">
        <h2>Book a Flight</h2>
        <div className="card-grid">
          {sections.destinations.map((d, i) => (
            <div className="card" key={i}>
              <h3>{d.city}</h3>
              <p>Code: {d.code}</p>
              <p>Price: {d.price}</p>
              <button>Book Now</button>
            </div>
          ))}
        </div>
      </section>

      <footer>
        <p>© 2025 Los Santos International Airport. This is a fictional site.</p>
      </footer>
    </div>
  );
}

export default App;
