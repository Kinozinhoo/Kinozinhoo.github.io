document.getElementById('form-contato').addEventListener('submit', function (e) {
    e.preventDefault();
    const nome = this.nome.value.trim();
    const email = this.email.value.trim();
    const mensagem = this.mensagem.value.trim();
  
    if (!nome || !email || !mensagem) {
      alert('Por favor, preencha todos os campos.');
      return;
    }
  
    document.getElementById('mensagem-envio').textContent = 'Mensagem enviada com sucesso!';
    this.reset();
  });
  
  fetch('https://jsonplaceholder.typicode.com/posts?_limit=3')
    .then(response => response.json())
    .then(posts => {
      const container = document.getElementById('lista-projetos');
      posts.forEach(post => {
        const div = document.createElement('div');
        div.innerHTML = `
          <h3>${post.title}</h3>
          <p>${post.body}</p>
        `;
        div.style.border = '1px solid #ccc';
        div.style.padding = '10px';
        div.style.marginBottom = '10px';
        container.appendChild(div);
      });
    })
    .catch(error => console.error('Erro ao carregar projetos:', error));
  