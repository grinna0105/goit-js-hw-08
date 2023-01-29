import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const playerIframe = new Player(iframe);

playerIframe.on('timeupdate', throttle(onPlay, 1000));

function onPlay({ seconds }) {
  localStorage.setItem('videoplayer-current-time', seconds);
}

playerIframe.setCurrentTime(localStorage.getItem('videoplayer-current-time'));