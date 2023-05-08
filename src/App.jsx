import React, { useEffect, useState } from "react";
import UserGroups from "./Component/UserGroup/UserGroups";
import Home from "./Component/Home/Home";
import Notes from "./Component/NotesPage/Notes";

const App = () => {
  const [isMobile, setIsMobile] = useState(true);
  const [showNotesMobile, setShowNotesMobile] = useState(false);
  const [isNotesPage, setIsNotePage] = useState(false);
  const [groupData, setGroupData] = useState();
  const [fetchMassage, setFetchMassage] = useState();

  let groupNotes = JSON.parse(localStorage.getItem("notes"));
  let groups = JSON.parse(localStorage.getItem("groups"));
  const openNotes = (Id) => {
    setShowNotesMobile(false);
    setIsNotePage(true);
    setIsMobile((current) => !current);
    const groupInfo = groups?.filter((group) => {
      return group?.id === Id;
    });
    if (groupInfo) {
      setGroupData(groupInfo[0]);
    } else {
      setGroupData("");
    }

    const fetchNotes = groupNotes?.filter((msg) => {
      return msg.groupId === Id;
    });
    setFetchMassage(fetchNotes);
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
          groupId={groupData.id}
          groupName={groupData.groupName}
          groupIcon={groupData.groupIcon}
          groupColor={groupData.groupColor}
          fetchMassage={fetchMassage}
          setIsMobile={setIsMobile}
          isMobile={isMobile}
          showNotesMobile={showNotesMobile}
          setShowNotesMobile={setShowNotesMobile}
        />
      ) : (
        <Home />
      )}
    </div>
  );
};

export default App;
