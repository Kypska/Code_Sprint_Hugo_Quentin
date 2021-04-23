const API_URL ="https://soccer.sportmonks.com/api/v2.0/players/31000?api_token=ad8t2RifawYZ6LfWj0xTcB73j6TXWeoulAg6cBqRhWiqe39auaj1LZmywG4j&include=stats"

const form = document.getElementById("formQuestion") //on sélectionne le formulaire

form.addEventListener('submit', function(){
    event.preventDefault() //empêche le rechargement de la page
    console.log('submit')



})

    fetch(`${API_URL}`) //on va chercher le "search value" 
    .then(response => response.json())
    .then(data => {
        console.log(data)
        
       
    })