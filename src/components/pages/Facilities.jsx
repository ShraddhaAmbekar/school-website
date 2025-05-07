import React from 'react'
import './Facilities.css'
const Facilities = () => {
  return (
    <div>
      <section>
        <div className="facilities-banner">
          <div className='container-split container'>
            <div className="split-text facilities-heading">
              <h5>Facilities</h5>
            </div>
         </div>
        </div>
      </section>


      <section className="transform-split white-section">
        <div className="container container-split">
        <h2 className='mobile-title mt-3'>Library</h2>
          <div className="split-text">
          <h2 className='desktop-title'>Library</h2>
            <p>
              A Quiet Corner for Curious Minds
              The school library is a peaceful retreat where students can dive into the world of books. Stocked with a wide collection of academic and story books in Hindi and English, the library supports both studies and imagination. Students are encouraged to spend time reading during library periods and free hours. With comfortable seating and a calm atmosphere, the library helps build a lifelong love for reading and self-learning.


            </p>
          </div>
          <div className="split-line"></div>
          <div className="split-image split-text">
            <img
                  src='/assets/images/about/7.png'
              alt="Students Learning"
            />
          </div>
        </div>
      </section>

      <section className="transform-split white-section">
        <div className="container container-split mb-4" >
        <h2 className='mobile-title'>Laboratory</h2>
          <div className="split-image split-text">
            <img
               src='/assets/images/about/6.png'
              alt="Learning Together"
            />
          </div>
          <div className="split-line"></div>
          <div className="split-text">
          <h2 className='desktop-title'>Laboratory</h2>
            <p>
              Learning by Doing
              Our science lab gives students the opportunity to learn through observation and experimentation. It is equipped with basic tools and models for understanding key concepts in Physics, Chemistry, and Biology. Under the guidance of subject teachers, students carry out simple experiments that connect directly with their textbooks. The lab encourages practical learning, critical thinking, and a better grasp of scientific principles through real experiences.
            </p>
          </div>


        </div>


      </section>

      <section className="transform-split white-section">
      <h2 className='mobile-title text-center'>Classrooms</h2>
        <div className="container container-split">
          <div className="split-text">
          <h2 className='desktop-title'>Classrooms</h2>
       
            <p>
              Our classrooms are simple yet thoughtfully arranged to ensure every student feels comfortable and focused. With ample natural light, proper ventilation, and neat seating arrangements, they offer a calm and organized space for learning. The blackboards, charts, and student-made displays on the walls help create a connection between lessons and real-life understanding. Teachers use engaging methods, including discussions and group work, to make lessons meaningful and interactive.

            </p>
          </div>
          <div className="split-line"></div>
          <div className="split-image split-text">
            <img
           src='/assets/images/about/new-5.png'
              alt="Students Learning"
            />
          </div>
        </div>
      </section>



    </div>
  )
}

export default Facilities
