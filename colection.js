// const { doc } = require("prettier");


// COLLECTION = [{

//         Director: 'Kang Je-Gyu',
//         Writer: ' Kang Je-Gyu, Na Hyun, Kim Byung-In, Song Min-Gyu',
//         Producer: 'Kang Je-Gyu, Jo Sung-Jin, Choi Jin-Hwa, Song Min-Gyu',
//         ReleaseDate: 'December 21, 2011 (South Korea) / January 14, 2012 (Japan)',
//         Genre: 'War / Action / Period-1940 / Award Winning',
//         Runtime: '145 min.',
//         Language: 'Korean',
//         img: "https://images-na.ssl-images-amazon.com/images/I/712mcllwbFL._RI_.jpg"


// const { doc } = require("prettier");

// COLLECTION = [{

//         Director: 'Kang Je-Gyu',
//         Writer: ' Kang Je-Gyu, Na Hyun, Kim Byung-In, Song Min-Gyu',
//         Producer: 'Kang Je-Gyu, Jo Sung-Jin, Choi Jin-Hwa, Song Min-Gyu',
//         ReleaseDate: 'December 21, 2011 (South Korea) / January 14, 2012 (Japan)',
//         Genre: 'War / Action / Period-1940 / Award Winning',
//         Runtime: '145 min.',
//         Language: 'Korean',
//         img: "https://images-na.ssl-images-amazon.com/images/I/712mcllwbFL._RI_.jpg"


//     },
//     {
//         Director: 'Danny Boyle',
//         Writer: 'Simon Beaufoy (screenplay)',
//         Producer: 'Christian Colson',
//         ReleaseDate: '14. January 2009.',
//         Genre: 'Drama , Romance',
//         Runtime: '120min',
//         Language: 'Hindi',
//         img: "https://i.pinimg.com/originals/7c/e1/fd/7ce1fd62a19764bcd8aa4b6da674536f.jpg"


//     },
//     {
//         Director: 'Gabriele Muccino',
//         Writer: 'Steve Conrad',
//         Producer: 'Todd Black,Jason Blumenthal,James Lassiter,Will Smith,Steve Tisch',
//         ReleaseDate: '14. January 2009.',
//         Genre: 'Biography , Drama',
//         Runtime: '120min',
//         Language: 'English Cantonese',
//         img: 'https://miro.medium.com/max/548/1*Y8vXN1mJeEHyXWJtFICjiQ.jpeg'
//     },
//     {
//         Director: 'Ljubisa Samardzic',
//         Writer: 'Srdjan Koljevic , Djordje Milosavljevic',
//         Producer: 'Ljubisa Samardzic',
//         ReleaseDate: '2000',
//         Genre: 'Drama , War',
//         Runtime: '95min',
//         Language: 'Serbian',
//         img: 'https://pics.filmaffinity.com/nebeska_udica-551519494-large.jpgs'
//     },
//     {
//         Director: 'Park Chan-wook',
//         Writer: 'Garon Tsuchiya , Nobuaki Minegishi , Park Chan-wook',
//         Producer: 'Dong-Joo Kim , Syd Lim',
//         ReleaseDate: '14. January 2000.',
//         Genre: 'Action , Drama , Mystery , Thriller',
//         Runtime: '120min',
//         Language: 'Korean',
//         img: 'https://m.media-amazon.com/images/M/MV5BZWZkNjVhZDEtZTNkZi00OWIxLTk3N2UtNjBkMjgzZGMwMDI2XkEyXkFqcGdeQXVyMTAyOTE2ODg0._V1_.jpg'
//     }

// ]



// lists

const list1 = document.querySelector('#list1');
const list2 = document.querySelector('#list2');
const list3 = document.getSelection('#lsit3');
const list4 = document.querySelector('#list4');

// card divs

const slumD = document.querySelector('#slum');
const myD = document.querySelector('#my');
const purD = document.querySelector('#pursuit');


/// Buttons divs
const slumB = document.querySelector('#slumDog');
const myB = document.querySelector('#myWay');
const purB = document.querySelector('#pursuitB');

var title = document.querySelector('h4');
let serchInput = document.getElementById("serch-1");
let dugme = document.getElementById('dugme');

dugme.addEventListener('click', onSearch);


