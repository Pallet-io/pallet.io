var events = [
	/*{
		"year":2014,
		"month":"Sep",
		"content":"Gcoin start"
	},{
		"year":2014,
		"month":"Oct",
		"content":"Gcoin API start"
	},{
		"year":2014,
		"month":"Dec",
		"content":"Gcoin opensource"
	},{
		"year":2015,
		"month":"Apr",
		"content":"Release Gcoin whitepaper 1.0"
	},{
		"year":2015,
		"month":"Oct",
		"content":"Gcoin wallet apps available"
	},{
		"year":2016,
		"month":"May",
		"content":"Gcoin API v2"
	},{
		"year":2016,
		"month":"Aug",
		"content":"Decoupling of EVM on Gcoin"
	},*/{
		"year":2017,
		"month":"Aug",
		"content":"Concept of Pallet born"
	},{
		"year":2017,
		"month":"Oct",
		"content":"Project of Pallet start"
	},{
		"year":2018,
		"month":"Jan",
		"content":"Pallet bitcoin API release"
	},{
		"year":2018,
		"month":"Feb",
		"content":"NOW"
	},{
		"year":2018,
		"month":"Feb",
		"content":"Release of Pallet white paper"
	},{
		"year":2018,
		"month":"Feb",
		"content":"Release demo video ofan abstract-level contract"
	},{
		"year":2018,
		"month":"Apr",
		"content":"Spec. release of Pallet."
	},{
		"year":2018,
		"month":"May",
		"content":"POC demo of inter-chain exchange"
	},{
		"year":2018,
		"month":"Q3",
		"content":"Beta release of Pallet on Bitcoin."
	},{
		"year":2018,
		"month":"Q3",
		"content":"Connect Pallet and Ethereum network"
	},{
		"year":2018,
		"month":"Q4",
		"content":"Pallet online"
	},{
		"year":2018,
		"month":"Q4",
		"content":"Pallet distribute contract online"
	},{
		"year":2018,
		"month":"Q4",
		"content":"Pallet arbiter contract online"
	},{
		"year":2019,
		"month":"",
		"content":"Connect Pallet to other blockchain"
	}
]

var eventNum = events.length
var lineWidth = 4 // sync with index.css!!
var eventSize = 16 // sync with index.css!!
var eventMargin = 4 // sync with index.css!!

function generateRoadmap(){
	var timeline = $("#timeline")
	let newElement
	let yCursorVw = 0
	let yCursorPx = 0

	newElement = $n("div",null,"vline")
	newElement.style.height = "7vw"
	newElement.style.left = "calc(50% - " + (lineWidth/2) + "px)"
	newElement.style.top = "0"
	timeline.apnd(newElement)
	yCursorVw += 7

	events.forEach((e,i,a)=>{
		newElement = $n("div",null,"event","hex")
			.apnd($n("div",null,"eventBox")
				.apnd((i%2 == 1)?
					$n("div",null,"time")
						.apnd($n("span",null,"month").apnd(e.month))
						.apnd($n("span",null,"year").apnd(e.year)):
					$n("div",null,"time")
						.apnd($n("span",null,"year").apnd(e.year))
						.apnd($n("span",null,"month").apnd(e.month))
				).apnd($n("div",null,"content")
					.apnd($n("span").apnd(e.content))
				)
			)
		newElement.style.top = "calc(" + yCursorVw + "vw + " + yCursorPx + "px)"
		newElement.style.left = "calc(50% - " + (eventSize*0.57735 + eventMargin) + "px)"

		let innerElement
		innerElement = $n("div","","left")
		innerElement.style.borderTopWidth = eventSize*0.5 + "px"
		innerElement.style.borderBottomWidth = eventSize*0.5 + "px"
		innerElement.style.borderRightWidth = eventSize*0.288675 + "px"
		newElement.apnd(innerElement)

		innerElement = $n("div","","mid")
		newElement.apnd(innerElement)

		innerElement = $n("div","","right")
		innerElement.style.borderTopWidth = eventSize*0.5 + "px"
		innerElement.style.borderBottomWidth = eventSize*0.5 + "px"
		innerElement.style.borderLeftWidth = eventSize*0.288675 + "px"
		newElement.apnd(innerElement)

		timeline.apnd(newElement)
		yCursorPx += eventSize + 2*eventMargin

		newElement = $n("div",null,"vline")
		newElement.style.width = lineWidth+"px"
		newElement.style.height = "2.5vw"
		newElement.style.left = "calc(50% - " + (lineWidth/2) + "px)"
		newElement.style.top = "calc(" + yCursorVw + "vw + " + yCursorPx + "px)"
		timeline.apnd(newElement)
		yCursorVw += 2.5
	})

	for(let i=0;i<3;i++){
		yCursorVw += .5
		newElement = $n("div",null,"vline")
		newElement.style.width = lineWidth+"px"
		newElement.style.height = ".5vw"
		newElement.style.left = "calc(50% - " + (lineWidth/2) + "px)"
		newElement.style.top = "calc(" + yCursorVw + "vw + " + yCursorPx + "px)"
		timeline.apnd(newElement)
		yCursorVw += .5
	}

	$("#roadmap").style.height = "calc(" + (yCursorVw+20) + "vw + " + yCursorPx + "px)"
}