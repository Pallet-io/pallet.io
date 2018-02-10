generateHexBlocks(introBlocks)
generateHexBlocks(howBlocks)

generateRoadmap()

function toBeAnnounced(a){
	if(a == "en") alert("To be announced!")
	if(a == "zh-tw") alert("即將發佈！")
	if(a == "zh-cn") alert("即将发布！")
}

$("#title>#lang>select").addEventListener("change", function(event){
	var lang = event.target.value
	if(lang == "en") window.location = "index.html"
	else window.location = "index_" + lang + ".html"
});

var qas = $a("#faq>.question");
for (let i = 0, len = qas.length; i < len; i++) {
/*.forEach*/(function(ele) {
	ele.addEventListener("click", function(event){
		var curr = event.target;
		var next = curr.nextElementSibling;
		curr.classList.toggle('qa_show');
		next.classList.toggle('qa_show');
	});
})(qas[i]);
}

window.addEventListener("load",function(){
	document.addEventListener("scroll", function(){
		if (($("body").scrollTop || $("html").scrollTop) < 400)
			$("#navbar").style.opacity = ""
		else $("#navbar").style.opacity = 1
	})
})
