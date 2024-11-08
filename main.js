document.addEventListener('DOMContentLoaded', function() {
    const avatarElement = document.querySelector('#avatar');
    const nameElement = document.querySelector('#name');
    const usernameElement = document.querySelector('#username');
    const repositElement = document.querySelector('#reposit');
    const followersElement = document.querySelector('#followers');
    const followingElement = document.querySelector('#following');
    const linkElement = document.querySelector('#link');
    const endpoint = 'https://api.github.com/users/LukasFrickDev';

    fetch(endpoint)
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
            console.log(json);
            avatarElement.src = json.avatar_url;
            nameElement.innerText = json.name;
            usernameElement.innerText = `@${json.login}`;
            repositElement.innerText = json.public_repos;
            followersElement.innerText = json.followers;
            followingElement.innerText = json.following;
            linkElement.href = json.html_url;
        })
        .catch(function(erro) {
            alert('Ocorreu um erro ao buscar o gitHub')
        })
})