// Gestione dell'accordion per le FAQ
document.querySelectorAll('.accordion-button').forEach(button => {
  button.addEventListener('click', () => {
    button.classList.toggle('active');

    // Mostra o nasconde il contenuto associato
    const content = button.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
});

// Gestione semplificata del modulo di contatto
document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault(); // previene il comportamento di default
  alert("Messaggio inviato. Grazie per averci contattato!");
});
