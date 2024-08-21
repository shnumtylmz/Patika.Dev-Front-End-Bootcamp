import { useEffect } from 'react';
import '../css/info.css';

function Info() {
    useEffect(() => {
        const contentMap = {
            btnYoga: `<div class="lessons">
                <div class="lessons-text">
                    <h4>Why are your Yoga?</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ratione, dolorum, enim, mollitia eligendi aliquam optio quod
                        dolores vitae quia aspernatur porro voluptatibus aperiam!
                        Assumenda minus possimus inventore fuga dolores excepturi nemo
                        eius libero illo voluptate.
                    </p>
    
                    <h4>When comes Yoga Your Time.</h4>
                    <p>Saturday-Sunday: 8:00am - 10:00am</p>
                    <p>Monday-Tuesday: 10:00am - 12:00am</p>
                    <p>Wednesday-Friday: 3:00pm - 6:00pm</p>
                </div>
                <div class="lessons-img">
                    <img src="./Images/yoga.jpg" width="400px" alt="" />
                </div>
            </div>`,
            btnGroup: `<div class="lessons">
                <div class="lessons-text">
                    <h4>Why are your Group?</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ratione, dolorum, enim, mollitia eligendi aliquam optio quod
                        dolores vitae quia aspernatur porro voluptatibus aperiam!
                        Assumenda minus possimus inventore fuga dolores excepturi nemo
                        eius libero illo voluptate.
                    </p>
    
                    <h4>When comes Group Your Time.</h4>
                    <p>Saturday-Sunday: 8:00am - 10:00am</p>
                    <p>Monday-Tuesday: 10:00am - 12:00am</p>
                    <p>Wednesday-Friday: 3:00pm - 6:00pm</p>
                </div>
                <div class="lessons-img">
                    <img src="./Images/group.webp" width="400px" alt="" />
                </div>
            </div>`,
            btnSolo: `<div class="lessons">
                <div class="lessons-text">
                    <h4>Why are your Solo?</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ratione, dolorum, enim, mollitia eligendi aliquam optio quod
                        dolores vitae quia aspernatur porro voluptatibus aperiam!
                        Assumenda minus possimus inventore fuga dolores excepturi nemo
                        eius libero illo voluptate.
                    </p>
    
                    <h4>When comes Group Solo Time.</h4>
                    <p>Saturday-Sunday: 8:00am - 10:00am</p>
                    <p>Monday-Tuesday: 10:00am - 12:00am</p>
                    <p>Wednesday-Friday: 3:00pm - 6:00pm</p>
                </div>
                <div class="lessons-img">
                    <img src="./Images/solo.jpg" width="400px" alt="" />
                </div>
            </div>`,
            btnStret: `<div class="lessons">
                <div class="lessons-text">
                    <h4>Why are your Stretching?</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ratione, dolorum, enim, mollitia eligendi aliquam optio quod
                        dolores vitae quia aspernatur porro voluptatibus aperiam!
                        Assumenda minus possimus inventore fuga dolores excepturi nemo
                        eius libero illo voluptate.
                    </p>
    
                    <h4>When comes Stretching Your Time.</h4>
                    <p>Saturday-Sunday: 8:00am - 10:00am</p>
                    <p>Monday-Tuesday: 10:00am - 12:00am</p>
                    <p>Wednesday-Friday: 3:00pm - 6:00pm</p>
                </div>
                <div class="lessons-img">
                    <img src="./Images/stret.webp" width="400px" alt="" />
                </div>
            </div>`
        };
        
        const buttons = document.querySelectorAll('button');
        const displayText = document.getElementById('display-text');
    
        buttons.forEach(button => {
            button.addEventListener('click', function() {
                buttons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                
                const content = contentMap[this.id];
                displayText.innerHTML = content;
            });
        });
    
        // Set initial content
        let btnYoga = document.getElementById('btnYoga');
        btnYoga.classList.add('active');
        displayText.innerHTML = contentMap[btnYoga.id];

        // Cleanup event listeners when the component unmounts
        return () => {
            buttons.forEach(button => {
                button.removeEventListener('click', function() {});
            });
        };
    }, []);

    return (
        <>
        <div className="cards">
            <div className="card">
                <span>325</span>
                <p>Course</p>
            </div>
            <div className="card">
                <span>405</span>
                <p>Work Out</p>
            </div>
            <div className="card">
                <span>305</span>
                <p>Working Hour</p>
            </div>
            <div className="card">
                <span>705</span>
                <p>Happy Client</p>
            </div>
        </div>
    
        <section id="course-info">
            <div id="info-section">
                <div className="section-top">
                    <h3>OUR CLASSES</h3>
                    <div className="separator"></div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. A expedita
                        mollitia nisi quidem eligendi aliquid minima porro rerum vel!
                    </p>
                </div>
    
                <div id="lessons-button">
                    <button id="btnYoga">Yoga</button>
                    <button id="btnGroup">Group</button>
                    <button id="btnSolo">Solo</button>
                    <button id="btnStret">Stretching</button>
                </div>
    
                <div id="display-text"></div>
            </div>
        </section>
        </>
    );
}

export default Info;
