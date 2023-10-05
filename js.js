$(document).ready(function(){
  let the_history=document.querySelector(".the_history");
  $.ajax({
    url:"json/自傳.json",
    success:function(result){
      for(let i=0;i<result.length;i++){
        the_history.innerHTML+="<div class='The_history'></div><div class='theme' id='"+result[i]['id']+"'><h6 class='theme_title'>"+result[i]['主題']+"</h6><div class='row'><div class='col-md-6 col-xs-12'><div class='summary_lt'><div class='summary_text'>"+result[i]['內容']+"</div></div></div><div class='col-md-6 col-xs-12'><div class='summary_rt'><img class='about_img scent' src='"+result[i]['圖片']+"'</img></div></div></div></div></div>";
      }
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

  // about_特質
  let The_about=document.querySelector(".The_about");
  $.ajax({
    url:"json/特質.json",
    success:function(result){
      for(let i=0;i<result.length;i++){
        The_about.innerHTML+="<div class='The_Q' value='"+i+"'>"+
      result[i]['Q']+"</div><div class='The_A' >"+
      result[i]['A']+"</div>";
      }
      QArecall();
    }
  });
  function QArecall(){
    $(".The_Q").on("click",function(){
      let num = $(this).attr("value");
      The_Q(num);
    });
  }
  function The_Q(num){
    let The_A = document.getElementsByClassName("The_A");
    $(The_A[num]).slideToggle(200);   
  }
  
  $(".time").on("click",function(){
    let num = $(this).attr("value");
    time(num);
  });
  function time(num){
    let The_time = document.getElementsByClassName("The_time");
    $(The_time[num]).slideToggle(200);   
  }
  $(".open_all_1").on("click",function(){
    for (i = 0; i < 3; i++) {
      let The_time = document.getElementsByClassName("The_time");
      $(The_time[i]).slideToggle(200);
    }
  });
  $(".open_all_2").on("click",function(){
    for (i = 3; i < 8; i++) {
      let The_time = document.getElementsByClassName("The_time");
      $(The_time[i]).slideToggle(200);
    }
  });


//主控制開啟副控制
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

