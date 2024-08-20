import '../css/footer.css';

function Footer() {
    return <>
    <footer id="footer">
      <div className="footer-top">
        <img src="./Images/logo.png" alt="" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
          doloremque suscipit quae earum iusto maxime, doloribus placeat, facere
          ipsam commodi in maiores a expedita consequatur quos molestiae unde
          adipisci quam.
        </p>
      </div>
      <div className="footer-bottom">
        <div className="nav-foot">
          <h4>Information</h4>
          <ul>
            <li><a href="">About Us</a></li>
            <li><a href="">Classes</a></li>
            <li><a href="">Blog</a></li>
            <li><a href="">Contact</a></li>
          </ul>
        </div>

        <div className="nav-foot">
          <h4>Helpful Links</h4>
          <ul>
            <li><a href="">Services</a></li>
            <li><a href="">Supports</a></li>
            <li><a href="">Terms & Condition</a></li>
            <li><a href="">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
    </footer>
    </>
}

export default Footer;