// const storage = {
//   setUsername: (username) => {
//     localStorage?.setItem("username", username);
//   },

//   getUsername: () => localStorage.getItem("username"),
// };

const retrieve = () => {
  const username = localStorage.getItem("username");
  alert(username);
};

const update = () => {
  const username = document.getElementById("username").value;

  localStorage.setItem("username", username);
};
