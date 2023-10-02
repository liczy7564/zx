$(document).ready(function(){
  let history_text_0=document.querySelector(".history_text_0");
  let history_img_0=document.querySelector(".history_img_0");
  let history_text_1=document.querySelector(".history_text_1");
  let history_img_1=document.querySelector(".history_img_1");
  let history_text_2=document.querySelector(".history_text_2");
  let history_img_2=document.querySelector(".history_img_2");
  $.ajax({
    url:"json/自傳.json",
    success:function(result){
        history_text_0.innerHTML+=result[0]['內容'];
        history_img_0.innerHTML+="<img class='about_img scent' src="+
        result[0]['圖片']+">";
        history_text_1.innerHTML+=result[1]['內容'];
        history_img_1.innerHTML+="<img class='about_img scent' src="+
        result[1]['圖片']+">";
        history_text_2.innerHTML+=result[2]['內容'];
        history_img_2.innerHTML+="<img class='about_img scent' src="+
        result[2]['圖片']+">";
    }  
  });
	let Secondary = document.getElementsByClassName("Secondary"); 
  Secondary[0].style.display = "block";
	let Skill_1=document.querySelector(".Skill_1");
  $.ajax({
    url:"json/skill_程式.json",
    success:function(result){
      for(let i=0;i<result.length;i++){
      Skill_1.innerHTML+="<div class='row'><div class='col'>"+
      result[i]['name']+"</div><div class='col'>"+
      result[i]['what']+"</div><div class='col'>"+
      result[i]['about']+"</div></div>"
      }
    }
  });
  let The_class=document.querySelector(".The_class");
  $.ajax({
    url:"json/教學.json",
    success:function(result){
      for(let i=0;i<result.length;i++){
      The_class.innerHTML+="<div class='carousel-item'><div class='row'><div class='col-md-6 col-xs-12'><div class='class_lt'><div class='Activity_title_1'>"+
      result[i]['名稱']+"</div><div class='class_information'>"+
      result[i]['資訊']+"<br>"+result[i]['老師']+"<br>"+result[i]['分數']+"</div><div class='class_text'>"+result[i]['心得']+ "</div></div></div><div class='col-md-6 col-xs-12'><div class='Activity_rt'><img class='class_img' src="+
      result[i]['圖片']+"></img></div></div></div></div>"
      }
    }
  });
  let Skill_2=document.querySelector(".Skill_2");
  $.ajax({
    url:"json/skill_網頁相關.json",
    success:function(result){
      for(let i=0;i<result.length;i++){
      Skill_2.innerHTML+="<div class='row'><div class='col'>"+
      result[i]['name']+"</div><div class='col'>"+
      result[i]['what']+"</div><div class='col'>"+
      result[i]['about']+"</div></div>"
      }
    }
  });
  let Skill_3=document.querySelector(".Skill_3");
  $.ajax({
    url:"json/skill_其他.json",
    success:function(result){
      for(let i=0;i<result.length;i++){
      Skill_3.innerHTML+="<div class='row'><div class='col'>"+
      result[i]['name']+"</div><div class='col'>"+
      result[i]['what']+"</div><div class='col'>"+
      result[i]['about']+"</div></div>"
      }
    }
  });
 
  let container_Certifications=document.querySelector(".container_Certifications");
  $.ajax({
    url:"json/證照.json",
    success:function(result){
      for(let i=0;i<result.length;i++){
        if(result[i]['Certifications'] === null){
          result[i]['Certifications'] = "";
        }
        if(result[i]['SCert_img'] === null){
          result[i]['SCert_img'] = "";
        }
      container_Certifications.innerHTML+="<div class='Cert'><div class='Cert_text'>證照名稱："+
      result[i]['name']+"</div><div class='Cert_text'>單位:"+
      result[i]['wh']+"</div><div class='Cert_text'>考證日期："+
      result[i]['date']+"</div><img class='Cert_img' src="+
      result[i]['Certifications']+"><img class='SCert_img' src="+
      result[i]['SCert_img']+"></div>"
      }
    }
  });
  let The_about=document.querySelector(".The_about");
  $.ajax({
    url:"json/特質.json",
    success:function(result){
      for(let i=0;i<result.length;i++){
        The_about.innerHTML+="<div class='The_Q'>"+
      result[i]['Q']+"</div><div class='The_A'>"+
      result[i]['A']+"</div>";
      }
    }
  });
  // let The_Q= document.getElementsByClassName("The_q"); 
  let The_A= document.getElementsByClassName("The_A"); 
	$(".The_Q").on("click",function(){
    let num = $(this).attr("value");
    The_Q(num);
  });


    // let i;
    // for (i = 0; i < Secondary.length; i++) {
    //   The_A[i].style.display = "none";
    //   The_Q[i].style.color="#B0B0B0"; 
    // }
    // The_A[num].style.display = "block";
    // The_Q[num].style.color="#474032";
    // $(".The_Q").click(function(){
    //   $(".The_A").slideToggle();
    // }); 

    function The_Q(num) { 
      The_A[num].slideToggle();
    }


主控制開啟副控制
$(".illustrate").click(function(){
  $(".The_illustrate").slideToggle();
}); 
$(".Table").click(function(){
  $(".The_Table").slideToggle();
}); 

let Main_option= document.getElementsByClassName("Main_options"); 
	$(".Main_options").on("click",function(){
    let num = $(this).attr("value");
    Main_options(num);
  });
  function Main_options(num) { 
    let i;
    for (i = 0; i < Secondary.length; i++) {
      Secondary[i].style.display = "none";
      Main_option[i].style.color="#B0B0B0"; 
    }
    Secondary[num].style.display = "block";
    Main_option[num].style.color="#474032";
  }

  // 置頂
$(function(){
  $(".top-Anchor").click(function(){
    $("html,body").animate({scrollTop:0},10);
  });
})
});

