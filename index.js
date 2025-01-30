function displayUTC() {
    const now = new Date();
    const utcTime = now.toUTCString();
    document.querySelector('[data-testid="currentTimeUTC"]').textContent = utcTime;
  }

  // Display initial time
  displayUTC();

  // Update time every second
  setInterval(displayUTC, 1000); 