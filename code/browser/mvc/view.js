class View {
  render(user) {
    const userInfo = document.createElement("div");
    userInfo.innerHTML = `<p>Name: ${user.name}</p><p>Email: ${user.email}</p>`;
    document.body.appendChild(userInfo);
  }
}
