document.addEventListener('DOMContentLoaded', (event) => {
  // media 上半部介面控制
  let playerTrack = document.querySelector("#player-track");

  const trackName = document.querySelector("#track-name");
  const bandName = document.querySelector("#band-name")
  const albumCover = document.querySelector("#album-cover");
  const playertime = document.querySelector('#track-time');
  let audio = document.querySelector('#media-player #audio')
 
  const playPauseButton = document.querySelector('#play-pause-button');
  // 0 :  playButton play icon  .2 PauseButton Pause icon
  let playPauseButtonIcon = playPauseButton.children[0]
  let
    curMinutes,
    curSeconds,
    durMinutes,
    durSeconds,
    playProgress,
    albumOrderList = ["_1", "_2", "_3", "_4", "_5"],
    trackNames = [
      "Forgiven Fate",
      "Just Stay",
      "Large Smile Mood",
      "Miss You Love",
      "Wedding Invitation"
    ],
    bandNames = [
      "Dan Lebowitz",
      "Aakash Gandhi",
      "Nico Staf",
      "Patiño",
      "Jason Farnham"
    ],
    trackUrl = [
      "./music/Forgiven Fate - Dan Lebowitz.mp3",
      "./music/Just Stay - Aakash Gandhi.mp3",
      "./music/Large Smile Mood - Nico Staf.mp3",
      "./music/Miss You Love - Patiño.mp3",
      "./music/Wedding Invitation - Jason Farnham.mp3"
    ],
    playPreviousTrackButton = document.querySelector("#play-previous"),
    playNextTrackButton = document.querySelector("#play-next"),
    currIndex = -1;
    
  function playPause(){
    // console.log(`play or pause`)
    setTimeout(function(){
       if (audio.paused){
        //  icon 變成暫停按鍵,撥放音樂
        playerTrack.classList.add('active')
        albumCover.classList.add('active')
        playPauseButtonIcon.className = `fa-solid fa-pause`
         audio.play();
        }else{
        //  icon 變成撥放按鍵,暫停音樂  
        playerTrack.classList.remove('active')
        albumCover.classList.remove('active')
        playPauseButtonIcon.className = `fa-solid fa-play`
        audio.pause();

        
       }
    },500)
  }

  function updateCurrTime(){

    // 現在時間左邊
    curSeconds = Math.floor(audio.currentTime % 60 );
    curMinutes = Math.floor(audio.currentTime / 60);
    //歌曲完結時間
    durSeconds = Math.floor(audio.duration % 60);
    durMinutes = Math.floor(audio.duration / 60);
    
    
    if (curSeconds < 10) curSeconds = "0" + curSeconds;
    if (curMinutes < 10) curMinutes = "0" + curMinutes;
    
    if (durMinutes < 10) durMinutes = "0" + durMinutes;
    if (durSeconds < 10) durSeconds = "0" + durSeconds;

    // console.log(durMinutes,durSeconds)
    playProgress = Math.floor((audio.currentTime / audio.duration) * 100);

    if(isNaN(durSeconds)  && isNaN(durMinutes)){
      durSeconds = '00'
      durMinutes = '00'
    } 
     if(isNaN(playProgress) ){
      playProgress = 0
    } 
    
    playertime.children[0].textContent = curMinutes.toString() + ":" + curSeconds.toString()
    playertime.children[1].value = playProgress
    playertime.children[2].textContent = durMinutes.toString() + ":" + durSeconds.toString()
  }

  
  function selectTrack(flag) {
 
    flag === 0 || flag === 1 ?　currIndex++　: currIndex--
    // 樂曲順序Array index 0 ~ 4
    if (currIndex > -1 && currIndex < albumOrderList.length) {
      // 0 === 沒有播放 
      if (flag == 0) playPauseButtonIcon.className = `fa-solid fa-play`;

      // 1 === 撥放中
      else {
        playPauseButtonIcon.className = `fa-solid fa-pause`
      }

     
     
      // 歌曲時間軸歸零 
      playertime.children[1].value = "0"
      playertime.classList.remove('active')
     
      // 現在時間點
      playertime.children[0].innerText = "00:00"
      //完成時間點
      playertime.children[2].innerText = "00:00"
     

      // 撥放器上半部 音樂名,樂團名,樂團封面
      let currtrackNames = trackNames[currIndex];
      let currbandNames = bandNames[currIndex];
      let currArtwork = albumOrderList[currIndex];
    
      audio.src = trackUrl[currIndex]

      // 開啟撥放器,將上半部啟動
      if (flag != 0) {
        audio.play();
        playerTrack.classList.add("active");
        albumCover.classList.add("active");
      }
      // 撥放器曲名 跟 樂團名 跟 曲序號
      trackName.innerText = currtrackNames;
      bandName.innerText = currbandNames;
      currArtwork = albumOrderList[currIndex];  
 
      // 刪除所有專輯ACTIVE
      [...albumCover.children].forEach(el => {
        el.classList.remove('active')
      });

      //替現在的專輯加上Active
      // console.log(currArtwork);
      [...albumCover.children].forEach(el => {

        if (el.dataset.id === currArtwork) {
          el.classList.add('active')
        }
      })
    } else {
   
      // 超過-1 及 index 最大值
      if (flag == 0 || flag == 1) currIndex--;
      else currIndex++;
     
    }

  }



  function initPlayer() {
    // console.log(`init player`)

    selectTrack(0);

    audio.loop = false;

    // 撥放暫停鍵按下
    playPauseButton.addEventListener("click", playPause);

    // 拖曳撥放點點時更新歌曲
    playertime.children[1].addEventListener('input',function(){
      audio.currentTime = (playertime.children[1].value / 100) * audio.duration
    })

    // 每300ms 刷新撥放器時間狀態
    audio.addEventListener('timeupdate',updateCurrTime)

    // 每首歌撥完後自動下一首
    audio.addEventListener('ended',function(){
      console.log(playertime.children[1].value);
      if(currIndex === albumOrderList.length-1){
        //當撥放清單完後自動暫停
        currIndex = -1
        albumCover.classList.remove('active')
        playerTrack.classList.remove('active')
        selectTrack(0)
      }else {
        selectTrack(1)
      }
    })
    // 上一首下一首按下
    playPreviousTrackButton.addEventListener("click", function () {
      selectTrack(-1);
    });
    playNextTrackButton.addEventListener("click", function () {
      selectTrack(1);
    });
  }

  initPlayer();
});