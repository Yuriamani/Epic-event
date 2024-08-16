import './Footer.css'

function Footer() {
    return (
      <footer className="footer" style={{
        bottom: 0, // add this
        left: 0, // add this
        width: '100%', // add this
        zIndex: 1 // add this
      }}>
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>Epic Events</h4>
            <ul>
              <li><a href="#">about us</a></li>
              <li><a href="#">our services</a></li>
              <li><a href="#">privacy policy</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>get help</h4>
            <ul>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">events</a></li>
              <li><a href="#">returns</a></li>
              <li><a href="#">order status</a></li>
              <li><a href="#">payment options</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Upcoming Events</h4>
            <ul>
              <li><a href="#">view</a></li>
              <li><a href="#">host</a></li>
              <li><a href="#">feedback</a></li>
              <li><a href="#">latest events</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>follow us</h4>
            <div className="social-links">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
    );
  }

  export default Footer;  