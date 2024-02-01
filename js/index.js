const portfolio = document.getElementsByClassName('container')[0];

// Chargez les données du fichier JSON de manière asynchrone
fetch('assets/datas/projects.json')

  .then(response => response.json())
  .then(data => {
    // Créez dynamiquement les éléments HTML pour chaque projet
    data.projects.forEach(project => {
      const article = document.createElement('article');
      const name = document.createElement('h4');
      const description = document.createElement('p');
      const aside = document.createElement('aside');

      name.textContent = project.name;
      description.textContent = project.description;
      aside.innerHTML = `<p>${project.skills.join(', ')}</p><a href="${project.link}" target="_blank" aria-label="Repo GitHub ${project.name}"><i class="fa-brands fa-github"></i></a>`;

      article.appendChild(name);
      article.appendChild(description);
      article.appendChild(aside);

      portfolio.appendChild(article);
    });
  });
