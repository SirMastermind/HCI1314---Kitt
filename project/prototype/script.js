$(document).ready(function(){
 	
	var initialized = 0;
	var option = 1;
	var suboption = 0;
	var sleepActivated =0;
	var sleepAlert=0;
	var distractionActivated=0;
	var distractionAlter=0;
	var alerts=0;
	var informationsAll=0;
	var informationsDetail = 0;
	var irDetector = 0;
	var irDetectorActivated = 0;
	var squareDetector = 0;
	var squareDetectorActivated = 0;
 
 	/***********DECLARACAO DE FUNCOES********/
	var changeSelected = function(){
		if(suboption == 0){
			
			var submenusize = (option==4) ? 3 : 2;
			if (option>=5) submenusize=0;
			for(var i=1; i<=submenusize; i++) // esconde o submenu à funcionalidade correspondente (ou definicoes)
				$("#func" + option + "_" + i).css({visibility: "hidden"});
			
			$("#sub"+option).show();
			$("#func" + option).css({border: "3px solid black"});
			$("#func" + option).css({opacity: "1.0"});
			$("#func" + option).animate({ "width": "+=5px", "height": "+=5px" }, "fast");
			$("#func" + option + "Ico").animate({ "width": "+=5px", "height": "+=5px" }, "fast");
		}
		
		else {
			var submenusize = (option==4) ? 3 : 2;
			if (option>=5) submenusize=0;
			for(var i=1; i<=submenusize; i++) // mostra o submenu à funcionalidade correspondente (ou definicoes)
				$("#func" + option + "_" + i).css({visibility: "visible"});
			
			$("#sub"+option+"_"+suboption).show();
			$("#func" + option + "_" + suboption).css({border: "3px solid black"});
			$("#func" + option + "_" + suboption).css({opacity: "1.0"});
			$("#func" + option + "_" + suboption).animate({ "width": "+=5px", "height": "+=5px" }, "fast");
			$("#func" + option + "_" + suboption+"Ico").animate({ "width": "+=5px", "height": "+=5px" }, "fast");
			
		}	
	};
	
	var clearSelected = function(){
		if(suboption == 0){
			var selected = "#func" + option;
			$("#sub"+option).hide();
			$(selected).css({border: ""});
			$("#func" + option).css({opacity: "0.6"});
			$(selected+"Ico").animate({ "width": "-=5px", "height": "-=5px" }, "fast");
			$(selected).animate({ "width": "-=5px", "height": "-=5px" }, "fast");
			
		}
		else {
			var selected = "#func" + option + "_" + suboption;
			$("#sub"+option+"_"+suboption).hide();
			$(selected).css({border: ""});
			$("#func" + option + "_" + suboption).css({opacity: "0.6"});
			$(selected+"Ico").animate({ "width": "-=5px", "height": "-=5px" }, "fast");
			$(selected).animate({ "width": "-=5px", "height": "-=5px" }, "fast");
		}
	};
		
	
	var startClose = function(first){
		if(first) $(".menu").toggle();
		else $(".menu").toggle('slide', {direction: 'left'}, 1000);
	};
	
	
	var refreshTimeDate = function(){
		
		var currentDate = new Date();
		var day = currentDate.getDate();
		var month = currentDate.getMonth() + 1;
		var year = currentDate.getFullYear();
		//document.write("<b>" + day + "/" + month + "/" + year + "</b>");
		$("#date").text("" + day +"/" + month + "/" + year);
		//alert("" + day +"/" + month + "/" + year);
		};
	
	
	

	changeSelected();
	startClose(1);
	refreshTimeDate();
	
	$(document).keydown( function(e) {
		 var code = e.keyCode || e.which;
		 if(alerts){
				alerts=0;
				if (sleepAlert){
					sleepAlert=0;
					$("#alert_s").css({visibility: "hidden"});
				}
					if (distractionAlert){
					distractionAlert=0;
					$("#alert_d").css({visibility: "hidden"});
				}
		}
				
				
				
				else{
		 if(code == 32){ //space

					if(initialized == 0){
		 				initialized = 1;
						startClose();
						option=1;
						changeSelected();
					}
			
					else if(initialized){

				 		if(suboption == 0){
				 			clearSelected();
				 
						var submenusize = (option==4) ? 3 : 2;
						for(var i=1; i<=submenusize; i++) // mostra o submenu à funcionalidade correspondente (ou definicoes)
						$("#func" + option + "_" + i).css({visibility: "visible"});
						
					
						suboption = 1;
						changeSelected();
				 		}
				 		else{
					 		if(option==2){
						 		if(suboption==2){
										if(sleepActivated == 1){
											sleepActivated = 0;
							 				$("#f_a_2_2").css({visibility :"hidden"});
										}
									else{
										sleepActivated = 1;
							 			$("#f_a_2_2").css({visibility :"visible"});
									}
						 		}
								else if(suboption == 1){
									if(distractionActivated == 1){
										distractionActivated = 0;
							 			$("#f_a_2_1").css({visibility :"hidden"});
									}
									else{
										distractionActivated = 1;
							 			$("#f_a_2_1").css({visibility :"visible"});
									}
								
								}
							
							}
							if(option==1){
								if(suboption==1){
									/*clearSelected();
				 					suboption=0;
				 					changeSelected();
									initialized = 0;
									startClose(1);
									$(".informations_all").css({visibility :"visible"});*/
								}
								else{
								
									
								}
					 		}
							
							if(option==3){
								if(suboption==2){
									$("#ir_view_img").toggle();
								}
								else{
									$(".square").toggle();
								}
							}
				 }
				 
			}
		}

		 else if(code == 37) { //left arrow
		 	
			 if(suboption == 0 && initialized == 1){
				 clearSelected();
				 
				 if(option == 1){
				   initialized = 0;
				   startClose();
				  }
				 else
					 option -= 1;
					 
				changeSelected();
			 }
					 
			
		 }
		 
		  else if(code == 39) { //right arrow
		  
		  	if(initialized == 0){
				initialized = 1;
				startClose();
			}
			 
			else if(option <6 && suboption == 0 && initialized == 1){
				 clearSelected();
				 option += 1;
				  changeSelected();
			 }
	
		 }
		 
		 else if(code == 40) { //down arrow
		 	
			 
			 if(initialized){
				 if (option>=5);
				 else{
					 clearSelected();
				 	if(option == 4){ //porque as defenicoes tem mais de 2 icones no submenu
						if(suboption < 3)
							suboption +=1;
			
				 	}
					else {
					 if(suboption < 2)
						suboption +=1;
				 	}
				 	 
				 	changeSelected();
			 		}
				}
		 }
		 
		  else if(code == 38) { //up arrow
			 
			 if(suboption > 0 && initialized == 1){
				 clearSelected();
				 suboption -= 1;
				 changeSelected();
			 }
				
	
		 }
		 else if(code == 83 && sleepActivated == 1){ // tecla s e funcao detector de sonolencia activado
		 	$("#alert_s").css({visibility: "visible"});
			sleepAlert=1;
			alerts=1;
		 }
		 else if(code == 68 && distractionActivated ==1){ // tecla d e funcao detector de distraccao activado
		 	$("#alert_d").css({visibility: "visible"});
			distractionAlert=1;
			alerts=1;
		 }
		 else if(code == 8){ //back
			 if(suboption){
				 clearSelected();
				 suboption=0;
				 changeSelected();
				 
				 
			 }
			 else{
				 if(initialized){
					clearSelected();
					option=0;					
					changeSelected();
					initialized = 0;
					startClose();
				}
			 }
		 }
	}
	});

   

});
                  
                            
                           
