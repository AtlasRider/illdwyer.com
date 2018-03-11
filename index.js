
function loadJson(json) {
    document.getElementById("dest").appendChild(
        renderjson
            .set_show_to_level(2)
            .set_icons('+', '-')
            .set_max_string_length(100)(json));
}

var json = [
    {
        "hi": "there"
    }

];

loadJson(json);

