import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-overlay">
          <div className="hero-top-text">
            According to Vitruvius, the architect should strive to fulfill<br />
            each of these three attributes as well as possible.
          </div>
          
          <div className="hero-main-content">
            <h1 className="hero-title">
              INFINITY <br />
              <span className="italic-title">Architecture</span>
            </h1>
            <button className="btn-pill-cta">
              Contact us <span className="arrow-circle">➔</span>
            </button>
          </div>

          <div className="hero-right-text">
            <h3>Architecture can mean</h3>
            <p>A general term to describe buildings and other physical structures.</p>
          </div>

          <div className="hero-carousel-dots">
            <span></span>
            <span className="active"></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </section>

      {/* ABOUT US SECTION */}
      <section id="about" className="about-section">
        <div className="section-marker"><span className="dot-red"></span> About Us</div>
        <div className="about-content">
          <h2>The art and science of designing buildings and nonbuilding structures. The style of design and method of construction of buildings and other physical structures.</h2>
        </div>
      </section>

      <hr className="section-divider" />

      {/* RECENT PROJECTS SECTION */}
      <section id="projects" className="projects-section">
        <div className="projects-header">
          <h2 className="section-title-large">
            Recent <br />
            <span className="italic-title">Projects</span>
          </h2>
          <p className="projects-subtext">
            After completing your year 12 education and earning the necessary scores, you may apply for a bachelor's degree in architecture. To qualify, students can complete one of three entrance exams:
          </p>
          <button className="btn-view-all">
            View All <span className="arrow-circle-black">➔</span>
          </button>
        </div>

        <div className="projects-grid">
          <div className="project-card">
            <div className="project-img-wrapper curve-top-bottom">
              <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80" alt="Modern Versailles" />
            </div>
            <span className="project-location">• Alexander City, New York</span>
            <h4>The modern Versailles</h4>
          </div>

          <div className="project-card">
            <div className="project-img-wrapper curve-top-bottom">
              <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80" alt="Buckingham Palace" />
            </div>
            <span className="project-location">• Lake Havasu City, Washington</span>
            <h4>Buckingham Palace</h4>
          </div>

          <div className="project-card">
            <div className="project-img-wrapper curve-top-bottom">
              <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80" alt="Les Palais Bulles" />
            </div>
            <span className="project-location">• North Little Rock, California</span>
            <h4>Les Palais Bulles</h4>
          </div>
        </div>
      </section>

      {/* ARCHITECTS ROSTER SECTION */}
      <section className="architects-section">
        <div className="section-marker"><span className="dot-red"></span> Our Architects</div>
        <div className="architects-table">
          <div className="table-row muted">
            <div className="col-name">Max Abramovitz</div>
            <div className="col-desc">• Hathor, relief on capitals at Philae Island, southern Egypt.</div>
            <div className="col-link">View Profile</div>
          </div>
          
          <div className="table-row active-row">
            <div className="row-avatar">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80" alt="Cameron" />
            </div>
            <div className="col-name"><strong>Cameron Williamson</strong></div>
            <div className="col-desc">• Brighton, Brighton and Hove, United Kingdom</div>
            <div className="col-link">View Profile</div>
          </div>

          <div className="table-row muted">
            <div className="col-name">Pietro Belluschi</div>
            <div className="col-desc">• Cushion capital and early English Gothic foliated capital.</div>
            <div className="col-link">View Profile</div>
          </div>
        </div>
      </section>

      {/* CATEGORIES SECTION */}
      <section className="categories-section curve-top-bottom-large">
        <div className="categories-overlay">
          <div className="categories-left">
            <h2 className="section-title-large text-white">
              Project <br />
              <span className="italic-title">Categories</span>
            </h2>
          </div>
          <div className="categories-right">
            <ul className="category-list">
              <li>• Interior design</li>
              <li>• Commercial architect</li>
              <li>• Landscape architect</li>
              <li>• Civic project</li>
            </ul>
            <button className="btn-pill-cta transparent-btn">
              Contact us <span className="arrow-circle">➔</span>
            </button>
          </div>
        </div>
      </section>

      {/* CASE STUDIES SECTION */}
      <section className="case-studies-section">
        <div className="section-marker"><span className="dot-red"></span> Recent case studies</div>
        
        <div className="case-study-item">
          <div className="case-text">
            <h3>Fulham Town Hall extension</h3>
            <p>Improvement on the floor plan and layout of a loft apartment in Paris to maximise the use of space and additional.</p>
            <button className="btn-view-more">View more <span>➔</span></button>
          </div>
          <div className="case-img curve-top-bottom">
            <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80" alt="Fulham Town Hall" />
          </div>
        </div>

        <div className="case-study-item">
          <div className="case-text">
            <h3>The White Apartment</h3>
            <p>Redefining Urban Elegance: Bridging Heritage and Modern Living in an Iconic Residential Landmark.</p>
            <button className="btn-view-more">View more <span>➔</span></button>
          </div>
          <div className="case-img curve-top-bottom">
            <img src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=600&q=80" alt="The White Apartment" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;