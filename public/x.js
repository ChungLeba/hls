
import Hls from 'https://cdn.jsdelivr.net/npm/hls.js@1'
var video = document.getElementById('video');
var videoSrc = 'http://103.74.101.152:8000/live/4a6e1ed5d7224853af8e2b9a1464c164/index.m3u8';
if (Hls.isSupported()) {
    var hls = new Hls();
    hls.loadSource(videoSrc);
    hls.attachMedia(video);
} else if (video.canPlayType('application/vnd.apple.mpegurl')) {
    video.src = videoSrc;
}
