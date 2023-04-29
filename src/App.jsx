import React from "react";
import UserGroups from "./Component/UserGroup/UserGroups";
import Home from "./Component/Home/Home";
import Notes from "./Component/NotesPage/Notes";

const App = () => {
  return (
    <div className="app">
      <UserGroups />
      {/* <Home /> */}
      <Notes />
    </div>
  );
};

export default App;
