import { useEffect } from 'react';


function Hero() {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('#header');
      if (navbar) {
        if (window.scrollY > 50) {
          navbar.style.backgroundColor = '#355592';
        } else {
          navbar.style.backgroundColor = 'transparent';
        }
      }
    };

    const handleNavbarClick = (e) => {
      e.stopPropagation();
      const navbar = document.getElementById('navbar');
      if (navbar) {
        navbar.classList.toggle('show');
      }
    };

    const handleDocumentClick = (e) => {
      const navbar = document.getElementById('navbar');
      if (navbar && !navbar.contains(e.target)) {
        navbar.classList.remove('show');
      }
    };

    const navbarBars = document.getElementById('navbar-bars');
    if (navbarBars) {
      navbarBars.addEventListener('click', handleNavbarClick);
    }

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', handleDocumentClick);

    // Cleanup function to remove event listeners
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (navbarBars) {
        navbarBars.removeEventListener('click', handleNavbarClick);
      }
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  return (
    <>
      <header id="header">
        <img src="../public/Images/logo.png" alt="Logo" />
        <nav id="navbar">
          <a href="#hero-section">Home</a>
          <a href="#course-info">Classes</a>
          <a href="#trainer-section">Trainer</a>
          <a href="#comments-section">Review</a>
          <a href="#contact-section">Contact</a>
          <a href="#">JOIN US</a>
        </nav>
        <i id="navbar-bars" className="fa-solid fa-bars fa-2xl"></i>
      </header>

      <section id="hero-section">
        <div id="welcome">
          <span>POWERFULL</span>
          <h1>Group Practice With Trainer</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores animi
            inventore tenetur enim molestiae neque dignissimos, possimus, debitis
            repellat quod amet rerum aperiam natus sunt. Unde hic quaerat qui cum.
          </p>
          <div id="hero-buttons">
            <button className="button-sign">Sign Up</button>
            <button className="button-details">Details</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
