console.log("welcome to spotify");

let audioElement=new Audio('Aasan_Nahin_Yahan.mp3');
//audioElement.play();

let songs=[{songName:"Asan",filepath: "./Aasan_Nahin_Yahan.mp3"},
{songName:"Asan",filepath: "./Aasan_Nahin_Yahan.mp3"},
{songName:"Asan",filepath: "./Aasan_Nahin_Yahan.mp3"},
{songName:"Asan",filepath: "./Aasan_Nahin_Yahan.mp3"},
{songName:"Asan",filepath: "./Aasan_Nahin_Yahan.mp3"},
{songName:"Asan",filepath: "./Aasan_Nahin_Yahan.mp3"},
{songName:"Asan",filepath: "./Aasan_Nahin_Yahan.mp3"},
{songName:"Asan",filepath: "./Aasan_Nahin_Yahan.mp3"}
]

let songindex=0;
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused|| audioElement.currentTime<=0){
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        audioElement.play();
    }
    else{
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        audioElement.pause();
    }
})
myProgressBar.addEventListener('timeupdate',()=>{
    console.log('timeupdate')
})


