generateHexBlocks(introBlocks)
generateHexBlocks(howBlocks)

generateRoadmap()

$("#title #whitepaper").click(()=>{alert('To be announced')})

document.addEventListener('scroll', function(){
	if ($("html").scrollTop < 400) $("#navbar").style.opacity = 0;
	else $("#navbar").style.opacity = 1;
});