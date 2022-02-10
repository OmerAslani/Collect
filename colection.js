// const { doc } = require("prettier");

COLLECTION = [{

            Director: 'Kang Je-Gyu',
            Writer: ' Kang Je-Gyu, Na Hyun, Kim Byung-In, Song Min-Gyu',
            Producer: 'Kang Je-Gyu, Jo Sung-Jin, Choi Jin-Hwa, Song Min-Gyu',
            ReleaseDate: 'December 21, 2011 (South Korea) / January 14, 2012 (Japan)',
            Genre: 'War / Action / Period-1940 / Award Winning',
            Runtime: '145 min.',
            Language: 'Korean'

        },
        {
            Director: 'Danny Boyle',
            Writer: 'Simon Beaufoy (screenplay)',
            Producer: 'Christian Colson',
            ReleaseDate: '14. January 2009.',
            Genre: 'Drama , Romance',
            Runtime: '120min',
            Language: 'Hindi'


        },
        {
            Director: 'Gabriele Muccino',
            Writer: 'Steve Conrad',
            Producer: 'Todd Black,Jason Blumenthal,James Lassiter,Will Smith,Steve Tisch',
            ReleaseDate: '14. January 2009.',
            Genre: 'Biography , Drama',
            Runtime: '120min',
            Language: 'English Cantonese'
        },
        {
            Director: 'Ljubisa Samardzic',
            Writer: 'Srdjan Koljevic , Djordje Milosavljevic',
            Producer: 'Ljubisa Samardzic',
            ReleaseDate: '2000',
            Genre: 'Drama , War',
            Runtime: '95min',
            Language: 'Serbian'
        },
        {
            Director: 'Park Chan-wook',
            Writer: 'Garon Tsuchiya , Nobuaki Minegishi , Park Chan-wook',
            Producer: 'Dong-Joo Kim , Syd Lim',
            ReleaseDate: '14. January 2000.',
            Genre: 'Action , Drama , Mystery , Thriller',
            Runtime: '120min',
            Language: 'Korean'
        }

    ]
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



myB.addEventListener('click', () => {
    if (list1.style.display === 'none') {
        list1.style.display = 'block';
        myD.style.gridTemplateRows = '330px 365px 120px';


    } else {
        list1.style.display = 'none';
        myD.style.gridTemplateRows = '330px 260px 120px';
    }
})




slumB.addEventListener('click', () => {
    if (list2.style.display === 'none') {
        list2.style.display = 'block';
        slumD.style.gridTemplateRows = '330px 365px 120px';


    } else {
        list2.style.display = 'none';
        slumD.style.gridTemplateRows = '330px 260px 120px';
    }
})

purB.addEventListener('click', () => {
    if (list3.style.display === 'none') {
        list3.style.display = 'block';
        purD.style.gridTemplateRows = '330px 365px 120px';


    } else {
        list3.style.display = 'none';
        purD.style.gridTemplateRows = '330px 260px 120px';
    }
})