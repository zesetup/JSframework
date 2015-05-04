var jsScriptTotalCount=7

//myTable.setFilter("department")

EmployeeManager  = {
		getEmployeesDataSet:function(params){				
			var data = DataSource.get("department", params["department"])
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
		},
		showEmployeeTable:function(params){
			var myTable = new Table("myTable");
			myTable.setEventHandler(EmployeeManager, "getEmployeesDataSet")
			myTable.setTargetDomId("employeeTable")
			myTable.show()
		},
		showEmployeeTable2:function(params){
			alert(2)
		}
	}



EventBus.addEventHandler(EmployeeManager, "showEmployeeTable", ["employee", "showTable"])
//EventBus.addEventHandler(EmployeeManager, "showEmployeeTable2", ["employee", "showTable"])

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