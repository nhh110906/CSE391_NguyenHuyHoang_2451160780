/* Portfolio — prevent default form submit for static demo */
document.querySelectorAll("form").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
  });
});
