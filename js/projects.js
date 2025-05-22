const projects = [
  {
    title: "Portfolio Website",
    description: "A minimalist developer portfolio built with plain HTML, CSS, and JavaScript.",
    image: "assets/images/portfolio-screenshot.png",
    links: {
      demo: "https://yourdomain.com",
      code: "https://github.com/yourusername/portfolio"
    }
  },
  {
    title: "Task Manager App",
    description: "A simple task manager app with CRUD operations and local storage.",
    image: "assets/images/taskmanager-screenshot.png",
    links: {
      demo: "https://yourdomain.com/taskmanager",
      code: "https://github.com/yourusername/taskmanager"
    }
  },
  {
    title: "Weather Dashboard",
    description: "Weather forecast dashboard using OpenWeather API with clean UI.",
    image: "assets/images/weather-screenshot.png",
    links: {
      demo: "https://yourdomain.com/weather",
      code: "https://github.com/yourusername/weather-dashboard"
    }
  }
];

function renderProjects() {
  const container = document.getElementById("projects-container");
  container.innerHTML = "";

  projects.forEach(({ title, description, image, links }) => {
    const card = document.createElement("div");
    card.className = "project-card";

    card.innerHTML = `
      <img src="${image}" alt="${title} screenshot" class="project-image" />
      <h3 class="project-title">${title}</h3>
      <p class="project-description">${description}</p>
      <div class="project-links">
        <a href="${links.demo}" target="_blank" rel="noopener">Demo</a>
        <a href="${links.code}" target="_blank" rel="noopener">Code</a>
      </div>
    `;

    container.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
});
