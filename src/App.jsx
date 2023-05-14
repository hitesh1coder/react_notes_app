import React, { useEffect, useState } from "react";
import UserGroups from "./Component/UserGroup/UserGroups";
import Home from "./Component/Home/Home";
import Notes from "./Component/NotesPage/Notes";

let groupNotes = JSON.parse(localStorage.getItem("notes"));
const App = () => {
  const [isMobile, setIsMobile] = useState(true);
  const [showNotesMobile, setShowNotesMobile] = useState(false);
  const [isNotesPage, setIsNotePage] = useState(false);
  const [groupData, setGroupData] = useState();
  const [fetchMassage, setFetchMassage] = useState([]);

  const openNotes = (Id) => {
    setShowNotesMobile(false);
    setIsNotePage(true);
    setIsMobile((current) => !current);
    let groups = JSON.parse(localStorage.getItem("groups"));

    const groupInfo = groups?.filter((group) => {
      return group?.id === Id;
    });
    if (groupInfo) {
      setGroupData(groupInfo[0]);
    } else {
      setGroupData([]);
    }

    const fetchNotes = groupNotes?.filter((msg) => {
      return msg?.groupId === Id;
    });
    if (fetchNotes) {
      setFetchMassage(fetchNotes);
    } else {
      setFetchMassage([]);
    }
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
          groupId={groupData?.id}
          groupData={groupData}
          fetchMassage={fetchMassage}
          setFetchMassage={setFetchMassage}
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
