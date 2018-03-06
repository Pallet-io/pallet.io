function checkUrl() {
    var a = document.getElementById('url').value;
    if (a == '') {
        alert('验证地址不能为空！');
    } else if (!isURL(a)) {
        alert('验证地址不存在！请谨慎操作！');
    } else {
        alert('验证通过');
    }
    return false
}

function isURL(a) {
	var b = ['71d57b36312039dcd0188349b6912d40',
	         '6695f8184a0af3d20368127a350e152f',
			 'f0e28a05f18c2792730f87f4b899c24b',
			 '6a3aea53a7d4bb1164ea722d2c78ddfe'
	];

    for (i = 0; i < b.length; i++) {
        if (b[i] == hex_md5(a)) {
            return true
        } else {}
    }
}
