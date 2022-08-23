const search = document.querySelector("#search");
const matchList = document.querySelector(".match-list");

search.addEventListener('input', () => searchComments(search.value));


const searchComments = async getJson => {
  const response = await fetch('https://jsonplaceholder.typicode.com/comments')
  const jsonData = await response.json();



  let matches = jsonData.filter(jsonElement => {

    const regex = new RegExp(`^${getJson}`);

    if (getJson.length >= 3) {
      return jsonElement.body.match(regex) ;
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

  matches = matches.filter((match,idx) => idx < 20);
  console.log(matches);

  if (matches.length > 0) {

    const html = matches.map(match => `
        <div class="match-list-item">
          <p>${match.body} (${match.name} ${match.email})</p>
        </div>
        `).join('');



    matchList.innerHTML = html;
  }




};

