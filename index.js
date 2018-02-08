generateHexBlocks(introBlocks)
generateHexBlocks(howBlocks)

generateRoadmap()

function toBeAnnounced(a){
	if(a == "en") alert("To be announced!")
	if(a == "zh-tw") alert("即將發佈！")
	if(a == "zh-cn") alert("即将发布！")
}

$("#title>#lang>select").addEventListener("change", (event)=>{
	var lang = event.target.value
	if(lang == "en") window.location = "index.html"
	else window.location = "index_" + lang + ".html"
});

$a("#faq>.question").forEach(function(ele) {
	ele.addEventListener("click", (event)=>{
		var curr = event.target;
		var next = curr.nextElementSibling;
		curr.classList.toggle('qa_show');
		next.classList.toggle('qa_show');
	});
});

window.addEventListener("load",()=>{
	document.addEventListener("scroll", ()=>{
		if (($("body").scrollTop || $("html").scrollTop) < 400)
			$("#navbar").style.opacity = ""
		else $("#navbar").style.opacity = 1
	})
})
