(function () {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "rss.json.min.txt", true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            var status = xhr.status;
            if ((status >= 200 && status < 300) ||
                status === 304) {

                // retrieving response as a JSON
                var rss = JSON.parse(xhr.responseText);
                alert(rss.channel.title);
                alert(rss.channel.items[0].description);

                // send JavaScript object as JSON
                var json = JSON.stringify(rss);
            }
        }
    };

    xhr.send(null);
}());
