import React, { useContext } from 'react'
import Card from './Card'
import { PostContext } from '../store/postStore'


function HomePostList() {
  const { postList } = useContext(PostContext)
  return (
    <>
      {
        postList.map((post) =>
          <li key={post.id}>
            <Card 
            id={post.id}
            title={post.title} 
            body = {post.body}
            reactions = {post.reactions}
            tags = {post.tags}
            />
            </li>
        )}
    </>
  )
}

export default HomePostList
