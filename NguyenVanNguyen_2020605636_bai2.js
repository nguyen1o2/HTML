function vietlai(){

    var string = document.getElementById("string").value;
    var arr = string.split(" ");
    var check = true;
    if (arr.length > 20){
        check = false;
        alert("câu không được vượt quá 20 từ");
    }
    for(i=0; i < arr.length;i++){
        if (arr[i].length > 10){
            check = false;
            alert("mỗi từ không được vượt quá 10 ký tự");
            break;
        }
    }
    if (check)
        document.getElementById("result").value = arr.sort().join(" ");

}
function xoa(){
    document.getElementById("string").value ="";
    document.getElementById("result").value = "";
}