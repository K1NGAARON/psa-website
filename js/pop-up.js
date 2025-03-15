document.addEventListener("DOMContentLoaded", function() {
    var today = new Date();
    var currentYear = today.getFullYear();
    var targetDate = new Date(currentYear, 3, 3); // Note: Month index 2 = March
  
    if (today > targetDate) {
      targetDate = new Date(currentYear + 1, 2, 11);
    }
  
    var oneDay = 24 * 60 * 60 * 1000;
    var diffDays = Math.round((targetDate - today) / oneDay);
  
    document.getElementById("modalTitle").innerText = "Aintree is just " + diffDays + " days away!";
  
    var modal = document.getElementById("myModal");
    var closeBtn = document.getElementsByClassName("close")[0];
  
    setTimeout(function() {
      modal.style.display = "block";
    }, 2000);
  
    closeBtn.onclick = function() {
      modal.style.display = "none";
    };
  
    window.onclick = function(event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    };
  });
  