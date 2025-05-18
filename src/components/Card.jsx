import { useContext, useState } from "react";
import { PostContext } from "../store/postStore";


function Card({id, title, body, reactions, tags ,}) {
  const {deletePostHandler,editPostHandler} = useContext(PostContext)
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{body}</p>
        <p className="card-text">{`No. of Likes are ${reactions.likes} and Dislikes are ${reactions.dislikes}`}</p>
        <div className="card-tags">
          {tags.map((tag,index) => (
            <span key={index}>{tag}</span>
          ))}
        </div>
        <div className="card-buttons">
          <button type="button" className="edit"  onClick={()=> editPostHandler(id)}>Edit</button>
          <button type="button" className="delete" onClick={()=> deletePostHandler(id)}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default Card;

