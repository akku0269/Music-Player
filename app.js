const music = new Audio('audio/3.mp3');
// music.play()

const songs = [
    {
        id: 1,
        songName: `Baatein Ye Kabhi Na <br>
         <div class="subtitle">Arijit Singh</div>`,
        poster: "img/1.webp",
    },
    {
        id: 2,
        songName: `Hai Dil Ye Mera <br>
         <div class="subtitle">Arijit Singh</div>`,
        poster: "img/2.webp",
    },
    {
        id: 3,
        songName: `Kuley Kuley <br>
         <div class="subtitle">Yo Yo Honey Singh</div>`,
        poster: "img/3.webp",
    },
    {
        id: 4,
        songName: `Main Dhoondne Ko Zamaane Mein <br>
         <div class="subtitle">Arijit Singh</div>`,
        poster: "img/4.webp",
    },
    {
        id: 5,
        songName: `Mere Ghar Ram Aaye Hai <br>
         <div class="subtitle">Jubin Nautiyal</div>`,
        poster: "img/5.webp",
    },
    {
        id: 6,
        songName: `Namo Namo <br>
         <div class="subtitle">Amit Trivedi</div>`,
        poster: "img/6.webp",
    },
    {
        id: 7,
        songName: `Pasoori <br>
         <div class="subtitle">Shae Gill</div>`,
        poster: "img/7.webp",
    },
    {
        id: 8,
        songName: `Phir Mohabbat <br>
         <div class="subtitle">Arijit Singh</div>`,
        poster: "img/8.webp",
    },
    {
        id: 9,
        songName: `Ram Siya Ram <br>
         <div class="subtitle">Sachet Tandon</div>`,
        poster: "img/9.webp",
    },
    {
        id: 10,
        songName: `Satranga <br>
         <div class="subtitle">Arijit Singh</div>`,
        poster: "img/10.webp",
    },
    {
        id: 11,
        songName: `Mere Ram <br>
         <div class="subtitle">Akhand Ram</div>`,
        poster: "img/11.webp",
    },
    {
        id: 12,
        songName: `Soch Na Sake <br>
         <div class="subtitle">Arijit Singh</div>`,
        poster: "img/12.webp",
    },
    {
        id: 13,
        songName: `Tum Hi Ho <br>
         <div class="subtitle">Arijit Singh</div>`,
        poster: "img/13.webp",
    },
    {
        id: 14,
        songName: `Tum Kya Mile <br>
         <div class="subtitle">Arijit Singh</div>`,
        poster: "img/14.webp",
    },
    {
        id: 15,
        songName: `Oonchi Oonchi Deewarein (From "Yaariyan 2") <br>
         <div class="subtitle">Manan Bhardwaj</div>`,
        poster: "img/15.webp",
    },
    {
        id: 16,
        songName: `Sanam Re <br>
         <div class="subtitle">Arijit Singh</div>`,
        poster: "img/16.webp",
    },
    {
        id: 17,
        songName: `Tere Sang Yaara <br>
         <div class="subtitle">Atif Aslam</div>`,
        poster: "img/17.webp",
    },
    {
        id: 18,
        songName: `Meri Maa Ke Barabr Koi Nahi <br>
         <div class="subtitle">Jubin Nautiyal</div>`,
        poster: "img/18.webp",
    },
    {
        id: 19,
        songName: `Raaz Aekhein Teri <br>
         <div class="subtitle">Arijit Singh</div>`,
        poster: "img/19.webp",
    },
    {
        id: 20,
        songName: `Muskurane <br>
         <div class="subtitle">Arijit Singh</div>`,
        poster: "img/20.webp",
    },
    {
        id: 21,
        songName: `Kaley Sheshe <br>
         <div class="subtitle">Addy Nagar</div>`,
        poster: "img/21.webp",
    },
    {
        id: 22,
        songName: `Softly <br>
         <div class="subtitle">Karan Aujla</div>`,
        poster: "img/22.webp",
    },
]

// Search data start

let search_result = document.getElementsByClassName('search_result')[0];

songs.forEach(element => {
    const {id,songName,poster} = element;
    // console.log(songName);
    let card = document.createElement('a')
    card.classList.add('card');
    card.href = "#" + id;
    card.innerHTML = `<img src="${poster}" alt="">
    <div class="content">
        ${songName}
    </div>`;
    search_result.appendChild(card);
});

