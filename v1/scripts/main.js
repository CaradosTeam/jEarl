/********** Main.JS *****************************************************/
/************************** OBJ *****************************************/
/************************************************************************/

var jEarl = function(selector) {
	//Compare id with tag element 
	var compare = selector.match(/[a-zA-Z].*(#|\.|(\[*[a-zA-Z]*\])).([a-zA-z]{1,20})*.[A-Za-z]*/gi) || selector.match(/[a-zA-Z]*(#|\.|(\[*[a-zA-Z]*\])).([a-zA-z]{1,20})* .([A-Za-z0-9])*/gi);

   if(compare) {
		/*this.thisEl = selector.forEach(function(val, index, arr) {
			return document.getElementById(val);
		});*/
		this.thisEl = document.querySelector(selector);
	} else if(selector.indexOf("#")==0) {
		console.log(selector.replace("#", "")); ///\*#/g
		this.thisEl = document.getElementById(selector.replace("#", "")); ///\*#/
	} else if(selector.indexOf(".")==0) {
		this.thisEl = document.getElementsByClassName(selector.replace(".", ""));
	} else if(selector=="") {
		this.thisEl = null;
	} else {
		this.thisEl = document.getElementsByTagName(selector);
	}
	
	var parent = this;
	
	this.__proto__ = {
	getInfoOfLibrary: "Library",
	html: function(content) {
		if(content!=="") {
			return this.thisEl.innerHTML;
		} else return this.thisEl.innerHTML = content;
	},
	text: function(content) {
	  if(content!=="") {
			return this.thisEl.text;
		} else return this.thisEl.text = content;
	},
	load: function(callback) {
		if(this.thisEl.length>1) {
		this.thisEl.onload = callback;
	    } else {
			alert("each");
		}
    },
	click: function(callback) {
		var key = 0;
		this.thisEl.onclick = function() { return callback(key=key); }
	},
	keydown: function() {
		var key = 0;
		this.thisEl.onkeydown = function() { return callback(key=key); }
	}
}
 
   var methods = {
	 child:function(selector) {
	return this;
     }
   }
  
   return Object.assign(this, methods);
}



var $ = function(selector) { return new jEarl(selector); }

$.load = function(callback) { return window.onload = callback; }

$.load(function() {
	$("#header h1").click(function(key) {
		//Test actions

	
	});
	console.log($("#header h1").child);
});
