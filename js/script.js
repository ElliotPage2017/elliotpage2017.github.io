$(document).ready(function(){
	$(".q1").hide();
	$(".q2").hide();


	$(".question1").click(function(){
		if($(".q1").is(":hidden")==true) {
		$(".q1").show();}
		else{$(".q1").hide()}
	})
		
		$(".question2").click(function(){
		if($(".q2").is(":hidden")==true) {
		$(".q2").show();}
		else{$(".q2").hide()}
	})
	})




