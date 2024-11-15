function updateIndianTime() {
  const now = new Date();

  // Calculate the time in IST
  const indianOffset = 5.5 * 60 * 60 * 1000; // 5 hours 30 minutes in milliseconds
  const utc = now.getTime() + now.getTimezoneOffset() * 60000; // UTC time in milliseconds
  const indianTime = new Date(utc + indianOffset);

  // Get day name
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayName = days[indianTime.getDay()];

  // Format time as HH:MM:SS
  const hours = indianTime.getHours().toString().padStart(2, "0");
  const minutes = indianTime.getMinutes().toString().padStart(2, "0");
  const seconds = indianTime.getSeconds().toString().padStart(2, "0");
  const formattedTime = `${hours}:${minutes}:${seconds}`;

  // Display the day and time
  document.getElementById("dayName").textContent = dayName;
  document.getElementById("indianTime").textContent = formattedTime;
}

// Update time every second
setInterval(updateIndianTime, 1000);
