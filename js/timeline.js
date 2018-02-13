var events = [
	{
		'year':2014,
		'month':'May',
		'content': {
			'en':'Gcoin start',
			'zh-tw':'',
			'zh-cn':'Gcoin 项目开始'
		}
	},{
		'year':2014,
		'month':'Oct',
		'content': {
			'en':'Gcoin API start',
			'zh-tw':'',
			'zh-cn':'Gcoin API 开始制作'
		}
	},{
		'year':2014,
		'month':'Dec',
		'content': {
			'en':'Gcoin opensource',
			'zh-tw':'',
			'zh-cn':'Gcoin 开源'
		}
	},{
		'year':2015,
		'month':'Apr',
		'content': {
			'en':'Release Gcoin whitepaper 1.0',
			'zh-tw':'',
			'zh-cn':'释出 Gcoin 白皮书1.0'
		}
	},{
		'year':2015,
		'month':'Oct',
		'content': {
			'en':'Gcoin wallet apps available',
			'zh-tw':'',
			'zh-cn':'Gcoin 钱包上线'
		}
	},{
		'year':2016,
		'month':'May',
		'content': {
			'en':'Gcoin API v2',
			'zh-tw':'',
			'zh-cn':'释出 Gcoin API 第二版'
		}
	},{
		'year':2016,
		'month':'Aug',
		'content': {
			'en':'Decoupling of EVM on Gcoin',
			'zh-tw':'',
			'zh-cn':'在 Gcoin 上成功架设虚拟机'
		}
	},{
		'year':2017,
		'month':'Aug',
		'content': {
			'en':'Concept of Pallet born',
			'zh-tw':'創始 Pallet 概念',
			'zh-cn':'设计 Pallet 概念'
		}
	},{
		'year':2017,
		'month':'Oct',
		'content': {
			'en':'Project of Pallet start',
			'zh-tw':'正式啟動 Pallet 專案',
			'zh-cn':'Pallet 项目正式启动'
		}
	},{
		'year':2018,
		'month':'Jan',
		'content': {
			'en':'Pallet bitcoin API release',
			'zh-tw':'釋出支援比特幣之 Pallet API',
			'zh-cn':'发布支援比特币的 Pallet API'
			
		}
	},{
		'year':2018,
		'month':'Feb',
		'content': {
			'en':'NOW',
			'zh-tw':'現在',
			'zh-cn':'现在'
		},
		'emph':true
	},{
		'year':2018,
		'month':'Feb',
		'content': {
			'en':'Release of Pallet white paper',
			'zh-tw':'釋出 Pallet 白皮書',
			'zh-cn':'发布 Pallet 白皮书'
		}
	},{
		'year':2018,
		'month':'Feb',
		'content': {
			'en':'Release demo video of an abstract-level contract',
			'zh-tw':'釋出泛階合約之操作示範影片',
			'zh-cn':'发布高阶合约操作的示范影片'
		}
	},{
		'year':2018,
		'month':'Apr',
		'content': {
			'en':'Spec. release of Pallet.',
			'zh-tw':'釋出 Pallet 規格書',
			'zh-cn':'发布 Pallet 说明书'
		}
	},{
		'year':2018,
		'month':'May',
		'content': {
			'en':'POC demo of inter-chain exchange',
			'zh-tw':'跨鏈交換之可行性驗證展示',
			'zh-cn':'跨链交换可行性的验证展示'
		}
	},{
		'year':2018,
		'month':'Q3',
		'content': {
			'en':'Beta release of Pallet on Bitcoin.',
			'zh-tw':'釋出支援比特幣之 Pallet 預覽版',
			'zh-cn':'发布支援比特币的 Pallet 协议'
		}
	},{
		'year':2018,
		'month':'Q3',
		'content': {
			'en':'Connect Pallet and Ethereum network',
			'zh-tw':'釋出支援以太坊網路之 Pallet 預覽版',
			'zh-cn':'发布支援以太坊网路的 Pallet 协议'
		}
	},{
		'year':2018,
		'month':'Q4',
		'content': {
			'en':'Pallet online',
			'zh-tw':'上線 Pallet 系統',
			'zh-cn':'Pallet 系统正式上线'
		}
	},{
		'year':2018,
		'month':'Q4',
		'content': {
			'en':'Pallet distribute contract online',
			'zh-tw':'上線 Pallet 分散式合約',
			'zh-cn':'Pallet 分散式合约上线'
		}
	},{
		'year':2018,
		'month':'Q4',
		'content': {
			'en':'Pallet arbiter contract online',
			'zh-tw':'上線 Pallet 仲裁合約',
			'zh-cn':'Pallet 仲裁合约上线'
		}
	},{
		'year':2019,
		'month':'',
		'content': {
			'en':'Connect Pallet to other blockchain',
			'zh-tw':'使 Pallet 支援更多區塊鏈',
			'zh-cn':'将 Pallet 支援更多区块链'
		}
	}
]

