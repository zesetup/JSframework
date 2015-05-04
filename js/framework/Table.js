function Table(n){
	var eventHandlerObject={},
	eventHandlerMethod="",
	name,
	targetDomId,
	data={}
	data.headers=[]
	data.rows=[]
	name=n
	var event = {}
	this.show =function(){
		// get data from a data source		
		event.source = "table"
		event.command = "getDataSet"
		event.callerName = name
		data = eventHandlerObject[eventHandlerMethod](event)
		var targetDom = document.getElementById(targetDomId)
		
		var tableElement = document.createElement("TABLE")
		var tbodyElement = document.createElement("TBODY")
		var trElement = document.createElement("TR")
		trElement.style.background="#eaeaea"
		for(i=0;i<data.headers.length;i++){
			var tdElement = document.createElement("TD")			
			tdElement.appendChild(document.createTextNode(data.headers[i]))
			trElement.appendChild(tdElement)
		}
		tbodyElement.appendChild(trElement)
		
		for(i=0;i<data.rows.length;i++){
			var trElement = document.createElement("TR")
			for(j=0;j<data.rows[i].length; j++){
				var tdElement = document.createElement("TD")			
				tdElement.appendChild(document.createTextNode(data.rows[i][j]))
				trElement.appendChild(tdElement)
			}
			tbodyElement.appendChild(trElement)
		}
		
		tableElement.appendChild(tbodyElement)
		targetDom.appendChild(tableElement)
		
		tableElement.border=1
		
		//alert(data.rows[1][1])
	}
	this.setEventHandler = function(object, method){
		eventHandlerObject = object
		eventHandlerMethod = method
	}
	this.setTargetDomId = function(id){
		targetDomId = id
	}
	this.setFilter = function(filterItem, filterValue){
		event[filterItem] = filterValue
	}
	this.remove = function(){
		var targetDom = document.getElementById(targetDomId)
		//alert(targetDom.childNodes)
		try{
			while (targetDom.firstChild) {
				targetDom.removeChild(targetDom.firstChild);
			}
			//document.getElementsByTagName("body")[0].removeChild(targetDom.childNodes[0])
		}catch(e){}
	}
}


//JS scripts counter 
if(jsLoadedScripts){
	jsLoadedScripts ++
}else{
	var jsLoadedScripts = 1
}