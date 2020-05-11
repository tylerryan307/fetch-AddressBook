let arrayOfPosts; // Our Array of post
let arrayOfUsers = [];// Our Array of Users

// Windows Load Function
window.onload = function() {
}

//get single user post from the API
const getPosts = () =>{
  let newPost;
  fetch('https://randomuser.me/api')
    .then(res => res.json())
    .then(posts => arrayOfUsers.push(posts))   
}

// Our Browser fuction for the Users array
const consolePosts = () => {
  console.log(arrayOfUsers)
}

// This displays the posts in the li
const displayPost = () => {
  const allPosts = document.getElementById('all-posts')
  arrayOfUsers.map((post, index) => {
    const li = document.createElement('li')
    const text = document.createTextNode(`#${index}, Name: ${post.name.first}:  ${post.body}, by user: ${post.userId}`)
    li.appendChild(text)
    allPosts.append(li)
  })
}

  //Our user post function with 5 results
const getUser = () => {
  fetch('https://randomuser.me/api/?results=5')
  .then(res => res.json())
  .then(posts => arrayOfPost = posts)
}

  //display the user of the 5 posts from above
const displayUsers = () =>{
  console.log(arrayOfPost);
}