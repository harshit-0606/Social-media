import { nanoid } from "nanoid";
import { createContext, useReducer, useState } from "react";


export const PostContext = createContext(
    {
        postList: [],
        addPostHandler: () => { },
        deletePostHandler: () => { },
        editPostHandler: () => { },
        updatePostHandler: () => { }
    }
);

const DEFAULT_POST_LIST = [{
    id: "1",
    title: "Go to Mumbai",
    body: "Hi freinds, I am going to mumbai for my vacation.Hope to enjoy a lot.Peace out.",
    reactions: 2,
    tags: ['#vacation', '#enjoy', '#marinedrive']
},
{
    id: "2",
    title: "Go to Dubai",
    body: "Hi freinds, I am going to mumbai for my vacation.Hope to enjoy a lot.Peace out.",
    reactions: 15,
    tags: ['#vacation', '#enjoy', '#burjkhalifa']
},
]

const postReducerHandler = (currState, action) => {
    let newPostList = currState;

    if (action.type === "NEW_POST") {
        newPostList = [{
            id: action.payload.id,
            title: action.payload.title,
            body: action.payload.body,
            reactions: action.payload.reactions,
            tags: action.payload.tags
        },
        ...currState]
    } else if (action.type === "UPDATE_POST") {
        newPostList = currState.map((post) => {
            if (post.id === action.payload.formData.id) {
                return {
                    ...post,
                    id: action.payload.formData.id,
                    title: action.payload.formData.title,
                    body: action.payload.formData.body,
                    reactions: action.payload.formData.reactions,
                    tags: action.payload.formData.tags
                }
            }
            return post;
        })
    } else {
        newPostList = currState.filter((post) => post.id !== action.payload.postId)
    }

    return newPostList;
}

export const PostContextProvider = ({ children }) => {

    const [currState, dispatchPostMethod] = useReducer(postReducerHandler, DEFAULT_POST_LIST)

    const [post, setPost] = useState(null);

    const addPostHandler = (title, body, reactions, tags) => {
        const addPostActionObject = {
            type: "NEW_POST",
            payload: {
                id: nanoid(),
                title,
                body,
                reactions,
                tags
            }
        }
        dispatchPostMethod(addPostActionObject)
    }

    const deletePostHandler = (postId) => {
        const deletePostActionObject = {
            type: "DELETE_POST",
            payload: {
                postId
            }
        }
        dispatchPostMethod(deletePostActionObject)
    }

    const editPostHandler = (id) => {
        const post = currState.find((post) => post.id === id)
        setPost(post);
    }

    const updatePostHandler = (formData) => {
        const updatePostActionObject = {
            type: "UPDATE_POST",
            payload: {
                formData
            }
        }
        dispatchPostMethod(updatePostActionObject)
    }

    return (
        <PostContext.Provider value={
            {
                postList: currState,
                postToBeEdit: post,
                addPostHandler,
                deletePostHandler,
                editPostHandler,
                updatePostHandler
            }
        }>
            {children}
        </PostContext.Provider>
    )
}