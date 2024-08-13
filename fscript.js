// const now_playing = document.querySelector(".now-playing");
const track_art = document.querySelector(".track-art");
const track_name = document.querySelector(".track-name");
const track_artist = document.querySelector(".track-artist");

const playpause_btn = document.querySelector(".playpause-track");
const next_btn = document.querySelector(".next-track");
const prev_btn = document.querySelector(".prev-track");

const seek_slider = document.querySelector(".seek_slider");
const volume_slider = document.querySelector(".volume_slider");
const curr_time = document.querySelector(".current-time");
const total_duration = document.querySelector(".total-duration");

let isPlaying = false;
let track_index = 0;
let updateTimer;

let curr_track = new Audio();

let track_list = [
{
	name: "Kabhi Tumhe",
	artist: "Darshan Raval",
	image: "covers/kabhitumhe.jpeg",
	path: "Songs/Kabhi Tumhe.mp3"
},
{
	name: "On My Way",
	artist: "Alan Walker Sabrina Carpenter",
	image: "covers/onmyway.jpg",
	path: "Songs/On My Way.mp3"
},
{
    name: "Maan Meri Jaan",
    artist:'King',
    image:"covers/maan.jpg",
    path:"Songs/Maan Meri Jaan.mp3"
},
{
    name: "Tera Zikr",
    artist:'Darshan Raval',
    image:"covers/terazikr.jpg",
    path:"Songs/Tera Zikr.mp3"
}
];
window.onload = function()
{
    loadTrack(track_index);
    playpause_btn.innerHTML = '<i class="fa fa-play fa-3x"></i>';

}
function loadTrack(track_index)
{
    clearInterval(updateTimer);
    resetValues();
  
    curr_track.src = track_list[track_index].path;
    curr_track.load();
    
    track_art.style.backgroundImage ="url(" + track_list[track_index].image + ")";
    track_name.textContent = track_list[track_index].name;
    track_artist.textContent = track_list[track_index].artist;

    console.log('Loading track: ${track_list[track_index].name}');


    curr_track.addEventListener("ended", nextTrack);
    
    updateTimer = setInterval(seekUpdate, 1000);


    // playTrack();
}
    // Function to reset all values to their default
function resetValues() 
{
    curr_time.textContent = "00:00";
    total_duration.textContent = "00:00";
    seek_slider.value = 0;
}
function playTrack()
{
        // Play the loaded track
    curr_track.play();
    isPlaying = true;
       
    playpause_btn.innerHTML = '<i class="fa fa-pause fa-3x"></i>';

    console.log('Playing track: ${track_list[track_index].name}');
}
function pauseTrack()
{
    // Pause the loaded track
    curr_track.pause();
    isPlaying = false;
    // Replace icon with the play icon
    playpause_btn.innerHTML = '<i class="fa fa-play fa-3x"></i>';
    console.log("Track paused");
}
function playpauseTrack()
{
    if (!isPlaying) playTrack();
    else pauseTrack();
}      
function nextTrack()
{
    if (track_index < track_list.length - 1)
    {
        track_index += 1;
    }
    else 
    {
        track_index = 0;
    }
    loadTrack(track_index);
    playTrack();
    console.log('Next track: ${track_list[track_index].name}');
}
function prevTrack()
{
    if (track_index > 0)
    {
        track_index -= 1;
    }
    else
    {
        track_index = track_list.length - 1;
    }
    loadTrack(track_index);
    playTrack();
    console.log('Previous track: ${track_list[track_index].name}');
}
function seekTo()
{
    let seekto = curr_track.duration * (seek_slider.value / 100);
    curr_track.currentTime = seekto;
}
            
function setVolume()
{
    curr_track.volume = volume_slider.value / 100;
}
            
function seekUpdate()
{
    if (!isNaN(curr_track.duration)) 
    {
        let seekPosition = curr_track.currentTime* (100 / curr_track.duration);
        seek_slider.value = seekPosition;
    
        let currentMinutes = Math.floor(curr_track.currentTime / 60);
        let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
        if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }

        curr_time.textContent = currentMinutes + ":" + currentSeconds;

        let durationMinutes = Math.floor(curr_track.duration / 60);
        let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);
        if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }

        total_duration.textContent = durationMinutes + ":" + durationSeconds;
       
    }
}
function setDuration()
{
    let durationMinutes = Math.floor(curr_track.duration / 60);
    let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);
    if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
    total_duration.textContent = durationMinutes + ":" + durationSeconds;

    console.log('Track Duration: ${track_list[track_index].name}');
}
seek_slider.addEventListener('input', seekTo);
volume_slider.addEventListener('input', setVolume);
curr_track.addEventListener('loadedmetadata', setDuration);
curr_track.addEventListener('timeupdate', seekUpdate);

next_btn.addEventListener("click", nextTrack);
prev_btn.addEventListener("click", prevTrack);
loadTrack(track_index);
