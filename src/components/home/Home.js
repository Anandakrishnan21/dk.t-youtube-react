import React, { useState } from "react";
import Header from "../common/Header";
import Feed from "./Feed";
import { SidebarProvider } from "../../context/SidebarContext";
import { SideBar } from "../common/Sidebar";

function Home() {
  const [selectedCategory, setSelectedCategory] = useState("Trending");
  return (
    <SidebarProvider>
      <div className="max-h-screen flex flex-col">
        <Header />
        <div className="h-screen grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto">
          <SideBar
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          <div className="overflow-x-hidden dark:bg-neutral-950">
            <div className="box-border dark:bg-neutral-950">
              <Feed selectedCategory={selectedCategory} />
            </div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}

export default Home;
