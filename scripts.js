$(window).resize(function(){
    setSideBar();
 });


 function mudaSideBar() {
     if($("#side_bar").attr('tam') == 'med') {
        sideBarMax();
     } else if($("#side_bar").attr('tam') == 'max') {
        sideBarMed();
     }
 }


 setTimeout(() => {
    setSideBar();
 }, 100);


 function setSideBar() {
    if($(window).width() > 1300) {
        sideBarMax();
    } else if($(window).width() < 800) {
        sideBarMin();
    } else {
        sideBarMed();
    }
 }


function sideBarMax() {
    $("#side_bar").attr('tam', 'max');
    $("#side_bar").addClass('side_bar_max');
    $("#side_bar").removeClass('side_bar_med');
    $("#side_bar").removeClass('side_bar_min');
    $("#title_an").css("padding-left", "0px");
    setTimeout(() => {
        $("#title_alitic").css("opacity", 1);
    }, 300);
}

function sideBarMed() {
    $("#side_bar").attr('tam', 'med');
    $("#side_bar").addClass('side_bar_med');
    $("#side_bar").removeClass('side_bar_max');
    $("#side_bar").removeClass('side_bar_min');
    $("#title_alitic").css("opacity", 0);
    $("#title_an").css("padding-left", "11px");
    // setTimeout(() => {
    //     $("#title_alitic").hide();
    // }, 300);
}

function sideBarMin() {
    $("#side_bar").attr('tam', 'min');
    $("#side_bar").addClass('side_bar_min');
    $("#side_bar").removeClass('side_bar_max');
    $("#side_bar").removeClass('side_bar_med');
    // $("#title_alitic").css("opacity", 0);
    // $("#title_alitic").hide();
}