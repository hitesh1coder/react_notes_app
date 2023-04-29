import React, { useState } from "react";
import CreateGroup from "../CreateGroup/CreateGroup";
import "./UserGroups.css";

const UserGroups = () => {
  const [createGruopModel, setCreateGruopModel] = useState(false);

  const closeModel = () => setCreateGruopModel(false);
  return (
    <div className="usergroup_container">
      <h1>Pocket Notes</h1>
      <button className="adduser_btn" onClick={() => setCreateGruopModel(true)}>
        {" "}
        + Create Notes group
      </button>
      {createGruopModel && <CreateGroup closeModel={closeModel} />}
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
