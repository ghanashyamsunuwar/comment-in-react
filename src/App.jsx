import React,{useState} from 'react'
import Comment from './components/Comment'

const App = () => {
  const comments = {
    id:'1',
    text:'janam dai',
    replies:[
      {
        id:'jan',
        text:'sub',
        replies:[]
      },
      {
        id:'jan',
        text:'sub',
        replies:[]
      },
  
    ]
}
const [comment, setComments] = useState(comments)
  return (
    <div>
       <h1>Comment On React</h1>
      <Comment key={comment.id} comment={comment}/>
    </div>
  )
}

export default App

// // App.js
// import React, { useState } from 'react';
// import Comment from './components/Comment';

// // Helper function to generate unique IDs for comments
// const generateId = () => '_' + Math.random().toString(36).substr(2, 9);

// const App = () => {
//   const [comments, setComments] = useState([]);

//   const addComment = (parentId, text) => {
//     const newComment = {
//       id: generateId(),
//       text,
//       parentId,
//       replies: []
//     };

//     if (parentId) {
//       // Add the new comment as a reply to an existing comment
//       const addReply = (comments) => {
//         return comments.map((comment) => {
//           if (comment.id === parentId) {
//             return { ...comment, replies: [...comment.replies, newComment] };
//           } else if (comment.replies.length > 0) {
//             return { ...comment, replies: addReply(comment.replies) };
//           } else {
//             return comment;
//           }
//         });
//       };

//       setComments(addReply(comments));
//     } else {
//       // Add the new comment as a top-level comment
//       setComments([...comments, newComment]);
//     }
//   };

//   const deleteComment = (id) => {
//     const deleteRecursively = (comments) => {
//       return comments
//         .filter((comment) => comment.id !== id)
//         .map((comment) => ({
//           ...comment,
//           replies: deleteRecursively(comment.replies),
//         }));
//     };

//     setComments(deleteRecursively(comments));
//   };

//   return (
//     <div>
//       <h1>Comments</h1>
//       <Comment
//         comment={{ text: 'Add your comment here...', id: null, replies: comments }}
//         deleteComment={deleteComment}
//         addComment={addComment}
//       />
//     </div>
//   );
// };

// export default App;
