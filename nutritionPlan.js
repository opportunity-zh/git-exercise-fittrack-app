// Ernährungsplan-Tracker
class NutritionPlan {
  constructor(plan) {
    this.plan = plan;
    this.meals = plan.meals;
  }

  displayPlan() {
    console.log(`Ernährungsplan: ${this.plan.meals.join(", ")}`);
  }
}

export default NutritionPlan;
