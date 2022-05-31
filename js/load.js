// JavaScript Document

$(document).ready(function(){
    
    $(window).on('load resize', function(){
    bannerresize();
    vbannerresize();
    });
    
});
function bannerresize(){ //(depends on your needs to change the ratio
    $fw = $("#s_pic").width();
    $fh = $fw/1920*900;
    $("#s_pic").height($fh);
    $("#m1 img").height($fh);
};
function vbannerresize(){ //mobile (depends on your needs to change the ratio
    $vw = $("#v_pic").width();
    $vh = $vw/750*1334;
    $("#v_pic").height($vh);
    $("#m2 img").height($vh);
}
function vbannerresize(){ //pad (depends on your needs to change the ratio
    $vw = $("#u_pic").width();
    $vh = $vw/768*1024;
    $("#u_pic").height($vh);
    $("#m3 img").height($vh);
}