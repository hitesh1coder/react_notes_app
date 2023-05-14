import React, { useState } from "react";
import CreateGroup from "../CreateGroup/CreateGroup";
import "./UserGroups.css";

const UserGroups = ({ isMobile, openNotes }) => {
  const [createGruopModel, setCreateGruopModel] = useState(false);

  const closeModel = () => setCreateGruopModel(false);

  let Groups = JSON.parse(localStorage.getItem("groups"));

  return (
    <div
      className={
        isMobile ? "usergroup_container" : "usergroup_container mobile"
      }
    >
      <h1>Pocket Notes</h1>
      <button className="adduser_btn" onClick={() => setCreateGruopModel(true)}>
        + Create Notes group
      </button>
      {createGruopModel && <CreateGroup closeModel={closeModel} />}
      <div className="groups">
        {Groups?.map((group, index) => {
          return (
            <div
              onClick={() => {
                openNotes(group.id);
              }}
              key={index}
            >
              <div className="user" tabIndex="1">
                <div
                  className="icon"
                  style={{ backgroundColor: `${group.groupColor}` }}
                >
                  <p>{group.groupIcon}</p>
                </div>
                <h2>{group.groupName}</h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserGroups;
