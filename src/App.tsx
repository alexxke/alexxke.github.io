import { useState } from 'react'
import { Link, Element } from 'react-scroll'
import { ImageTextSection } from './components/ImageTextSection'
import { SocialLinks } from './components/SocialLinks'
import './App.css'
import { ProjectCard } from './components/ProjectCard'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="nav">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div className="nav-brand">Alex Ke</div>
            <button 
              className="hamburger" 
              onClick={toggleMenu}
            >
              ☰
            </button>
            <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
              <Link 
                to="home" 
                spy={true} 
                smooth={true} 
                className="nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="research" 
                spy={true} 
                smooth={true} 
                className="nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Research
              </Link>
              <Link 
                to="practice" 
                spy={true} 
                smooth={true} 
                className="nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Practice
              </Link>
              <a 
                href="https://alexke.substack.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Long/Short
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div className="container">
        <Element name="home" className="section">
          <div className="about-container" style={{ display: 'flex', gap: '2rem', marginBottom: '2rem' }}>
            <div className="about-image" style={{ flex: '1', maxWidth: '300px' }}>
              <img
                src="/images/fb_edited.jpg"
                alt="Alex Ke Headshot"
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
            <div style={{ flex: '1' }}>
              <h2 className="section-title">About</h2>
              <div className="text-content">
                <p>
                  I'm Alex Ke, currently an analyst at{' '}
                  <a href="https://www.tigerglobal.com/" target="_blank" rel="noopener noreferrer">
                    Tiger Global
                  </a>{' '}
                  in New York. At Stanford, I studied Statistics (MS) and Computer Science (BS Hons.)
                  with research advised by{' '}
                  <a href="https://www.andrewng.org/" target="_blank" rel="noopener noreferrer">
                    Andrew Ng
                  </a>
                  .
                </p>
                <p>
                  I spend most my time researching truths and putting them in practice:
                  machine learning, quant trading, or public and private investing.
                </p>
                <p>In my free time, I fish, shoot trap, and throw pottery.</p>
              </div>
              <SocialLinks />
            </div>
          </div>
        </Element>

        <Element name="research" className="section">
          <h2 className="section-title">Publications</h2>
          <ImageTextSection
            image="/images/ml_market_map.png"
            alt="Machine Learning Infrastructure Evolution"
          >
            <div className="image-text-content">
              <p className="image-text-title">
                <a
                  href="https://www.bvp.com/atlas/the-evolution-of-machine-learning-infrastructure"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  The evolution of machine learning infrastructure
                </a>
              </p>
              <p><i>Bessemer Venture Partners Atlas</i></p>
            </div>
          </ImageTextSection>

          <ImageTextSection
            image="/images/chextransfer_teaser.jpg"
            alt="ChexTransfer"
          >
            <div className="image-text-content">
              <p className="image-text-title">
                <a
                  href="https://dl.acm.org/doi/10.1145/3450439.3451867"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CheXtransfer: Performance and Parameter Efficiency of ImageNet Models for Chest X-Ray Interpretation
                </a>
              </p>
              <p>
                <b>Alexander Ke</b>,{' '}
                William Ellsworth,{' '}
                Oishi Banerjee,{' '}
                <a href="https://www.andrewng.org/" target="_blank" rel="noopener noreferrer">Andrew Y. Ng</a>,{' '}
                <a href="https://pranavrajpurkar.com/" target="_blank" rel="noopener noreferrer">Pranav Rajpurkar</a>
              </p>
              <p><i>ACM-CHIL 2021</i></p>
            </div>
          </ImageTextSection>

          <ImageTextSection
            image="/images/nerf.gif"
            alt="NeRF"
          >
            <div className="image-text-content">
              <p className="image-text-title">
                <u>C2W2: Neural Radiance Fields (NeRF)</u>
              </p>
              <p>
                <b>Alexander Ke</b>,{' '}
                <a href="https://sharonzhou.me/" target="_blank" rel="noopener noreferrer">Sharon Zhou</a>
              </p>
              <p><i>Coursera: Build Better Generative Adversarial Networks</i></p>
            </div>
          </ImageTextSection>

          <ImageTextSection
            image="/images/accelerators.jpg"
            alt="Entrepreneurial Learning"
          >
            <div className="image-text-content">
              <p className="image-text-title">
                <u>The Impact of Accelerator Cohort Composition on Startup Outcomes</u>
              </p>
              <p>
                Tyler Whittle,{' '}
                <b>Alexander Ke</b>,{' '}
                <a href="https://management.ntu.edu.tw/en/faculty/teacher/sn/299" target="_blank" rel="noopener noreferrer">JungYun Han</a>,{' '}
                <a href="https://profiles.stanford.edu/charles-eesley" target="_blank" rel="noopener noreferrer">Charles Eesley</a>
              </p>
              <p><i>Strategic Management Journal (R&R)</i></p>
            </div>
          </ImageTextSection>

          <h2 className="section-title">Patents</h2>
          <ImageTextSection
            image="/images/cisco.jpg"
            alt="Patent Diagram"
          >
            <div className="image-text-content">
              <p className="image-text-title">
                <a
                  href="https://patents.google.com/patent/US20220295437A1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Continuous synchronization of multiple radio devices to physical time
                </a>
              </p>
              <p>
                <b>Alexander Ke</b>, David A. Maluf, Amr Elnakeeb
              </p>
              <p><i>US Patent 11,683,772</i></p>
            </div>
          </ImageTextSection>
        </Element>

        <Element name="practice" className="section">
          <h2 className="section-title">Teaching</h2>
          <ul className="bullet-list">
            <li>
              TA,{' '}
              <a href="https://cs236g.stanford.edu/" target="_blank" rel="noopener noreferrer">
                CS236G Generative Adversarial Networks
              </a>
            </li>
            <li>
              TA,{' '}
              <a href="https://web.stanford.edu/class/cs224s/" target="_blank" rel="noopener noreferrer">
                CS224S Spoken Language Processing
              </a>
            </li>
            <li>TA, CS320 Value of Data and AI</li>
            <li>Instructor, Advanced Ceramics (the pottery kind)</li>
          </ul>

          <h2 className="section-title">Projects</h2>
          <div className="project-grid">
            <ProjectCard
              title="NHL Injury Prediction"
              description="I partnered with K-Motion and Sports Science Solutions to predict injury using biomechanical data."
              image="/images/kmotion.png"
              link="https://www.sporttechie.com/one-coach-using-biomechanics-to-identity-future-nhl-players/"
            />
            <ProjectCard
              title="Poshmark Feed Personalization"
              description="I developed an NLP pipeline improving item density for Poshmark's recommender system serving 3M users daily."
              image="/images/poshmark.png"
              link="https://poshmark.com/"
            />
            <ProjectCard
              title="Support Ticket Deduplication"
              description="I developed a system to encode support tickets as vectors to query duplicate issues on DevRev's CRM."
              image="/images/devrev.png"
              link="https://devrev.ai/"
            />
            <ProjectCard
              title="Digital Canvassing"
              description="I helped build Electify.us, enabling campaigns to reach more voters and voters more meaningful engagement with campaigns."
              image="/images/electify.png"
              link="https://electify.us/"
            />
          </div>
        </Element>
      </div>
      <footer className="footer">
        <p>© 2023 Alexander Ke</p>
      </footer>
    </>
  )
}

export default App
