document.querySelectorAll('#ano').forEach(function(el) {
  el.textContent = new Date().getFullYear();
});
