	

	$(function() {
	
		
		/* nav update event  */
		$('nav').bind('nav-update', function(e,data){;
			
			var intro = $(data).find('intro').text();
			if(intro == 0) { intro = '';  $('#intro-update-li').removeClass('show') } else { $('#intro-update').addClass('show') }
			$('#intro-update').html(intro);

			var mail = $(data).find('mail').text();
			if(mail == 0) { mail = '';  $('#mail-update-li').removeClass('show') } else { $('#mail-update').addClass('show') }
			$('#mail-update').html(mail);
			
		});
	}

	