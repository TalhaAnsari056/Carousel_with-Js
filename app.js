var imagesArray = ["capture0.png","capture1.png","capture2.png","capture3.png","capture4.png"]
var imag = document.getElementById("imagetag")
var count = 0;
// console.log(imagesArray[2])

imag.setAttribute("src","capture4.png");
function changeImage(value) {
    imag.setAttribute("src",imagesArray[count]);
    if (count>=4) {
        count = -1
    }
    if (value === '+') {
        count++;
        return;
    }
    if (value === '-') {
        // count--;
        if(count== -1){
            count=4
        }
        if(count== 4){
            count= -1
        }
        if(count== 3){
            count=2
        }
        if(count== 2){
            count=1
        }
        if(count== 1){
            count= -1
        }
        return;
    }
    count++;
}
// setInterval(changeImage,1000)
changeImage()



