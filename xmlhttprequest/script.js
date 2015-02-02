(function () {
    var form = document.getElementById("theForm");

    eventsUtility.addEvent(form, "submit", function (event) {
        var xhr = new XMLHttpRequest(),
            data = getRequestBody();

        xhr.open("POST", "textfile.txt", true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                var status = xhr.status;
                if ((status >= 200 && status < 300) ||
                    status === 304) {
                    alert(xhr.responseText);
                } else {
                    alert("something bad happened!");
                }
            }
        };

        xhr.send(data);

        eventsUtility.preventDefault(event);
    });


    var getRequestBody = function () {
        var values = [];

        for (var i = 0, len = form.elements.length; i < len; i = i + 1) {
            var el = form.elements[i],
                name = encodeURIComponent(el.name),
                value = encodeURIComponent(el.value),
                complete = name + "=" + value;
            values.push(complete);
        }

        return values.join("&");
    };

}());