function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => displayPosts(data))
}
loadPosts()

function displayPosts(posts){
    const section = document.getElementById('post-container');
     for (const post of posts){
         const div = document.createElement('div');
         div.classList.add('post')
         div.innerHTML = `
         <h3>${post.title}</h3>
         <p>${post.body}</p>
         `;
         section.appendChild(div);
     }
}