var eventNum = events.length
var lineWidth = 0.3 // sync with index.css!!
var eventSize = 1.4 // sync with index.css!!
var eventMargin = 0.3 // sync with index.css!!

function generateTimeline(){
	var timeline = $('#timeline>.canvas')
	let newElement
	let yCursor = 1

	newElement = $n('div',null,'vline')
	newElement.style.height = '7vw'
	newElement.style.left = 'calc(50% - ' + (lineWidth/2) + 'vw)'
	newElement.style.top = yCursor + 'vw'
	timeline.apnd(newElement)
	yCursor += 7

	events.forEach(function(e,i,a){
		newElement = $n('div',null,'event','hex')
			.apnd($n('div',null,'eventBox',e.emph?'emph':null)
				.apnd((i%2 == 1)?
					$n('div',null,'time')
						.apnd($n('span',null,'month').apnd(e.month))
						.apnd($n('span',null,'year' ).apnd(e.year)):
					$n('div',null,'time')
						.apnd($n('span',null,'year' ).apnd(e.year))
						.apnd($n('span',null,'month').apnd(e.month))
				).apnd($n('div',null,'content')
					.apnd($n('span').apnd(e.content[lang]))
				)
			)
		newElement.style.top = yCursor + 'vw'
		newElement.style.left = 'calc(50% - ' + (eventSize*0.57735 + eventMargin) + 'vw)'

		let innerElement
		innerElement = $n('div','','left')
		innerElement.style.borderTopWidth    = eventSize*0.500 + 'vw'
		innerElement.style.borderBottomWidth = eventSize*0.500 + 'vw'
		innerElement.style.borderRightWidth  = eventSize*0.289 + 'vw'
		newElement.apnd(innerElement)

		innerElement = $n('div','','mid')
		newElement.apnd(innerElement)

		innerElement = $n('div','','right')
		innerElement.style.borderTopWidth    = eventSize*0.500 + 'vw'
		innerElement.style.borderBottomWidth = eventSize*0.500 + 'vw'
		innerElement.style.borderLeftWidth   = eventSize*0.289 + 'vw'
		newElement.apnd(innerElement)

		timeline.apnd(newElement)
		yCursor += eventSize + 2*eventMargin

		newElement = $n('div',null,'vline')
		newElement.style.width = lineWidth+'vw'
		newElement.style.height = '2.5vw'
		newElement.style.left = 'calc(50% - ' + (lineWidth/2) + 'vw)'
		newElement.style.top = yCursor + 'vw'
		timeline.apnd(newElement)
		yCursor += 2.5
	})

	for(let i=0;i<3;i++){
		yCursor += .5
		newElement = $n('div',null,'vline')
		newElement.style.width = lineWidth+'vw'
		newElement.style.height = '.5vw'
		newElement.style.left = 'calc(50% - ' + (lineWidth/2) + 'vw)'
		newElement.style.top = yCursor + 'vw'
		timeline.apnd(newElement)
		yCursor += .5
	}

	$('#timeline').style.height = (yCursor+20) + 'vw'
}
