if(!String.prototype.includes) {
	String.prototype.includes = function() {
		"use strict"
		return String.prototype.indexOf.apply(this, arguments) !== -1
	};
}
console.log(navigator.userAgent);
var isIE = !(navigator.userAgent.includes("Chrome")||
			navigator.userAgent.includes("Opera")||
			navigator.userAgent.includes("Safari")||
//			navigator.userAgent.includes("Edge")||
			navigator.userAgent.includes("Firefox")||
			navigator.userAgent.includes("AppleWebKit"))
if(isIE) $("#ie").style.display = "block"

generateHexBlocks(introBlocks)
generateHexBlocks(howBlocks)

generateRoadmap()

function toBeAnnounced(a){
	if(a == "en") alert("To be announced!")
	if(a == "zh-tw") alert("即將發佈！")
	if(a == "zh-cn") alert("即将发布！")
}

$("#title>#lang>select").addEventListener("change", ()=>{
	var lang = $("#title>#lang>select").value
	if(lang == "en") window.location = "index.html"
	else window.location = "index_" + lang + ".html"
});

var transTime = 200
window.addEventListener("load",()=>{
	document.addEventListener("scroll", ()=>{
		if (($("body").scrollTop || $("html").scrollTop) < 400)
			$("#navbar").style.opacity = ""
		else $("#navbar").style.opacity = 1
	})
	$("#ie").addEventListener("click",()=>{ // I don't know why I cannot use my own function.
		$("#ie").style.opacity = "1"
		$("#ie").style.transition = transTime + "ms"
		$("#ie").style.opacity = "0"
		setTimeout(()=>{$("#ie").style.display = "none"},transTime)
	})
})
