import React from 'react';
import './TrackmaniaArchitecture.css';

const TrackmaniaArchitecture = () => {
  return (
    <div className="tm-arch-container">
      <div className="tm-arch-header">
        <div className="tm-arch-sup">SYSTEM ARCHITECTURE</div>
        <h2 className="tm-arch-title">Trackmania AI Bot</h2>
        <p className="tm-arch-sub">NEAT neuroevolution via TMInterface — full system data flow.</p>
      </div>

      <div className="tm-section game-env">
        <div className="tm-section-label">GAME ENVIRONMENT</div>
        
        <div className="tm-card">
          <div className="tm-card-type">PHYSICS ENGINE</div>
          <div className="tm-card-title">Trackmania Nations Forever</div>
          <div className="tm-card-desc">Simulates car physics, track geometry, and race state at 100 ticks/sec.</div>
        </div>

        <div className="tm-arrow-container">
          <div className="tm-arrow-line"></div>
          <div className="tm-arrow-head-up"></div>
          <div className="tm-arrow-head-down"></div>
          <span className="tm-arrow-text">physics state</span>
        </div>

        <div className="tm-card">
          <div className="tm-card-type">GAME HOOK LAYER</div>
          <div className="tm-card-title">TMInterface API</div>
          <div className="tm-card-desc">Hooks into the game process to expose telemetry and accept input commands.</div>
        </div>

        <div className="tm-arrow-container">
          <div className="tm-arrow-line"></div>
          <div className="tm-arrow-head-up"></div>
          <div className="tm-arrow-head-down"></div>
          <span className="tm-arrow-text">hook API</span>
        </div>

        <div className="tm-card">
          <div className="tm-card-type">TCP CLIENT</div>
          <div className="tm-card-title">AngelScript Plugin</div>
          <div className="tm-card-desc">Reads game state each tick, serializes to string, and sends over TCP. Applies received actions.</div>
        </div>
      </div>

      <div className="tm-arrow-container space-lg">
        <div className="tm-arrow-line"></div>
        <div className="tm-arrow-head-up"></div>
        <div className="tm-arrow-head-down"></div>
        <span className="tm-arrow-text">TELEMETRY OUT / ACTIONS IN</span>
      </div>

      <div className="tm-section comm-layer">
        <div className="tm-section-label purple">COMMUNICATION LAYER</div>
        <div className="tm-card">
          <div className="tm-card-type purple-text">LOCALHOST :8080</div>
          <div className="tm-card-title">TCP Socket Connection</div>
          <div className="tm-card-desc">Raw newline-delimited string protocol. Telemetry flows out, action strings flow in at each simulation tick.</div>
        </div>
      </div>

      <div className="tm-arrow-container space-lg">
        <div className="tm-arrow-line"></div>
        <div className="tm-arrow-head-up"></div>
        <div className="tm-arrow-head-down"></div>
        <span className="tm-arrow-text">RAW STRINGS</span>
      </div>

      <div className="tm-section ai-server">
        <div className="tm-section-label">AI SERVER</div>
        
        <div className="tm-card">
          <div className="tm-card-type">TM_CLIENT.PY</div>
          <div className="tm-card-title">Python TCP Server</div>
          <div className="tm-card-desc">Orchestrates the NEAT loop: receives telemetry, queries the current genome, dispatches actions, collects fitness signals.</div>
        </div>

        <div className="tm-split-arrows">
          <div className="tm-split-arrow-col">
            <div className="tm-arrow-container">
              <div className="tm-arrow-line"></div>
              <div className="tm-arrow-head-down"></div>
              <span className="tm-arrow-text">tick data</span>
            </div>
          </div>
          <div className="tm-split-arrow-col">
            <div className="tm-arrow-container">
              <div className="tm-arrow-line"></div>
              <div className="tm-arrow-head-up"></div>
              <span className="tm-arrow-text">genome query</span>
            </div>
          </div>
        </div>

        <div className="tm-split-cards">
          <div className="tm-split-col">
            <div className="tm-card">
              <div className="tm-card-type">SCORING MODULE</div>
              <div className="tm-card-title">Fitness Evaluator</div>
              <div className="tm-card-desc">Scores each genome on checkpoints reached, speed, and time. Feeds scores back to NEAT for selection.</div>
            </div>
            <div className="tm-arrow-container fade-out">
              <div className="tm-arrow-line"></div>
              <span className="tm-arrow-text">scores</span>
            </div>
          </div>
          <div className="tm-split-col">
            <div className="tm-card">
              <div className="tm-card-type">NEAT-PYTHON</div>
              <div className="tm-card-title">NEAT Algorithm</div>
              <div className="tm-card-desc">Neuroevolution of Augmenting Topologies. Evolves neural network topology and weights across generations.</div>
            </div>
          </div>
        </div>
      </div>

      <div className="tm-legend">
        <div className="tm-legend-item"><span className="tm-box orange"></span> GAME ENVIRONMENT</div>
        <div className="tm-legend-item"><span className="tm-box purple"></span> COMMUNICATION LAYER</div>
        <div className="tm-legend-item"><span className="tm-box orange"></span> AI SERVER</div>
      </div>
    </div>
  );
};

export default TrackmaniaArchitecture;
