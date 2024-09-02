// Trainingsverfolgungssystem
class WorkoutTracker {
  constructor(session) {
    this.session = session;
    this.start_zeit = new Date();
    this.end_zeit = null;
  }

  logSession() {
    console.log(`Trainingseinheit: ${this.session.type}`);
  }
}

export default WorkoutTracker;
