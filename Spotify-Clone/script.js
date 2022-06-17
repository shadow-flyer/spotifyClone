console.log("Welcome to PiyushDev Musics");
let a = 'Assets/Musics/1.mp3'
let b = 'Assets/Musics/2.mp3'
let c = 'Assets/Musics/3.mp3'
let d = 'Assets/Musics/4.mp3'
let e = 'Assets/Musics/5.mp3'
let f = 'Assets/Musics/6.mp3'
let g = 'Assets/Musics/7.mp3'
let h = 'Assets/Musics/8.mp3'
let i = 'Assets/Musics/9.mp3'
let j = 'Assets/Musics/10.mp3'

let MyMusic = new Audio(a);
let MyMusic2 = new Audio(b);
let MyMusic3 = new Audio(c);
let MyMusic4 = new Audio(d);
let MyMusic5 = new Audio(e);
let MyMusic6 = new Audio(f);
let MyMusic7 = new Audio(g);
let MyMusic8 = new Audio(h);
let MyMusic9 = new Audio(i);
let MyMusic10 = new Audio(j);
let MyMasterPlay = document.getElementById('MasterPlaybtn')
let MyProgressBar = document.getElementById('ProgressBar')

let temp

MyMasterPlay.addEventListener("click", () => {
    if (MyMusic.paused || MyMusic.currentTime <= 0) {
        MyMusic.play()
        MasterPlaybtn.classList.remove('fa-play-circle')
        MasterPlaybtn.classList.add('fa-pause-circle')
    } else {
        MyMusic.pause()
        MasterPlaybtn.classList.remove('fa-pause-circle')
        MasterPlaybtn.classList.add('fa-play-circle')

    }

});




MyProgressBar.addEventListener('change', () => {
    console.log("change")
    MyMusic.pause()
    MyMusic.currentTime = MyProgressBar.value * MyMusic.duration / 100;
    MyMusic.play()
    MasterPlaybtn.classList.remove('fa-play-circle')
    MasterPlaybtn.classList.add('fa-pause-circle')
})


document.getElementById('playbtn').addEventListener('click', () => {
    if (MyMusic.paused || MyMusic.currentTime <= 0) {
        MyMusic.play()
        playbtn.classList.remove('fa-play-circle')
        playbtn.classList.add('fa-pause-circle')
        MasterPlaybtn.classList.remove('fa-play-circle')
        MasterPlaybtn.classList.add('fa-pause-circle')
        MyMusic.addEventListener('timeupdate', () => {
            progress1 = parseInt((MyMusic.currentTime / MyMusic.duration) * 100);
            MyProgressBar.value = progress1;
        })
    } else {
        MyMusic.pause()
        playbtn.classList.add('fa-play-circle')
        playbtn.classList.remove('fa-pause-circle')
        MasterPlaybtn.classList.remove('fa-pause-circle')
        MasterPlaybtn.classList.add('fa-play-circle')

    }
})
document.getElementById('playbtn2').addEventListener('click', () => {
    if (MyMusic2.paused || MyMusic2.currentTime <= 0) {
        MyMusic2.play()
        MyMusic.pause()
        playbtn.classList.add('fa-play-circle')
        playbtn.classList.remove('fa-pause-circle')
        playbtn2.classList.remove('fa-play-circle')
        playbtn2.classList.add('fa-pause-circle')
        MasterPlaybtn.classList.remove('fa-play-circle')
        MasterPlaybtn.classList.add('fa-pause-circle')
        MyMusic2.addEventListener('timeupdate', () => {
            progress2 = parseInt((MyMusic2.currentTime / MyMusic2.duration) * 100);
            MyProgressBar.value = progress2;
        })

    } else {
        MyMusic2.pause()
        playbtn2.classList.add('fa-play-circle')
        playbtn2.classList.remove('fa-pause-circle')
        MasterPlaybtn.classList.remove('fa-pause-circle')
        MasterPlaybtn.classList.add('fa-play-circle')

    }
})
document.getElementById('playbtn3').addEventListener('click', () => {
    if (MyMusic3.paused || MyMusic3.currentTime <= 0) {
        MyMusic.pause()
        MyMusic2.pause()
        MyMusic3.play()
        playbtn.classList.add('fa-play-circle')
        playbtn.classList.remove('fa-pause-circle')
        playbtn2.classList.remove('fa-play-circle')
        playbtn2.classList.add('fa-pause-circle')
        playbtn3.classList.remove('fa-play-circle')
        playbtn3.classList.add('fa-pause-circle')
        MasterPlaybtn.classList.remove('fa-play-circle')
        MasterPlaybtn.classList.add('fa-pause-circle')

    } else {
        MyMusic3.pause()
        playbtn3.classList.add('fa-play-circle')
        playbtn3.classList.remove('fa-pause-circle')
        MasterPlaybtn.classList.remove('fa-pause-circle')
        MasterPlaybtn.classList.add('fa-play-circle')

    }
})
document.getElementById('playbtn4').addEventListener('click', () => {})
document.getElementById('playbtn5').addEventListener('click', () => {})
document.getElementById('playbtn6').addEventListener('click', () => {})
document.getElementById('playbtn7').addEventListener('click', () => {})
document.getElementById('playbtn8').addEventListener('click', () => {})
document.getElementById('playbtn9').addEventListener('click', () => {})