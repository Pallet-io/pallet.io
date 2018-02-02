/*General Function Declaration*/
function $all(a){return document.querySelectorAll(a)}

function $(a){return document.querySelector(a)}

function $load(e,f){e.addEventListener('load',f)}

function $click(e,f){e.addEventListener('click',f)}

function $new(a,id,cls){
	var e = document.createElement(a)
	if(id) e.id = id
	for(cl of Array.prototype.slice.call(arguments,2))
		e.classList.add(cl)
	return e
}

function $append(e,a){
	e.append(a)
	return e
}

function $attr(e,n,v){
	if(v) e.setAttribute(n,v)
	else return e.getAttribute(n)
}