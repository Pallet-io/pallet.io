var lang = document.documentElement.lang

function toBeAnnounced(){
	if(lang == 'en') alert('To be announced!')
	if(lang == 'zh-tw') alert('即將發佈！')
	if(lang == 'zh-cn') alert('即将发布！')
}

$('#title>#lang>select').addEventListener('change', function(e){
	var newLang = e.target.value
	if(newLang == 'en') window.location = 'index.html'
	else window.location = 'index_' + newLang + '.html'
})

generateHexBlocks(introBlocks)
generateHexBlocks(howBlocks)

generateTimeline()

$a('#faq>.question').forEach(function(e){
	e.addEventListener('click', function(){
		e.classList.toggle('show')
	})
})

window.addEventListener('load',function(){
	document.addEventListener('scroll', function(){
		if (($('body').scrollTop || $('html').scrollTop) < 400)
			$('#navbar').style.opacity = ''
		else $('#navbar').style.opacity = 1
	})
})
