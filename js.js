$(document).ready(function(){
	let Secondary = document.getElementsByClassName("Secondary"); 

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
      Skill_1_content_recall();
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
      Skill_2_content_recall();
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
      Skill_3_content_recall();
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
      container_Certifications_content_recall();
    }
  });

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
