$(document).ready(function () {
    $(".about").click(function () {
        $("#howToPlayDiv").hide();
        $("#aboutDiv").toggle();
    });

    $(".howToPlay").click(function () {
        $("#aboutDiv").hide();
        $("#howToPlayDiv").toggle();
    });

    $(".closeAbout").click(function () {
        $("#aboutDiv").hide();
        $("#gameIframe")[0].contentWindow.focus();
    });

    $(".closeHowToPlay").click(function () {
        $("#howToPlayDiv").hide();
        $("#gameIframe")[0].contentWindow.focus();
    });


});



