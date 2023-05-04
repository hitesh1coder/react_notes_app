import React, { useEffect, useState } from "react";
import Arrow from "../../images/arrow.png";
import "./Notes.css";
import CreatNotes from "./CreateNotes/CreatNotes";

const Notes = ({
  groupId,
  groupName,
  groupColor,
  groupIcon,
  showNotesMobile,
  setShowNotesMobile,
  setIsMobile,
  fetchMassage,
}) => {
  const [newNoteMassage, setNewNoteMassage] = useState("");

  let updatedAt =
    new Date().toLocaleTimeString() + " " + new Date().toDateString();

  const backToGroupPage = () => {
    setIsMobile((current) => !current);
    setShowNotesMobile(true);
  };

  const saveNote = (e) => {
    if (e.key === "Enter" && newNoteMassage.length > 1) {
      let notes = JSON.parse(localStorage.getItem("notes") || "[]");
      const newNote = {
        groupId: groupId,
        newNoteMassage: newNoteMassage,
        updatedAt: updatedAt,
      };
      notes.push(newNote);
      localStorage.setItem("notes", JSON.stringify(notes));
      setNewNoteMassage("");
    }
  };
  const saveNoteOnSubmitBtn = () => {
    if (newNoteMassage.length > 1) {
      let notes = JSON.parse(localStorage.getItem("notes") || "[]");
      const newNote = {
        groupId: groupId,
        newNoteMassage: newNoteMassage,
        updatedAt: updatedAt,
      };
      notes.push(newNote);
      localStorage.setItem("notes", JSON.stringify(notes));
      setNewNoteMassage("");
    }
  };

  return (
    <div
      className={
        showNotesMobile ? "notes_container mobile" : "notes_container "
      }
    >
      <div className="notes_header">
        <div className="user">
          <img src={Arrow} alt="back" onClick={backToGroupPage} />
          <div className="icon" style={{ backgroundColor: `${groupColor}` }}>
            <p>{groupIcon}</p>
          </div>
          <h2>{groupName}</h2>
        </div>
      </div>
      <div className="notes_section">
        <div className="notes">
          <div>
            {fetchMassage?.map((massages, index) => {
              return (
                <div className="massages_container" key={index}>
                  <div className="notes_time">
                    <p>{massages.updatedAt}</p>
                  </div>
                  <div className="notes_content">
                    <p>{massages.newNoteMassage}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <CreatNotes
          saveNote={saveNote}
          saveNoteOnSubmitBtn={saveNoteOnSubmitBtn}
          newNoteMassage={newNoteMassage}
          setNewNoteMassage={setNewNoteMassage}
        />
      </div>
    </div>
  );
};

export default Notes;
