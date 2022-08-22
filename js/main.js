const search = document.querySelector("#search");
const matchList = document.querySelector(".match-list");

search.addEventListener('input', () => searchComments(search.value));

// Search comment json and filter it
const searchComments = async getJson => {
  const response = await fetch('https://jsonplaceholder.typicode.com/comments')
  const jsonData = await response.json();
  /*console.log(jsonData);
  console.log(jsonData.length);
  console.log(jsonData[0].body)*/


  //Get matches to current text input


  //*



  let matches = jsonData.filter(jsonElement => {

    const regex = new RegExp(`^${getJson}`);

    if (getJson.length >= 3) {
      return jsonElement.name.match(regex);
    } else if (getJson == "") {
      matchList.innerHTML = "";
    }
  });

  if (getJson.length === 0) {
    matches = [];
  }

  outputHtml(matches);
}



const outputHtml = matches => {

  matches = matches.filter((match, idx) => idx < 20);


  if (matches.length > 0) {

    const html = matches.map(match => `
        <div class="match-list-item">
          <div class="name">
            <h2>${match.name}</h2>
          </div>
          <div class="text">
            <p><strong>${match.email}</strong>
            ${match.body.substring(0, 64)}</p>
          </div>
        </div>
        `).join('');



    matchList.innerHTML = html;
  }




};

var searchSuggestions = document.querySelectorAll(".match-list-item");
searchSuggestions = Array.from(searchSuggestions)

console.log(searchSuggestions);