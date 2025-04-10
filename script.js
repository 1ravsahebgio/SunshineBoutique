
document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault(); // form submit hone se roke

    const name = document.querySelector("input[name='name']").value.trim();
    const email = document.querySelector("input[name='email']").value.trim();
    const message = document.querySelector("textarea[name='message']").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill out all fields.");
    } else if (!email.includes("@") || !email.includes(".")) {
        alert("Please enter a valid email address.");
    } else {
        alert("Thank you, " + name + "! Your message has been sent.");
        // form reset
        document.querySelector("form").reset();
    }
});


