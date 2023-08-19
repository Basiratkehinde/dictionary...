let show = document.getElementById('show')
function search(){
    let result = document.getElementById('result')
  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${result.value}`)
  .then(resp => resp.json())
  .then((data)=>{
    console.log(data)
    show.innerHTML += 
    `
 
<div id="in">
    <h3>AUDIO:<i class="fas fa-volume-up"></i><audio controls autoplay> <source src="${data[0].phonetics[0].audio}"></audio></h3>
</div>
<div id="in">
    <h3>TITLE:<span>${data[0].word}</span></h3>
</div>
<div id="in">
    <h3>TRANSCRIPTION:<span>${data[0].phonetic}</span></h3>
</div>
<div id="in">
    <h3>DESCRIPTION:<span>${data[0].meanings[0].definitions[0].definition}</span></h3>
</div>
<div id="in">
    <h3>EXAMPLE:<span>${data[0].meanings[0].definitions[0].example}</span></h3>
</div>
    `

  })
}