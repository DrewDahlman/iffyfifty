// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require_tree .
$(function() {

	if (window.localStorage.getItem('score')) {
		$("#score").html(window.localStorage.getItem('score'));
		$("#pass").click(function() {
			var score = parseInt(window.localStorage.getItem('score'));
			if (score > 0) {
				window.localStorage.setItem('score', score - 1);
				window.location = "/";
			}
		});
	} else {
		$("#overlay").show();
		$("#play_btn").click(function() {
			$("#overlay").fadeOut();
			window.localStorage.setItem('score', 0)
		});
	}
	$(".panel").click(function(event) {
		if (!$(event.target).hasClass('flag')) {
			var winner = $("#panels").data('winner');
			var choice = $(this).data('id');
			$("#panel_b,#or").hide();
			$("#panels").css({
				'column-count': '1'
			});
			if (winner == choice) {
				$("#panel_a .fifty").html('CORRECT! +1');
				var score = parseInt(window.localStorage.getItem('score'));
				window.localStorage.setItem('score', score + 1);
				$("#score").html(window.localStorage.getItem('score'))
			} else {
				$("#panel_a .fifty").html("WRONG!");
			}

			setTimeout(function() {
				$("#panels").height('0%');
				$("#or").hide();
				setTimeout(function() {
					$("#close").show();
				}, 3000);
			}, 1500);

		}

	});

	$("#close").click(function() {
		$("#panels").height('100%');
		iffy_fifty();
	});

	$(".flag").click(function(event) {
		var id = $(this).data('id');
		flag(id);
	});

	function iffy_fifty() {
		$.ajax({
			url: '/get_iffy',
			type: 'GET',
			success: function(data) {
				// console.log(data);
				window.location = data.url;
			}
		});
	}

	function flag(id) {
		$.ajax({
			url: '/flag/' + id,
			type: 'GET',
			success: function(data) {

			}
		});
	}
});