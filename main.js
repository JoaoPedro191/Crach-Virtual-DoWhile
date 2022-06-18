const links = {
    github: "JoaoPedro191",
    youtube: "jakelinygracielly",
    facebook: "maykbrito",
    instagram: "jakeliny.gracielly", 
    twitter: "jakelinytec"
}

    function changeSocialMediaLinks() {
    for (let lista of socialLinks.children) {
    const social = lista.getAttribute('class');

    lista.children[0].href = `https://${social}.com/${links[social]}`
  }
}
  changeSocialMediaLinks();

  
  function getGitHubProfileInfos() {
     const url = `https://api.github.com/users/${links.github}`
      fetch(url).then(response => response.json())
      .then(data => {
        userName.textContent = `${data.name}`
        userLink.href = data.html_url
        userPhoto.src = data.avatar_url
      })
  }
   getGitHubProfileInfos();

  