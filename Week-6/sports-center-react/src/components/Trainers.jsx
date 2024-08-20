import '../css/trainers.css';

function Trainers(){
    return <>
    <section id="trainer-section">
      <div className="section-top">
        <h3>OUR BEST TRAINERS</h3>
        <div className="separator"></div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
          numquam incidunt facilis veniam, quo maiores sunt quos atque fuga.
        </p>
      </div>

      <div className="trainer-cards">
        <div className="trainer-card">
          <img src="./Images/trainer1.jpg" alt="" />

          <div className="border-top"></div>
          <div className="border-right"></div>
          <div className="border-bottom"></div>
          <div className="border-left"></div>
          <div className="trainer-card-content">
            <span>Nicolette Dunn</span>
            <span>Fitness Instructor</span>
          </div>
        </div>

        <div className="trainer-card">
          <img src="./Images/trainer2.jpg" alt="" />

          <div className="border-top"></div>
          <div className="border-right"></div>
          <div className="border-bottom"></div>
          <div className="border-left"></div>
          <div className="trainer-card-content">
            <span>Jay Nunez</span>
            <span>Fitness Instructor</span>
          </div>
        </div>

        <div className="trainer-card">
          <img src="./Images/trainer3.jpg" alt="" />

          <div className="border-top"></div>
          <div className="border-right"></div>
          <div className="border-bottom"></div>
          <div className="border-left"></div>
          <div className="trainer-card-content">
            <span>Jane Doe</span>
            <span>Cardio Trainer</span>
          </div>
        </div>
      </div>
    </section>

    </>
}

export default Trainers;