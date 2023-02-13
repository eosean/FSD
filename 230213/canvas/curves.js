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

    //四分之一
    context.beginPath();

    context.moveTo(0, canvas.height / 2);
    context.lineTo(canvas.width, canvas.height / 2);

    context.moveTo(canvas.width / 2, 0);
    context.lineTo(canvas.width / 2, canvas.height);

    context.strokeStyle = 'rgba(0,0,0,0.7)';
    context.stroke();
    //=======================================

    context.strokeStyle = 'red';
    context.lineWidth = 5;

    let radius = 150

    //左上
    context.font = 'bold 30px Consolas';

    context.fillText('arcTo()', 50, 50);

    context.beginPath();

    context.moveTo(150, 250);
    context.arcTo(300, 100, 450, 350, 120);
    context.stroke();

    //輔助線
    context.strokeStyle = 'blue';
    context.lineWidth = 1;
    context.moveTo(150, 250);
    context.lineTo(300, 100);
    context.lineTo(450, 350);
    context.stroke();

    context.fillText('(150,250)', 115, 260);

    //左下
    context.strokeStyle = 'red';
    context.lineWidth = 5;

    context.translate(0, 400);

    context.beginPath();

    context.moveTo(150, 250);
    context.arcTo(300, 100, 450, 350, 150);
    context.stroke();

    //輔助線
    context.strokeStyle = 'blue';
    context.lineWidth = 1;
    context.moveTo(150, 250);
    context.lineTo(300, 100);
    context.lineTo(450, 350);
    context.stroke();

    // context.fillText('(150,250)', 130, 260);




    //右上





    //右下



}
function loadImage() {
    context.globalAlpha = 0.5;
    context.drawImage(pic1, 0, 0, canvas.width, canvas.height);

    context.globalAlpha = 1;
    context.drawImage(pic2, 0, 0, 300, 300);
}
window.addEventListener('load', doFirsr)
// window.onload = doFirsr
