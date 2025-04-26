import React from 'react';
import './Home.css';
import StatsSection from './StatsSection';


const Home = () => {
  return (
    <div>
      <div className="home">
        <div className="banner">
          {/* <div className="banner-content">
            <h1>Welcome to Atal Utkrisht Pt.Mahimanand Nautiyal Gic Jibya Kotdhar, Uttarkashi </h1>
            <p>Empowering students to become future leaders</p>
          </div> */}
        </div>
        <section className="transform-split section2">
          <div className="container container-split">
            <div className="split-text">
              <h2>We Transform <br />the School Experience</h2>
              <p>
                The Atal Utkrisht Schools are a transformative initiative by the Uttarakhand government aimed at enhancing educational standards in government schools, dedicated to former Prime Minister Atal Bihari Vajpayee. These schools provide quality education similar to private institutions, focusing on rural areas. With CBSE affiliation, English medium instruction, and essential facilities, they strive to retain students and improve educational opportunities, ensuring that every child has access to a brighter future.
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
              <h2>About Us</h2>
              <p>
                Atal Utkrisht Pt. Mahimanand Nautiyal Government Inter College, Jibya Kotdhar, Uttarkashi is a prestigious educational institution nestled in the remote hilly region of Uttarakhand. Established as a high school in 1990 and upgraded to the intermediate level in 1998, the school earned the distinguished status of Atal Utkrisht Vidyalaya and CBSE affiliation in 2021.

                Our mission goes beyond textbooks — we strive to nurture capable, aware, and value-driven individuals ready to face life with confidence. With a balanced focus on Science, Arts, and Technical education, we aim for holistic development.

                With 203 students, dedicated teachers, and committed staff, our school continues to move forward with a strong foundation of quality education, ethical values, and self-reliance.
              </p>
            </div>


          </div>

          <div className="home-gallery">
            <div className="container ">
              <h2 className='gallery-header'>Image Gallery</h2>
              <div className="row">
                <div className="col-md-4">
                  <div className="thumbnail">

                    <img src="/assets/images/gallery-image2.jpg" alt="Lights" loading='lazy' />
                    <div className="caption">
                    
                    </div>

                  </div>
                </div>
                <div className="col-md-4">
                  <div className="thumbnail">
                    <img src="" alt="Nature" loading='lazy' />
                   

                  </div>
                </div>
                <div className="col-md-4">
                  <div className="thumbnail">

                    <img src="/assets/images/gallery-image1.jpg" alt="Fjords" loading='lazy'/>
                    <div className="caption">
                     
                    </div>

                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="thumbnail">

                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDOFmW_GWj6vXF6PHAUwPWC0pNCh9Sl6UtuQ&s" loading='lazy' alt="Lights" />
                    

                  </div>
                </div>
                <div className="col-md-4">
                  <div className="thumbnail">

                    <img src="https://m.media-amazon.com/images/I/81EhZofH2RL._AC_UF1000,1000_QL80_.jpg" alt="Nature" loading='lazy'/>
                    

                  </div>
                </div>
                <div className="col-md-4">
                  <div className="thumbnail">

                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQIOKvkSjQL0YNzTzLuBn67P5oHVl3q5Zh2A&s" alt="Fjords" loading='lazy'/>
                   

                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container container-split" >
            <div className="split-image split-text">
              <img
                src="https://images.unsplash.com/photo-1524069290683-0457abfe42c3?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2Nob29sJTIwc3R1ZGVudHxlbnwwfHwwfHx8MA%3D%3D"
                alt="Learning Together" loading='lazy'
              />
            </div>
            <div className="split-line"></div>
            <div className="split-text">
              <h2>why choose us ?</h2>
              <p>
              we take pride in nurturing minds through the expertise of our experienced and dedicated educators who create a dynamic and inclusive learning environment tailored to every student’s unique potential. Our focus extends beyond academics—we believe in shaping well-rounded individuals by fostering character, leadership, and a deep-rooted sense of social responsibility. With a wide array of enriching extracurricular activities, sports, and cultural clubs, we ensure that every student not only learns but thrives with confidence and purpose.
              </p>
            </div>
          </div>
        </section>
  <StatsSection/>

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
