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
    }

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
    if($('#link_edit_icon').length == 1) {
        $('#link_edit_icon').hover(function () {
                $('#edit_icon').attr('src', '../img/edit_icon_black.png');
            },
            function () {
                $('#edit_icon').attr('src', '../img/edit_icon_gray.png');
            });
    }
    // some effects when link is active (search page)
    if($('#search_menu').length == 1) {
        $('#search_menu li > a').click(function () {
            $('#search_menu a').removeClass();
            $(this).addClass('active');
        });
    }
/* generate age value for search select */
    if($('#age_from').length == 1 || $('#age_to').length == 1) {
        for (var i = 0; i < 100; i++) {
            $('#age_from').append($('<option> </option>').val(i).html(i));
        }
        for (var j = 0; j < 100; j++) {
            $('#age_to').append($('<option> </option>').val(j).html(j));
        }
    }
/* end generate value */

/* friends page left navbar */
    if($('#nav-friends').length == 1) {
        $('#nav-friends li').click(function () {
            $('#nav-friends li').removeClass();
            $(this).addClass('active');
            if($(this).children()[0].className == "myFriends"){
               $('.followers').css('display', 'none');
               $('.online_group').css('display', 'block');
               $('.nav-friends').css('display', 'inline-block');
               $('.nav-followers').css('display', 'none');
            }
            if($(this).children()[0].className == "myFollowers"){
                $('.online_group').css('display', 'none');
                $('.followers').css('display', 'block');
                $('.nav-friends').css('display', 'none');
                $('.nav-followers').css('display', 'inline-block');
            }
        });
    }

});