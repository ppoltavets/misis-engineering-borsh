// Функция для загрузки данных из JSON файла
async function loadServices() {
  try {
    const response = await fetch("services.json");
    const services = await response.json();
    displayServices(services);
  } catch (error) {
    console.error("Ошибка при загрузке данных:", error);
  }
}

// Функция для отображения услуг на странице
function displayServices(services) {
  const container = document.getElementById("services-container");
  services.forEach((service) => {
    const serviceElement = document.createElement("div");
    serviceElement.classList.add("service");
    serviceElement.innerHTML = `
                      <h3>${service.name}</h3>
                      <p>${service.description}</p>
                      <p class="service__price"><strong>Цена:</strong> ${service.price}</p>
                  `;
    container.appendChild(serviceElement);
  });
}

// Загружаем услуги при загрузке страницы
window.onload = loadServices;
