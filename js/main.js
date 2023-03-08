// Main Posts Container
let postsContainer = document.querySelector(".posts-container");

// Emptying Posts Container
postsContainer.innerHTML = "";

// Fetch Data
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((posts) => {
    posts.forEach((post) => {
      postsContainer.appendChild(createPost(post));
    });
  });

//   Create Post Function
function createPost(post) {
  // Main Div Element
  let mainDiv = document.createElement("div");
  // Set ClassName
  mainDiv.className = "post";

  //   Inner Div
  let innerDiv = document.createElement("div");

  // User Id
  let userId = document.createElement("span");
  let userIdText = document.createTextNode(`User ${post["userId"]}`);
  userId.className = "user";
  userId.appendChild(userIdText);

  //   Append User Id To Inner Div
  innerDiv.appendChild(userId);

  //   Post Number
  let postNumber = document.createElement("span");
  let number = document.createTextNode(`Post ${post["id"]}`);
  postNumber.className = "number";
  postNumber.appendChild(number);

  // Append Post Number To Inner Div
  innerDiv.appendChild(postNumber);

  // Append Inner Div To Main Div
  mainDiv.appendChild(innerDiv);

  //   Post Heading
  let heading = document.createElement("h3");
  heading.className = "title";
  let headingText = document.createTextNode(post["title"]);
  heading.appendChild(headingText);

  // Append Post Heading To Main Div
  mainDiv.appendChild(heading);

  //   Post Body
  let postBody = document.createElement("p");
  let postBodyText = document.createTextNode(post["body"]);
  postBody.appendChild(postBodyText);

  // Append Post Body To Main Div
  mainDiv.appendChild(postBody);

  return mainDiv;
}
