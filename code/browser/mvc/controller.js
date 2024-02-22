class UserController {
  constructor() {
    this.user = null;
  }

  createUser(name, email) {
    this.user = new User(name, email);
    this.user.save();
    this.renderUser();
  }

  renderUser() {
    const userView = new View();
    userView.render(this.user);
  }
}
