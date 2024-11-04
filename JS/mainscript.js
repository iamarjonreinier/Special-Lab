const text = "I'm Kenneth Tolentino";
const typingText = document.getElementById("typing-text");
let home = 0;

function type() {
  if (home < text.length) {
    typingText.textContent += text.charAt(home);
    home++;
    setTimeout(type, 100);
  } else {
    setTimeout(() => {
      typingText.textContent = '';
      home = 0;
      setTimeout(type, 1000); 
    }, 5000); 
  }
}

type();

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show'); 
        }
    });
});

document.querySelectorAll('.fade-in-up').forEach(element => {
    observer.observe(element);
});

document.getElementById("search").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      window.location.href = "search bar.html";
    }
});

