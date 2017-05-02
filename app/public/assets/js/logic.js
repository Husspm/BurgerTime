var clicks = 0;
$("body").on("click", function() {
    clicks++;
    $("body").css("color", "black");
    if (clicks % 2 === 0) {
        $("body").css("color", "white");
    }
});