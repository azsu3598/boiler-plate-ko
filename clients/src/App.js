import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './components/views/LandingPage/LandingPage';
import LoginPage from './components/views/LoginPage/LoginPage';
import RegisterPage from './components/views/RegisterPage/RegisterPage';
import Chat_Page_Login from './components/views/Chat_Page/Chat_Page_Login';
import PostListPage from './components/views/PostPage/PostListPage';
import PostPage from './components/views/PostPage/Post';
import PostListPage1 from './components/views/PostPage/PostListPage1';
import Post1 from './components/views/PostPage/Post1';


function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/register" element={<RegisterPage />} />
        <Route exact path="/chat" element={<Chat_Page_Login />} />
        {/* <Route path="/post/*" element={<PostPage />} /> */}
        {/* <Route path="/post" element={<PostListPage />} /> */}
        <Route path="/post" element={<PostListPage1 />} />
        <Route path="/post/:id" element={<Post1 />} />
      </Routes>
    </div>
  );
}

export default App;
