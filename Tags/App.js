import React from "react";
import Tags from "./components/Tags";
import SelectedTags from "./components/SelectedTags";
import { TagsProvider } from "./contexts/TagsContext";
import TagControl from "./components/TagControl";
import Sidebar from "./components/Sidebar";
import Filters from "./components/Filters";
function App() {
  return (
    <div className="App">
      <TagsProvider>
        <TagControl />
        <Tags />
        {/* <Sidebar>
          <TagControl />
          <Tags />
        </Sidebar> */}
        {/* <Filters><SelectedTags /></Filters> */}
        <SelectedTags />
      </TagsProvider>
    </div>
  );
}

export default App;
