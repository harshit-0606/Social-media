import React, { useContext, useEffect, useState } from 'react'
import Card from './Card'
import { PostContext } from '../store/postStore'
import WelcomeMessage from './WelcomeMessage'
import LoadingData from './LoadingData';


function HomePostList() {
  const { postList, addInitalPosts } = useContext(PostContext);
  const [fetched, setFetched] = useState(false); // loading state 
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal();
    setFetched(true);
    fetch('https://dummyjson.com/posts',{signal})
      .then((res) => res.json())
      .then((data) => {
        addInitalPosts(data.posts);
          setFetched(false);
      })
      .catch((error) => {
        console.log("fail to fetch data", error)
      })

      return ()=>{
        console.log("Cleaning up useEffect");
        controller.abort();
      }
  }, [])

  return (
    <center>
      {fetched && <LoadingData />}
      {!fetched && postList.length === 0 && <WelcomeMessage />}
      {!fetched && postList.map((post) =>
        <li key={post.id}>
          <Card
            id={post.id}
            title={post.title}
            body={post.body}
            reactions={post.reactions}
            tags={post.tags}
          />
        </li>
      )}

    </center>
  )
}

export default HomePostList

