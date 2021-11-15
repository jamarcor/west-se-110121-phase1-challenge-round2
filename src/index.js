console.log("you got this!");
const url = 'https://distinct-vaulted-freesia.glitch.me/image';
const commentList = document.querySelector('#fg-comments');
let userData;


fetch(url)
  .then(res => res.json())
  .then(json => {
    userData = json;
    renderUser(userData);
  });

document.getElementById('comment-form').addEventListener('submit', addComment);

document
  .querySelector('#like-button')
  .addEventListener('click', incrementLikes);


function renderUser(user) {
  // console.log(user)
  document.querySelector('#fg-image').src = user.image;
  document.querySelector('#fg-title').innerText = user.title;


  renderComments(user.comments);
  renderLikes(user.likes)

}

function incrementLikes() {
  userData.likes += 1;
  renderLikes(userData.likes);
}

function renderLikes(likes) {
  document.getElementById('fg-likes').textContent = `${likes} likes`;
}

function addComment(event) {
  event.preventDefault();
  const commentText = event.target.comment.value;
  renderComment({content: commentText});
  document.querySelector('#comment-form').reset()
}

function renderComments(comments) {
  commentList.innerHTML = '';
  comments.forEach(renderComment);
}

function renderComment(comment) {
  const li = document.createElement('li');
  li.textContent = comment.content;
  commentList.append(li);
}
