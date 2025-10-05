 console.log("welcome to spoify");

 //initialize the variables
let songIndex = 0;
let audioElement = new Audio('./songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

 let songs =[
    {songName: "Maate Vinadhuga", filePath: "songs/3.mp3", coverPath: "./images/maate vinadhuga .jpeg" },
    {songName: "Adhi Dha Surprisu", filePath: "songs/1.mp3", coverPath: "./images/adhi dha surprisu.jpeg" },
    {songName: "Baguntundhi Nuvvu Navvithe", filePath: "songs/2.mp3", coverPath: "./images/baguntundi nuvvu navvithe.jpeg" },
    {songName: "Mr. Majnu", filePath: "songs/4.mp3", coverPath: "./images//mr majnu.jpeg" },
    {songName: "Nallanchu Thellacheera", filePath: "songs/5.mp3", coverPath: "./images/nallanchu thellucheera song.jpeg" },
    {songName: "Vachindamma", filePath: "songs/Vachindamma Video .mp3", coverPath: "./images/geetha govindam.jpeg" },
    {songName: "Vibe Undi", filePath: "songs/Vibe Undi .mp3", coverPath: "./images/vibe undi.jpeg" },
 ]

 

 //audioElement.play();
 songItems.forEach((element, i)=>{
   element.getElementsByTagName("img")[0].src=songs[i].coverPath;
   element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
 })

 //handel play/pause click
   
  masterPlay.addEventListener('click', ()=>{
   if(audioElement.paused || audioElement.currentTime<=0){
      audioElement.play();
      masterPlay.classList.remove('fa-circle-play');
      masterPlay.classList.add('fa-pause');
      gif.style.opacity = 1;
   }
   else{
      audioElement.pause();
      masterPlay.classList.remove('fa-pause');
      masterPlay.classList.add('fa-circle-play');
      gif.style.opacity = 0; 
   }
  })
 //listen To Events
audioElement.addEventListener('timeupdate', ()=>{
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
   audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause');
        element.classList.add('fa-circle-play');
    })
 }

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
   element.addEventListener('click', (e)=>{
   makeAllPlays();
   songIndex = parseInt(e.target.id);
   e.target.classList.remove('fa-circle-play');
   e.target.classList.add('fa-pause');
   audioElement.src = `songs/${songIndex+1}.mp3`;
   masterSongName.innerText = songs[songIndex].songName;
   audioElement.currentTime = 0 ;
   audioElement.play();
   masterPlay.classList.remove('fa-circle-play');
   masterPlay.classList.add('fa-pause');
   })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('a-pause');

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
    masterPlay.classList.add('a-pause');
})