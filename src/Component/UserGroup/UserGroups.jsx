import React from "react";
import "./UserGroups.css";

const UserGroups = () => {
  return (
    <div className="usergroup_container">
      <h1>Pocket Notes</h1>
      <button className="adduser_btn"> + Create Notes group</button>
      <div className="groups">
        <div className="user">
          <div className="icon" style={{ backgroundColor: "#0047FF" }}>
            <p>CU</p>
          </div>
          <h2>Cuvette Notes</h2>
        </div>
        <div className="user">
          <div className="icon" style={{ backgroundColor: "#B38BFA" }}>
            <p>CU</p>
          </div>
          <h2>My Persnol Group</h2>
        </div>
        <div className="user">
          <div className="icon" style={{ backgroundColor: "red" }}>
            <p>CU</p>
          </div>
          <h2>Cuvette Notes</h2>
        </div>
        <div className="user">
          <div className="icon" style={{ backgroundColor: "red" }}>
            <p>CU</p>
          </div>
          <h2>Cuvette Notes</h2>
        </div>
        <div className="user">
          <div className="icon" style={{ backgroundColor: "red" }}>
            <p>CU</p>
          </div>
          <h2>Cuvette Notes</h2>
        </div>
      </div>
    </div>
  );
};

export default UserGroups;
