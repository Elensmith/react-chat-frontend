import './App.css';
import React from 'react'
import UserCard from './UserCard';
import NewPost from './forms/NewPost';
import Signup from './forms/Signup'
import Signin from './forms/Signin'
import Post from './Post'

function App() {

  return (
    <div className="App">
      <UserCard />
      <NewPost />
      <Signup />
      <Signin />
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default App;
