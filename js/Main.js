var jsScriptTotalCount=6
/*
 * Объект-экземпляр, производит первичную инициализацию, получает данные от источника данных,
 * создает объекты модели, на основе опроса модели формирует набор данных для визуального компонета Table
 */
Main  = {
	/*
	 * создает экземпляр визуального компонента, производит его настройку
	 * связывает таблицу, себя и источник данных через шину событий для обмена сообщениями
	 */
	init:function(){
		var myTable = new Table("myTable");
		myTable.setEventBus(EventBus)
		myTable.setTargetDomId("employeeTable")
		EventBus.subscribe(myTable, "show", 'employee.showTable')
		EventBus.subscribe(this, "getEmployeesDataSet", "myTable.getDataSet")
		EventBus.subscribe(DataSource, "loadDepartments", "loadDepartments")
	},
	/*
	 * получает данные от источника, воссоздает модель предметной области, формирует набор данных
	 * @param params параметры для источника данных
	 */
	getEmployeesDataSet:function(params){
		//var data = DataSource.get("department")
		var data = EventBus.publish("loadDepartments") 
		var departments = []
		for(i=0; i<data.length; i++){
			department = new Department(data[i].name)
				for(j=0;j<data[i].employees.length; j++){
					var h = data[i].employees[j].hirenDate
					var hirenDate = new Date(h.substring(0,4), h.substring(5,7), h.substring(8,10))
					employee = new Employee(data[i].employees[j].name,
							data[i].employees[j].surname,
							data[i].employees[j].position,
							hirenDate,
							department)
					department.addEmployee(employee)
				}
			departments[i] = department 
		}
		records = []
		var c=0
		for(i=0;i<departments.length;i++){			
			department = departments[i]
			employees = department.getEmployees()
			for(j=0;j<employees.length;j++){
				if(params){					
					if(params.expirience){
						if(employees[j].getExperience()*1 >= params.expirience*1){
							records[c] = [employees[j].getFullName(), employees[j].getPosition(), employees[j].getExperience(), department.getName()]
							c++
						}
					}					
				}else{
					records[c] = [employees[j].getFullName(), employees[j].getPosition(), employees[j].getExperience(),  department.getName()]
					c++
				}
			}
		}
		var dataSet={
				headers:["Full name", "Position",  "Expirience", "Department"],
				rows:records
			}
		return dataSet
	}
}


// JS scripts counter 
if(jsLoadedScripts){
	jsLoadedScripts ++
}else{
	var jsLoadedScripts = 1
}

function init(){
	if(jsScriptTotalCount==jsLoadedScripts){
		Main.init()
	}else{
		setTimeout(function(){ init() }, 100);
	}
}
setTimeout(function(){ init() }, 100);