function Table(nameParam){
	var name
	var targetDomId
	var data={}
		data.headers=[]
		data.rows=[]
	var name=nameParam
	var eventBus = {}
	this.show =function(params){
		this.remove()
		// get data from a data source				
		data = eventBus.publish([name, "getDataSet", params])		
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
	}
	this.setEventBus = function(eb){
		eventBus = eb
	}
	this.setTargetDomId = function(id){
		targetDomId = id
	}
	this.setFilter = function(filterItem, filterValue){
		event[filterItem] = filterValue
	}
	this.remove = function(){
		var targetDom = document.getElementById(targetDomId)
		try{
			while (targetDom.firstChild) {
				targetDom.removeChild(targetDom.firstChild);
			}
		}catch(e){}
	}
}


//JS scripts counter 
if(jsLoadedScripts){
	jsLoadedScripts ++
}else{
	var jsLoadedScripts = 1
}