var loadHexRotate = 0
var loadHexWidth = 15
var loadHexMargin = 2
var loadTrans = 200
var loadHexRotateTrans = 1000

if(!String.prototype.includes) {
	String.prototype.includes = function() {
		'use strict'
		return String.prototype.indexOf.apply(this, arguments) !== -1
	}
}

console.log(navigator.userAgent)
var isIE = !(navigator.userAgent.includes('Chrome')||
             navigator.userAgent.includes('Opera')||
             navigator.userAgent.includes('Safari')||
             navigator.userAgent.includes('Firefox')||
             navigator.userAgent.includes('AppleWebKit'))||
             navigator.userAgent.includes('Edge')
if(isIE) {
//	$('#ie').style.display = 'block'
//	$('#ie').style.opacity = '1'
}

$('#ie').addEventListener('click',function(){
	// I don't know why I cannot use my own function.
	$('#ie').style.transition = loadTrans + 'ms'
	$('#ie').style.opacity = '0'
	setTimeout(function(){
		$('#ie').style.display = 'none'
	},loadTrans)
})

let hexElement = $('#load .ani')
let innerElement

innerElement = $n('div','','left')
innerElement.style.borderTopWidth    = loadHexWidth*0.433 + 'vw'
innerElement.style.borderBottomWidth = loadHexWidth*0.433 + 'vw'
innerElement.style.borderRightWidth  = loadHexWidth*0.250 + 'vw'
hexElement.apnd(innerElement)

innerElement = $n('div','','mid')
hexElement.apnd(innerElement)

innerElement = $n('div','','right')
innerElement.style.borderTopWidth    = loadHexWidth*0.433 + 'vw'
innerElement.style.borderBottomWidth = loadHexWidth*0.433 + 'vw'
innerElement.style.borderLeftWidth   = loadHexWidth*0.250 + 'vw'
hexElement.apnd(innerElement)

var hexScale = $('#load>.wrap')
hexScale.style.width  = loadHexWidth       + 'vw'
hexScale.style.height = loadHexWidth*0.866 + 'vw'

loadHexWidth = loadHexWidth - loadHexMargin*2
var hexElement2 = $('#load .ani>.hex')

innerElement = $n('div','','left')
innerElement.style.borderTopWidth    = loadHexWidth*0.433 + 'vw'
innerElement.style.borderBottomWidth = loadHexWidth*0.433 + 'vw'
innerElement.style.borderRightWidth  = loadHexWidth*0.250 + 'vw'
hexElement2.apnd(innerElement)

innerElement = $n('div','','mid')
hexElement2.apnd(innerElement)

innerElement = $n('div','','right')
innerElement.style.borderTopWidth    = loadHexWidth*0.433 + 'vw'
innerElement.style.borderBottomWidth = loadHexWidth*0.433 + 'vw'
innerElement.style.borderLeftWidth   = loadHexWidth*0.250 + 'vw'
hexElement2.apnd(innerElement)

hexElement2.style.width  = loadHexWidth        + 'vw'
hexElement2.style.height = loadHexWidth*0.866  + 'vw'
hexElement2.style.left   = loadHexMargin       + 'vw'
hexElement2.style.top    = loadHexMargin*0.866 + 'vw'

$('#load').style.transition = loadTrans + 'ms'
$('#load>.text').style.transition = loadTrans + 'ms'
setTimeout(function(){
	hexScale.style.transform = 'scale(1)'
	$('#load>.text').style.opacity = '1'
	function rotate(){
		if (document.readyState == 'complete'){
			setTimeout(function(){
				hexScale.style.transform = 'scale(0)'
				$('#load>.text').style.opacity = '0'
				setTimeout(function(){
					$('#load').style.opacity = '0'
					setTimeout(function(){
						$('#load').style.display = 'none'
					},loadTrans)
				},loadHexRotateTrans/2)
			},loadHexRotateTrans)
		}
		else setTimeout(rotate,loadHexRotateTrans)
		loadHexRotate += 60
		hexElement.style.transform = 'rotate(' + loadHexRotate + 'deg)'	
	}
	setTimeout(rotate,loadHexRotateTrans)
},100)
