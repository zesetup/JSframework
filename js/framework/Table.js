/**
 * @author      zesetup <zerosetup@gmail.com>
 * @version     1.0
 * @since       1.0
 */

/*
 * Объект-конструктор, визуальный элемент показывающий таблицу
 * @param nameParam уникальное имя таблицы
 * @param eBus шина событий
 * @param domId идентификатор узла DOM-дерева для размещения таблицы
 */
function Table(nameParam, eBus, domId){
	var name = nameParam
	var targetDomId	= domId
	var eventBus = eBus
	/*
	 * Показывает таблицу
	 * @param params  параметры отображения, передаются источнику данных для таблицы
	 */
	this.show = function(params){
		var data={}
		data.headers=[]
		data.rows=[]
		this.remove()
		// get data from a data source				
		eventBus.publish(name+ ".getDataSet", params,  function(d){ data = d})
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
	/*
	 * удаляет таблицу из DOM 
	 */
	this.remove = function(){
		var targetDom = document.getElementById(targetDomId)
		try{
			while (targetDom.firstChild) {
				targetDom.removeChild(targetDom.firstChild);
			}
		}catch(e){}
	}
}
