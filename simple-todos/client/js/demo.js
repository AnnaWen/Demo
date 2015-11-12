/**
 * Created by Alvin on 2015/11/10.
 */
var viewportWidth = $(window).width();
var viewportHeight = $(window).height();

$('#aa').css('height', viewportHeight + 'px');
$('#aa').css('width', viewportWidth + 'px');

$(window).resize(function() {
    var viewportWidth = $(window).width();
    var viewportHeight = $(window).height();

    $('#aa').css('height', viewportHeight + 'px');
    $('#aa').css('width', viewportWidth + 'px');
});