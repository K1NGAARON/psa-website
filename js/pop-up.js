document.addEventListener("DOMContentLoaded", function() {
    // Get current date and set target date to March 11 of the current year
    var today = new Date();
    var currentYear = today.getFullYear();
    var targetDate = new Date(currentYear, 2, 11); // Note: Month index 2 = March
  
    // If today's date is past March 11, assume the next year's festival
    if (today > targetDate) {
      targetDate = new Date(currentYear + 1, 2, 11);
    }
  
    // Calculate the number of days until the target date
    var oneDay = 24 * 60 * 60 * 1000; // hours * minutes * seconds * milliseconds
    var diffDays = Math.round((targetDate - today) / oneDay);
  
    // Update the modal title with the countdown
    document.getElementById("modalTitle").innerText = "The Cheltenham festival is just " + diffDays + " days away!";
  
    // Get the modal element and close button
    var modal = document.getElementById("myModal");
    var closeBtn = document.getElementsByClassName("close")[0];
  
    // Show the modal after 3 seconds (3000 milliseconds)
    setTimeout(function() {
      modal.style.display = "block";
    }, 2000);
  
    // Close the modal when the user clicks on the close button
    closeBtn.onclick = function() {
      modal.style.display = "none";
    };
  
    // Also close the modal if the user clicks anywhere outside the modal content
    window.onclick = function(event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    };
  });
  