const sendBtn = document.getElementById("submit-data");
sendBtn.addEventListener("click", getData);

async function getData() {
  const url = "https://api.tvmaze.com/search/shows?q=";
  let inputShow = document.getElementById("input-show").value;
  let showCont = document.getElementById("show-container");
  const showData = await fetch(url + inputShow);
  const ShowJSON = await showData.json();

  ShowJSON.forEach((show) => {
    let div1 = document.createElement("div");
    let div2 = document.createElement("div");
    let h1 = document.createElement("h1");
    div1.setAttribute("class", "show-data");
    div2.setAttribute("class", "show-info");

    if (show.show.image) {
      let imgaeShow = document.createElement("img");
      imgaeShow.setAttribute("src", show.show.image.medium);
      div1.appendChild(imgaeShow);
    }

    h1.innerHTML = show.show.name;
    let tempSummary = show.show.summary;
    var temp = document.createElement("p");
    temp.innerHTML = tempSummary;
    var summary = temp.firstChild;

    div2.append(h1);
    div2.append(summary);

    div1.append(div2);

    showCont.append(div1);

    console.log(show.show);
  });
  console.log();
}
