let TimerFoda;
Check = () => {
    let url = window.location.href;
    if (url == "https://krunker.io/") console.error("diogo viado, jogo n carregou :c");
    else {
        clearInterval(TimerFoda);
        alert("Some do jogo");
        window.location.href = "https://krunker.io";
    }
}

if (window.location.href != "https://krunker.io/")  {
    window.location.href = "https://krunker.io";
    console.error("FUCKKKKKKKKKCCCCCCCCCCCCCCCCCCCCCCCC ");
} else {
    TimerFoda = setInterval(Check, 100);
}
