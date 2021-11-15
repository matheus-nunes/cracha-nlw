//VARIAVEIS: let e const

//VARIAVEL -> let é pra poder modificar depois

//VARIAVEL -> const eu não posso modificar depois

//let name = 'Matheus Nunes'
//let phone = 13456
//let accept = true

//DECLARANDO OBJETO

/* const user = {
        name: 'Matheus Nunes',
        phone: 13456,
        accept: true
      }*/

//alert(user.phone)

//FUNÇÃO FAZENDO PAREMETRIZAÇÃO
/* function showMeSomething(texto) {
        alert(texto)
      }

      const links = {
        github: 'matheus-nunes',
        youtube: 'RocketSeat',
        facebook: 'matheus.nunes.526',
        instagram: '_matheusnunes.m'
      }

      showMeSomething(links.github) */

// COMO USAR O DOOM

const LinksSocialMedia = {
  github: 'matheus-nunes',
  youtube: 'RocketSeat',
  facebook: 'matheus.nunes.526',
  instagram: '_matheusnunes.m'
}

/* function changeSocialMediaLinks() {
        //document.getElementById('userName').textContent = 'TETEU'

        //ESTE MÉTODO É SIMPLIFICADO DO DE CIMA
        userName.textContent = 'TETEU'
      }*/

//APRENDENDO A USAR O FOR

/* function changeSocialMediaLinks() {
        for (let i = 0; i <= 10; i++) {
          alert(i)
        }
      } */

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      bio.textContent = data.bio
      userLink.href = data.html_url
    })
}

getGitHubProfileInfos()
