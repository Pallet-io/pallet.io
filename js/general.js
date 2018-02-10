/*General Function Declaration*/
function $a(a){return document.querySelectorAll(a)}

function $(a){return document.querySelector(a)}

Element.prototype.load = function(f){this.addEventListener("load",f)}

Element.prototype.click = function(f){this.addEventListener("click",f)}

function $n(a,id,cls){
	var e = document.createElement(a)
	if(id) e.id = id;
	var cls = Array.prototype.slice.call(arguments,2);
	for(var cli = 0; cli < cls.length; cli++)
		e.classList.add(cls[cli])
	return e
}

Element.prototype.attr = function(n,v){
	if(v) this.setAttribute(n,v)
	else return this.getAttribute(n)
}

Element.prototype.apnd = function(e){
	if(!Element.prototype.append)
		if(typeof(e) === "object") this.insertAdjacentElement("beforeend", e)
		else this.insertAdjacentHTML("beforeend", e);
	else this.append(e)
	return this
};

(function (arr) {
  for (var i = 0, len = arr.length; i < len; i++) {
  /*arr.forEach(*/(function (item) {
    if (item.hasOwnProperty('nextElementSibling')) {
      return;
    }
    Object.defineProperty(item, 'nextElementSibling', {
      configurable: true,
      enumerable: true,
      get: function () {
        var el = this;
        while (el = el.nextSibling) {
          if (el.nodeType === 1) {
              return el;
          }
        }
        return null;
      },
      set: undefined
    });
  /*);*/
  })(arr[i]);
  }
})([Element.prototype, CharacterData.prototype]);
