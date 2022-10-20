const player = document.querySelector(".player");
const play = document.querySelector(".play");
const backward = document.querySelector(".backward");
const forward = document.querySelector(".forward");
const prevVideo = document.querySelector(".prevVideo");
const nextVideo = document.querySelector(".nextVideo");
const video = document.querySelector("video");
const controls = document.querySelector(".controls");
const progress = document.querySelector("progress");
const bar = document.querySelector(".progressbar");
const timestamp = document.querySelector(".timestamp");
const start = document.querySelector("#start");
const end = document.querySelector("#end");
const input = document.querySelector('input');
const volumeBtn = document.querySelector(".vol");
const full = document.querySelector('.full')


const videoLib = [
  {
    link: "./Videos/Pexels Videos 1721320.mp4",
  },
  {
    link: "./Videos/Pexels Videos 2122934.mp4",
  },
  {
    link: "./Videos/pexels-c-technical-6143907.mp4",
  },
  {
    link: "./Videos/pexels-sarowar-hussain-5946371.mp4",
  },
  {
    link: "./Videos/video.mp4",
  },
];

let cur = 1;

function playVideo() {
  console.log("playing");
  if (!video.paused) {
    video.pause();
    play.innerHTML = `<i class="fa-solid fa-play"></i>`;
  } else {
    video.play();
    play.innerHTML = `<i class="fa-solid fa-pause"></i>`;
  }
}

play.addEventListener("click", playVideo);
backward.addEventListener("click", () => {
  video.currentTime = video.currentTime - 5;
  if (video.currentTime < 0) {
    video.currentTime = 0;
  }
  video.play();
  play.innerHTML = `<i class="fa-solid fa-pause"></i>`;
});
forward.addEventListener("click", () => {
  video.currentTime = video.currentTime + 5;
  if (video.currentTime > video.duration) {
    video.currentTime = video.duration;
  }
  video.play();
  play.innerHTML = `<i class="fa-solid fa-pause"></i>`;
});
prevVideo.addEventListener("click", () => {
  cur -= 1;
  if (cur <= 0) {
    cur += 5;
  }
  cur = cur % 5;
  cur = Math.abs(cur);
  console.log(cur);
  video.src = videoLib[cur].link;
  playVideo();
});
nextVideo.addEventListener("click", () => {
  cur += 1;
  cur %= 5;
  video.src = videoLib[cur].link;
  playVideo();
});

video.addEventListener("mouseenter", () => {
  controls.classList.remove("hidden");
  timestamp.classList.remove("hidden");
  bar.classList.remove("hidden");
});
player.addEventListener("mouseleave", () => {
  controls.classList.add("hidden");
  timestamp.classList.add("hidden");
  bar.classList.add("hidden");
});

function progressBar() {
  let current = video.currentTime;
  let total = video.duration;

  let progress_percentage = (current * 100) / total;
  
  if(current === total){
    progress_percentage = 100;
  }

  progress.value = Math.floor(progress_percentage);
  let startTimeSec = Math.floor(current);
  if (startTimeSec < 10) {
    startTimeSec = "0" + startTimeSec;
  }
  let startTimeMin = 0;

  let endTimeMin = 0;
  let endTimeSec = Math.floor(video.duration);
  if (endTimeSec < 10) {
    endTimeSec = "0" + endTimeSec;
  }

  let Etime = `${endTimeMin}:${endTimeSec}`;
  let Stime = `${startTimeMin}:${startTimeSec}`;

  start.innerHTML = Stime;
  end.innerHTML = Etime;
}
let repeater;
video.addEventListener("play", () => {
  repeater = setInterval(() => {
    progressBar();
  }, 50);
});
video.addEventListener("pause", () => {
  clearInterval(repeater);
});


function controlVolume(){
    input.classList.remove('hidden');
    let vol = input.value;
    vol/=100;
    console.log(vol);
    video.volume = vol;
}
volumeBtn.addEventListener('mouseover',controlVolume);
volumeBtn.addEventListener('mouseout',()=>{
  input.classList.add('hidden')
});

function openFullscreen() {
    if (full.requestFullscreen) {
      video.requestFullscreen();
    } else if (full.webkitRequestFullscreen) { /* Safari */
      video.webkitRequestFullscreen();
    } else if (full.msRequestFullscreen) { /* IE11 */
      video.msRequestFullscreen();
    }
}
full.addEventListener('click',openFullscreen);