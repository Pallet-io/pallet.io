var introBlocks = [
	{
		'id':'pallet',
		'left':50,
		'top':0,
		'width':32
	},{
		'id':'zcash',
		'left':18,
		'top':115,
		'width':14
	},{
		'id':'litecoin',
		'left':33,
		'top':104,
		'width':14
	},{
		'id':'ethereum',
		'left':47,
		'top':130,
		'width':14
	},{
		'id':'bitcoin',
		'left':64,
		'top':120,
		'width':14
	},{
		'id':'iota',
		'left':82,
		'top':104,
		'width':14
	},{
		'id':'security',
		'left':22,
		'top':-30,
		'width':20
	},{
		'id':'scalability',
		'left':82,
		'top':8,
		'width':20
	},{
		'id':'blank3',
		'left':16,
		'top':40,
		'width':9
	},{
		'id':'trans1',
		'left':33,
		'top':32,
		'width':11
	}
	,{
		'id':'trans2',
		'left':80,
		'top':45,
		'width':4
	}
	,{
		'id':'trans3',
		'left':64,
		'top':93,
		'width':11
	}
	,{
		'id':'trans4',
		'left':24.5,
		'top':97,
		'width':4
	}
]

var howBlocks = [
	{
		'id':'contract',
		'left':73,
		'top':56,
		'width':28
	},{
		'id':'exchange',
		'left':24,
		'top':69,
		'width':28
	},{
		'id':'decentralize',
		'left':51,
		'top':77,
		'width':28
	},{
		'id':'howzcash',
		'left':39,
		'top':53,
		'width':10
	},{
		'id':'howlitecoin',
		'left':80,
		'top':85,
		'width':10
	},{
		'id':'howethereum',
		'left':68,
		'top':95,
		'width':10
	},{
		'id':'howbitcoin',
		'left':29,
		'top':99,
		'width':10
	},{
		'id':'trans5',
		'left':7,
		'top':50,
		'width':4
	},{
		'id':'trans6',
		'left':53,
		'top':52,
		'width':4
	},{
		'id':'trans7',
		'left':61,
		'top':60,
		'width':13
	},{
		'id':'trans8',
		'left':85,
		'top':63,
		'width':28
	},{
		'id':'trans9',
		'left':12,
		'top':77,
		'width':28
	},{
		'id':'trans10',
		'left':44,
		'top':95,
		'width':12
	}
]

function generateHexBlocks(src){
	src.forEach(function(e,i,a){
		let hexElement = $('#' + e.id + '-block')
		let innerElement

		innerElement = $n('div','','left')
		innerElement.style.borderTopWidth    = e.width*0.433 + 'vw'
		innerElement.style.borderBottomWidth = e.width*0.433 + 'vw'
		innerElement.style.borderRightWidth  = e.width*0.250 + 'vw'
		hexElement.apnd(innerElement)

		innerElement = $n('div','','mid')
		hexElement.apnd(innerElement)

		innerElement = $n('div','','right')
		innerElement.style.borderTopWidth    = e.width*0.433 + 'vw'
		innerElement.style.borderBottomWidth = e.width*0.433 + 'vw'
		innerElement.style.borderLeftWidth   = e.width*0.250 + 'vw'
		hexElement.apnd(innerElement)

		hexElement.style.width  = e.width       + 'vw'
		hexElement.style.height = e.width*0.866 + 'vw'
		hexElement.style.left = 'calc(' + e.left + '% - ' + e.width*0.500 + 'vw)'
		hexElement.style.top  = 'calc(' + e.top  + '% - ' + e.width*0.433 + 'vw)'
	})
}
