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

	$(".panel").click(function(event) {
		if (!$(event.target).hasClass('flag')) {
			$("#panels").height('0%');
			$("#or").hide();
			setTimeout(function() {
				$("#close").show();
			}, 3000);
		}

	});

	$("#close").click(function() {
		$("#panels").height('100%');
		// $("#close").hide();
		// $("#new").show();
		// $("#new").click(iffy_fifty)
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
			url: '/flag/'+id,
			type: 'GET',
			success: function(data) {
				
			}
		});
	}
});