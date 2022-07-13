const postListEl = document.querySelector('.post-list');
const id = localStorage.getItem("id");



async function renderPosts(user_id){
    const posts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user_id}`);
    const postsData = await posts.json("");
    postListEl.innerHTML = postsData.map((post) => postHTML(post)).join("");
}

renderPosts(id);

function postHTML(post){
    return  ` <div class="post">
    <div class="post__title">
      ${post.title}
    </div>
    <p class="post__body">
      ${post.body}
    </p>
  </div>`
}

async function onSearchChange(event){
    const id = event.target.value;
    renderPosts(id);

}
