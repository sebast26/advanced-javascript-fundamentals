(function() {
    var form = document.getElementById("theForm"),
        button = form.myButton,
        textbox = form.myTextbox,
        textarea = form.myTextarea,
        select = form.dayOfWeek,
        color = form.color;

    eventsUtility.addEvent(form, "submit", function(event) {
        eventsUtility.preventDefault(event);
    });
    eventsUtility.addEvent(button, "click", function(event) {
        var target = eventsUtility.getTarget(event);
        if (textbox.value === "") {
            alert("please input data");
            textbox.focus();
        }
        if (textarea.value === "") {
            alert("please input data in textarea");
        }

        var selectedIndex = select.selectedIndex;
        var option = select.options[selectedIndex];
        alert(option.value);

        select.remove(3);

        var wedOption = new Option("Czwartek Seba", 3);

        select.add(wedOption, select.options[3]);


        var pickedColors = [];
        for (var i = 0, len = color.length; i < len; i = i + 1) {
            if (color[i].checked) {
                pickedColors.push(color[i].value);
            }
        }
        alert(pickedColors.join(", "));

    });
}());