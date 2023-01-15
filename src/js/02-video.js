import Player from '@vimeo/player';
import throttle from "lodash.throttle";

const STORAGE_KEY = 'videoplayer-current-time';

const iframeEl = document.getElementById('vimeo-player');
const player = new Player(iframeEl);



player.on("timeupdate", throttle(function (data) {
    const time = data.seconds;
    console.log(time);
   localStorage.setItem(STORAGE_KEY, time)
},1000))

const startTime = +localStorage.getItem(STORAGE_KEY);

player.setCurrentTime(startTime);