let input = document.getElementsByTagName('input')[0];
input.addEventListener('keyup' , ()=>{
    let input_value = input.value.toUpperCase();
    let items = search_result.getElementsByTagName('a');
    for (let i = 0; i < items.length; i++) {
        let as = items[i].getElementsByClassName('content')[0];
        let text_value = as.textContent || as.innerHTML;
        if (text_value.toUpperCase().indexOf(input_value) > -1) {
            items[i].style.display = "flex";
        } else {
            items[i].style.display = "none";
        }
        
        if (input.value == 0) {
            search_result.style.display = "none";
        } else {
            search_result.style.display = "";
        }
    }
})
// Search data end



// poster dal diye sab me aur name bhi sabka
Array.from(document.getElementsByClassName('songItem')).forEach((e,i)=>{
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
});

let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');

masterPlay.addEventListener('click' , () => {
    if(music.paused || music.currentTime <= 0){
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill')
        masterPlay.classList.add('bi-pause-fill')
    }else{
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.add('bi-play-fill')
        masterPlay.classList.remove('bi-pause-fill')
    }
});

// const makeAllBackground = () =>{
//     Array.from(document.getElementsByClassName('songName')).forEach((el)=>{
//         el.style.background = 'rgb(105,105,105,.0)';
//     });
// }
// const makeAllPlays = () => {
//     Array.from(document.getElementsByClassName('playListPlay')).forEach((el)=>{
//         el.classList.add('bi-play-circle-fill');
//         el.classList.remove('bi-pause-circle-fill');
//     })
// }

let index = 0;
let poster_master_play = document.getElementById('poster_master_play')
let download_music = document.getElementById('download_music')
let title = document.getElementById('title')

Array.from(document.getElementsByClassName('playListPlay')).forEach((e)=>{
    e.addEventListener('click', (el)=>{
        index = el.target.id;
        // console.log(index);
        music.src =`audio/${index}.mp3`
        // poster_master_play.src =`img/${index}.webp`
        music.play();
        masterPlay.classList.remove('bi-play-fill')
        masterPlay.classList.add('bi-pause-fill')
        download_music.href = `audio/${index}.mp3`

        let songTitles = songs.filter((ele)=>{
            return ele.id == index;
        });
        songTitles.forEach((elem)=>{
            let {songName,poster} = elem;
            title.innerHTML = songName;
            poster_master_play.src = poster;
            download_music.setAttribute('download',songName)
        });
        wave.classList.add('active1');
        // makeAllBackground();
        // Array.from(document.getElementsByClassName('songName'))[index-1].style.background='rgb(105,105,105,.1)';
        // makeAllPlays();
    });
});

let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot');

music.addEventListener('timeupdate', ()=>{
    let music_currentTime = music.currentTime;
    let music_duration = music.duration;


    // current time
    let min2 = Math.floor(music_currentTime/60);
    let sec2 = Math.floor(music_currentTime%60);

    if(sec2<10){
        sec2 = `0${sec2}`;
    }
    currentStart.innerText = `${min2}:${sec2}`;

    // end time
    console.log(music_duration%60)
    let min1 = Math.floor(music_duration/60);
    let sec1 = Math.floor(music_duration%60);
    // console.log(min1)
    if(sec1<10){
        sec1 = `0${sec1}`;
    }
    currentEnd.innerText = `${min1}:${sec1}`;

    let progressBar = parseInt((music_currentTime/music_duration)*100);
    seek.value = progressBar;
    // console.log(seek.value);
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
});

seek.addEventListener('change',()=>{
    music.currentTime = seek.value * music.duration / 100;
});

let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol_bar')[0];
let vol_dot = document.getElementById('vol_dot');

vol.addEventListener('change',()=>{
    if(vol.value == 0){
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-off-fill');
    }
    if(vol.value > 0){
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    if(vol.value > 50){
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a / 100;
});

let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click',()=>{
    index --;
    if(index < 1){
        index = Array.from(document.getElementsByClassName('songItem')).length;
    }
    music.src =`audio/${index}.mp3`
    music.play();
        masterPlay.classList.remove('bi-play-fill')
        masterPlay.classList.add('bi-pause-fill')

        let songTitles = songs.filter(function(ele){
            return ele.id == index;
        });
        songTitles.forEach((elem)=>{
            let {songName,poster} = elem;
            title.innerHTML = songName;
            poster_master_play.src = poster;
        });
        wave.classList.add('active1');
        
});

