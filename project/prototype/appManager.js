$(document).ready(function(){
 	
	var menuAberto = 0;
	var homeState = 1;
	var option = 1;
	var suboption = 0;
	var sleepActivated =0;
	var sleepAlert=0;
	var distractionActivated=0;
	var distractionAlter=0;
	var alerts=0;
	var desligado=0;
	var informationsAll=0;
	var informationsDetail = 0;
	var irDetectorActivated = 0;
	var camDetectorActivated=0;
	var squareDetector = 0;
	var squareDetectorActivated = 0;
	var nightMode = 0;
	var helpActivated=0;
	var systemInfoActivated=0;
	var userInfoActivated=0;
	var settingFavorites = 0;
	var fav1 = "empty";
	var fav2 = "empty";
	var fav3 = "empty";
	var favSelected = 0;
	var favMode = 0;
	var right=0;
	var confirmation=0;
	var comeFav=0;
 
		
 
 	/***********DECLARACAO DE FUNCOES********/
	var changeSelected = function(){
		if(suboption == 0){
			var submenusize;
			if(option<3) submenusize=3;
			if(option>=3 && option<6) submenusize=2;
			else submenusize=4;
			for(var i=1; i<=submenusize; i++) // esconde o submenu à funcionalidade correspondente (ou definicoes)
				$("#func" + option + "_" + i).css({visibility: "hidden"});
			$("#sub"+option).show();
			$("#func" + option).css({border: "3px solid black"});
			$("#func" + option).css({opacity: "1.0"});
			$("#func" + option).css({ "left": "-=3%", "top": "-=3%" });
			$("#func" + option).animate({ "width": "+=5px", "height": "+=5px" }, "fast");
			$("#func" + option + "Ico").css({ "left": "-=3%", "top": "-=3%" });
			$("#func" + option + "Ico").animate({ "width": "+=5px", "height": "+=5px" }, "fast");
			if(helpActivated) {
				if(menuAberto && !settingFavorites)
					$("#h_"+option).show();
			}	
		}
		
		
		else {
			showHideSubmenu(option,1);//mostra o submenu da option 1
			
			$("#sub"+option+"_"+suboption).show();
			$("#func" + option + "_" + suboption).css({border: "3px solid black"});
			$("#func" + option + "_" + suboption).css({opacity: "1.0"});
			$("#func" + option + "_" + suboption).css({ "left": "-=3%", "top": "-=3%" });
			$("#func" + option + "_" + suboption).animate({ "width": "+=5px", "height": "+=5px" }, "fast");
			$("#func" + option + "_" + suboption + "Ico").css({ "left": "-=3%", "top": "-=3%" });
			$("#func" + option + "_" + suboption + "Ico").animate({ "width": "+=5px", "height": "+=5px" }, "fast");
			if(helpActivated) {
				if(menuAberto && !settingFavorites)
					$("#h_"+option+"_"+suboption).show();
					if(option == 3 && suboption == 2){
						$("#help").css("height","75px");
						$("#help").css("top","505px");	
					}
			}
			
		}	
	};
	
	var clearSelected = function(){
		if(suboption == 0){
			var selected = "#func" + option;
			$("#sub"+option).hide();
			$(selected).css({border: ""});
			$(selected).css({opacity: "0.6"});
			$(selected).css({ "left": "+=3%", "top": "+=3%" });
			$(selected).animate({ "width": "-=5px", "height": "-=5px" }, "fast");
			$(selected + "Ico").css({ "left": "+=3%", "top": "+=3%" });
			$(selected + "Ico").animate({ "width": "-=5px", "height": "-=5px" }, "fast");
			if(helpActivated) {
				$("#h_"+option).hide();
				
				$("#h_base").hide();
				$("#help").css("height",""); 
				$("#help").css("top","");	
			}	
		}
		else {
			var selected = "#func" + option + "_" + suboption;
			$("#sub"+option+"_"+suboption).hide();
			$(selected).css({border: ""});
			$(selected).css({opacity: "0.6"});
			$(selected).css({ "left": "+=3%", "top": "+=3%" });
			$(selected).animate({ "width": "-=5px", "height": "-=5px" }, "fast");
			$(selected + "Ico").css({ "left": "+=3%", "top": "+=3%" });
			$(selected + "Ico").animate({ "width": "-=5px", "height": "-=5px" }, "fast");
			if(helpActivated) {
				$("#h_"+option+"_"+suboption).hide();
				if(option == 3 && suboption == 2){
					$("#help").css("height","");
					$("#help").css("top","");
				}
				$("#h_base").hide();
				$("#help").css("height",""); 
				$("#help").css("top","");		
			}	
		}
	};
	
	var showHideSubmenu = function(option,mode){
		var submenusize;
			if(option<3) submenusize=3;
			if(option>=3 && option<6) submenusize=2;
			else submenusize=4;
			for(var i=1; i<=submenusize; i++){ // mostra o submenu à funcionalidade correspondente (ou definicoes)		
				if(mode == 1)//mostra o submenu
					$("#func" + option + "_" + i).css({visibility: "visible"});
				else//esconde o submenu
					$("#func" + option + "_" + i).css({visibility: "hidden"});
				
			}
	}
		
	
	var startClose = function(first){
		if(first) $(".menu").toggle();
		else {
			$(".menu").toggle('slide', {direction: 'left'}, 1000);
			if(helpActivated && !menuAberto){
				
				$("#h_base").show();
				$("#help").css("height","80px");
						 $("#help").css("top","500px");
				$("#h_1").hide();
			}
			if(helpActivated && menuAberto){
				$("#h_base").hide();
				$("#help").css("height",""); 
				$("#help").css("top","");	
				$("#h_1").show();
			}
		}
	};
	
	var toggleMenu = function(){
		$(".menu").toggle();
		$(".submenu").toggle();
		if(menuAberto) menuAberto = 0;
		else menuAberto = 1;
	};
	
	var refreshTimeDate = function(){
		
		var currentDate = new Date();
		var day = currentDate.getDate();
		var month = currentDate.getMonth() + 1;
		var year = currentDate.getFullYear();
		//document.write("<b>" + day + "/" + month + "/" + year + "</b>");
		if(month < 10) month = "0" + month;
		$("#date").text("" + day +"/" + month + "/" + year);
		//alert("" + day +"/" + month + "/" + year);
		
		var dt = new Date();
		var hours = dt.getHours();
		var minutes = dt.getMinutes();
		if(minutes<10) minutes = "0" + minutes;
		$("#time").text("" + hours + ":" + minutes);
		
		
	}
		
		var dt = new Date();
		var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
		
		var sleepWarning = function(){
		if(sleepActivated){
			$("#alert_s").css({visibility: "visible"});
			sleepAlert=1;
			alerts=1;
			$("#sound")[0].play();
			$("#alert_s").blink();
		}
	}
	var turnOff = function(){
		
		for(var i=1; i<=4; i++) // esconde o submenu à funcionalidade correspondente (ou definicoes)
				$("#func" + option + "_" + i).css({visibility: "hidden"});
		clearSelected();
		menuAberto = 0;
		option = 1;
		suboption = 0;
		sleepActivated =0;
		sleepAlert=0;
		distractionActivated=0;
		distractionAlter=0;
		alerts=0;
		informationsAll=0;
		informationsDetail = 0;
		irDetectorActivated = 0;
		camDetectorActivated=0;
		squareDetector = 0;
		squareDetectorActivated = 0;
		nightMode = 0;
		helpActivated=0;
		systemInfoActivated=0;
		userInfoActivated=0;
		settingFavorites = 0;
		favSelected = 0;
		favMode = 0;
		right=0;
		confirmation=0;
		comeFav=0;
		clearSelected();
		changeSelected();
		//startClose(1);
		$(".menu").hide();
		desligado=1;
		$("#date").hide();
		$("#time").hide();
		$("#help").hide();
		$(".logo").hide();
		$("#func" + option).css({border: "3px solid black"});
		$("#func" + option).css({opacity: "1.0"});
		$("#func" + option).css({ "left": "-=3%", "top": "-=3%" });
		$("#func" + option).animate({ "width": "+=5px", "height": "+=5px" }, "fast");
		$("#func" + option + "Ico").css({ "left": "-=3%", "top": "-=3%" });
		$("#func" + option + "Ico").animate({ "width": "+=5px", "height": "+=5px" }, "fast");
		$(".square").hide();
		$(".squareNight").hide();
		if(nightMode){
			$("body").css({"background-image":"url(backgrounds/background_night.jpg)"});
		}
		else{
			$("body").css({"background-image":"url(backgrounds/background.jpg)"});
		}
		$("#f_a_4_2").css({visibility :"hidden"});
		$("#f_a_4_1").css({visibility :"hidden"});
		$("#f_a_5_1").hide();
		$("#f_a_5_2").hide();
		

		
	}
	var confirmTurnOff = function(){
		$("#turnoff_confirme").show();
		confirmation=1;
	}
	var turnOn = function(){
		$(".logo").show();
		$("#date").show();
		$("#time").show();
		desligado=0;
		right=0;
		homeState=1;
	}
	var distractionWarning = function(){
		if(distractionActivated){
			$("#alert_d").css({visibility: "visible"});
			distractionAlert=1;
			alerts=1;
			$("#sound")[0].play();
			$("#alert_d").blink();
			
		}
	
	}
	
	var activateInformations = function(suboption){
		homeState=0;
		if(suboption==1){
			menuAberto = 0;
			startClose(1);
			changeSelected();
			clearSelected();
			suboption = 0;
			informationsAll=1;
			for(var i=1; i<=2; i++) // esconde o submenu à funcionalidade correspondente (ou definicoes)
				$("#func" + option + "_" + i).css({visibility: "hidden"});
			
			$(".informations_all").css({visibility :"visible"});
			$("#h_3_1").show();
		}
		else{
			menuAberto = 0;
			startClose(1);
			changeSelected();
			clearSelected();
			suboption = 0;
			informationsDetail=1;
			for(var i=1; i<=2; i++) // esconde o submenu à funcionalidade correspondente (ou definicoes)
				$("#func" + option + "_" + i).css({visibility: "hidden"});
			$("#info_detail_c").css({visibility :"visible"});
			$("#text_details").show();			
			$("#h_3_2").show();
			$("#help").css("height","75px");
			$("#help").css("top","505px");
								
		}
	}
	
	
	var activateWarnings = function(suboption){
		if(suboption==2 || suboption == "2"){
			if(sleepActivated == 1){
				sleepActivated = 0;
				$("#f_a_4_2").css({visibility :"hidden"});
			}
			else{
				sleepActivated = 1;
				$("#f_a_4_2").css({visibility :"visible"});
			}
		}
		else if(suboption == 1 || suboption == "1"){
				if(distractionActivated == 1){
					distractionActivated = 0;
		 			$("#f_a_4_1").css({visibility :"hidden"});
				}
				else{
					distractionActivated = 1;
					console.log(distractionActivated);
					$("#f_a_4_1").css({visibility :"visible"});
				}
								
		}
						
	}
	var activateDetectors = function(suboption){
		if(suboption==2){
// 			$("#ir_view_img").toggle();
		
			if(!irDetectorActivated){
				
				if(nightMode){
					$("body").css({"background-image": "url(backgrounds/background_ir_night.jpg)"});
				
				}
				else{
					$("body").css({"background-image": "url(backgrounds/background_ir_day.jpg)"});
				}
					
				irDetectorActivated=1;
			
			}
			
			else{
				if(nightMode){
					$("body").css({"background-image":"url(backgrounds/background_night.jpg)"});
					
				}
				else{
					$("body").css({"background-image":"url(backgrounds/background.jpg)"});
				}
					
		
				irDetectorActivated=0;
			}
			$("#f_a_5_2").toggle();		
		
				
		}
		else{
			if(camDetectorActivated) camDetectorActivated=0;
			else camDetectorActivated=1;
			if(!nightMode){ $(".square").toggle(); }
			else{$(".squareNight").toggle(); }
			$("#f_a_5_1").toggle();
		}
	}
	var activateDefinitions = function(suboption){
		if(suboption==3){
			menuAberto = 0;
			startClose(1);
			changeSelected();
			clearSelected();
			for(var i=1; i<=4; i++) // esconde o submenu à funcionalidade correspondente (ou definicoes)
				$("#func" + option + "_" + i).css({visibility: "hidden"});
			$("#about_system").show();
			systemInfoActivated=1;
			if(helpActivated){ $("#h_6_3").show(); }
			homeState=0;
		}
		if(suboption == 2){
			$(".favorites").show();
			toggleMenu();
			settingFavorites = 1;
			$("#func6_2Ico").attr("src","icons/help.png");
			$("#sub6_2").text("Remove Favorito");
			$("#sub6_2").css("height","+=20%");
			// é preciso aumentar o tamanho do div
			if(helpActivated){
				$("#h_6_2").hide();
				$("#help_fav").show();
			}
		}
		if(suboption == 1){
			menuAberto = 0;
			startClose(1);
			changeSelected();
			clearSelected();
			for(var i=1; i<=4; i++) // esconde o submenu à funcionalidade correspondente (ou definicoes)
				$("#func" + option + "_" + i).css({visibility: "hidden"});
			$("#info_user").show();
			userInfoActivated=1;
			if(helpActivated){
				$("#h_6_1").show();
			}
			homeState=0;
		}
		if(suboption==4) confirmTurnOff();
			
	}
	var activateFunction = function(option, suboption){
		
		if(option==4){
			activateWarnings(suboption);
		}
		if(option==3){
			activateInformations(suboption);
		}
							
		if(option==5){
			activateDetectors(suboption);
		}
		if(option==6){
			activateDefinitions(suboption);
		}
		if(option<3){
			$("#notImplemented").show(500).delay(2000).hide(500);
		}
		
	}
	
	var toggleHelp = function(){
		helpActivated=!helpActivated;
		$("#help").toggle();
		
		$("#h_base").show();
		$("#help").css("height","80px");
		$("#help").css("top","500px");
	}
	/*---------------------Funcoes das teclas-----------*/
	var Left = function(){
			if(confirmation){
				$("#turnoff_confirme").hide();
				confirmation=0;
				return;
			}
			if(favMode){
				$(".favorites").hide();
				favMode = 0;
				return;
			}
			if(settingFavorites && favSelected == 0){
				$(".favorites").hide();
				toggleMenu();
				settingFavorites = 0;
				if(helpActivated){
					$("#help_fav").hide();
					$("#h_6_2").show();
				}
				$("#func6_2Ico").attr("src","icons/star.png");
				$("#sub6_2").text("Favoritos");
				return;
				
			}
			if(informationsAll){
				if(comeFav){
					comeFav=0;
					informationsAll=0;
					$(".informations_all").css({visibility :"hidden"});
					if(helpActivated){
						 $("#h_base").show();
						 $("#help").css("height","80px");
						 $("#help").css("top","500px");
					}
					$("#h_3_1").hide();
					homeState=1;
				}
				else{
					suboption=1;
					option=3;
					menuAberto=1;
					startClose(1);
					clearSelected();
					changeSelected();
					informationsAll=0;
					if(!helpActivated) $("#h_3_1").hide();
					$(".informations_all").css({visibility :"hidden"});
				}
				return;
			
			}
			if(informationsDetail){
				if(comeFav){
					comeFav=0;
					informationsDetail=0;
					$("#info_detail_c").css({visibility :"hidden"});
					$("#text_details").hide();
					$("#h_3_2").hide();
					$("#help").css("height","");
					$("#help").css("top","");
					if(helpActivated){
						 $("#h_base").show();
						 $("#help").css("height","80px");
						 $("#help").css("top","500px");
					}
					homeState=1;
				}
				else{
					suboption=2;
					option=3;
					menuAberto=1;
					startClose(1);
					clearSelected();
					changeSelected();
					informationsDetail=0;
					$("#info_detail_c").css({visibility :"hidden"});
					$("#text_details").hide();
					if(!helpActivated){
						$("#h_3_2").hide();
						$("#help").css("height","");
						$("#help").css("top","");
					}
				}
				return;

			}
			if(systemInfoActivated){
				if(comeFav){
					comeFav=0;
					systemInfoActivated=0;
					$("#about_system").hide();
					if(helpActivated){
						 $("#h_base").show();
						 $("#help").css("height","80px");
						 $("#help").css("top","500px");
					}
					$("#h_6_3").hide();
					homeState=1;
				}
				else{
					suboption=3;
					option=6;
					menuAberto=1;
					startClose(1);
					clearSelected();
					changeSelected();
					systemInfoActivated=0;
					$("#about_system").hide();	
				}
				return;
			}
			if(userInfoActivated){
				if(comeFav){
					comeFav=0;
					userInfoActivated=0;
					$("#info_user").hide();
					if(helpActivated){
						 $("#h_base").show();
						 $("#help").css("height","80px");
						 $("#help").css("top","500px");
					}
					$("#h_6_1").hide();
					homeState=1;
			
				}
				else{
					suboption=1;
					option=6;
					menuAberto=1;
					startClose(1);
					clearSelected();
					changeSelected();
					userInfoActivated=0;
					$("#info_user").hide();
				}
				return;
			}
			if(suboption == 0 && menuAberto == 1){
					 clearSelected();
					 
					 if(option == 1 && favSelected == 0){
					   menuAberto = 0;
					   startClose();
					   homeState = 1;
					  }
					 else{
						 if(option > 1)				 	
						 option -= 1;
					 }
						 
					changeSelected();
				 }
			if(suboption>0 && menuAberto ==1){
				clearSelected();
				suboption=0;
				changeSelected();
			}
		
	}
	
	
	
	var Right = function(){
		 if(informationsAll || informationsDetail || systemInfoActivated || userInfoActivated) return;
		if(confirmation) { 
		
		$("#turnoff_confirme").hide();
		confirmation=0;
		 turnOff();
		return;
		}
		 if(favMode){
			if(fav2 != "empty"){ //fav1 = "option_suboption"
				if(fav2[0] == 6 && fav2[2] == 2) return; /*para ignorar no caso de querer apagar um favorito e nao executar algo*/	
				activateFunction(parseInt(fav2[0]),parseInt(fav2[2]));
				comeFav=1;
				favMode = 0;
				$(".favorites").hide();
				$(".menu").hide();
				showHideSubmenu(fav1[0],0);
				if(fav2[0]==4 || fav2[0]==5) comeFav=0;
			}
				
		}
		else{
		 if(settingFavorites && favSelected == 0){
			 $("#selected").attr("src","icons/fav_2_selected.png");
			 favSelected = 2;
			 toggleMenu(); //alterei aqui
			 if(helpActivated){
			 	//$("#help").children().hide();
				//$("#help_fav").show();
			 }
			
		 }
		 
		 
		else if(menuAberto == 0 && favSelected == 0){
			menuAberto = 1;
			startClose();
			clearSelected();
			changeSelected();
			homeState = 0;
		}
			 
		else{ 
			if(option <6 && suboption == 0){
			 clearSelected();
			 option += 1;
			 changeSelected();
			}
			if(suboption>0){
				if(favSelected != 0){
					//aqui
					if(option == 1 && suboption == 1){
						$("#fav" + favSelected + "_img").attr("src","icons/luzes.png");
					}
					if(option == 1 && suboption == 2){
						$("#fav" + favSelected + "_img").attr("src","icons/portas.png");
					}
					if(option == 1 && suboption == 3){
						$("#fav" + favSelected + "_img").attr("src","icons/vidros.png");
					}
					if(option == 2 && suboption == 1){
						$("#fav" + favSelected + "_img").attr("src","icons/radio.png");
					}
					if(option == 2 && suboption == 2){
						$("#fav" + favSelected + "_img").attr("src","icons/ar_condicionado.png");
					}
					if(option == 2 && suboption == 3){
						$("#fav" + favSelected + "_img").attr("src","icons/piloto_automatico.png");
					}
					if(option == 3 && suboption == 1){
						$("#fav" + favSelected + "_img").attr("src","icons/car_info_details.png");
					}
					else if(option == 3 && suboption == 2){
						$("#fav" + favSelected + "_img").attr("src","icons/car_info_geral.png");
					}
					else if(option == 4 && suboption == 1){
						$("#fav" + favSelected + "_img").attr("src","icons/distracted.png");
					}
					else if(option == 4 && suboption == 2){
						$("#fav" + favSelected + "_img").attr("src","icons/sleepy.png");
					}
					else if(option == 5 && suboption == 1){
						$("#fav" + favSelected + "_img").attr("src","icons/square_detector.png");
					}
					else if(option == 5 && suboption == 2){
						$("#fav" + favSelected + "_img").attr("src","icons/ir_detector.png");
					}
					else if(option == 6 && suboption == 1){
						$("#fav" + favSelected + "_img").attr("src","icons/user.png");
					}
					else if(option == 6 && suboption == 2){
						$("#fav" + favSelected + "_img").attr("src","icons/help.png");/*para voltar a poder "?", fica no lugar dos favoritos*/
					}
					else if(option == 6 && suboption == 3){
						$("#fav" + favSelected + "_img").attr("src","icons/about.png");
					}
					else if(option == 6 && suboption == 4){
						$("#fav" + favSelected + "_img").attr("src","icons/turn_on_off.png");
					}
					
					if(favSelected == 1) fav1 = "" + option + "_" + suboption;
					if(favSelected == 2) fav2 = "" + option + "_" + suboption;
					if(favSelected == 3) fav3 = "" + option + "_" + suboption;
					
					favSelected = 0;
					settingFavorites = 0;
					clearSelected();
					showHideSubmenu(option,0);
					option = 6;
					suboption = 2;
					changeSelected();
					$(".favorites").hide("fast");
					$("#selected").attr("src","icons/fav_no_selected.png");
					
				
					$("#func6_2Ico").attr("src","icons/star.png");
					$("#sub6_2").text("Favoritos");
					$("#sub6_2").css("height","-=20%");
					
					if(!helpActivated){
						$("#help").hide();
						
					}
					$("#help_fav").hide();
				
					
					
				
					
					
				}
				else
					activateFunction(option, suboption);
			}
			
		}
		}
	}
	
	
	
	
	
	var Up = function(){
		if(confirmation) return;
		if(favMode){
			if(fav1 != "empty"){ //fav1 = "option_suboption"
				if(fav1[0] == 6 && fav1[2] == 2) return; /*para ignorar no caso de querer apagar um favorito e nao executar algo*/	
				activateFunction(parseInt(fav1[0]),parseInt(fav1[2]));
				favMode = 0;
				comeFav=1;
				$(".favorites").hide();
				$(".menu").hide();
				showHideSubmenu(fav1[0],0);
				if(fav1[0]==4 || fav1[0]==5) comeFav=0;
			}		 
				
		}
		else{
				
			
			if(homeState && !settingFavorites){//em vez de !menu Aberto e && !settingFavorites
				favMode = 1;
				$(".favorites").show();
				
			}
				
			 if(settingFavorites && favSelected == 0){
				 $("#selected").attr("src","icons/fav_1_selected.png");
				 favSelected = 1;
				 toggleMenu();
				}
				 
			 if(suboption > 0 && menuAberto == 1){
					 clearSelected();
					 suboption -= 1;
					 changeSelected();
			 }
		}
	}

	
	
	var Down = function(){
		if(confirmation) return;
		if(favMode){
			if(fav3 != "empty"){ //fav1 = "option_suboption"
				if(fav3[0] == 6 && fav3[2] == 2) return; /*para ignorar no caso de querer apagar um favorito e nao executar algo*/	
				activateFunction(parseInt(fav3[0]),parseInt(fav3[2]));
				favMode = 0;
				comeFav=1;
				$(".favorites").hide();
				$(".menu").hide();
				showHideSubmenu(fav1[0],0);
				if(fav3[0]==4 || fav3[0]==5) comeFav=0;
			}
			return;
		}
		 else if(settingFavorites && favSelected == 0){
			 $("#selected").attr("src","icons/fav_3_selected.png");
			 favSelected = 3;
			 toggleMenu();
		 }
		 
		 else if(homeState){
			 toggleHelp();
		 }
		else if(menuAberto){
			clearSelected();
			if(option ==6){ //porque as defenicoes tem mais de 2 icones no submenu
				if(suboption < 4)
					suboption +=1;
			
			 	}
				else {
				if(option>=3 && option <6){
				 if(suboption < 2)
					suboption +=1;
			 		}
				}
				if(option<3){
					if(suboption < 3){
							suboption +=1;
			 		}
				}
				 	 
			changeSelected();
		}
	}
	
	var toggleNightMode = function(){
		irDetectorActivated=0;
		
		if(nightMode == 0){
			$("body").css({"background-image": "url(backgrounds/background_night.jpg)"});
			nightMode = 1;
			$("#ir_warning").css("display","none");
		}
		else{
			$("body").css({"background-image": "url(backgrounds/background.jpg)"});
			nightMode = 0;
			$("#ir_warning").css("display","none");
		}
		$("#f_a_4_1").css({visibility :"hidden"});
		$("#f_a_4_2").css({visibility :"hidden"});
		$("#f_a_5_1").hide();
		$("#f_a_5_2").hide();
		$(".square").hide();
		$(".squareNight").hide();
		distractionActivated=0;
		sleepActivated=0;
		irDetectorActivated = 0;
		camDetectorActivated=0;
	
	};
	
	
	var toggleAlert = function(){
		if(nightMode && irDetectorActivated)
			$("#ir_warning").toggle();
		if($("#ir_warning").css("display") == "block")
			$("#sound")[0].play();
		
	}

	/*--------------------------FIM-----------------------*/

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
			if(nightMode && irDetectorActivated){
			 	$("#ir_warning").css("display","none");
			}
			
			switch(code){
				/*Left*/
				case 37: if(desligado) break; Left(); break;
				/*Up*/
				case 38: if(desligado) break; Up(); break;
				/*Right*/
				case 39: if(desligado){ right++; if(right==3) turnOn(); break;} Right(); break;
				/*Down*/
				case 40: if(desligado) break; Down(); break;
				/*S Simular aviso de sono*/
				case 83: if(desligado) break; sleepWarning(); break;
				/*D Simular aviso de distracao*/
				case 68: if(desligado) break; distractionWarning(); break;
				/*B Mudar ambiente (dia/noite)*/
				case 66: if(desligado) break; toggleNightMode(); break;
				/*A Activa/Desactiva o aviso de condução com precaução*/
				case 65: if(desligado) break; toggleAlert();
			}
		}
	});



});
