function trim_words(theString, numWords) {
    expString = theString.split(/\s+/,numWords);
    theNewString=expString.join(" ");
    return theNewString;
}

$(document).ready(function () {
    $('.ui.dropdown').dropdown();

    $('#ddTgl a').each(function(i) {
        $(this).click(function() {
            var toggle = $(this).attr('for');
            if($(this).hasClass('active')) {
                $(this).removeClass('active');
                $('#' + toggle).removeClass('active');
                $('#' + toggle).stop().animate({"top":"-40px"});
                $('body').stop().animate({"padding-top":"60px"});
            } else {
                var current = $('#ddTgl a.active').attr('for');
                if(current) {
                    $('#ddTgl a.active').removeClass('active');
                    $('#' + current).removeClass('active');
                    $('#' + current).stop().animate({"top":"-40px"});
                    $('body').stop().animate({"padding-top":"60px"});

                    $(this).addClass('active');
                    $('#' + toggle).addClass('active');
                    $('#' + toggle).stop().animate({"top":"60px"});
                    $('body').stop().animate({"padding-top":"160px"});
                } else {
                    $(this).addClass('active');
                    $('#' + toggle).addClass('active');
                    $('#' + toggle).stop().animate({"top":"60px"});
                    $('body').stop().animate({"padding-top":"160px"});
                }
            }
        });
    });

    $.get('https://blog.organicstart.com/rss/', function(data){
        var count = 0;
        $(data).find('item').each(function(){
            $('#recent-posts').append($('<a></a>').attr('class', 'item').attr('href', $(this).find('link').text()).append($(this).find('title').text().substring(0,45) + '...'));
            count++;
            if (count == 5) {
                return false;
            }
        });
    });

});

$(window).scroll(function() {
    slider();
    if($(document).scrollTop() > $('.ui.main.menu').height()) {
        $('.ui.site.menu').addClass('top');
        $('.ui.site.menu').addClass('fixed');
        $('body').css('padding-top', '6rem');
    } else {
        $('.ui.site.menu').removeClass('top');
        $('.ui.site.menu').removeClass('fixed');
        $('body').css('padding-top', '0');

    }
});
function slider() {
    if ($(document).scrollTop() > 199) {
        /*if($('#icon').hasClass('hidden')) {
            $('#icon').stop().transition('stop').transition('fly down');
        }*/
        $("#icon").stop().animate({"top":"0"});
    } else {
        /*if(!$('#icon').hasClass('hidden')) {
            $('#icon').stop().transition('stop').transition('fly down');
        }*/
        $("#icon").stop().animate({"top":"-200%"});
    }
}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

function isHidden(el) {
    return (el.offsetParent === null)
}

/*$(window).scroll(function(event) {
    if (isHidden(document.getElementById("myAnchor"))) {
        $('#theIcon').animate({"margin-left":"0px"}, "slow");
    } else {
        $('#theIcon').animate({"margin-left":"-64px"}, "slow");
    }
});*/