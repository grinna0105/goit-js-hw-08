import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const playerIframe = new Player(iframe);

const VIDEO_CURRENT_TIME = "videoplayer-current-time";

playerIframe.on('timeupdate', throttle(onPlay, 1000));

function onPlay({ seconds }) {
  localStorage.setItem(VIDEO_CURRENT_TIME, seconds);
}

const currentTime = localStorage.getItem('videoplayer-current-time');


const load = VIDEO_CURRENT_TIME => {
try {
  const videoOnLoad = localStorage.getItem(VIDEO_CURRENT_TIME);
  return videoOnLoad === null ? undefined : JSON.parse(videoOnLoad);
} catch (error) {
  console.error();
}
};

playerIframe.setCurrentTime(currentTime);