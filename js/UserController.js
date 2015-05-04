UserController  = {
	eventHandler:function(event){
		switch(event.callerName){
		case "myTable":
			switch(event.command){
			case "getDataSet":				
				var data = DataSource.get("department", event["department"])
				var departments = []
				for(i=0; i<data.length; i++){
					department = new Department(data[i].name)
						for(j=0;j<data[i].employees.length; j++){
							employee = new Employee(data[i].employees[j].name, data[i].employees[j].surname, data[i].employees[j].position, department)
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
						records[c] = [employees[j].getName(), employees[j].getSurname(), employees[j].getPosition(),  department.getName()]
						c++
					}
				}
				var dataSet={
						headers:["Name", "Surname", "Position", "Department"],
						rows:records
					}				
				return dataSet
				break;
			}
			break;
		}
	}
}


//JS scripts counter 
if(jsLoadedScripts){
	jsLoadedScripts ++
}else{
	var jsLoadedScripts = 1
}