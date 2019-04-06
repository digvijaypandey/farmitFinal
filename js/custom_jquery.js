$(document).ready(function () {
    $("#searchBtn").click(function () {
        $('.search-container').slideToggle(1000);
    });
});

function contact() {
    if (document.getElementById('contact').style.display === 'none') {
        document.getElementById('contact').style.display === 'block'
    }
}

function cancel() {
    document.getElementById('contact').style.display = 'none'
}
// byProduct

$(document).ready(function () {
    $(".showFeature").click(function () {
        $('.closeFeature').show();
        $('.bydescription').show(1000);
        $(".showFeature").hide();
    });
});
$(document).ready(function () {
    $(".closeFeature").click(function () {
        $('.closeFeature').hide();
        $('.bydescription').hide(1000);
        $(".showFeature").show();
    });
});

//   color selectiion
function selectColor(value) {
    if (value == 'Black') {
        document.getElementById('images').src = 'images/bags/Front-Black.jpg'
    } else if (value == 'Gray') {
        document.getElementById('images').src = 'images/bags/Front-Grey.jpg'
        var imageElement = document.getElementById('images')
        imageElement.classList.add("cf2");
    }

}


$(document).ready(function () {
    $('#topheader .navbar-nav a').on('click', function () {
        $('#topheader .navbar-nav').find('li.active').removeClass('active');
        $(this).parent('li').addClass('active');
    });
});
