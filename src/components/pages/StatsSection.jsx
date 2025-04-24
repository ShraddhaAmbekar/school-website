import React from "react";
import "./StatsSection.css";
import { FaUserFriends, FaChalkboardTeacher, FaLaptop, FaLeaf } from "react-icons/fa";

const statsData = [
  {
    icon: <FaUserFriends size={40} />,
    number: "203",
    label: "Student Strength",
    bgColor: "#f67c7c",
  },
  {
    icon: <FaChalkboardTeacher size={40} />,
    number: "18",
    label: "Teaching Staff",
    bgColor: "#ffe066",
  },
  {
    icon: <FaLaptop size={40} />,
    number: "3",
    label: "Support Staff",
    bgColor: "#98eb7c",
  },

];

const StatsSection = () => {
  return (
    <div className="stats-section">
      {statsData.map((item, index) => (
        <div
          key={index}
          className="stat-box"
          style={{ backgroundColor: item.bgColor }}
        >
          <div className="icon">{item.icon}</div>
          {item.number && <h2>{item.number}</h2>}
          <p>{item.label}</p>
          {item.readMore && <a href="#">Read More</a>}
        </div>
      ))}
    </div>
  );
};

export default StatsSection;
