import React from 'react';
import './Home.css';
import Footer from '../ui/Footer';
import NewsSection from './NewsSection';

const Home = () => {
  return (
 <div>
     <div className="home">
      <div className="banner">
        <div className="banner-content">
          <h1>Welcome to Atal Utkrisht Pt.Mahimanand Nautiyal Gic Jibya Kotdhar, Uttarkashi </h1>
          <p>Empowering students to become future leaders</p>
        </div>
      </div>
      <section className="transform-split section2">
        <div className="container container-split">
          <div className="split-text">
            <h2>We Transform <br />the School Experience</h2>
            <p>
              Empowering students through innovation, creativity, and a future-forward vision.
              Our modern approach redefines how children learn, grow, and succeed. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati facilis est quis nulla harum dolorem voluptatibus in. Eligendi ea officiis accusamus sunt autem tempora quod numquam temporibus? Soluta dolore ratione, ut laboriosam autem officiis in,
            </p>
          </div>
          <div className="split-line"></div>
          <div className="split-image split-text">
            <img
              src="https://www.shutterstock.com/image-photo/portrait-two-diligent-girls-looking-260nw-130517294.jpg"
              alt="Students Learning"
            />
          </div>
        </div>
      </section>

      <section className="transform-split white-section">
        <div className="container container-split mb-4" >
          <div className="split-image split-text">
            <img
              src="https://images.unsplash.com/photo-1524069290683-0457abfe42c3?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2Nob29sJTIwc3R1ZGVudHxlbnwwfHwwfHx8MA%3D%3D"
              alt="Learning Together"
            />
          </div>
          <div className="split-line"></div>
          <div className="split-text">
            <h2>What is a Global academy?</h2>
            <p>
              At our school, we prepare students not just for exams, but for life. Our curriculum blends traditional values with 21st-century skills—ensuring each student grows into a confident, capable, and compassionate individual. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga sunt ratione cupiditate vel laudantium nostrum dicta tempora sed voluptatibus eius!
            </p>
          </div>


        </div>

        <div className="container">

          <h2 className='gallery-header'>Image Gallery</h2>



          <div className="row">
            <div className="col-md-4">
              <div className="thumbnail">

                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDOFmW_GWj6vXF6PHAUwPWC0pNCh9Sl6UtuQ&s" alt="Lights" />
                <div className="caption">
                  <p>Lorem ipsum donec id elit non mi porta gravida at eget metus.</p>
                </div>

              </div>
            </div>
            <div className="col-md-4">
              <div className="thumbnail">

                <img src="https://m.media-amazon.com/images/I/81EhZofH2RL._AC_UF1000,1000_QL80_.jpg" alt="Nature" />
                <div className="caption">
                  <p>Lorem ipsum donec id elit non mi porta gravida at eget metus.</p>
                </div>

              </div>
            </div>
            <div className="col-md-4">
              <div className="thumbnail">

                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQIOKvkSjQL0YNzTzLuBn67P5oHVl3q5Zh2A&s" alt="Fjords" />
                <div className="caption">
                  <p>Lorem ipsum donec id elit non mi porta gravida at eget metus.</p>
                </div>

              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="thumbnail">

                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDOFmW_GWj6vXF6PHAUwPWC0pNCh9Sl6UtuQ&s" alt="Lights" />
                <div className="caption">
                  <p>Lorem ipsum donec id elit non mi porta gravida at eget metus.</p>
                </div>

              </div>
            </div>
            <div className="col-md-4">
              <div className="thumbnail">

                <img src="https://m.media-amazon.com/images/I/81EhZofH2RL._AC_UF1000,1000_QL80_.jpg" alt="Nature" />
                <div className="caption">
                  <p>Lorem ipsum donec id elit non mi porta gravida at eget metus.</p>
                </div>

              </div>
            </div>
            <div className="col-md-4">
              <div className="thumbnail">

                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQIOKvkSjQL0YNzTzLuBn67P5oHVl3q5Zh2A&s" alt="Fjords" />
                <div className="caption">
                  <p>Lorem ipsum donec id elit non mi porta gravida at eget metus.</p>
                </div>

              </div>
            </div>
          </div>
        </div>

        <div className="container container-split mb-4" >
          <div className="split-image split-text">
            <img
              src="https://images.unsplash.com/photo-1524069290683-0457abfe42c3?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2Nob29sJTIwc3R1ZGVudHxlbnwwfHwwfHx8MA%3D%3D"
              alt="Learning Together"
            />
          </div>
          <div className="split-line"></div>
          <div className="split-text">
            <h2>Our Unique Transformative Practice</h2>
            <p>
              At our school, we prepare students not just for exams, but for life. Our curriculum blends traditional values with 21st-century skills—ensuring each student grows into a confident, capable, and compassionate individual. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga sunt ratione cupiditate vel laudantium nostrum dicta tempora sed voluptatibus eius!
            </p>
          </div>


        </div>


      </section>


      {/* <section className="testimonial-section">
        <div className="testimonial-header">
          <h2>What Parents Say</h2>
        </div>
        <div className="testimonial-grid">
          <div className="testimonial-card">
            <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="Parent 1" />
            <p>"This school has exceeded our expectations. Our son has become more confident and creative."</p>
            <h4>- Mrs. Aarti Sharma</h4>
          </div>
          <div className="testimonial-card">
            <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="Parent 2" />
            <p>"Excellent faculty and amazing infrastructure. A truly transformative experience for my child."</p>
            <h4>- Mr. Rajeev Mehta</h4>
          </div>
          <div className="testimonial-card">
            <img src="https://randomuser.me/api/portraits/women/58.jpg" alt="Parent 3" />
            <p>"The school fosters real-world skills. My daughter loves her teachers and the activities."</p>
            <h4>- Mrs. Kavita Nair</h4>
          </div>
          <div className="testimonial-card">
            <img src="https://randomuser.me/api/portraits/men/29.jpg" alt="Parent 4" />
            <p>"Safe, nurturing environment. The staff is very cooperative and always available."</p>
            <h4>- Mr. Sandeep Rao</h4>
          </div>
        </div>
      </section>


      <section className="section5 white-section">
        <NewsSection />
      </section> */}
    
    </div>
    
 </div>
  );
};

export default Home;
