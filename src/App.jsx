import React, { useState } from 'react'
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import CreatePost from './components/CreatePost';
import HomePostList from './components/HomePostList';
import { PostContextProvider } from './store/postStore';
import './app.css';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [selectedTab,setSelectedTab] = useState("Home");
  
  return (
   < PostContextProvider className="app-container">
  <Header />
  <main className="main-content">
    {selectedTab === "Home" ?  <HomePostList/> :   <CreatePost />}
    <Sidebar selectedTab = {selectedTab}
    setSelectedTab = {setSelectedTab} />
  </main>
  <Footer />
</PostContextProvider>

  )
}

export default App

