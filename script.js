$(function () {

	var container = $('#container');
	var bird = $('#bird');
	var pole = $('.pole');
	var pole_1 = $('#pole_1');
	var pole_2 = $('#pole_2');
	var score = $('#score');
	var restart_btn = $('#restart_btn');
	
	var pole_initial_position = parseInt(pole.css('right'));
	var speed = 10;
	var container_width = parseInt(container.width());
	
	setInterval(function(){
	
		var pole_current_position = parseInt(pole.css('right'));
		
		if(pole_current_position > container_width){
			pole_current_position = pole_initial_position;
		}
		
		pole.css('right', pole_current_position + speed);
	
	}, 40);

});
