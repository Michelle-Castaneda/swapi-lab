const resBtn = document.querySelector('#get-res-button');

function newBtn() {
  console.log('button clicked');

  axios.get('https://swapi.dev/api/planets/2')
    .then(res => {
      res.data.residents.forEach(residentURL => {
        axios.get(residentURL)
          .then(subRes => {
            const characterName = document.createElement('h2');
            characterName.textContent = subRes.data.name;
            const characterContainer = document.getElementById('character-container');
            characterContainer.innerHTML = "";
            characterContainer.appendChild(characterName);
          })
          .catch(subErr => console.log(subErr));
      });
    })
    .catch(err => console.log(err));
}

resBtn.addEventListener('click', newBtn);
