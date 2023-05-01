import React, { useState } from "react";
import CreateGroup from "../CreateGroup/CreateGroup";

import "./UserGroups.css";

const UserGroups = ({ openNotes, isMobile }) => {
  const [createGruopModel, setCreateGruopModel] = useState(false);

  const closeModel = () => setCreateGruopModel(false);

  let grops = JSON.parse(localStorage.getItem("groups"));
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
        {grops?.map((group) => {
          return (
            <>
              <div onClick={openNotes}>
                <div className="user active" tabIndex="1" key={group.id}>
                  <div
                    className="icon"
                    style={{ backgroundColor: `${group.groupColor}` }}
                  >
                    <p>{group.groupName}</p>
                  </div>
                  <h2>{group.groupName}</h2>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default UserGroups;
