let container = document.querySelector(".player");
let music = document.querySelector("audio");
let img = document.querySelector("img");
let play = document.getElementById("play");
let title = document.getElementById("title");
let artist = document.getElementById("artist");
let prev = document.getElementById("prev");
let next = document.getElementById("next");

let songs = [
  {
    name: "s1",
    title: "Raataan Lambiya",
    artist: "Jubin Nautiyal",
  },
  {
    name: "s2",
    title: "Ranjha",
    artist: "B Praak",
  },
  {
    name: "s3",
    title: "Jai Hind Ki senaa",
    artist: "Vikram Montrose",
  },
  {
    name: "s4",
    title: "Titliian",
    artist: "UN",
  },
  {
    name: "s5",
    title: "Filaal2",
    artist: "UN",
  },
  {
    name: "s6",
    title: "Jan Meri Jane maN",
    artist: "UN",
  },
  {
    name: "s7",
    title: "Bachapan ka Pyar",
    artist: "UN",
  },
];

let isPlaying = false;
let playMusic = () => {
  isPlaying = true;
  music.play();
  play.classList.replace("bi-play-circle", "bi-pause-circle");

  img.classList.add("anime");
};
let pauseMusic = () => {
  isPlaying = false;
  music.pause();
  play.classList.replace("bi-pause-circle", "bi-play-circle");

  img.classList.remove("anime");
};

play.addEventListener("click", () => {
  // if(isPlaying){
  //     pauseMusic();
  // }else{
  //     playMusic();
  // }
  isPlaying ? pauseMusic() : playMusic();
});

let loadSong = (songs) => {
  title.textContent = songs.title;
  artist.textContent = songs.artist;
  music.src = `music/${songs.name}.mp3`;
  img.src = "image/" + songs.name + ".jpg";
};

songIndex = 0;

let nextSong = () => {
  songIndex = (songIndex + 1) % songs.length;
  loadSong(songs[songIndex]);
  playMusic();
};

let prevSong = () => {
  songIndex = (songIndex - 1 + songs.length) % songs.length;
  loadSong(songs[songIndex]);
  playMusic();
};

next.addEventListener("click", nextSong);
prev.addEventListener("click", prevSong);

//  auto next
// music.addEventListener("ended" , nextSong);

// progress bar
let range = document.getElementById("hp_range");
let slid = document.getElementById("hp_slide");
let current_time = document.getElementById("current_time");
let total_time = document.getElementById("total_time");
music.ontimeupdate = function (T) {
  range.style.width = Math.floor((music.currentTime * 100) / music.duration) + "%";

  // timer

  let min_duretion = Math.floor(music.duration / 60);
  let sec_duretion = Math.floor(music.duration % 60);

  if (music.duration) {
    total_time.textContent = `${min_duretion}:${sec_duretion}`;
  }

  // current Time
  let min_duretioncurrent = Math.floor(music.currentTime / 60);
  let sec_duretioncurrent = Math.floor(music.currentTime % 60);

  if (sec_duretioncurrent < 10) {
    current_time.textContent = ` ${min_duretioncurrent}:0${sec_duretioncurrent}`;
  } else {
    current_time.textContent = ` ${min_duretioncurrent}:${sec_duretioncurrent}`;
  }
};
slid.onclick = function (T) {
  music.currentTime = (T.offsetX / slid.offsetWidth) * music.duration;
};

// Change loop , suffle repeat

let repeatBtn = document.getElementById("repeat-plist");

repeatBtn.addEventListener("click", () => {
  let getText = repeatBtn.innerText;
  switch (getText) {
    case "repeat":
      repeatBtn.innerText = "repeat_one";
      repeatBtn.setAttribute("title", "song looped");
      break;
    case "repeat_one":
      repeatBtn.innerText = "shuffle";
      repeatBtn.setAttribute("title", "playback shuffled");
      break;
    case "shuffle":
      repeatBtn.innerText = "repeat";
      repeatBtn.setAttribute("title", "playlist looped");
      break;
  }
});

//Change songs

music.addEventListener("ended", () => {
  let getText = repeatBtn.innerText;
  switch (getText) {
    case "repeat":
      nextSong();
      break;

    case "repeat_one":
      music.currentTime = 0;
      loadSong(songs[songIndex]);
      playMusic();
      playingSong();
      break;
    case "shuffle":
      let randIndex = Math.floor(Math.random() * songs.length + 1);
      console.log(songIndex);
      do {
        randIndex = Math.floor(Math.random() * songs.length + 1);
      } while (songIndex == randIndex);
      songIndex = randIndex;
      loadSong(songs[songIndex]);
      playMusic();
      break;
  }
});

list;

let musicList = document.querySelector(".music-list");
let moreMusicBtn = document.getElementById("more-music");
let closemoreMusic = document.getElementById("close");
let ulTag = document.querySelector("ul");

moreMusicBtn.addEventListener("click", () => {
  musicList.classList.toggle("show");
});

closemoreMusic.addEventListener("click", () => {
  moreMusicBtn.click();
});


