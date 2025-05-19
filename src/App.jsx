import React, { useState } from 'react'
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import CreatePost from './components/CreatePost';
import HomePostList from './components/HomePostList';
import { PostContextProvider } from './store/postStore';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [selectedTab,setSelectedTab] = useState("Home");
  
  return (
<PostContextProvider>
  <div className="app-container">
    <div className="sidebar-area">
      <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
    </div>

    <div className="main-area">
      <Header />
      <main className="main-content">
        {selectedTab === "Home" ? <HomePostList /> : <CreatePost />}
      </main>
      <Footer />
    </div>
  </div>
</PostContextProvider>
  )
}

export default App

