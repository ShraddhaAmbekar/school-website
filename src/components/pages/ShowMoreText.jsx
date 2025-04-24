import React, { useState } from "react";
import "./ShowMoreText.css"; // Optional CSS

const ShowMoreText = ({ text, limit = 300 }) => {
  const [showMore, setShowMore] = useState(false);
  const toggleText = () => setShowMore(!showMore);

  return (
    <div>
      <p style={{ whiteSpace: "pre-line" }}>
        {showMore ? text : text.slice(0, limit) + (text.length > limit ? "..." : "")}
      </p>
      {text.length > limit && (
        <button className="read-more-btn" onClick={toggleText}>
          {showMore ? "Read Less" : "Read More"}
        </button>
      )}
    </div>
  );
};

export default ShowMoreText;
