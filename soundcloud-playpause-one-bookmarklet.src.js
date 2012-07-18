/* SoundCloud Controls Bookmarklet*/
(function() {
	var poo = function() {
		if (typeof jQuery !== 'undefined' && jQuery('#header-lower').length) {
			init();
		}
		else {
			window.soundcloudcontrolsbookmarklettoid = setTimeout(poo, 100);
		}
	};
	var init = function() {
		if ($('#header-lower .playercontrol').length === 0) {
			var html = '<div class="playercontrol" style="clear:both;margin-left:30px;margin-top:15px;margin-bottom:2px;font-size:1.3em;line-height:1.34;"><a href="" class="playercontrol playercontrol-playpause">Play/Pause</a> '+
						'<a href="" class="playercontrol playercontrol-next">Next</a> '+
						'<a href="" class="playercontrol playercontrol-prev">Prev</a> '+
						'<span class="playerdisplaytitle"></span></div>';
						
			var lastPlayedPlayer = 0;
			var ppContents;
			var hidePlayersOn = true;
			
			var playerdisplaytitle = function(elInPlayer, wasPlaying) {
				var player = elInPlayer.closest('li.player');
				var username = player.find('a.user-name');
				if (wasPlaying) {
					ppContents = '&#9646;&#9646;';
				}
				else {
					ppContents = '&#9654;';
				}
				if (username.length) {
					$('div.playercontrol span.playerdisplaytitle').html((lastPlayedPlayer + 1)+' of '+$('li.player').length+' <span class="pp">'+ppContents+'</span> <strong>'+elInPlayer.closest('li.player').find('.info-header h3:first').html() + '</strong> <span style="font-size:90%;">'+player.find('.subtitle').html() + '</span>');
				}
			};
			var hidePlayers = function() {
				if (hidePlayersOn) {
					$('li.player').css({position:'absolute',left:'-9999px'}).eq(lastPlayedPlayer).css({position:'static'});
				}
			};
			$('li.player a.play').bind('click', function(e) {
				lastPlayedPlayer = $(this).closest('li.player').prevAll('li.player').length;
				hidePlayers();
			});
			
			var newsongcheck = function() {
				var player = $('li.player a.playing');
				var playingAnti;
				if (player.length) {
					playingAnti = 0;
					var playingPlayer = player.closest('li.player').prevAll('li.player').length;
					if (lastPlayedPlayer !== playingPlayer) {
						player.triggerHandler('click');
					}
				}
				else {
					playingAnti = 1;
					player = $('li.player:eq(0) a.play');
				}
				playerdisplaytitle(player, playingAnti);
				newsongchecktimeoutid = setTimeout(newsongcheck, 500);
			};
			var newsongchecktimeoutid = setTimeout(newsongcheck, 500);
			
			$('#header-lower').append(html);
			hidePlayers();
			
			
			/* playercontrol event binding */
			$('div.playercontrol')
			.delegate('a.playercontrol-playpause', 'click', function() {
				var player = $('li.player').eq(lastPlayedPlayer);
				var playing;
				if (player.length) {
					player.find('a.play').trigger('click');
				}
				return false;
				
			})
			.delegate('a.playercontrol-next', 'click', function() {
				var player = $('li.player').eq(lastPlayedPlayer).next();
				var playing;
				if (player.length) {
					player.find('a.play').trigger('click');
				}
				else {
					var nextPage = $('a.next_page');
					if (nextPage.length) {
						window.location = nextPage.attr('href').replace(/#.*/, '') + '#play';
					}
				}
				return false;
				
			})
			.delegate('a.playercontrol-prev', 'click', function() {
				var player = $('li.player').eq(lastPlayedPlayer).prev();
				var playing;
				if (player.length) {
					player.find('a.play').trigger('click');
				}
				else {
					var nextPage = $('a.prev_page');
					if (nextPage.length) {
						window.location = nextPage.attr('href').replace(/#.*/, '') + '#play';
					}
				}
				return false;
				
			});
		}
	}
	clearTimeout(window.soundcloudcontrolsbookmarklettoid);
	poo();
})();
