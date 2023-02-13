function doFirsr() {
    let canvas = document.getElementById('canvas')
    let context = canvas.getContext('2d')

    context.fillStyle = 'red';
    context.strokeStyle = 'blue';


    context.fillRect(100, 100, 300, 200)
    // context.strokeRect(100, 100, 300, 200)
    context.clearRect(150, 150, 50, 50)

    context.rect(700, 600, 300, 200)
    context.stroke();
    // context.fill();

    //橡皮擦
    // context.clearRect(0, 0, canvas.width, canvas.height);



    // alert(image)
    // let image = 100
    // console.log(image);
}
window.addEventListener('load', doFirsr)
// window.onload = doFirsr
