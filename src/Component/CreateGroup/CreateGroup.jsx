import React from "react";
import "./CreateGroup.css";

const CreateGroup = ({ closeModel }) => {
  return (
    <>
      <div className="model_wrapper" onClick={closeModel}></div>
      <div className="model">
        <h3>Create New Notes group</h3>
        <form>
          <div className="group_name">
            <p>Group Name</p>
            <input type="text" placeholder="Enter your group name..." />
          </div>
          <div className="choose_color">
            <p>Choose Color</p>
            <div className="radio_btn">
              <input type="radio" name="radio" value="#b38bfa" />
              <input type="radio" name="radio" value="#ff79f2" />
              <input type="radio" name="radio" value="#43e6fc" />
              <input type="radio" name="radio" value="#f19576" />
              <input type="radio" name="radio" value="#0047ff" />
              <input type="radio" name="radio" value="#6691ff" />
            </div>
          </div>
          <button onClick={closeModel} className="create_btn">
            Create
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateGroup;
