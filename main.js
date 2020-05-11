let postArray = []; // Our Array of post
let userArray = [];// Our Array of Users

//get single user post from the API
const retrieveSinglePosts = () =>{
  let newPost;
  fetch('https://randomuser.me/api')
    .then(res => res.json())
    .then(posts => userArray.push(posts))   
}

// Our Browser fuction for the Users array
const consolePostsList = () => {
  console.log(userArray)
}

// This displays the posts in the li
const displayThePost = () => {
  const allPosts= document.getElementById('all-posts')
  userArray.map((post, index) => {
    const li = document.createElement('li')
    const text = document.createTextNode(`Number${index}, Name: ${post.name.first}:  ${post.body}, by user: ${post.userId}`)
    li.appendChild(text)
    allPosts.append(li)
  })
}

  //Our user post function with 5 results
const retrieveTheUser = () => {
  fetch('https://randomuser.me/api/?results=5')
  .then(res => res.json())
  .then(posts => postArray = posts)
}

  //display the user of the 5 posts from above
const displayTheUsers = () =>{
  console.log(postArray);
}