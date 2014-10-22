function addPerson(){
    var nameInput = $("#name");
    var nameList  = $("#name-list");
    var progress  = $("#progress");

    var currentValue = progress.attr('value');
    var maxValue     = progress.attr('max');

    if(currentValue == maxValue) {
        alert("The list is compelete");
        return;
    } else {
        var name = nameInput.val();
        nameInput.val('');

        if(name == '') {
            alert("Please enter a name");
            return;
        }

        progress.attr('value', currentValue + 1);

        var li = $("<li>" + name + "," + "&nbsp;" + "</li>");
        nameList.append(li);

        var addNames = $("li").length;
        $("span.value").text(addNames);
    }
}