import '../css/review.css';

function Review() {
    return <>
    <section id="comments-section">
      <div className="section-top">
        <h3>OUR COMMENTS</h3>
        <div className="separator"></div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
          numquam incidunt facilis veniam, quo maiores sunt quos atque fuga.
        </p>
      </div>

      <div className="comment-content">
        <div className="comment-card">
          <div className="comment-top">
            <img src="./Images/client1.jpg" alt="" />
            <div className="names">
              <span><strong>Diet Expert</strong></span>
              <span>CFO</span>
            </div>
          </div>
          <div className="comment-text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit vel
              deserunt quod eos nam? Consequatur fugit delectus repellendus
              voluptate, aliquam perferendis aliquid eveniet quibusdam cum
              aspernatur nesciunt corporis quam illo! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quam, laborum!
            </p>
            <div className="styling-left"></div>
            <div className="styling-right"></div>
          </div>
        </div>

        <div className="comment-card">
          <div className="comment-top">
            <img src="./Images/client2.jpg" alt="" />
            <div className="names">
              <span><strong>Diet Expert</strong></span>
              <span>CFO</span>
            </div>
          </div>
          <div className="comment-text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit vel
              deserunt quod eos nam? Consequatur fugit delectus repellendus
              voluptate, aliquam perferendis aliquid eveniet quibusdam cum
              aspernatur nesciunt corporis quam illo! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quam, laborum!
            </p>
            <div className="styling-left"></div>
            <div className="styling-right"></div>
          </div>
        </div>
      </div>
    </section>
    </>
}

export default Review;