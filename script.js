score=0;
cross=true;
audio =new Audio('music.mp3');
audiogo=new Audio('gameover.mp3');
setTimeout(()=>{
    audio.play()
},500);

document.onkeydown=function(e){
    console.log("key code is:"+e.keyCode);
    if(e.keyCode==38){
        dino=document.querySelector('.dino');
        dino.classList.add('animatedino');
        setTimeout(()=>{
            dino.classList.remove('animatedino');
        },700);
    }
    if(e.keyCode==39)
    {
        dino=document.querySelector('.dino');
        dinoX=parseInt(
            window.getComputedStyle(dino,null).getPropertyValue('left')
        );
        dino.style.left=dinoX+112+"px";
    }
    if(e.keyCode==37)
    {
        dino=document.querySelector('.dino');
        dinoX=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.left=dinoX-112+"px";
    }
}
setInterval(()=>{
    dino=document.querySelector('.dino');
    gameover=document.querySelector('.gameover');
    obstacle=document.querySelector('.obstacle');
    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));
    offsetx = Math.abs(dx-ox);
    offsety = Math.abs(dy-oy);
    // console.log(offsetx);
    // console.log(offsety);
    if(offsetx <73 && offsety<52)
    {
        gameover.innerHTML="Game over Reload again";
        obstacle.classList.remove("obstacleani");
        audiogo.play();
        setTimeout(()=>{
            audiogo.pause();
            audio.pause();
        },1000)
    }
    else if(offsetx<112 && cross)
    {
        score+=1;
        updateScore(score);
        cross = false;
        setTimeout(()=>{
            cross = true;
        },1000);
        setTimeout(()=>{
            aniDur = parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue('.animate-duration'));
            newDur = aniDur -0.1;
            obstacle.style.animationDuration=newDur+'s';
            // console.log('New animation duration: ',newDur)
        },500);
    }
},10);
function updateScore(score)
{
    scorecount.innerHTML = "Your Score: " + score
}