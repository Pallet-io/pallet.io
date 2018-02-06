/*General Function Declaration*/
function $a(a){return document.querySelectorAll(a)}

function $(a){return document.querySelector(a)}

Element.prototype.load = function(f){this.addEventListener("load",f)}

Element.prototype.click = function(f){this.addEventListener("click",f)}

function $n(a,id,cls){
	var e = document.createElement(a)
	if(id) e.id = id
	for(cl of Array.prototype.slice.call(arguments,2))
		e.classList.add(cl)
	return e
}

Element.prototype.attr = function(n,v){
	if(v) this.setAttribute(n,v)
	else return this.getAttribute(n)
}

Element.prototype.apd = function(e){
	if(!Element.prototype.append)
		if(typeof(e) === "object") this.insertAdjacentElement("beforeend", e)
		else this.insertAdjacentHTML("beforeend", e);
	else this.append(e)
	return this
}