function onSearch(element) {
    const nesto = document.getElementById('main__container')
    var child = nesto.lastElementChild;
    while (child) {
        nesto.removeChild(child);
        child = nesto.lastElementChild;
    }
    getMovie(serchInput.value)
}

function _processResponseFromOmdbAPI(data) {
    data.Search.forEach(movie => {
        // console.log(movie);
        const h1 = document.querySelector('.text')
        const card = document.querySelector('#main__container')
        card.insertAdjacentHTML("beforeend", `<div id="my" class="card">
        <div id="card-img" class="img"> <img src="${movie.Poster}" alt="nesto" class="slika"> </div>
        <div class="text">
            <h1>${movie.Title}</h1>
            <div id="myWay">
                <h4>${movie.Year}</h4>
                <ul id="list1">

                    <li> <b>Director :</b> Kang Je-Gyu</li>
                    <li> <b>Writer :</b> Kang Je-Gyu, Na Hyun, Kim Byung-In, Song Min-Gyu</li>
                    <li> <b>Producer :</b> Kang Je-Gyu, Jo Sung-Jin, Choi Jin-Hwa, Song Min-Gyu</li>
                    <li> <b>Release Date :</b> December 21, 2011 (South Korea) / January 14, 2012 (Japan)</li>
                    <li> <b>Genre :</b> War / Action / Period-1940 / Award Winning</li>
                    <li> <b>Runtime :</b> 145 min.</li>
                    <li> <b>Language : </b> Korean </li>
                </ul>
            </div>

            <p class="marg">This film is based on the story of a Korean named Yang Kyoungjong who was allegedly captured by the Americans on D-Day. Yang Kyoungjong was conscripted into the Japanese Imperial Army, the Red Army, and the Wehrmacht.</p>
        </div>


        <div class="card-info">
            <a href="https://www.youtube.com/watch?v=alx6XKgTb54" target="_blank">
                <div class="btn">Trailer</div>
            </a>
            <a href="https://drama.cx/watch-my-way-mai-wei/full-sub-sv1.html" target="_blank">
                <div class="btn">Watch</div>
            </a>
            <a href="https://www.imdb.com/title/tt1606384/?ref_=nv_sr_srsg_7" target="_blank">
                <div class="btn">IMDb</div>
            </a>
        </div>
    </div>
`)

    });
}



// function replace2(rec, slovo1, slovo2) {
//     let result = '';
//     rec.split('').forEach(letter => {
//         if (letter === slovo1) {
//             result += slovo2;
//         } else {

//             result += letter;
//         }
//     });
//     return (result);
// }

function getMovie(search) {

    fetch(`https://www.omdbapi.com/?s=${search.replace(" ","+")}&apikey=9ef64a19`)
        .then(response => response.json())
        .then(_processResponseFromOmdbAPI)



}

console.log(replace2("nesto", "s", "k"));


getMovie("harry potter")

// function showMovi(data) {
//     data.forEach(movie => {
//         console.log(movie);
//     });
// }



// function getMovie() {
//     fetch("https://www.omdbapi.com/?s=harry+potter&apikey=9ef64a19")
//         .then(res => res.json())
//         .then(date.Search);
//     console.log(data);
// }
// getMovie();





// myB.addEventListener('click', () => {
//     if (list1.style.display === 'none') {
//         list1.style.display = 'block';
//         myD.style.gridTemplateRows = '330px 365px 120px';


//     } else {
//         list1.style.display = 'none';
//         myD.style.gridTemplateRows = '330px 260px 120px';
//     }
// })




// slumB.addEventListener('click', () => {
//     if (list2.style.display === 'none') {
//         list2.style.display = 'block';
//         slumD.style.gridTemplateRows = '330px 365px 120px';


//     } else {
//         list2.style.display = 'none';
//         slumD.style.gridTemplateRows = '330px 260px 120px';
//     }
// })

// purB.addEventListener('click', () => {
//     if (list3.style.display === 'none') {
//         list3.style.display = 'block';
//         purD.style.gridTemplateRows = '330px 365px 120px';


//     } else {
//         list3.style.display = 'none';
//         purD.style.gridTemplateRows = '330px 260px 120px';
//     }



function f1(funkcijaKaoParametar) {
    funkcijaKaoParametar()
}

function sabiranje() {
    console.log(2 + 5);
}

f1(sabiranje)