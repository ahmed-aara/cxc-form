function empty(evt) {
    var theEvent = evt || window.event;

    // Handle paste
    if (theEvent.type === 'paste') {
        key = event.clipboardData.getData('text/plain');
    } else {
        // Handle key press
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
    }
    var regex = /[]|\./;
    if (!regex.test(key)) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault) theEvent.preventDefault();
    }
}

function validate(evt) {
    var theEvent = evt || window.event;

    // Handle paste
    if (theEvent.type === 'paste') {
        key = event.clipboardData.getData('text/plain');
    } else {
        // Handle key press
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
    }
    var regex = /[0-9]|\./;
    if (!regex.test(key)) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault) theEvent.preventDefault();
    }
}

function getDate(formate) {
    var now = new Date();
    year = "" + now.getFullYear();
    month = "" + (now.getMonth() + 1);
    if (month.length == 1) {
        month = "0" + month;
    }
    day = "" + now.getDate();
    if (day.length == 1) {
        day = "0" + day;
    }
    hour = "" + now.getHours() % 12;
    if (hour.length == 1) {
        hour = "0" + hour;
    }

    if (hour == "00") {
        hour = "12";
    }

    var ampm = hour >= 12 ? 'PM' : 'AM';
    minute = "" + now.getMinutes();
    if (minute.length == 1) {
        minute = "0" + minute;
    }
    second = "" + now.getSeconds();
    if (second.length == 1) {
        second = "0" + second;
    }

    var date_time;

    if (formate == "yyyy-mm-dd") {
        date_time = year + "-" + month + "-" + day;
    } else if (formate == "dd-mm-yyyy") {
        date_time = day + "-" + month + "-" + year;
    } else if (formate == "yyyy-mm-dd h:m:s") {
        date_time = year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second + ampm;
    } else if (formate == 'yyyy-mm-dd|h:m:s') {
        date_time = year + "-" + month + "-" + day + "|" + hour + ":" + minute + ":" + second + ampm;
    } else if (formate == "h:m:s") {
        date_time = hour + ":" + minute + ":" + second + ampm;
    } else if (formate == 'mm') {
        date_time = month;
    } else if (formate == 'yyyy') {
        date_time = year;
    }

    return date_time;

}

function makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}