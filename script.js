var button = document.getElementById('moveButton');

button.addEventListener('click', function() {
  var newTop = Math.floor(Math.random() * (400 - button.offsetHeight));
  var newLeft = Math.floor(Math.random() * (400 - button.offsetWidth));

  button.style.top = newTop + 'px';
  button.style.left = newLeft + 'px';
});

var openModalButton = document.getElementById("openModal");
var modal = document.getElementById("modal");
var closeModalButton = document.getElementById("closeModal");

openModalButton.addEventListener("click", function () {
  modal.style.display = "block";
});

closeModalButton.addEventListener("click", function () {
  modal.style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});
