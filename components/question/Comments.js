// "use client";

// const Comment = ({ comment, onVote }) => (
//   <div className="py-3 px-4 bg-gray-50 rounded-lg mb-2 group">
//     <div className="flex justify-between items-center">
//       <p className="text-gray-700">{comment.content}</p>
//       <div className="flex items-center space-x-3 text-sm">
//         <span className="text-gray-500">{comment.timestamp}</span>
//         <div className="flex items-center space-x-2">
//           <div className="flex items-center bg-white rounded-lg border border-gray-200 px-2 py-1">
//             <button 
//               onClick={() => onVote(comment.id, 'up')} 
//               className="hover:bg-gray-50 px-2 py-1 rounded"
//             >
//               👍
//             </button>
//             <span className="mx-1 font-medium text-gray-600">{comment.upvotes}</span>
//           </div>
//           <div className="flex items-center bg-white rounded-lg border border-gray-200 px-2 py-1">
//             <button 
//               onClick={() => onVote(comment.id, 'down')}
//               className="hover:bg-gray-50 px-2 py-1 rounded"
//             >
//               👎
//             </button>
//             <span className="mx-1 font-medium text-gray-600">{comment.downvotes}</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// );

// const Comments = ({ comments, commentInput, onCommentChange, onVote }) => {
//   return (
//     <div className="mt-4 space-y-4">
//       {comments.map((comment) => (
//         <Comment 
//           key={comment.id} 
//           comment={comment}
//           onVote={onVote}
//         />
//       ))}
//       <div className="pt-3">
//         <input
//           type="text"
//           value={commentInput}
//           onChange={onCommentChange}
//           placeholder="Add your thoughts..."
//           className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
//         />
//       </div>
//     </div>
//   );
// };

// export default Comments;

"use client";

const Comment = ({ comment, onVote }) => (
  <div className="py-3 px-4 bg-gray-50 rounded-lg mb-2 group">
    <div className="flex justify-between items-center">
      <div className="flex items-start space-x-3">
        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-sm font-medium text-blue-700">
          {comment.user?.name?.[0] || '?'}
        </div>
        <div>
          <p className="text-gray-700">{comment.content}</p>
          <div className="flex items-center mt-1 text-sm text-gray-500">
            <span>{comment.timestamp}</span>
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <div className="flex items-center bg-white rounded-lg border border-gray-200 px-2 py-1">
          <button 
            onClick={() => onVote(comment.id, 'up')} 
            className="hover:bg-gray-50 px-2 py-1 rounded"
          >
            👍
          </button>
          <span className="mx-1 font-medium text-gray-600">{comment.upvotes}</span>
        </div>
        <div className="flex items-center bg-white rounded-lg border border-gray-200 px-2 py-1">
          <button 
            onClick={() => onVote(comment.id, 'down')}
            className="hover:bg-gray-50 px-2 py-1 rounded"
          >
            👎
          </button>
          <span className="mx-1 font-medium text-gray-600">{comment.downvotes}</span>
        </div>
      </div>
    </div>
  </div>
);

const Comments = ({ comments, commentInput, onCommentChange, onVote }) => {
  return (
    <div className="mt-4 space-y-4">
      {comments.map((comment) => (
        <Comment 
          key={comment.id} 
          comment={comment}
          onVote={onVote}
        />
      ))}
      <div className="pt-3">
        <input
          type="text"
          value={commentInput}
          onChange={onCommentChange}
          placeholder="Add your thoughts..."
          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
        />
      </div>
    </div>
  );
};

export default Comments;