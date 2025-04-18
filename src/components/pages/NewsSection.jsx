import React from 'react';
import './NewsSection.css';

const newsItems = [
  {
    title: 'Annual Science Fair 2025',
    date: 'April 10, 2025',
    description: 'Students showcased creative science projects demonstrating innovation and teamwork.',
    image: 'https://ik.imagekit.io/a4izklulj/images/2024/09/jaago-schools-showcase-22-innovative-projects-in-annual-science-fair-2023_1725778680_MXaHOANFK.jpg?tr=f-auto,w-1200,h-630,fo-auto,pr-true', // Science
  },
  {
    title: 'Art & Craft Exhibition',
    date: 'March 28, 2025',
    description: 'A vibrant display of student artwork including sketches, paintings, and crafts.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT25f_ereTxWDvfMfnkOCfTJ1o7s-kyCImmLw&s', // Art
  },
  {
    title: 'Sports Day 2025',
    date: 'February 20, 2025',
    description: 'An energetic day filled with fun games, track events, and prizes for all ages.',
    image: 'https://images.unsplash.com/photo-1508780709619-79562169bc64', // Sports
  },
  {
    title: 'Parent-Teacher Meeting',
    date: 'March 15, 2025',
    description: 'A successful interaction to discuss students’ academic and emotional development.',
    image: 'https://images.unsplash.com/photo-1588072432836-e10032774350', // Meeting
  },
];

const NewsSection = () => {
  return (
    <section className="news-section">
      <div className="container">
        <h2 className="section-title">Latest News</h2>
        <div className="news-grid">
          {newsItems.map((item, index) => (
            <div className="news-card" key={index}>
              <img src={item.image} alt={item.title} className="news-image" />
              <div className="news-content">
                <h3>{item.title}</h3>
                <p className="news-date">{item.date}</p>
                <p className="news-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
