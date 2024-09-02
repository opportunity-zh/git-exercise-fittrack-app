// Trainingsverfolgungssystem
class WorkoutTracker {
  constructor(session) {
    this.session = session;
  }

  logSession() {
    console.log(`Trainingseinheit: ${this.session.type}`);
  }
}

export default WorkoutTracker;
