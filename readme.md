#Soundcloud Play/Pause Bookmarklet
One day SoundCloud will add play controls to their awesome website, but until then here's a couple of bookmarklets to plug the gap

##The Bookmarklets
[Soundcloud Play/Pause](javascript:(function(){var script=document.createElement('script');script.type='text/javascript';script.async=true;script.src='http://www.dave-smith.info/soundcloud-playpause-bookmarklet/1/soundcloud-playpause-bookmarklet.src.js';var s=document.getElementsByTagName('head')[0];s.parentNode.insertBefore(script, s.parentNode.firstChild);})()) This one adds Play/Pause, Next, Prev controls just below the logo

<p><a href="javascript:(function(){var script=document.createElement('script');script.type='text/javascript';script.async=true;script.src='http://www.dave-smith.info/soundcloud-playpause-bookmarklet/1/soundcloud-playpause-one-bookmarklet.src.js';var s=document.getElementsByTagName('head')[0];s.parentNode.insertBefore(script, s.parentNode.firstChild);})();">Soundcloud Play/Pause One</a> This one does the same as above but additionally hides all but the currently playing waveform</p>
<h2>Tutorial</h2>
<ol>
	<li>Drag one of the above Soundcloud Play/Pause links to your Bookmarks Bar to install</li>
	<li>Go to SoundCloud and explore some tracks</li>
	<li>Click the Bookmarklet in the Bookmarks Bar</li>
	<li>The SoundCloud controls should appear and be ready to use</li>
</ol>
<h2>Limitations</h2>
<p>Currently the bookmarklets won't work on playlists like those found on the Dashboard or Spotlight pages. Also, when a new page is loaded the controls are lost until the bookmarklet is clicked again.</p>
<h2>Support</h2>
<p>I can offer no support unfortunately, but if you'd like to improve or change anything the source code is on GitHub ready to be forked and hacked.</p>
</body>
</html>
