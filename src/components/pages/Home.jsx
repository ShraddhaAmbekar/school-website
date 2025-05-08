import React from 'react';
import './Home.css';
import StatsSection from './StatsSection';
import { Link } from 'react-router';


const Home = () => {
  return (
    <div>
      <div className="home">
        <div className="banner">
        </div>

        <section className="transform-split">
          <div className="container container-split">
            <h2 className='mobile-title'>We Transform <br />the School Experience</h2>
            <div className="split-text">
              <h2 className='desktop-title'>We Transform <br />the School Experience</h2>
              <p>
                The Atal Utkrisht Schools are a transformative initiative by the Uttarakhand government aimed at enhancing educational standards in government schools, dedicated to former Prime Minister Atal Bihari Vajpayee. These schools provide quality education similar to private institutions, focusing on rural areas. With CBSE affiliation, English medium instruction, and essential facilities, they strive to retain students and improve educational opportunities, ensuring that every child has access to a brighter future.
              </p>
            </div>
            <div className="split-line"></div>
            <div className="split-image split-text">
              <img
                src='/assets/images/other/16.jpg'
                alt="Students Learning"
              />
            </div>
          </div>
        </section>

        <section className="transform-split white-section">
          <div className="container container-split mb-4" >
            <h2 className='mobile-title'>About Us</h2>
            <div className="split-image split-text">

              <img
                src='/assets/images/other/17.jpg'
                alt="Learning Together"
              />
            </div>
            <div className="split-line"></div>
            <div className="split-text">
              <h2 className='desktop-title'>About Us</h2>
              <p>
                Atal Utkrisht Pt. Mahimanand Nautiyal Government Inter College, Jibya Kotdhar, Uttarkashi is a prestigious educational institution nestled in the remote hilly region of Uttarakhand. Established as a high school in 1990 and upgraded to the intermediate level in 1998, the school earned the distinguished status of Atal Utkrisht Vidyalaya and CBSE affiliation in 2021.

                Our mission goes beyond textbooks — we strive to nurture capable, aware, and value-driven individuals ready to face life with confidence. With a balanced focus on Science, Arts, and Technical education, we aim for holistic development.

                With 203 students, dedicated teachers, and committed staff, our school continues to move forward with a strong foundation of quality education, ethical values, and self-reliance.
              </p>
            </div>
          </div>

          <div className="home-gallery">
          <div className="container">
  <h2 className="gallery-header text-center mb-4">Image Gallery</h2>

  <div className="row">
  {[29, 30, 78, 19, 67, 32].map((img, index) => (
    <div key={index} className="col-12 col-md-6 col-sm-6 col-lg-4 mb-4">
      <div className="thumbnail">
        <Link to="/gallery">
          <img
            src={`/assets/images/school-images/${img}.jpeg`}
            alt={`Gallery ${img}`}
            loading="lazy"
            className="img-fluid rounded shadow-sm"
          />
        </Link>
      </div>
    </div>
  ))}
</div>

</div>

          </div>

          <div className="container container-split" >
            <h2 className='mobile-title'>Why choose us?</h2>

            <div className="split-image split-text">
              <img
                src='/assets/images/other/19.jpg'
                alt="Learning Together" loading='lazy'
              />
            </div>
            <div className="split-line"></div>
            <div className="split-text">
              <h2 className='desktop-title'>Why choose us?</h2>
              <p>
                we take pride in nurturing minds through the expertise of our experienced and dedicated educators who create a dynamic and inclusive learning environment tailored to every student’s unique potential. Our focus extends beyond academics—we believe in shaping well-rounded individuals by fostering character, leadership, and a deep-rooted sense of social responsibility. With a wide array of enriching extracurricular activities, sports, and cultural clubs, we ensure that every student not only learns but thrives with confidence and purpose.
              </p>
            </div>
          </div>
        </section>
        <StatsSection />

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
