const portfolio = document.getElementsByClassName('container')[0];

// Chargez les données du fichier JSON de manière asynchrone
fetch('assets/datas/projects.json')

  .then(res => res.json())
  .then(data => {
    // Créez dynamiquement les éléments HTML pour chaque projet
    data.projects.forEach(project => {
      const article = document.createElement('article');
      const name = document.createElement('h4');
      const description = document.createElement('p');
      const aside = document.createElement('aside');
      const skillsList = document.createElement('ul');
      const githubLink = document.createElement('a');
      const githubIcon = document.createElement('i');

      name.textContent = project.name;
      description.textContent = project.description;
      skillsList.className = `skills${project.id}`;

      project.skills.forEach(skill => {
        const skillItem = document.createElement('li');
        skillItem.textContent = skill;
        skillsList.appendChild(skillItem);
      });
      githubLink.href = project.link;
      githubLink.target = '_blank';
      githubLink.rel = 'noopener noreferrer';
      githubLink.ariaLabel = 'Repo GitHub ' + project.name;
      githubIcon.className = 'fa-brands fa-github';

      githubLink.appendChild(githubIcon);

      aside.appendChild(skillsList);
      aside.appendChild(githubLink);

      article.appendChild(name);
      article.appendChild(description);
      article.appendChild(aside);

      portfolio.appendChild(article);
    });
  });
