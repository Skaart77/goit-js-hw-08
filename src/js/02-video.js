import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player');
const storageTime = 'videoplayer-current-time';
const TIME_DELAY = 1000;

player.on('timeupdate', throttle(onPlayerTimeUpdate, TIME_DELAY));

function onPlayerTimeUpdate(event) {
    const time = Math.floor(event.seconds);
    localStorage.setItem(storageTime, time);
}
const savedTime = localStorage.getItem(storageTime);

if (savedTime) {
  player.setCurrentTime(savedTime || 0);
}