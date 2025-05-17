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

