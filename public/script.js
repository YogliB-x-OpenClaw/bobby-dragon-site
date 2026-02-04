// tiny sprinkle: animated gradient on hero avatar
const avatar = document.querySelector('.avatar');
if(avatar){let t=0;setInterval(()=>{t+=0.01;avatar.style.filter = `hue-rotate(${Math.sin(t)*12}deg) saturate(110%)`;},40)}
