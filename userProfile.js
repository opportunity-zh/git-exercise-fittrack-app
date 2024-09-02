// Benutzerprofilverwaltung
class UserProfile {
  constructor(user) {
    this.user = user;
  }

  displayInfo() {
    console.log(`Benutzer: ${this.user.name}`);
  }
}

export default UserProfile;
