import '../css/purchase.css';

function Purchase() {
    return <>
    <section id="purchase">
      <div className="section-top">
        <h3>PURCHASE FROM US</h3>
        <div className="separator"></div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, nemo
          sunt iste autem quae iure? Labore, maiores ex.
        </p>
      </div>
      <div className="services">
        <div className="buying-cards">
          <img src="./Images/purchase1.jpg" alt="Kettlebell" />
          <h4>Kettlebell / 5kg</h4>
          <div className="prices">
            <span>89,99$</span>
            <span>/</span>
            <span>59.99$</span>
          </div>
          <div className="add-list">
            <i className="fa-solid fa-cart-shopping"></i>
            <span>Add To Cart</span>
          </div>
        </div>

        <div className="buying-cards">
          <img src="./Images/purchase2.jpg" alt="Treadmill" />
          <h4>Treadmill</h4>
          <div className="prices">
            <span>899.99$</span>
            <span>/</span>
            <span>599.99$</span>
          </div>
          <div className="add-list">
            <i className="fa-solid fa-cart-shopping"></i>
            <span>Add To Cart</span>
          </div>
        </div>

        <div className="buying-cards">
          <img
            src="./Images/purchase3.jpg"
            alt="Adjustable Dumbell"
          />
          <h4>Adjustable Dumbell</h4>
          <div className="prices">
            <span>89,99$</span>
            <span>/</span>
            <span>59.99$</span>
          </div>
          <div className="add-list">
            <i className="fa-solid fa-cart-shopping"></i>
            <span>Add To Cart</span>
          </div>
        </div>

        <div className="buying-cards">
          <img src="./Images/purchase4.jpg" alt="Kettlebell" />
          <h4>Kettlebell / 3kg</h4>
          <div className="prices">
            <span>89,99$</span>
            <span>/</span>
            <span>59.99$</span>
          </div>
          <div className="add-list">
            <i className="fa-solid fa-cart-shopping"></i>
            <span>Add To Cart</span>
          </div>
        </div>
      </div>
    </section>
    </>
}

export default Purchase;