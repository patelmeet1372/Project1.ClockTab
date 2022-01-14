

// var a = new Date();
// var h = a.getHours();
// var m = a.getMinutes();
// var s = a.getSeconds();
// var time;

// time = h + ":" + m + ":" + s;

// document.getElementById("demo1").innerHTML = time;
// document.getElementById("demo2").innerHTML = time;
// document.getElementById("demo3").innerHTML = time;

// var b = new Date();
// var da = b.getDay();
// var mon = b.getMonth();
// var year = b.getFullYear();

// var date = da + "/" + mon + "/" + year;

// document.getElementById("demo1.1").innerHTML = date;
// document.getElementById("demo2.1").innerHTML = date;
// document.getElementById("demo3.1").innerHTML = date;

function live() {

    var t = new Date();

    var final = t.toLocaleString("en-US", {
        timeZone: "America/Toronto"
    })
    const split = final.split(",");

    document.getElementById("demo1").innerHTML = split[1];
    document.getElementById("demo1.1").innerHTML = split[0];

    setInterval(live, 1000);
}


function live2() {

    var m = new Date();

    var final = m.toLocaleString("en-US", {
        timeZone: "Asia/Kolkata"
    })
    const split = final.split(",");

    document.getElementById("demo2").innerHTML = split[1];
    document.getElementById("demo2.1").innerHTML = split[0];

    setInterval(live2, 1000);
}

function live3() {

    var d = new Date();

    var final = d.toLocaleString("en-US", {
        timeZone: "Asia/Dubai"
    })
    const split = final.split(",");

    document.getElementById("demo3").innerHTML = split[1];
    document.getElementById("demo3.1").innerHTML = split[0];

    setInterval(live3, 1000);
}







