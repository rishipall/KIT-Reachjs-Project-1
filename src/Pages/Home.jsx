import './Home.css'

function Home() {
  return (
    <div className="home">

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-left">
          <h1>Rishi pal</h1>
          <p>
            Intro text: Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="cta-btn">Let's get started &gt;</button>
        </div>

        <div className="hero-right">
          <div className="avatar">
            <img src="/WhatsApp Image 2026-01-21 at 8.25.47 PM.jpeg" alt="Profile" />
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="brands">
        <p className="brands-label">Worked with</p>
        <div className="brands-list">
          <div className="brand-card">ClickUp</div>
          <div className="brand-card">Dropbox</div>
          <div className="brand-card">Paychex</div>
          <div className="brand-card">Elastic</div>
          <div className="brand-card">Stripe</div>
        </div>
      </section>

    </div>
  )
}

export default Home
