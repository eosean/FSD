function doFirsr() {
    let canvas = document.getElementById('canvas')
    let context = canvas.getContext('2d')

    context.font = 'bold 50px Tahoma';

    // 第一個字
    // context.textBaseline = 'top | hanging | middle | alphabetic | ideographic | bottom';
    context.textBaseline = 'alphabetic';

    context.strokeText('global', 100, 100);

    // 輔助線
    context.moveTo(100, 100);
    context.lineTo(300, 100);
    context.strokeStyle = 'red';
    context.stroke();

    // context.fillRect(100, 100, 5, 5);
    context.arc(100, 100, 5, 0, 2 * Math.PI);
    context.stroke();

    // 第二個字:加上陰影
    context.shadowColor = 'red';
    context.shadowOffsetX = 5;
    context.shadowOffsetY = 5;
    context.shadowBlur = 5;

    context.fillText('global', 100, 250);

    // 第三個字:四邊都有陰影
    context.shadowOffsetX = 0;
    context.shadowOffsetY = 0;
    context.shadowBlur = 15;
    context.fillStyle = '#fff';

    context.fillText('global', 100, 400);

    // 第四個字:多重陰影
    context.fillText('global', 100, 550);
    context.shadowColor = 'blue';
    context.fillText('global', 100, 550);


}
window.addEventListener('load', doFirsr)
// window.onload = doFirsr
