import '../css/form-survey.css';

function Form() {
    return <>
    <section id="contact-section">
      <div className="section-top">
        <h3>CONTACT US</h3>
        <div className="separator"></div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
          numquam incidunt facilis veniam, quo maiores sunt quos atque fuga.
        </p>
      </div>

      <div className="contact-us">
        <div className="form-survey">
          <div className="contact-number-email">
            <div className="mobile">
              <p>Mobile Number</p>
              <span>+123 456 789 0000</span>
            </div>
            <div className="email">
              <p>Email Address</p>
              <span>demo@demo.com</span>
            </div>
          </div>

          <h4>Make An Appoinment</h4>

          <form id="form">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea id="message" placeholder="Your Message"></textarea>
          </form>
        </div>

        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3065.7697067081394!2d30.49799721217589!3d39.78972327142847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cc15e764f733f3%3A0x391f6eb0cc92ce01!2sAnadolu%20%C3%9Cniversitesi!5e0!3m2!1str!2str!4v1722443319084!5m2!1str!2str"
            width="400"
            height="300"
            style="border: 0; margin-top: 50px"
            allowfullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
    </>
}

export default Form;