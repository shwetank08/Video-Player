const play = document.querySelector('.play');
const backward = document.querySelector('.backward');
const forward = document.querySelector('.forward');
const prevVideo = document.querySelector('.prevVideo');
const nextVideo = document.querySelector('.nextVideo');
const video = document.querySelector('video');
let source = document.querySelector('#source');

const videoLib = [
    {
        link: "./Videos/Pexels Videos 1721320.mp4"
    },
    {
        link: "./Videos/Pexels Videos 2122934.mp4"
    },
    {
        link: "./Videos/pexels-c-technical-6143907.mp4"
    },
    {
        link: "./Videos/pexels-sarowar-hussain-5946371.mp4"
    },
    {
        link: "./Videos/video.mp4"
    }
];

let cur = 1;

function playVideo(){
    console.log("playing");
    if(!video.paused){
        video.pause();
    }else{
        video.play();
    }
}

play.addEventListener('click',playVideo)
backward.addEventListener('click',()=>{
    video.currentTime = video.currentTime - 10;
    playVideo();
})
forward.addEventListener('click',()=>{
    video.currentTime = video.currentTime + 10;
    playVideo();
})
prevVideo.addEventListener('click',()=>{
    cur-=1;
    if(cur<=0){
        cur+=5;
    }
    cur=cur%5;
    cur = Math.abs(cur);
    console.log(cur);
    video.src = videoLib[cur].link;
    playVideo();
})
nextVideo.addEventListener('click',()=>{
    cur+=1;
    cur%=5;
    video.src = videoLib[cur].link;
    playVideo();
})
