function spinDrink() {
  const DrinkNameEl = document.getElementById('DrinkName');
  const againBtn = document.getElementById('againBtn');
  let spinInterval;

  // Disable both buttons while spinning
  document.getElementById('generateBtn').disabled = true;
  againBtn.disabled = true;

  // Start fast random spin
  spinInterval = setInterval(() => {
    const random = Drinks[Math.floor(Math.random() * Drinks.length)];
    DrinkNameEl.textContent = random;
  }, 100); // change every 100ms

  // Stop after 5 seconds
  setTimeout(() => {
    clearInterval(spinInterval);
    const finalDrink = Drinks[Math.floor(Math.random() * Drinks.length)];
   DrinkNameEl.textContent = finalDrink;

    againBtn.style.display = 'inline-block';
    document.getElementById('generateBtn').disabled = false;
    againBtn.disabled = false;
  }, 5000); // 5 seconds
}

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('generateBtn').addEventListener('click', spinDrink);
  document.getElementById('againBtn').addEventListener('click', spinDrink);
});
