import React from "react";
import Tags from "./components/Tags";
import SelectedTags from "./components/SelectedTags";
import { TagsProvider } from "./contexts/TagsContext";
import { SidebarProvider } from "./contexts/SidebarContext";
import TagControl from "./components/TagControl";
import Sidebar from "./components/Sidebar";
import Filters from "./components/Filters";

function App() {
  return (
    <div className="App">
      <TagsProvider>
        <SidebarProvider>
          <Sidebar>
            <TagControl />
            <Tags />
          </Sidebar>
          <Filters>
            <SelectedTags />
          </Filters>
        </SidebarProvider>
      </TagsProvider>
    </div>
  );
}

export default App;
