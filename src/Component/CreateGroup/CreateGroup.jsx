import React, { useState } from "react";
import "./CreateGroup.css";

const CreateGroup = ({ closeModel }) => {
  const [groupName, setGroupName] = useState("");
  const [groupColor, setGroupColor] = useState("");

  const handleGroupColor = (e) => {
    setGroupColor(e.target.value);
  };
  const avatar = groupName
    .split(" ")
    .map((x) => x[0])
    .join("")
    .toUpperCase();
  const uniqueId =
    Date.now().toString(36) + Math.random().toString(36).substr(15);

  const handleSubmit = (e) => {
    e.preventDefault();
    let groups = JSON.parse(localStorage.getItem("groups") || "[]");

    let groupInfo = {
      id: uniqueId + groupColor,
      groupName: groupName,
      groupColor: groupColor,
      groupIcon: avatar,
    };
    if (groupName && groupColor) {
      groups.push(groupInfo);
      localStorage.setItem("groups", JSON.stringify(groups));
    }
  };
  return (
    <>
      <div className="model_wrapper" onClick={closeModel}></div>
      <div className="model">
        <h3>Create New Notes group</h3>
        <form>
          <div className="group_name">
            <p>Group Name</p>
            <input
              type="text"
              placeholder="Enter your group name..."
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
            />
          </div>
          <div className="choose_color">
            <p>Choose Color</p>
            <div className="radio_btn">
              <input
                type="radio"
                name="radio"
                value="#b38bfa"
                onChange={handleGroupColor}
                checked={groupColor === "#b38bfa"}
              />
              <input
                type="radio"
                name="radio"
                value="#ff79f2"
                onChange={handleGroupColor}
                checked={groupColor === "#ff79f2"}
              />
              <input
                type="radio"
                name="radio"
                value="#43e6fc"
                onChange={handleGroupColor}
                checked={groupColor === "#43e6fc"}
              />
              <input
                type="radio"
                name="radio"
                value="#f19576"
                onChange={handleGroupColor}
                checked={groupColor === "#f19576"}
              />
              <input
                type="radio"
                name="radio"
                value="#0047ff"
                onChange={handleGroupColor}
                checked={groupColor === "#0047ff"}
              />
              <input
                type="radio"
                name="radio"
                value="#6691ff"
                onChange={handleGroupColor}
                checked={groupColor === "#6691ff"}
              />
            </div>
          </div>
          <div onClick={closeModel}>
            <button onClick={handleSubmit} className="create_btn">
              Create
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateGroup;
