
$(document).ready(function() {

    // Add rollover effects to thumbnail images
    $("#thumbs img").hover(
        function() {
            $(this).css({
                "border": "1px solid darkgreen",
                "box-shadow": "0 0 8px darkgreen"
            });
        },
        function() {
            $(this).css({
                "border": "",
                "box-shadow": ""
            });
        }
    );

    // Click a thumbnail to change the large image and caption
    $("#thumbs img").click(function() {

        var imageSource = $(this).attr("src");
        var imageTitle = $(this).attr("alt");

        $("#lgPic").attr("src", imageSource);
        $("#lgTitle").text(imageTitle);

    });

    // Click the large image to open it in a new window
    $("#lgPic").click(function() {

        var imageSource = $(this).attr("src");

        window.open(imageSource, "_blank");

    });

});
