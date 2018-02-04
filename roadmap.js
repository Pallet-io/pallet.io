var lang = $("#title>#lang>select").value

var events = [
	/*{
		"year":2014,
		"month":"Sep",
		"content": {
			"en":"Gcoin start",
			"zh-tw":""
		}
	},{
		"year":2014,
		"month":"Oct",
		"content": {
			"en":"Gcoin API start",
			"zh-tw":""
		}
	},{
		"year":2014,
		"month":"Dec",
		"content": {
			"en":"Gcoin opensource",
			"zh-tw":""
		}
	},{
		"year":2015,
		"month":"Apr",
		"content": {
			"en":"Release Gcoin whitepaper 1.0",
			"zh-tw":""
		}
	},{
		"year":2015,
		"month":"Oct",
		"content": {
			"en":"Gcoin wallet apps available",
			"zh-tw":""
		}
	},{
		"year":2016,
		"month":"May",
		"content": {
			"en":"Gcoin API v2",
			"zh-tw":""
		}
	},{
		"year":2016,
		"month":"Aug",
		"content": {
			"en":"Decoupling of EVM on Gcoin",
			"zh-tw":""
		}
	},*/{
		"year":2017,
		"month":"Aug",
		"content": {
			"en":"Concept of Pallet born",
			"zh-tw":"創始 Pallet 概念"
		}
	},{
		"year":2017,
		"month":"Oct",
		"content": {
			"en":"Project of Pallet start",
			"zh-tw":"正式啟動 Pallet 專案"
		}
	},{
		"year":2018,
		"month":"Jan",
		"content": {
			"en":"Pallet bitcoin API release",
			"zh-tw":"釋出支援比特幣之 Pallet API"
		}
	},{
		"year":2018,
		"month":"Feb",
		"content": {
			"en":"NOW",
			"zh-tw":"現在"
		}
	},{
		"year":2018,
		"month":"Feb",
		"content": {
			"en":"Release of Pallet white paper",
			"zh-tw":"釋出 Pallet 白皮書"
		}
	},{
		"year":2018,
		"month":"Feb",
		"content": {
			"en":"Release demo video ofan abstract-level contract",
			"zh-tw":"釋出泛階合約之操作示範影片"
		}
	},{
		"year":2018,
		"month":"Apr",
		"content": {
			"en":"Spec. release of Pallet.",
			"zh-tw":"釋出 Pallet 規格書"
		}
	},{
		"year":2018,
		"month":"May",
		"content": {
			"en":"POC demo of inter-chain exchange",
			"zh-tw":"跨鏈交換之可行性驗證展示"
		}
	},{
		"year":2018,
		"month":"Q3",
		"content": {
			"en":"Beta release of Pallet on Bitcoin.",
			"zh-tw":"釋出支援比特幣之 Pallet 預覽版"
		}
	},{
		"year":2018,
		"month":"Q3",
		"content": {
			"en":"Connect Pallet and Ethereum network",
			"zh-tw":"釋出支援以太坊網路之 Pallet 預覽版"
		}
	},{
		"year":2018,
		"month":"Q4",
		"content": {
			"en":"Pallet online",
			"zh-tw":"上線 Pallet 系統"
		}
	},{
		"year":2018,
		"month":"Q4",
		"content": {
			"en":"Pallet distribute contract online",
			"zh-tw":"上線 Pallet 分散式合約"
		}
	},{
		"year":2018,
		"month":"Q4",
		"content": {
			"en":"Pallet arbiter contract online",
			"zh-tw":"上線 Pallet 仲裁合約"
		}
	},{
		"year":2019,
		"month":"",
		"content": {
			"en":"Connect Pallet to other blockchain",
			"zh-tw":"使 Pallet 支援更多區塊鏈"
		}
	}
]

var eventNum = events.length
var lineWidth = 0.3 // sync with index.css!!
var eventSize = 1.4 // sync with index.css!!
var eventMargin = 0.3 // sync with index.css!!

function generateRoadmap(){
	var timeline = $("#timeline")
	let newElement
	let yCursor = 0

	newElement = $n("div",null,"vline")
	newElement.style.height = "7vw"
	newElement.style.left = "calc(50% - " + (lineWidth/2) + "vw)"
	newElement.style.top = "0"
	timeline.apnd(newElement)
	yCursor += 7

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
					.apnd($n("span").apnd(e.content[lang]))
				)
			)
		newElement.style.top = yCursor + "vw"
		newElement.style.left = "calc(50% - " + (eventSize*0.57735 + eventMargin) + "vw)"

		let innerElement
		innerElement = $n("div","","left")
		innerElement.style.borderTopWidth = eventSize*0.5 + "vw"
		innerElement.style.borderBottomWidth = eventSize*0.5 + "vw"
		innerElement.style.borderRightWidth = eventSize*0.288675 + "vw"
		newElement.apnd(innerElement)

		innerElement = $n("div","","mid")
		newElement.apnd(innerElement)

		innerElement = $n("div","","right")
		innerElement.style.borderTopWidth = eventSize*0.5 + "vw"
		innerElement.style.borderBottomWidth = eventSize*0.5 + "vw"
		innerElement.style.borderLeftWidth = eventSize*0.288675 + "vw"
		newElement.apnd(innerElement)

		timeline.apnd(newElement)
		yCursor += eventSize + 2*eventMargin

		newElement = $n("div",null,"vline")
		newElement.style.width = lineWidth+"vw"
		newElement.style.height = "2.5vw"
		newElement.style.left = "calc(50% - " + (lineWidth/2) + "vw)"
		newElement.style.top = yCursor + "vw"
		timeline.apnd(newElement)
		yCursor += 2.5
	})

	for(let i=0;i<3;i++){
		yCursor += .5
		newElement = $n("div",null,"vline")
		newElement.style.width = lineWidth+"vw"
		newElement.style.height = ".5vw"
		newElement.style.left = "calc(50% - " + (lineWidth/2) + "vw)"
		newElement.style.top = yCursor + "vw"
		timeline.apnd(newElement)
		yCursor += .5
	}

	$("#roadmap").style.height = (yCursor+20) + "vw"
}
