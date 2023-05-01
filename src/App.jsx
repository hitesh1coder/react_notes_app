import React, { useState } from "react";
import UserGroups from "./Component/UserGroup/UserGroups";
import Home from "./Component/Home/Home";
import Notes from "./Component/NotesPage/Notes";

let groupNotes = JSON.parse(localStorage.getItem("notes"));
let groups = JSON.parse(localStorage.getItem("groups"));

const App = () => {
  const [isMobile, setIsMobile] = useState(true);
  const [isNotesPage, setIsNotePage] = useState(false);
  let noteMassage = groupNotes[1]?.newNoteMassage;
  let updateTime = groupNotes[1]?.updatedAt;

  const openNotes = () => {
    setIsNotePage(true);
    setIsMobile((current) => !current);
  };

  return (
    <div className="app">
      <UserGroups
        openNotes={openNotes}
        setIsMobile={setIsMobile}
        isMobile={isMobile}
      />

      {isNotesPage ? (
        <Notes
          noteMassage={noteMassage}
          updateTime={updateTime}
          groupId={groups[1].id}
          groupName={groups[1].groupName}
          groupColor={groups[1].groupColor}
          setIsMobile={setIsMobile}
          isMobile={isMobile}
        />
      ) : (
        <Home />
      )}
    </div>
  );
};

export default App;
