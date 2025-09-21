/*SERVICES OFFERED TAB*/

//personal hygiene//

function togglePopup() {
  const popup = document.getElementById("popup");
  if (popup.style.display === "block") {
    popup.style.display = "none";
    return "Popup closed!";
  } else {
    popup.style.display = "block";
    return "Popup opened!";
  }
}


/*food and  nutrition*/


function openPopup() {
  const food = document.getElementById("food");
  if (food.style.display === "block") {
    food.style.display = "none";
    return "Popup closed!";
  } else {
    food.style.display = "block";
    return "Popup opened!";
  }
}



/* health monitor*/

 const form = document.getElementById('healthForm');
    const tableBody = document.querySelector('#dataTable tbody');

    form.addEventListener('submit', function(event) {
      event.preventDefault();

      // Get input values
      const name = document.getElementById('name').value;
      const temp = document.getElementById('temp').value;
      const symptoms = document.getElementById('symptoms').value;
      const status = document.getElementById('status').value;

      // Create a new row
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${name}</td>
        <td>${temp}°C</td>
        <td>${symptoms || 'None'}</td>
        <td>${status}</td>
      `;

      // Add to table
      tableBody.appendChild(row);

      // Reset form
      form.reset();
    });


    /*interactive healthmonitior*/

    
 let waterCount = 0;

  function addWater() {
    waterCount++;
    document.getElementById('waterCount').textContent = waterCount;
  }

  

  // BMI Calculator
  function calculateBMI() {
    const w = parseFloat(document.getElementById('bmiWeight').value);
    const h = parseFloat(document.getElementById('bmiHeight').value) / 100;
    if (w && h) {
      const bmi = (w / (h*h)).toFixed(1);
      let category = "Normal";
      if (bmi < 18.5) category = "Underweight";
      else if (bmi >= 25 && bmi < 30) category = "Overweight";
      else if (bmi >= 30) category = "Obese";
      document.getElementById('bmiResult').textContent = `BMI: ${bmi} (${category})`;
    }
  }

  // Calorie Calculator (Mifflin-St Jeor)
  function calculateCalories() {
    const age = parseFloat(document.getElementById('age').value);
    const gender = document.getElementById('gender').value;
    const weight = parseFloat(document.getElementById('calWeight').value);
    const height = parseFloat(document.getElementById('calHeight').value);
    const activity = parseFloat(document.getElementById('activity').value);

    if (age && weight && height) {
      let bmr = gender === "male"
        ? 10*weight + 6.25*height - 5*age + 5
        : 10*weight + 6.25*height - 5*age - 161;
      let calories = Math.round(bmr * activity);
      document.getElementById('calorieResult').textContent = `Daily Calories: ${calories} kcal`;
    }
  }

  // Water Intake Goal
  function calculateWater() {
    const weight = parseFloat(document.getElementById('waterWeight').value);
    if (weight) {
      let goal = Math.round(weight * 35); // 35 ml per kg
      document.getElementById('waterGoal').textContent = `Suggested Goal: ${goal} ml (~${Math.round(goal/250)} glasses)`;
    }
  }

  // Mental Health Check
  function checkMentalHealth() {
    const mood = document.getElementById('mood').value;
    let message = "";
    if (mood === "good") message = "😊 Great! Keep it up!";
    else if (mood === "okay") message = "🙂 You seem okay. Try a relaxing activity.";
    else if (mood === "sad") message = "😢 Consider talking to a friend or journaling.";
    else if (mood === "anxious") message = "😟 Practice breathing exercises or mindfulness.";
    document.getElementById('mentalResult').textContent = message;
  }



//CONTACT  SECTION//

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact-form");

  form.addEventListener("submit", (e) => {
    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const message = document.querySelector("#message").value.trim();

    if (!name || !email || !message) {
      alert("Please fill out all fields before submitting.");
      e.preventDefault();
    }
  });
});
