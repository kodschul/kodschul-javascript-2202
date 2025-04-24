// Non-MVC pattern implementation
function createAndDisplayUser(name, email) {
  // Create user object directly
  const user = {
    name: name,
    email: email,
    save: function () {
      console.log(`User ${this.name} saved.`);
    },
  };

  // Save user directly
  user.save();

  // Render user directly
  const userInfo = document.createElement("div");
  userInfo.innerHTML = `<p>Name: ${user.name}</p><p>Email: ${user.email}</p>`;
  document.body.appendChild(userInfo);
}

// Usage
createAndDisplayUser("Charlie", "charlie@example.com");
createAndDisplayUser("Abc", "abc@example.com");
