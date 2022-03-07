console.log("welcome to spotify");

let audioElement=new Audio('Aasan_Nahin_Yahan.mp3');
//audioElement.play();

let songs=[{song:"Song1",filepath: ".songs/1.mp3",cover:'./resources/logo.png'},
{song:"Song2",filepath: ".songs/2.mp3",cover:'./resources/logo.png'},
{song:"Song3",filepath: ".songs/3.mp3",cover:'./resources/logo.png'},
{song:"Song4",filepath: ".songs/4.mp3",cover:'./resources/logo.png'},
{song:"Song5",filepath: ".songs/5.mp3",cover:'./resources/logo.png'},
{song:"Song6",filepath: ".songs/6.mp3",cover:'./resources/logo.png'},
{song:"Song7",filepath: ".songs/7.mp3",cover:'./resources/logo.png'},
{song:"Song8",filepath: ".songs/8.mp3",cover:'./resources/logo.png'}
]
let songItems=Array.from(document.getElementsByClassName('songItem'));


songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].cover; 
    element.getElementsByClassName("song")[0].innerText = songs[i].song; 
})
let songindex=0;
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused|| audioElement.currentTime<=0){
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        audioElement.play();
        gif.style.opacity=1;
    }
    else{
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        audioElement.pause();
        gif.style.opacity=0;
    }
})
audioElement.addEventListener('timeupdate',()=>{
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;

})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].song;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})
document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=8){
        songIndex = 0
    }
    else{console.log("welcome to spotify");

    let audioElement=new Audio('Aasan_Nahin_Yahan.mp3');
    //audioElement.play();
    
    let songs=[{song:"Song1",filepath: ".songs/1.mp3",cover:'./resources/logo.png'},
    {song:"Song2",filepath: ".songs/2.mp3",cover:'./resources/logo.png'},
    {song:"Song3",filepath: ".songs/3.mp3",cover:'./resources/logo.png'},
    {song:"Song4",filepath: ".songs/4.mp3",cover:'./resources/logo.png'},
    {song:"Song5",filepath: ".songs/5.mp3",cover:'./resources/logo.png'},
    {song:"Song6",filepath: ".songs/6.mp3",cover:'./resources/logo.png'},
    {song:"Song7",filepath: ".songs/7.mp3",cover:'./resources/logo.png'},
    {song:"Song8",filepath: ".songs/8.mp3",cover:'./resources/logo.png'}
    ]
    let songItems=Array.from(document.getElementsByClassName('songItem'));
    
    
    songItems.forEach((element, i)=>{ 
        element.getElementsByTagName("img")[0].src = songs[i].cover; 
        element.getElementsByClassName("song")[0].innerText = songs[i].song; 
    })
    let songindex=0;
    let masterPlay=document.getElementById('masterPlay');
    let myProgressBar=document.getElementById('myProgressBar');
    let gif=document.getElementById('gif');
    
    masterPlay.addEventListener('click',()=>{
        if(audioElement.paused|| audioElement.currentTime<=0){
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
            audioElement.play();
            gif.style.opacity=1;
        }
        else{
            masterPlay.classList.remove('fa-pause-circle');
            masterPlay.classList.add('fa-play-circle');
            audioElement.pause();
            gif.style.opacity=0;
        }
    })
    audioElement.addEventListener('timeupdate',()=>{
        progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
        myProgressBar.value=progress;
    
    })
    
    myProgressBar.addEventListener('change',()=>{
        audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
    })
    const makeAllPlays = ()=>{
        Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
            element.classList.remove('fa-pause-circle');
            element.classList.add('fa-play-circle');
        })
    }
    
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.addEventListener('click', (e)=>{ 
            makeAllPlays();
            songIndex = parseInt(e.target.id);
            e.target.classList.remove('fa-play-circle');
            e.target.classList.add('fa-pause-circle');
            audioElement.src = `songs/${songIndex+1}.mp3`;
            masterSongName.innerText = songs[songIndex].song;
            audioElement.currentTime = 0;
            audioElement.play();
            gif.style.opacity = 1;
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
        })
    })
    document.getElementById('next').addEventListener('click', ()=>{
        if(songIndex>=8){
            songIndex = 0
        }
        else{
            songIndex += 1;
        }
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].song;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    
    })
    document.getElementById('previous').addEventListener('click', ()=>{
        if(songIndex<=0){
            songIndex = 0
        }
        else{
            songIndex -= 1;
        }
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
    
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].song;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})
document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].song;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
