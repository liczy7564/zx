$(document).ready(function(){
	let Secondary_content = document.getElementsByClassName("Secondary_content");
    for (i = 0; i < Secondary_content.length; i++) {
      Secondary_content[i].style.display = "none"; 
    }
//主要控制次要選項
  let now=0;
	let Secondary = document.getElementsByClassName("Secondary");  
	$(".Main_options").on("click",function(){
    let num = $(this).attr("value");
    Main_options(num);
  });
	$(function () {
		$(".Main_options").on("click", function () {
			$(".Main_options").removeClass("active");
			$(this).addClass("active");
		});
	});
  function Main_options(num) { 
    let i;
    for (i = 0; i < Secondary.length; i++) {
      Secondary[i].style.display = "none"; 
    }
    Secondary[num].style.display = "block"; 

		for (i = 0; i < Secondary_content.length; i++) {
			Secondary_content[i].style.display = "none"; 
		}
		Secondary_content[num].style.display = "block";
	}
	// function myFunction() {		alert("234");
	// let y = element.scrollTop;
	// let Main_options_row = document.getElementsByClassName("Main_options_row");
	// if(y>now){
	// 	alert("234");
	// 	Main_options_row.style.position = "sticky";
	// 	Main_options_row.style.top = "30px";
	// 	now=y;
	// }
	// }
	// $(function () {
	// 	$(".Main_options").on("click", function () {
	// 		$(".Main_options").removeClass("active");
	// 		$(this).addClass("active");
	// 	});
	// });
	// $(function () {
	// 	$(".Secondary_options").on("click", function () {
	// 		$(".Secondary_options").removeClass("active");
	// 		$(this).addClass("active");
	// 	});
	// });
});
