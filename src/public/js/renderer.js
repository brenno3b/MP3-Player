const { ipcRenderer } = require('electron');

const playBtn = document.querySelector('#play');
const audio = document.querySelector('audio');
const userSongs = document.querySelector('.userSongs');
const queueSongs = document.querySelector('.queueSongs');
const nowPlayingSongName = document.querySelector('#nowPlayingSongName');
const nextBtn = document.querySelector('#next');
const previousBtn = document.querySelector('#previous');

ipcRenderer.on('updateSongList', (event, songList) => {
    refreshSongList(songList);
});

ipcRenderer.on('playSong', (event, songPath) => {
    audio.setAttribute('src', songPath);
    audio.volume = 0.2;
    audio.play();
});

audio.onended = () => {
    if (getNextSong() == null) {
        alert('Erro: Não há próximo som, adicione um a fila.');
    }
    else {
        ipcRenderer.send('playQueueSong', getNextSong());
        setNowPlayingSong('nextSong');
    }
}

previousBtn.addEventListener('click', () => {
    if (audio.readyState === 0 && nowPlayingSongName.innerHTML == '') {
        noSrcInAudio();
    }
    else if (audio.readyState === 0) {
        alert('Não há som tocando no momento.');
    }
    else if (audio.readyState === 4) {
        if(getPreviousSong() == null) {
            alert('Não há som anterior.');
        }
        else {
            ipcRenderer.send('playQueueSong', getPreviousSong());
            setNowPlayingSong('previousSong');
        }
    }
})

nextBtn.addEventListener('click', () => {
    if (audio.readyState === 0 && nowPlayingSongName.innerHTML == '') {
        noSrcInAudio();
    }
    else if (audio.readyState === 0) {
        const songName = queueSongs.firstElementChild.innerHTML;

        ipcRenderer.send('playQueueSong', songName);
        playBtn.setAttribute('src', '../images/svg/002-pause.svg');
    }
    else if (audio.readyState === 4) {
        if (getNextSong() != null) {
            ipcRenderer.send('playQueueSong', getNextSong());
            setNowPlayingSong('nextSong');
        }
        else {
            alert('Não há próximo som, adicione um a fila.')
        }
    }
});

playBtn.addEventListener('click', () => {
    playQueueSong();
});

function playQueueSong() {
    if (audio.readyState === 0 && nowPlayingSongName.innerHTML == '') {
        noSrcInAudio();
    }
    else if (audio.readyState === 0) {
        const songName = queueSongs.firstElementChild.innerHTML;

        ipcRenderer.send('playQueueSong', songName);
        playBtn.setAttribute('src', '../images/svg/002-pause.svg');
    }
    else if (audio.readyState === 4) {
        if (audio.paused) {
            audio.volume = 0.2;
            audio.play();
    
            playBtn.setAttribute('src', '../images/svg/002-pause.svg');
        }
        else {
            audio.pause();
    
            playBtn.setAttribute('src', '../images/svg/001-play.svg');
        }
    }
}


function refreshSongList(songList) {
    userSongs.innerHTML = '';
    
    songList.forEach((song) => {
        let li = document.createElement('li');
        
        li.innerHTML = song.name + '<img class="addBtn" src="../images/svg/add.svg">'
        
        userSongs.appendChild(li);
    });
    
    document.querySelectorAll('.addBtn').forEach(item => {
        item.addEventListener('click', () => {
            addSongToQueue(item);
        })
    });
}

function addSongToQueue(item) {
    const song = item.parentNode;

    let li = document.createElement('li');

    li.setAttribute('class', 'queueSong');
    li.innerText = song.innerText;

    queueSongs.appendChild(li);

    setNowPlayingSong('newSong');
}

function setNowPlayingSong(event) {
    if (nowPlayingSongName.innerHTML == '' && event == 'newSong') {
        nowPlayingSongName.innerHTML = queueSongs.firstElementChild.innerHTML;
    }
    else if (event == 'nextSong') {
        nowPlayingSongName.innerHTML = getNextSong();
    }
    else if (event == 'previousSong') {
        nowPlayingSongName.innerHTML = getPreviousSong();
    }
}

function getPreviousSong() {
    const nowPlayingSong = nowPlayingSongName.innerHTML;
    const songsInQueue = document.querySelectorAll('.queueSongs li');
    let previousSong;

    for (i = 0; i < songsInQueue.length; i++) {
        if (songsInQueue[i].innerHTML == nowPlayingSong) {
            if (songsInQueue[i - 1] == null || typeof(songsInQueue[i - 1]) == 'undefined') {
                previousSong = null;
            }
            else {
                previousSong = songsInQueue[i - 1].innerHTML;
            }
        }
    }

    return previousSong;
}

function getNextSong() {
    const nowPlayingSong = nowPlayingSongName.innerHTML;
    const songsInQueue = document.querySelectorAll('.queueSongs li');
    let nextSong;

    for (i = 0; i < songsInQueue.length; i++) {
        if(songsInQueue[i].innerHTML == nowPlayingSong) {
            if (songsInQueue[i + 1] == null || typeof(songsInQueue[i + 1]) == 'undefined') {
                nextSong = null;
            }
            else {
                nextSong = songsInQueue[i + 1].innerHTML;
            }
        }
    }
    return nextSong;
}

function noSrcInAudio() {
    alert('Erro: Não há música no áudio. Adicione uma música a fila para continuar.')
}