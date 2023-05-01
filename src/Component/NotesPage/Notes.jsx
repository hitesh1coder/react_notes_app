import React, { useState } from "react";
import sentBtn from "../../images/Vector (4).png";
import Arrow from "../../images/arrow.png";
import "./Notes.css";

const Notes = ({
  noteMassage,
  updateTime,
  groupId,
  groupName,
  groupColor,
  isMobile,
  setIsMobile,
}) => {
  const [newNoteMassage, setNewNoteMassage] = useState("");

  let updatedAt =
    new Date().toLocaleTimeString() + " " + new Date().toDateString();

  const backToGroupPage = () => {
    setIsMobile((current) => !current);
  };

  const saveNote = (e) => {
    // if (e.key === "Enter" && newNoteMassage) {
    // }
    let notes = JSON.parse(localStorage.getItem("notes") || "[]");
    const newNote = {
      groupId: groupId,
      newNoteMassage: newNoteMassage,
      updatedAt: updatedAt,
    };
    notes.push(newNote);
    localStorage.setItem("notes", JSON.stringify(notes));
    setNewNoteMassage("");
  };
  return (
    <div className={isMobile ? "notes_container" : "notes_container"}>
      <div className="notes_header">
        <div className="user">
          <img src={Arrow} alt="back" onClick={backToGroupPage} />
          <div className="icon" style={{ backgroundColor: `${groupColor}` }}>
            <p>{groupName}</p>
          </div>
          <h2>{groupName}</h2>
        </div>
      </div>
      <div className="notes_section">
        <div className="notes">
          <div className="note_container">
            <div className="notes_time">
              <p>{updateTime}</p>
            </div>
            <div className="notes_content">
              <p>{noteMassage}</p>
            </div>
          </div>
        </div>
        <div className="create_notes">
          <textarea
            name="notes"
            id=""
            className="input_notes"
            placeholder="Enter Text here...."
            value={newNoteMassage}
            onChange={(e) => setNewNoteMassage(e.target.value)}
          ></textarea>
          <img src={sentBtn} onClick={saveNote} alt="send" />
        </div>
      </div>
    </div>
  );
};

export default Notes;
