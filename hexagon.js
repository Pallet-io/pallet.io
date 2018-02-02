var hexBlocks = [
	{
		"id":"pallet",
		"left":50,
		"top":30,
		"width":40
	},{
		"id":"zcash",
		"left":18,
		"top":68,
		"width":14
	},{
		"id":"litecoin",
		"left":33,
		"top":63,
		"width":14
	},{
		"id":"ethereum",
		"left":47,
		"top":72,
		"width":14
	},{
		"id":"bitcoin",
		"left":64,
		"top":68,
		"width":14
	},{
		"id":"iota",
		"left":82,
		"top":62,
		"width":14
	}
]

function generateHexBlcoks(){
	hexBlocks.forEach((e,i,a)=>{
		let hexElement = $("#" + e.id + "-block")
		let innerElement

		innerElement = $new("div","","left")
		innerElement.style.borderTopWidth = e.width*0.433 + "vw"
		innerElement.style.borderBottomWidth = e.width*0.433 + "vw"
		innerElement.style.borderRightWidth = e.width*0.25 + "vw"
		$append(hexElement,innerElement)

		innerElement = $new("div","","mid")
		$append(hexElement,innerElement)

		innerElement = $new("div","","right")
		innerElement.style.borderTopWidth = e.width*0.433 + "vw"
		innerElement.style.borderBottomWidth = e.width*0.433 + "vw"
		innerElement.style.borderLeftWidth = e.width*0.25 + "vw"
		$append(hexElement,innerElement)

		hexElement.style.width = e.width + "vw";
		hexElement.style.height = e.width*0.866 + "vw";
		hexElement.style.left = "calc(" + e.left + "% - " + e.width*0.5 + "vw)";
		hexElement.style.top = "calc(" + e.top + "% - " + e.width*0.433 + "vw)";
	})
}