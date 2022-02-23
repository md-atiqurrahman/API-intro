function loadData(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(Data => console.log(Data))
}
function showData(Data){
    const ul = document.getElementById('users');
   for(const user of Data){
       const li = document.createElement('li');
       li.innerText = `Name:${user.name} && E-mail:${user.email}`;
       ul.appendChild(li);
   }
}
function loadUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(json => showData(json));
}
function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(Data => console.log(Data));
}