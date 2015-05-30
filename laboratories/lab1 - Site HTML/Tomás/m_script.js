$(document).ready(function(){ 		
	$('#75541_about').hide(); 	
	$('#75624_about').hide(); 	
	$('#76231_about').hide(); 

	$('#75541_student').hover(function(){ 		
	$('#75541_about').show(); 
	}); 	

	$('#75624_student').hover(function(){ 		
	$('#75624_about').show(); 
	});	

	$('#76231_student').hover(function(){ 		
	$('#76231_about').show(); 
	});	 	

	$('#75541_student, #75624_student, #76231_student').mouseleave(function(){ 
		$('#75541_about').hide(); 	
		$('#75624_about').hide(); 	
		$('#76231_about').hide(); 
	});  
});