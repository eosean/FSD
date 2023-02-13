function doFirsr() {
    let canvas = document.getElementById('canvas')
    let context = canvas.getContext('2d')

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

}
window.addEventListener('load', doFirsr)
// window.onload = doFirsr
