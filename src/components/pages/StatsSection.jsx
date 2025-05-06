import React from "react";
import "./StatsSection.css";
import { FaUserFriends, FaChalkboardTeacher, FaLaptop } from "react-icons/fa";

const statsData = [
  {
    icon: <FaUserFriends size={40} />,
    number: "203",
    label: "Student Strength",
    bgColor: "#000000",
    color:"#ffffff"
  },
  {
    icon: <FaChalkboardTeacher size={40} />,
    number: "18",
    label: "Teaching Staff",
    bgColor: "#ffffff",
    color:"#000000"
  },
  {
    icon: <FaLaptop size={40} />,
    number: "3",
    label: "Support Staff",
    bgColor:  "#000000",
    color:"#ffffff"
  },

];

const StatsSection = () => {
  return (
    <div className="stats-section">
      {statsData.map((item, index) => (
        <div
          key={index}
          className="stat-box"
          style={{ backgroundColor: item.bgColor,color: item.color}}
        >
          <div className="icon">{item.icon}</div>
          {item.number && <h2  style={{color: item.color}}>{item.number}</h2>}
          <p className='text-center'>{item.label}</p>
          
        </div>
      ))}
    </div>
  );
};

export default StatsSection;
