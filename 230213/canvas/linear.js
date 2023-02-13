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

    // let linearGradient = context.createLinearGradient(50, 100, 450, 350);
    let linearGradient = context.createLinearGradient(50, 225, 450, 225);
    linearGradient.addColorStop(0, 'red');
    linearGradient.addColorStop(1, 'blue');
    linearGradient.addColorStop(0.5, 'yellow');


    context.fillStyle = linearGradient;
    context.fillRect(50, 100, 400, 250);

    let radialGradient = context.createRadialGradient(750, 225, 50, 680, 225, 150);
    radialGradient.addColorStop(0, 'red');
    radialGradient.addColorStop(1, 'blue');


    context.fillStyle = radialGradient;
    context.fillRect(550, 100, 400, 250);

    context.translate(250, 600);
    context.lineWidth = 15;
    let radius = 180

    let circle = context.createRadialGradient(0, 0, radius * 0.95, 0, 0, radius * 1.05);
    circle.addColorStop(0, '#666')
    circle.addColorStop(0.5, '#fff')
    circle.addColorStop(1, '#666')


    context.strokeStyle = circle;
    context.beginPath();
    context.arc(0, 0, radius, 0, 2 * Math.PI);
    context.stroke();



    context.translate(-250, -600);



}
window.addEventListener('load', doFirsr)
// window.onload = doFirsr
