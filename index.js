generateHexBlocks(introBlocks)
generateHexBlocks(howBlocks)

generateRoadmap()

$("#title>#lang>select").addEventListener("change", function(){
	var lang = $("#title>#lang>select").value
	if(lang == "en") window.location = "index.html"
	else window.location = "index_" + lang + ".html"
});

function toBeAnnounced(a){
	if(a == "en") alert("To be announced!")
	if(a == "zh-tw") alert("即將發佈！")
	if(a == "zh-cn") alert("即将发布！")
}

window.addEventListener("scroll", function(){
	if ($("html").scrollTop < 400) $("#navbar").style.opacity = "";
	else $("#navbar").style.opacity = 1;
})
