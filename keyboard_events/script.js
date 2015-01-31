(function() {
    var textbox = document.getElementById("txtInput");

    eventsUtility.addEvent(textbox, "keypress",
        function(event) {
            var code = eventsUtility.getCharCode(event);

            if ((code >= 65 && code <= 90) ||
                (code >= 97 && code <= 122)) {
                alert(code);
            } else {
                eventsUtility.preventDefault(event);
            }
        });

    // adding key-shortcut
    eventsUtility.addEvent(document, "keydown",
        function(event) {
            var code = event.keyCode,
                altKey = event.altKey,
                ctrlKey = event.ctrlKey,
                shiftKey = event.shiftKey;

            if (ctrlKey && code === 66) { // B or b
                alert("You pressed Ctrl+B");
            }
    });
}());