import React from 'react'
import ShowMoreText from './ShowMoreText'; 
import "./About.css"
import StatsSection from './StatsSection'

const missionText = `Embarking on a dedicated journey since 1990, evolving from a high school to a CBSE-affiliated Atal Utkrisht Vidyalaya, our unwavering mission is to:
Empower through Knowledge: Provide a robust and future-oriented education, encompassing science, arts, and technical skills, equipping our 203 students with the intellectual tools for lifelong learning and success.
Cultivate Character: Instill in our students a strong sense of social responsibility, self-reliance, and profound respect for cultural values, shaping them into conscientious and well-rounded citizens.
Nurture Potential: Create a supportive and stimulating environment where each student can discover and realize their unique talents and aspirations, guided by our dedicated team of 8 Lecturers, 7 LT teachers, and supporting staff.
Bridge the Divide: Serve as a cornerstone of educational excellence in the remote Uttarkashi region, bringing quality, innovative teaching practices to the doorstep of our community.
Embrace the Future: Continuously strive for excellence in education, embracing innovation and ethical principles to prepare our students for the challenges and opportunities of tomorrow.
Essentially, we envision a future where our students shine as knowledgeable, responsible, and innovative individuals, carrying the light of learning from the heart of the Himalayas to the wider world. Our mission is the daily, dedicated work of making that vision a vibrant reality.`;

const About = () => {
  return (
    <div>
  <div>
      {/* Header Section */}
      <section>
        <div className="about-banner mb-4">
       <div className='container-split container'>     
           
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="transform-split white-section">
      <h2 className='mobile-title text-center '>Mission</h2>
        <div className="container container-split  mb-4">
          <div className="split-text">
          <h2 className='desktop-title'>Mission</h2>
            <ShowMoreText text={missionText} limit={350} />
          </div>
          <div className="split-line"></div>
          <div className="split-image split-text">
            <img
                src='/assets/images/other/17.jpg'
              alt="Students Learning"
            />
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="transform-split white-section">
      <h2 className='mobile-title text-center'>Vision</h2>
        <div className="container container-split ">
          <div className="split-image split-text">
            <img
              src="https://images.unsplash.com/photo-1524069290683-0457abfe42c3"
              alt="Learning Together"
            />
          </div>
          <div className="split-line"></div>
          <div className="split-text ">
          <h2 className='desktop-title'>Vision</h2>
            <p>To illuminate the remote Himalayan terrain with the radiant glow of holistic education, nurturing young minds into empowered, ethically grounded leaders who not only navigate the complexities of the modern world but also remain deeply rooted in their values and heritage. We aspire to be a beacon of quality learning, fostering innovation and cultivating a generation that contributes meaningfully to society and champions progress.
            </p>
          </div>
        </div>
      </section>
    </div>
      <StatsSection/>
    </div>
  )
}

export default About
