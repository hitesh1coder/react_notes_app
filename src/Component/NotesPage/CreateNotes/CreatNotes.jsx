import React from "react";
import sentBtn from "../../../images/Vector (4).png";
import "../Notes.css";

const CreatNotes = ({
  saveNote,
  saveNoteOnSubmitBtn,
  newNoteMassage,
  setNewNoteMassage,
}) => {
  return (
    <div className="create_notes">
      <textarea
        name="notes"
        id=""
        className="input_notes"
        placeholder="Enter Text here...."
        value={newNoteMassage}
        onKeyUp={saveNote}
        onChange={(e) => setNewNoteMassage(e.target.value)}
      ></textarea>
      <img src={sentBtn} onClick={saveNoteOnSubmitBtn} alt="send" />
    </div>
  );
};

export default CreatNotes;
