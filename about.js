let comments = [];

// Render Comments
const renderComments = () => {

  const source =
    document.getElementById("commentTemplate")
    .innerHTML;

  const template = Handlebars.compile(source);

  const html = template({ comments: comments });

  document.getElementById("commentsContainer")
    .innerHTML = html;
};

// Add Comment
document.getElementById("commentForm")
.addEventListener("submit", (e) => {

  e.preventDefault();

  const username =
    document.getElementById("username").value;

  const commentText =
    document.getElementById("commentText").value;

  const newComment = {

    name: username,

    comment: commentText,

    date: new Date().toLocaleString()
  };

  // Most recent first
  comments.unshift(newComment);

  renderComments();

  document.getElementById("commentForm").reset();
});