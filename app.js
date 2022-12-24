console.log("If you see me, it's linked")

const form = document.querySelector("form");
const handleSubmit = () => {
    sendEmail();
}
form.addEventListener("submit", handleSubmit)
const sendEmail = () => {
    const input = document.querySelector("input");
    alert("This is the user's email: "+input.value)
}