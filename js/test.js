function checkUrl() {
    var a = document.getElementById('url').value;
    if (a == '') {
        alert('验证地址不能为空！');
        return false
    } else if (!isURL(a)) {
        alert('验证地址不存在！请谨慎操作！');
        return false
    } else {
        alert('验证通过');
        return true
    }
    return false
}

function isURL(a) {
    var b = ['71d57b36312039dcd0188349b6912d40'];
    for (i = 0; i < b.length; i++) {
        if (b[i] == hex_md5(a)) {
            return true
        } else {}
    }
}
