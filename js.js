$(document).ready(function(){
	let Secondary = document.getElementsByClassName("Secondary"); 

	// function jump(v){
	// 	document.getElementByld(v).scrollintoView(true);
	// 	}

	$(".Main_options").on("click",function(){
    let num = $(this).attr("value");
    Main_options(num);
  });
  function Main_options(num) { 
    let i;
    for (i = 0; i < Secondary.length; i++) {
      Secondary[i].style.display = "none"; 
    }
    Secondary[num].style.display = "block"; 
  }
$(function(){
  $(".top-Anchor").click(function(){
    $("html,body").animate({scrollTop:0},10);
  });
})
});
