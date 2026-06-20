import React, { useState, useEffect, useRef } from 'react';
import './Home.css';

// --- Assets Data ---
const CAROUSEL_DATA = [
  { id: 1, mainBg: 'https://media.houseandgarden.co.uk/photos/68777bdecc005cf2ffdcae29/master/w_2048%2Cc_limit/240320_Ravensdon093V1-production_digital.jpg', title: 'luxury scaling', italicTitle: 'anywhere', cardImg: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=80', cardLabel: 'Eco Luxury Modular Framework' },
  { id: 2, mainBg: 'https://media.houseandgarden.co.uk/photos/689323c7366fae833c2e9534/master/w_2048%2Cc_limit/1-An-Artful-Life-studio-&-Patrick-William-Photography.jpg', title: 'smart spatial', italicTitle: 'engineering', cardImg: 'https://media.houseandgarden.co.uk/photos/689323c7366fae833c2e9534/master/w_2048%2Cc_limit/1-An-Artful-Life-studio-&-Patrick-William-Photography.jpg', cardLabel: 'Dynamic Off-Grid Structure' },
  { id: 3, mainBg: 'https://images.unsplash.com/photo-1599243272864-e9dd455966bd?&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjA1fHxob21lfGVufDB8fDB8fHww', title: 'portable living', italicTitle: 'made easy', cardImg: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhvbWV8ZW58MHx8MHx8fDA%3D', cardLabel: 'Architecture Meets Innovation' },
  { id: 4, mainBg: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGhvdXNlfGVufDB8fDB8fHww', title: 'minimalist design', italicTitle: 'redefined', cardImg: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=80', cardLabel: 'Future of Sustainable Living' },
];

const PROJECTS = [
  { id: 1, title: "building", tag: "Architecture / 2025", img: "https://plus.unsplash.com/premium_photo-1731185355854-ab61c7698af0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fEJsZW5kaW5nJTIwZnV0dXJpc3RpYyUyMGJ1aWxkaW5nfGVufDB8fDB8fHww" },
  { id: 2, title: "Modern Wood house", tag: "Design / 2024", img: "https://images.unsplash.com/photo-1647885352042-fe88980ccb2d?&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fE1vZGVybiUyMFdvb2QlMjBQYXZpbGlvbnxlbnwwfHwwfHx8MA%3D%3D" },
  { id: 3, title: "Eco-Friendly ", tag: "Architecture / 2025", img: "https://images.unsplash.com/photo-1774597998353-2b8be5199a01?&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fEVjby1GcmllbmRseSUyMFJldHJlYXQlMjBob21lfGVufDB8fDB8fHww" },
  { id: 4, title: " Studio", tag: "Interior / 2024", img: "https://images.unsplash.com/photo-1607570799395-b968ad047e3f?&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fE1pbmltYWxpc3QlMjBTdHVkaW98ZW58MHx8MHx8fDA%3D" },
  { id: 5, title: " Glass House", tag: "Architecture / 2026", img: "https://plus.unsplash.com/premium_photo-1686316979471-58ca82244594?&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8VXJiYW4lMjBHbGFzcyUyMEhvdXNlfGVufDB8fDB8fHww" },
  { id: 6, title: " Villa", tag: "Residential / 2025", img: "https://images.unsplash.com/photo-1634147590662-4f140cfa572d?&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8U2NhbmRpbmF2aWFuJTIwVmlsbGF8ZW58MHx8MHx8fDA%3D" }
];


const TEAM_MEMBERS = [
  { id: 1, name: 'Phoenix Blaze', role: 'Copywriter' },
  { id: 2, name: 'Julian Vance', role: 'Lead Architect' },
  { id: 3, name: 'Amara Sterling', role: 'Interior Stylist' },
  { id: 4, name: 'Silas Kincaid', role: 'Structural Engineer' },
  { id: 5, name: 'Elena Rostova', role: 'Project Manager' }
];

const BLOGS = [
  { id: 1, date: '12 December 2025', title: 'Inside Modern Architecture Balancing Aesthetic Portable house', img: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80', isLarge: true },
  { id: 2, date: '10 November 2025', title: 'The Evolution of Off-Grid Living Structures', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80', isLarge: false },
  { id: 3, date: '05 October 2025', title: 'Maximizing Minimalist Interior Environments', img: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=400&q=80', isLarge: false }
];

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [projectTrackerStyle, setProjectTrackerStyle] = useState({ width: '25%', left: '0%' });
  const projectSliderRef = useRef(null);

  // Auto transition hero headers
  useEffect(() => {
    const interval = setInterval(() => {
      handleNextHero();
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const slider = projectSliderRef.current;
    if (!slider) return;

    const updateTracker = () => {
      const maxScroll = slider.scrollWidth - slider.clientWidth;  
      if (maxScroll <= 0) {
        setProjectTrackerStyle({ width: '100%', left: '0%' });
        return;
      }

      const visibleRatio = slider.clientWidth / slider.scrollWidth;
      const width = Math.max(12, visibleRatio * 100);
      const left = (slider.scrollLeft / maxScroll) * (100 - width);

      setProjectTrackerStyle({ width: `${width}%`, left: `${left}%` });
    };

    updateTracker();
    slider.addEventListener('scroll', updateTracker);
    window.addEventListener('resize', updateTracker);

    const autoScroll = setInterval(() => scrollProjects('next'), 7000);

    return () => {
      slider.removeEventListener('scroll', updateTracker);
      window.removeEventListener('resize', updateTracker);
      clearInterval(autoScroll);
    };
  }, []);

  const handleNextHero = () => {
    setActiveIndex((prev) => (prev + 1) % CAROUSEL_DATA.length);
  };

 const scrollProjects = (direction) => {
    const slider = projectSliderRef.current;
    if (!slider) return;

    const firstCard = slider.querySelector('.project-card');
    const cardWidth = firstCard?.offsetWidth || slider.clientWidth;
    const gap = 30;
    const scrollAmount = cardWidth + gap;

    slider.scrollBy({
      left: direction === 'prev' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  const nextIndex = (activeIndex + 1) % CAROUSEL_DATA.length;

  return (
    <div className="home-container">
      
      {/* SECTION 1: HERO CANVAS LANDING */}
      <section className="hero-section">
        {CAROUSEL_DATA.map((slide, idx) => (
          <div 
            key={slide.id} 
            className={`hero-bg-slide ${idx === activeIndex ? 'active' : ''}`}
            style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.45)), url(${slide.mainBg})` }}
          />
        ))}


        <div className="hero-content">
          <div className="hero-left-indicator">
            <span className="current-num">{String(activeIndex + 1).padStart(2, '0')}</span>
            <div className="indicator-line"><span style={{ height: `${(activeIndex + 1) * 25}%` }}></span></div>
            <span className="total-num">04</span>
          </div>

          <div className="hero-title-container">
            <h1 className="hero-main-title">
              {CAROUSEL_DATA[activeIndex].title}
              <br />
              <span className="serif-italic">{CAROUSEL_DATA[activeIndex].italicTitle}</span>
            </h1>
          </div>

          <div className="social-fixed-bar">
            <a href="#fb"><i className="fab fa-facebook-f"></i></a>
            <a href="#ig"><i className="fab fa-instagram"></i></a>
            <a href="#pin"><i className="fab fa-pinterest-p"></i></a>
            <a href="#x"><i className="fab fa-x-twitter"></i></a>
          </div>
        </div>

        <div className="hero-bottom-bar">
          <div className="cta-button-group">
            <a href="mailto:info@infinityarchitecture.com" className="btn-email-link">info@infinityarchitecture.com</a>
          </div>

          <div className="scroll-indicator">
            <span className="scroll-text">Scroll</span>
            <div className="scroll-dash-track">
              {CAROUSEL_DATA.map((_, idx) => (
                <span key={idx} className={`dash ${idx === activeIndex ? 'active' : ''}`}></span>
              ))}
            </div>
          </div>

          

          <div className="nested-preview-slider" onClick={handleNextHero}>
            <div className="preview-image-wrapper">
              <img 
                src={CAROUSEL_DATA[nextIndex].cardImg} 
                alt="Next Preview" 
                key={activeIndex} 
                className="animated-preview-img"
              />
              <div className="preview-meta">
                <p>{CAROUSEL_DATA[nextIndex].cardLabel}</p>
              </div>
              <div className="preview-arrow-btn">
                <span>&#8250;</span>
              </div>
            </div>
          </div>
        </div>

        <button className="global-next-circle-btn" onClick={handleNextHero}>
          <span>&#8594;</span>
        </button>
      </section>

      {/* SECTION 2: ABOUT */}
      <section className="about-section">
        <div className="about-grid">
          <div className="about-visual-box">
            <div className="dotted-bg-pattern"></div>
            <div className="circular-frame-mask">
              <img src="https://officebanao.com/wp-content/uploads/2023/12/modern-interior-open-office-workspace.webp" alt="Smart Structural Framing" />
            </div>
          </div>

          <div className="about-text-content">
            <h2 className="section-title">About US</h2>
            <p className="description-p">
              A portable house is a compact, movable living solution designed for flexibility, efficiency, and sustainability. These homes can be easily transported and set up in various locations, making them ideal for travelers, remote workers, or those seeking a minimalist lifestyle. Built with lightweight yet durable materials.
            </p>
            <p className="description-p small-note">
              We create smart, comfortable spaces that combine modern design with practical living for every lifestyle.
              A portable house is a compact, movable living solution designed for flexibility, efficiency, and sustainability. These homes can be easily transported and set up in various locations, making them ideal for travelers, remote workers, or those seeking a minimalist lifestyle. Built with lightweight yet durable materials.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: PROJECTS CAROUSEL SLIDER */}
<section className="projects-section">
  <div className="section-header-row">
    <h2 className="section-title">Our Best <i>Projects</i></h2>
    <button className="btn-outline-view">ALL PROJECTS <span>&#8594;</span></button>
  </div>

  <div className="project-slider-wrapper" ref={projectSliderRef}>
    {PROJECTS.map((proj) => (
      <div className="project-card" key={proj.id}>
        <div className="project-img-container">
          <img src={proj.img} alt={proj.title} className="project-main-img" />
          
          {/* Interactive video hover overlay block */}
          <div className="project-hover-overlay">
            <div className="hover-circle-btn">
              <span className="hover-arrow">&#8594;</span>
            </div>
            <div className="hover-text-block">
              <span className="project-tag">{proj.tag}</span>
              <h3 className="project-card-title">{proj.title}</h3>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>

  <div className="slider-nav-controls">
    <button className="ctrl-arrow prev" onClick={() => scrollProjects('prev')}>&#8249;</button>
    <div className="scroll-timeline-container">
      <div className="scroll-timeline-line" style={projectTrackerStyle}></div>
    </div>
    <button className="ctrl-arrow next" onClick={() => scrollProjects('next')}>&#8250;</button>
  </div>
</section>

      {/* SECTION 4: SERVICES */}
      <section className="services-section">
        <div className="services-center-heading">
          <h2 className="section-title">Our Best <i>Services</i></h2>
          <p className="service-intro">We provide thoughtful, reliable solutions for every stage of your project.</p>
        </div>

        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">
              <img
                src="https://uicamp.smartinnovates.net/i/artevo-html/assets/img/icons/ser2-1.svg"
                alt="Custom Design & Planning icon"
              />
            </div>
            <h3>Custom Design & Planning</h3>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <img
                src="https://uicamp.smartinnovates.net/i/artevo-html/assets/img/icons/ser2-2.svg"
                alt="Modular Home Construction icon"
              />
            </div>
            <h3>Modular Home Construction</h3>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <img
                src="https://uicamp.smartinnovates.net/i/artevo-html/assets/img/icons/ser2-3.svg"
                alt="On-Site Delivery & Installation icon"
              />
            </div>
            <h3>On-Site Delivery & Installation</h3>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <img
                src="https://uicamp.smartinnovates.net/i/artevo-html/assets/img/icons/ser2-4.svg"
                alt="Solar Power System Installation icon"
              />
            </div>
            <h3>Solar Power System Installation</h3>
          </div>
        </div>

        <div className="services-footer-banner">
          <p><a href="#services">Our Service</a></p>
        </div>
      </section>

      {/* NEW SECTION 5: FEATURES & ADVANTAGES CIRCLE DIAGRAM */}
      <section className="features-diagram-section">
        <div className="features-heading-box">
          <h2>Over The Past 30 Years Of Our <i>Products</i></h2>
          <h3><i>Features And Advantages</i></h3>
        </div>

        <div className="diagram-layout-container">
          <div className="diagram-left-col">
            <div className="feature-item-desc align-right">
              <h4>Highly Customizable</h4>
              <p>Advantage: Unique Designs</p>
              <p>Benefit: Personal Expression</p>
            </div>
            <div className="feature-item-desc align-right">
              <h4>Customizable Space</h4>
              <p>Advantage: Position Moved</p>
              <p>Benefit: Strong Flexibility</p>
            </div>
            <div className="feature-item-desc align-right">
              <h4>Low Cost</h4>
              <p>Advantage: Low Maintenance</p>
              <p>Benefit: Lower Cost</p>
            </div>
          </div>

          <div className="diagram-center-circle-wrapper">
            <div className="outer-radar-ring">
              <span className="dot dot-1"></span>
              <span className="dot dot-2"></span>
              <span className="dot dot-3"></span>
              <span className="dot dot-4"></span>
              <span className="dot dot-5"></span>
              <span className="dot dot-6"></span>
              <div className="inner-image-circle">
                <img src="https://media.houseandgarden.co.uk/photos/65b3b0b3bed1c228df2e7d4c/master/w_2048%2Cc_limit/Assure-Interiors-MMH_MasterBedroom2.jpeg" alt="Core Trailer House Product" />
              </div>
            </div>
          </div>

          <div className="diagram-right-col">
            <div className="feature-item-desc">
              <h4>Quick Assembly</h4>
              <p>Advantage: Advantage: Easy Disassembly</p>
              <p>Benefit: Easy Installation</p>
            </div>
            <div className="feature-item-desc">
              <h4>Friendly Materials</h4>
              <p>Advantage: Recyclable Resources</p>
              <p>Benefit: Energy Conservation</p>
            </div>
            <div className="feature-item-desc">
              <h4>Stable Structure</h4>
              <p>Advantage: Good Fire Resistance</p>
              <p>Benefit: Safe And Reliable</p>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION 6: OUR BEST TEAM */}
      <section className="team-section">
        <div className="team-header-block">
          <h2 className="section-title">Our Best <i>Team</i></h2>
        </div>

        <div className="team-showcase-grid">
          <div className="team-left-group">
            <div className="team-card-wrapper">
              <div className="team-image-box team-avatar-box" aria-hidden="true">
                <svg viewBox="0 0 24 24" className="team-user-icon">
                  <path d="M12 12c2.7 0 4.9-2.2 4.9-4.9S14.7 2.2 12 2.2 7.1 4.4 7.1 7.1 9.3 12 12 12zm0 2.3c-3.3 0-9.8 1.7-9.8 5v1.2h19.6v-1.2c0-3.3-6.5-5-9.8-5z" />
                </svg>
              </div>
              <h4>{TEAM_MEMBERS[0].name}</h4>
              <p>{TEAM_MEMBERS[0].role}</p>
            </div>
            <div className="team-card-wrapper">
              <div className="team-image-box team-avatar-box" aria-hidden="true">
                <svg viewBox="0 0 24 24" className="team-user-icon">
                  <path d="M12 12c2.7 0 4.9-2.2 4.9-4.9S14.7 2.2 12 2.2 7.1 4.4 7.1 7.1 9.3 12 12 12zm0 2.3c-3.3 0-9.8 1.7-9.8 5v1.2h19.6v-1.2c0-3.3-6.5-5-9.8-5z" />
                </svg>
              </div>
              <h4>{TEAM_MEMBERS[1].name}</h4>
              <p>{TEAM_MEMBERS[1].role}</p>
            </div>
            <div className="team-join-cta-box">
              <p>Become a part of a dynamic, forward-thinking team where creativity meets purpose. At our company, we value innovation.</p>
              <a href="#join" className="join-team-link">Join Our Team</a>
            </div>
          </div>

          <div className="team-right-group">
            <div className="team-pitch-paragraph">
              <p>Join us and contribute to exciting projects that make a real impact. Together, we build more than just careers—we build a future.</p>
            </div>
            <div className="team-cards-row">
              {TEAM_MEMBERS.slice(2).map(member => (
                <div className="team-card-wrapper small-card" key={member.id}>
                  <div className="team-image-box team-avatar-box" aria-hidden="true">
                    <svg viewBox="0 0 24 24" className="team-user-icon">
                      <path d="M12 12c2.7 0 4.9-2.2 4.9-4.9S14.7 2.2 12 2.2 7.1 4.4 7.1 7.1 9.3 12 12 12zm0 2.3c-3.3 0-9.8 1.7-9.8 5v1.2h19.6v-1.2c0-3.3-6.5-5-9.8-5z" />
                    </svg>
                  </div>
                  <h4>{member.name}</h4>
                  <p>{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION 7: TESTIMONIALS SLIDER SECTION */}
      <section className="testimonials-section">
        <div className="testimonial-split-layout">
          <div className="testimonial-bg-visual" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80')` }}></div>
          <div className="testimonial-text-panel">
            <span className="author-signature">Leonardo Enzo, Envato</span>
            <div className="star-ratings-row">★★★★★</div>
            <blockquote className="quote-body">
              “Working with <i>infinity</i> was transformative. They took our vague ideas and turned them into a beautifully functional space. <i>Their creativity, attention to detail, and seamless communication made the process stress-free!</i>”
            </blockquote>
            <button className="testimonial-next-btn">Next <span>➔</span></button>
          </div>
        </div>
      </section>

   

      {/* NEW SECTION 9: LATEST NEWS & BLOGS */}
      {/* <section className="news-blogs-section">
        <div className="news-header-row">
          <h2 className="section-title">Latest News <i>& Blogs</i></h2>
          <button className="btn-outline-view">VIEW ALL <span>➔</span></button>
        </div>
        <div className="blogs-modular-grid">
          {BLOGS.map(blog => (
            <article key={blog.id} className={`blog-card-item ${blog.isLarge ? 'featured-large' : 'regular-stacked'}`}>
              <div className="blog-img-frame">
                <img src={blog.img} alt={blog.title} />
              </div>
              <div className="blog-item-meta">
                <time>{blog.date}</time>
                <h3>{blog.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </section> */}

     

    

    </div>
  );
};

export default Home;