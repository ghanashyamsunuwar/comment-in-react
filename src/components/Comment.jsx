import React, { useState } from 'react'

const Comment = ({comment}) => {
    
  return (
    <div>
        {
            comment.id === '1' ? 
            <div>
        <input/>
        
        <button>
            Comment
        </button>
        </div>
        :''
    }
        <div style={{display:'flex', }}>
            <span>
                {comment.text}
            </span>
            <button>Replay</button>
            <button>Delete</button>
        </div>
        <div>
            {comment?.replies?.map((ele) => (
                <Comment key={ele.id} comment={ele} />
            ))}
        </div>
    </div>
  )
}

export default Comment
// // Comment.js
// import React, { useState } from 'react';

// const Comment = ({ comment, deleteComment, addComment }) => {
//   const [replyText, setReplyText] = useState('');

//   const handleReplyChange = (e) => {
//     setReplyText(e.target.value);
//   };

//   const handleAddReply = () => {
//     if (replyText.trim()) {
//       addComment(comment.id, replyText);
//       setReplyText('');
//     }
//   };

//   return (
//     <div style={{ marginLeft: comment.parentId ? '20px' : '0px' }}>
//       <p>{comment.text}</p>
//       <button onClick={() => deleteComment(comment.id)}>Delete</button>
//       <div>
//         <textarea
//           value={replyText}
//           onChange={handleReplyChange}
//           placeholder="Add a reply..."
//         />
//         <button onClick={handleAddReply}>Reply</button>
//       </div>
//       {comment.replies && (
//         <div>
//           {comment.replies.map((reply) => (
//             <Comment
//               key={reply.id}
//               comment={reply}
//               deleteComment={deleteComment}
//               addComment={addComment}
//             />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Comment;
