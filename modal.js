// Получаем элементы
const modal = document.getElementById("myModal");
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const modalContent = document.querySelector(".modal-content");

// Открываем модальное окно
openModalBtn.onclick = function () {
  modal.style.display = "block";
  setTimeout(() => {
    modalContent.classList.add("show");
  }, 10);
};

// Закрываем модальное окно
closeModalBtn.onclick = function () {
  modalContent.classList.remove("show");
  setTimeout(() => {
    modal.style.display = "none";
  }, 300);
};

// Закрываем модальное окно при клике вне его
window.onclick = function (event) {
  if (event.target == modal) {
    modalContent.classList.remove("show");
    setTimeout(() => {
      modal.style.display = "none";
    }, 300);
  }
};
