// Trainingsverfolgungssystem
class WorkoutTracker {
  constructor(session) {
    this.session = session;
    this.start_time = new Date();
    this.end_time = null;
  }

  logSession() {
    console.log(`Trainingseinheit: ${this.session.type}`);
  }
}

export default WorkoutTracker;
