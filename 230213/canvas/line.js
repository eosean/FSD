function doFirsr() {
    let canvas = document.getElementById('canvas')
    context = canvas.getContext('2d')

    // 格線
    if (canvas.width > canvas.height) {
        range = canvas.width / 50
    } else {
        range = canvas.height / 50
    }

    for (let i = 0; i < range; i++) {
        let interval = i * 50

        //水平線
        context.moveTo(0, interval);
        context.lineTo(canvas.width, interval);
        context.fillText(interval, 0, interval);


        //垂直線
        context.moveTo(interval, 0);
        context.lineTo(interval, canvas.height);
        context.fillText(interval, interval, 10);
    }
    context.strokeStyle = 'rgba(0,0,0,0.3)';
    context.stroke();
    //=======================================

    context.lineWidth = 20;
    context.strokeStyle = 'red';

    context.beginPath();
    // context.lineCap='butt | round | square';
    context.lineCap = 'butt';
    context.moveTo(150, 100);
    context.lineTo(300, 100);
    context.stroke();

    context.beginPath();
    context.lineCap = 'round';
    context.moveTo(150, 200);
    context.lineTo(300, 200);
    context.stroke();

    context.beginPath();
    context.lineCap = 'square';
    context.moveTo(150, 300);
    context.lineTo(300, 300);
    context.stroke();

    // lineJoin
    // context.lineJoin='miter | bevel | round';
    context.lineJoin = 'miter';
    context.strokeRect(150, 450, 100, 200);

    context.lineJoin = 'bevel';
    context.strokeRect(350, 450, 100, 200);

    context.lineJoin = 'round';
    context.strokeRect(550, 450, 100, 200);






}
window.addEventListener('load', doFirsr)
// window.onload = doFirsr
