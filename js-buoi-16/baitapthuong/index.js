function sumInterger() {
    var sum = 0;
    var n = 0;
    // sử dụng vòng lặp while với điều kiện S < 10000
    while (sum < 10000) {
        //bước nhảy của vòng lặp là n++
        n++;
        //cứ sau mỗi vòng lặp thì tổng S sẽ được cộng dồn với n cho đến khi S > 10000 thì thoát khỏi vòng lặp
        sum += n;
    }
    document.writeln(n);
}
sumInterger();
function baiTap2() {
    var exponent = document.getElementById("exponent").value;
    var base = document.getElementById("base").value;
    var i = 1 * 1;
    var sum = base * 1;

    while (i < exponent) {
        i++
        sum += Math.pow(base, i);
    }
    document.getElementById("resultBT2").innerHTML = sum;
}
function ex3() {
    var n = document.getElementById("txtNum3").value;
    var i = 1;
    var sum = 1;
    while (i <= n) {
        sum *= i + ''
        i++
    }
    // document.write(sum);
    document.getElementById("resultBT3").innerHTML = sum;
}

function baiTap4() {
    var i = 1;
    var result = '';
    while (i <= 10) {
        if (i % 2 == 0) {
            result += '<div style="background-color:#DC3545;color:white;height:25px">div chẵn</div>'
        }
        else {
            result += '<div style="background-color:#0D6EFD;color:white;height:25px">div lẻ</div>'
        }
        i++
    }
    document.getElementById("resultBT4").innerHTML = result;
}