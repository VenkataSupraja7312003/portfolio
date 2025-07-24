function toggleMenu() {
    document.getElementById("menu").classList.toggle("show");
  }

  // Close menu when clicking outside
  window.addEventListener("click", function (e) {
    const menu = document.getElementById("menu");
    const hamburger = document.querySelector(".hamburger");
    if (!menu.contains(e.target) && !hamburger.contains(e.target)) {
      menu.classList.remove("show");
    }
  });
emailjs.init("bDea0IKhQDONO4iQP");  // Your public key

document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("area").value,
    title: "New Message from Portfolio"
  };

  emailjs.send("service_0kni7v4", "template_f97r9j8", params)
    .then(function(response) {
      alert("✅ Message sent successfully!");
      console.log("SUCCESS!", response.status, response.text);
    }, function(error) {
      alert("❌ Something went wrong");
      console.error("FAILED...", error);
    });
});

