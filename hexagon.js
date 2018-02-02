var hexBlocks = [
	{
		"id":"pallet",
		"left":50,
		"top":0,
		"width":40
	},{
		"id":"zcash",
		"left":18,
		"top":115,
		"width":14
	},{
		"id":"litecoin",
		"left":33,
		"top":104,
		"width":14
	},{
		"id":"ethereum",
		"left":47,
		"top":130,
		"width":14
	},{
		"id":"bitcoin",
		"left":64,
		"top":120,
		"width":14
	},{
		"id":"iota",
		"left":82,
		"top":104,
		"width":14
	},{
		"id":"blank1",
		"left":22,
		"top":-50,
		"width":14
	},{
		"id":"blank2",
		"left":82,
		"top":3,
		"width":14
	},{
		"id":"blank3",
		"left":16,
		"top":40,
		"width":9
	},{
		"id":"trans1",
		"left":33,
		"top":32,
		"width":11
	}
	,{
		"id":"trans2",
		"left":80,
		"top":45,
		"width":4
	}
	,{
		"id":"trans3",
		"left":64,
		"top":93,
		"width":11
	}
	,{
		"id":"trans4",
		"left":24.5,
		"top":97,
		"width":4
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