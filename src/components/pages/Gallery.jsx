import React from 'react'
import { useState } from 'react';
import './Gallery.css'
import allImages from '../../data/AllImages';


const categories = ['All', 'Activities', 'Class', 'Events',];

      const Gallery = () => {
        const [selectedCategory, setSelectedCategory] = useState('All');
        const filteredImages =
        selectedCategory === 'All'
          ? allImages
          : allImages.filter((img) => img.category === selectedCategory);
  return (
<div>

<div className="container py-4">
  {/* Filter Buttons */}
  <div className="filter-buttons">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-button ${selectedCategory === cat ? 'active' : ''}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

  {/* Image Grid */}
  <div className="image-grid">
    {filteredImages.map((img, index) => (
      <div key={index} className="grid-item">
        <img src={img.src} alt={img.category} className="big-img" loading='lazy'/>
        <div className ="overlay overlayeffect"></div>
      </div>
    ))}
  </div>

</div>
</div>


  )}

export default Gallery
