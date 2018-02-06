var scale = "scale(" + 1 + ")"
var rotation = 0
var width = 15
var margin = 2
var loadTrans = 200
var rotateTrans = 1000

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
if(isIE) {
	$("#ie").style.display = "block"
	$("#ie").style.opacity = "1"
}
$("#ie").addEventListener("click",()=>{ // I don't know why I cannot use my own function.
	$("#ie").style.transition = loadTrans + "ms"
	$("#ie").style.opacity = "0"
	setTimeout(()=>{$("#ie").style.display = "none"},loadTrans)
})

let hexElement = $("#load .ani")
let innerElement

innerElement = $n("div","","left")
innerElement.style.borderTopWidth = width*0.433 + "vw"
innerElement.style.borderBottomWidth = width*0.433 + "vw"
innerElement.style.borderRightWidth = width*0.25 + "vw"
hexElement.apnd(innerElement)

innerElement = $n("div","","mid")
hexElement.apnd(innerElement)

innerElement = $n("div","","right")
innerElement.style.borderTopWidth = width*0.433 + "vw"
innerElement.style.borderBottomWidth = width*0.433 + "vw"
innerElement.style.borderLeftWidth = width*0.25 + "vw"
hexElement.apnd(innerElement)

var hexScale = $("#load>.wrap")
hexScale.style.width = width + "vw"
hexScale.style.height = width*0.866 + "vw"

width = width - margin*2
var hexElement2 = $("#load .ani>.hex")

innerElement = $n("div","","left")
innerElement.style.borderTopWidth = width*0.433 + "vw"
innerElement.style.borderBottomWidth = width*0.433 + "vw"
innerElement.style.borderRightWidth = width*0.25 + "vw"
hexElement2.apnd(innerElement)

innerElement = $n("div","","mid")
hexElement2.apnd(innerElement)

innerElement = $n("div","","right")
innerElement.style.borderTopWidth = width*0.433 + "vw"
innerElement.style.borderBottomWidth = width*0.433 + "vw"
innerElement.style.borderLeftWidth = width*0.25 + "vw"
hexElement2.apnd(innerElement)

hexElement2.style.width = width + "vw"
hexElement2.style.height = width*0.866 + "vw"
hexElement2.style.left = margin + "vw"
hexElement2.style.top = margin*0.866 + "vw"

$("#load").style.transition = loadTrans + "ms"
$("#load>.text").style.transition = loadTrans + "ms"
setTimeout(()=>{
	hexScale.style.transform = "scale(1)"
	$("#load>.text").style.opacity = "1"
	function rotate(){
		if (document.readyState == "complete"){
			setTimeout(()=>{
				hexScale.style.transform = "scale(0)"
				$("#load>.text").style.opacity = "0"
				setTimeout(()=>{
					$("#load").style.opacity = "0"
					setTimeout(()=>{$("#load").style.display = "none"},loadTrans)
				},rotateTrans/2)
			},rotateTrans)
		}
		else setTimeout(rotate,rotateTrans)
		rotation += 60;
		hexElement.style.transform = "rotate(" + rotation + "deg)"	
	}
	setTimeout(rotate,rotateTrans)
},100)
