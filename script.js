function changeColor() {
    var index = Math.random();
    index = index * arr.length;
    index = Math.floor(index) + 1;
    document.body.style.backgroundColor = arr[index];
    document.querySelector("p").textContent = arr[index];

}
var arr = ["#F0F8FF", "#FAEBD7", "#FFFF00", "#F1f5f8", "#EE82EE", "#FF6347", "#87CEEB", "#2E8B57", "#FF0000", "#800080", "#FFC0CB", "#FF4500", "#FFA500", "#808000", "#000080", "#800000", "#008000", "#FF1493", "#00FFFF"];

