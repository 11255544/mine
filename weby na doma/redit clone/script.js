// obsah zprav
const posts = [
    { title: "Post 1", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { title: "Post 2", content: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { title: "Post 3", content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." }
  ];
  
  // zobrazení zprav
  function displayPosts() {
    const postListing = document.getElementById('postListing');
    postListing.innerHTML = ''; // Clear previous posts
    posts.forEach(post => {
      const postHTML = `
        <article class="post">
          <h2 class="post-title">${post.title}</h2>
          <p class="post-content">${post.content}</p>
          <div class="post-footer">
            <span class="upvote">▲</span>
            <span class="downvote">▼</span>
            <span class="comment-count">10 comments</span>
            <span class="post-author">Posted by: Username</span>
          </div>
        </article>
      `;
      postListing.insertAdjacentHTML('beforeend', postHTML);
    });
  }
  
  // zobrazení nových zprav
  window.onload = function() {
    displayPosts();
  };
  