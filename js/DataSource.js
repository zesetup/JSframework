/*
 * Объект-экземпляр, источник данных
 */
DataSource = {
	/*
	 * регистрирует подписчика события
	 * @return  возвращает данные
	 */
	loadDepartments:function(){
		return data		
	}
}
// структура данных
var data = [
		    {name:"IT", 
			employees:[
			           {name:"Federico", surname:"Gonsales", position:"Engineer", hirenDate:"2013-01-02"},
			           {name:"Mike", surname:"Saldan", position:"Tester", hirenDate:"2011-11-22"},
			           {name:"Leo", surname:"Sigh", position:"Architect", hirenDate:"2001-12-12"}
			           ] 
		    },
		    {name:"Sales", 
				employees:[
				           {name:"Sarah", surname:"Connor", position:"Manager", hirenDate:"2010-04-14"},
				           {name:"Richard", surname:"Senom", position:"Specialist", hirenDate:"2014-05-07"}						         
				           ] 
			    }
	   ]



//JS scripts counter 
if(jsLoadedScripts){
	jsLoadedScripts ++
}else{
	var jsLoadedScripts = 1
}