next.addEventListener('click',()=>{
    index ++;
    if(index > Array.from(document.getElementsByClassName('songItem')).length){
        index = 1;
    }
    music.src =`audio/${index}.mp3`
    music.play();
        masterPlay.classList.remove('bi-play-fill')
        masterPlay.classList.add('bi-pause-fill')

        let songTitles = songs.filter(function(ele){
            return ele.id == index;
        });
        songTitles.forEach((elem)=>{
            let {songName,poster} = elem;
            title.innerHTML = songName;
            poster_master_play.src = poster;
        });
        wave.classList.add('active1');
});


// popular song me song jayada hoga to usko right left krne ke liye

let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];

pop_song_right.addEventListener('click', ()=>{
    pop_song.scrollLeft +=330 ;
});
pop_song_left.addEventListener('click', ()=>{
    pop_song.scrollLeft -=330 ;
});

let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let pop_art = document.getElementsByClassName('item')[0];

pop_art_right.addEventListener('click', ()=>{
    pop_art.scrollLeft +=330 ;
});
pop_art_left.addEventListener('click', ()=>{
    pop_art.scrollLeft -=330 ;
});


// suffle 

let suffle = document.getElementsByClassName('suffle')[0];

suffle.addEventListener('click',function(){
    let a = suffle.innerHTML;

    switch (a) {
        case "next":
            suffle.classList.add('bi-arrow-repeat');
            suffle.classList.remove('bi-music-note-beamed');
            suffle.classList.remove('bi-shuffle');
            suffle.innerHTML = 'repeat';
            break;
    
        case "repeat":
            suffle.classList.remove('bi-arrow-repeat');
            suffle.classList.remove('bi-music-note-beamed');
            suffle.classList.add('bi-shuffle');
            suffle.innerHTML = 'random';
            break;

        case "random":
            suffle.classList.remove('bi-arrow-repeat');
            suffle.classList.add('bi-music-note-beamed');
            suffle.classList.remove('bi-shuffle');
            suffle.innerHTML = 'next';
            break;
    }
});

const next_music = () =>{
    if(index == songs.length){
        index = 1;
    }else{
        index++;
    }
        music.src =`audio/${index}.mp3`
        // poster_master_play.src =`img/${index}.webp`
        music.play();
        masterPlay.classList.remove('bi-play-fill')
        masterPlay.classList.add('bi-pause-fill')
        download_music.href = `audio/${index}.mp3`

        let songTitles = songs.filter((ele)=>{
            return ele.id == index;
        });
        songTitles.forEach((elem)=>{
            let {songName,poster} = elem;
            title.innerHTML = songName;
            poster_master_play.src = poster;
            download_music.setAttribute('download',songName)
        });
        wave.classList.add('active1');
}
const repeat_music = () =>{
        index;
        music.src =`audio/${index}.mp3`
        // poster_master_play.src =`img/${index}.webp`
        music.play();
        masterPlay.classList.remove('bi-play-fill')
        masterPlay.classList.add('bi-pause-fill')
        download_music.href = `audio/${index}.mp3`

        let songTitles = songs.filter((ele)=>{
            return ele.id == index;
        });
        songTitles.forEach((elem)=>{
            let {songName,poster} = elem;
            title.innerHTML = songName;
            poster_master_play.src = poster;
            download_music.setAttribute('download',songName)
        });
        wave.classList.add('active1');
}
const random_music = () =>{
    if(index == songs.length){
        index = 1;
    }else{
        index = Math.floor((Math.random()*songs.length)+1);
    }
        music.src =`audio/${index}.mp3`
        // poster_master_play.src =`img/${index}.webp`
        music.play();
        masterPlay.classList.remove('bi-play-fill')
        masterPlay.classList.add('bi-pause-fill')
        download_music.href = `audio/${index}.mp3`

        let songTitles = songs.filter((ele)=>{
            return ele.id == index;
        });
        songTitles.forEach((elem)=>{
            let {songName,poster} = elem;
            title.innerHTML = songName;
            poster_master_play.src = poster;
            download_music.setAttribute('download',songName)
        });
        wave.classList.add('active1');
}


music.addEventListener('ended',()=>{
    let b = suffle.innerHTML;

    switch (b) {
        case 'repeat':
            repeat_music();
            break;
        case 'next':
            next_music();
            break;
        case 'random':
            random_music();
            break;
    }
});

