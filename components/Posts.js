import React from 'react'
import Post from './Post'

export default function Posts() {
  const posts = [
    {
      id: "1",
      username: "idahmed",
      userImage: "https://avatars.githubusercontent.com/u/45146013",
      postImage: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=720",
      caption: "This was damn Tasty"
    },
    {
      id: "2",
      username: "phoenix123",
      userImage: "https://avatars.githubusercontent.com/u/45146013",
      postImage: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=720",
      caption: "I am a sweet tooth i cant control my urge to eat Deserts"
    },
    {
      id: "3",
      username: "idaniyalah",
      userImage: "https://avatars.githubusercontent.com/u/45146013",
      postImage: "https://images.pexels.com/photos/2741458/pexels-photo-2741458.jpeg?w=720",
      caption: "This was damn Tasty"
    }
  ]
  return (
    <div>
      {posts.map(post => (
        <Post
          key= {post.id}
          id= {post.id}
          username= {post.username}
          userImg= {post.userImage}
          img= {post.postImage}
          caption= {post.caption}
        />
      ))}
    </div>
  )
}
