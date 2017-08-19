$(document).ready(function () {

    /* Crop profile image */

    $(function(){
        $('#cropbox').Jcrop({
            aspectRatio: 1,
            onSelect: updateCoords
        });

    });

    function updateCoords(c)
    {
        $('#x').val(c.x);
        $('#y').val(c.y);
        $('#w').val(c.w);
        $('#h').val(c.h);
    };

    function checkCoords()
    {
        if (parseInt($('#w').val())) return true;
        alert('Please select a crop region then press submit.');
        return false;
    };

    /* end crop functions */

    /* Open and close modal window
     * Change profile image
     */
    $(".modal-trigger").click(function(e){
        e.preventDefault();
        dataModal = $(this).attr("data-modal");
        $("#" + dataModal).css({"display":"block"});
    });

    $(".close-modal, .modal-sandbox").click(function(){
        $(".modal").css({"display":"none"});
    });

/* links hover effect*/
    // exchange image when mouse hover
    $(link_edit_icon).hover(function(){
            $('#edit_icon').attr('src', '../img/edit_icon_black.png');
        },
        function(){
            $('#edit_icon').attr('src', '../img/edit_icon_gray.png');
        });

});