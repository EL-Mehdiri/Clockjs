let clock = document.querySelector('.clock');

function tick(){
    let now = new Date();

    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();

    let html = `
        <span>${h}</span> :
        <span>${m}</span> :
        <span>${s}</span>
    `;
    clock.innerHTML = html;
};
setInterval(tick, 1000);
