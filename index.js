generateHexBlocks(introBlocks)
generateHexBlocks(howBlocks)

generateRoadmap()

function toBeAnnounced(a){
	if(a == "en") alert("To be announced!")
	if(a == "zh-tw") alert("即將發佈！")
	if(a == "zh-cn") alert("即将发布！")
}

document.addEventListener("scroll", function(){
	if ($("html").scrollTop < 400) $("#navbar").style.opacity = 0;
	else $("#navbar").style.opacity = 1;
});