import React from "react";
import sentBtn from "../../images/Vector (4).png";
import "./Notes.css";

const Notes = () => {
  return (
    <div className="notes_container">
      <div className="notes_header">
        <div className="user">
          <div className="icon" style={{ backgroundColor: "#0047FF" }}>
            <p>CU</p>
          </div>
          <h2>Cuvette Notes</h2>
        </div>
      </div>
      <div className="notes_section">
        <div className="notes">
          <div className="note_container">
            <div className="notes_time">
              <p>10:10 Am</p>
              <p>9 March 2023</p>
            </div>
            <div className="notes_content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                facilis libero corrupti dolores consequatur sed amet, dolorem
                voluptate provident magnam quas quisquam et numquam odit alias
                molestiae labore, veniam perspiciatis tempore laborum odio
                itaque? Expedita cupiditate maxime mollitia nulla quis
                exercitationem vel sed dolores, adipisci non vitae. Qui itaque
                error nulla neque nihil. Corrupti sed quis repellat blanditiis
                alias tenetur.
              </p>
            </div>
          </div>
        </div>
        <div className="create_notes">
          <textarea
            name="notes"
            id=""
            className="input_notes"
            placeholder="Enter Text here...."
          ></textarea>
          <img src={sentBtn} alt="send" />
        </div>
      </div>
    </div>
  );
};

export default Notes;
