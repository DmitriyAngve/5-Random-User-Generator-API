const btn = document.querySelector(".btn");
const h1 = document.querySelector("h1");

h1.style.width = "80%";
h1.style.margin = "auto";
h1.style.textAlign = "center";
h1.style.border = "5px solid #ddd";

const output = document.querySelector(".output");
const inputVal = document.querySelector(".val");
const url = "https://randomuser.me/api/";

inputVal.value = "10";
inputVal.setAttribute("type", "number");
btn.textContent = "Click Me";

btn.addEventListener("click", (e) => {
  console.log("ready");
  let val = `?results=${inputVal.value}`;
  adder(url + val);
});

function adder(url) {
  console.log(url);
  fetch(url)
    .then((rep) => {
      return rep.json();
    })
    .then((data) => {
      console.log(data);
      output.innerHTML = `<h3>Seed : ${data.info.seed} <br>Results : ${data.info.results}</h3>`;
      maker(data.results);
    });
}

function maker(data) {
  console.log(data);
  data.forEach((el) => {
    console.log(el);
    const loc = el.location;
    const div = eleMaker("div", output, ""); // use same "eleMaker" to create a parent div
    div.classList.add("box");
    const temp = `${el.name.title} ${el.name.first} ${el.name.last}<br>${el.email}<br>Age : ${el.dob.age}`;
    const temp1 = `<img src="${el.picture.large}">`;
    const temp2 = `${loc.city} ${loc.state} ${loc.country}`;

    div.addEventListener("click", (e) => {
      h1.innerHTML = temp + "<div>" + temp1 + "</div>";
      window.scrollTo({ top: 0 }); // scroll to top after click
    }); // for updating information on the top for user

    eleMaker("div", div, temp);
    eleMaker("div", div, temp1);
    eleMaker("div", div, temp2);
  });
}

function eleMaker(eleTag, parent, contents) {
  const elem = document.createElement(eleTag);
  parent.append(elem);
  elem.innerHTML = contents;
  return elem;
}

/*
    <!DOCTYPE html>
    <html>
     
    <head>
        <title>JavaScript JSON</title>
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');
     
            body {
                font-family: 'Source Sans Pro', sans-serif;
            }
     
            * {
                box-sizing: border-box;
            }
     
            .box {
                padding: 10px;
                display: inline-block;
                width: 25%;
                text-align: center;
                font-size: 0.7em;
     
            }
     
            .box:hover {
                cursor: pointer;
            }
     
            .box>div {
                border: 1px solid #ddd;
                padding: 10px;
                overflow: hidden;
            }
     
            .box img {
                width: 100%;
            }
        </style>
    </head>
     
    <body>
        <h1>JSON</h1>
        <input type="text" class="val">
        <button class="btn">Click</button>
        <div class="output"></div>
        <script src="app5.js"></script>
    </body>
     
    </html>

    const btn = document.querySelector('.btn');
    const h1 = document.querySelector('h1');
    h1.style.width = '80%';
    h1.style.margin = 'auto';
    h1.style.textAlign = 'center';
    h1.style.border = '5px solid #ddd';
    const output = document.querySelector('.output');
    const inputVal = document.querySelector('.val');
    //.https://cors-anywhere.herokuapp.com/
    const url = 'https://randomuser.me/api/';
    inputVal.value = '10';
    inputVal.setAttribute('type', 'number');
    btn.textContent = 'Click Me';
    btn.addEventListener('click', (e) => {
        console.log('ready');
        let val = `?results=${inputVal.value}`;
        adder(url + val);
    })
     
    function adder(url) {
        console.log(url);
        fetch(url)
            .then((rep) => {
                return rep.json()
            })
            .then((data => {
                console.log(data);
                output.innerHTML = `<h3>Seed : ${data.info.seed}<br>Results : ${data.info.results}</h3>`;
                maker(data.results);
            }))
    }
     
     
    function maker(data) {
        console.log(data);
        data.forEach(el => {
            console.log(el);
            const loc = el.location;
            const div = eleMaker('div', output, '');
            div.classList.add('box');
            const temp = `${el.name.title} ${el.name.first} ${el.name.last}<br>${el.email}<br>Age : ${el.dob.age}`;
            const temp1 = `<img src="${el.picture.large}">`;
            const temp2 = `${loc.city} ${loc.state} ${loc.country}`;
            div.addEventListener('click', (e) => {
                h1.innerHTML = temp + '<div>' + temp1 + '</div>';
                window.scrollTo({
                    top: 0
                });
            })
     
     
            eleMaker('div', div, temp);
            eleMaker('div', div, temp1);
            eleMaker('div', div, temp2);
        });
    }
     
    function eleMaker(eleTag, parent, contents) {
        const elem = document.createElement(eleTag);
        parent.append(elem);
        elem.innerHTML = contents;
        return elem;
    }
     */
