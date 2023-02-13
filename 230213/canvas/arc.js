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
    context.translate(250, 200); //從此之後，(250, 200) 就是 (0, 0)


    context.beginPath();
    context.arc(0, 0, radius, 0, Math.PI, false);
    context.stroke();

    context.translate(-250, -200);

    //右上
    context.translate(750, 200);

    context.beginPath();
    context.arc(0, 0, radius, 0, Math.PI, true);
    context.stroke();

    context.translate(-750, -200);

    //左下
    context.translate(250, 600);

    context.beginPath();
    context.arc(0, 0, radius, 0, 2 * Math.PI, true);
    context.stroke();

    context.translate(-250, -600);


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
