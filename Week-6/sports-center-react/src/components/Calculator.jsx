import { useEffect } from 'react';
import '../css/calculator.css';

function Calculator() {
    useEffect(() => {
        const heightInput = document.getElementById('height');
        const weightInput = document.getElementById('weight');
        const bmiSlider = document.querySelector('.calc-slider');
      
        let bmiCalc = (height, weight) => {
            let bmi = weight / (height * height);
        
            if (bmi < 18.5) {
                bmiSlider.style.right = '80%';
            } else if (bmi >= 18.5 && bmi < 25) {
                bmiSlider.style.right = '60%';
            } else if (bmi >= 25 && bmi < 30) {
                bmiSlider.style.right = '40%';
            } else if (bmi >= 30 && bmi < 35) {
                bmiSlider.style.right = '20%';
            } else if (bmi >= 35) {
                bmiSlider.style.right = '10%';
            }
        }
      
        const handleInput = () => {
            const height = parseFloat(heightInput.value) / 100;
            const weight = parseFloat(weightInput.value);
        
            if (height && weight) {
                bmiCalc(height, weight);
            }
        }
      
        heightInput.addEventListener("input", handleInput);
        weightInput.addEventListener("input", handleInput);

        // Cleanup event listeners when the component unmounts
        return () => {
            heightInput.removeEventListener("input", handleInput);
            weightInput.removeEventListener("input", handleInput);
        };
    }, []);

    return (
        <>
        <section id="calculator">
            <div className="calc-text">
                <h4>BMI Calculator</h4>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia nisi
                    cum modi quod explicabo ratione blanditiis nobis numquam, optio sed
                    odio nulla quae facere similique repudiandae neque suscipit deleniti
                    ex.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                    quisquam tempore excepturi molestiae ad reprehenderit ratione officiis
                    odit. Laborum, corrupti quos quisquam rerum dolorem sed!Name
                </p>

                <div className="calc-input">
                    <div className="inputs">
                        <input type="text" name="height" id="height" placeholder="Your Height" />
                        <label htmlFor="height">cm</label>
                    </div>
                    <div className="inputs">
                        <input type="text" name="weight" id="weight" placeholder="Your Weight" />
                        <label htmlFor="weight">kg</label>
                    </div>
                </div>
            </div>
            <div className="calc-img">
                <img src="./Images/bmi-index.jpg" alt="" width="500px" height="300px"/>
                <div className="calc-slider"></div>
            </div>
        </section>
        </>
    );
}

export default Calculator;
