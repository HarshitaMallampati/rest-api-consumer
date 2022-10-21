
const restApi = `http://localhost:8082/emp`;
const restApi1 = `http://localhost:8082/dep`;


const getEmpById = (eid) => {
    console.log(`getEmpById`);
    fetch(`${restApi}/get-emp-by-id/${eid}`, { method: 'GET' })
        .then(data => {
            return data.json();
        })
        .then((response) => {
            document.getElementById("empData").innerHTML = JSON.stringify(response);
            document.getElementById("eid").value = '';
            console.log(JSON.stringify(response));

        })
        .catch((error) => {
            document.getElementById("eid").value = '';
            document.getElementById("empData").innerHTML = 'Something is wrong!';
            console.log(error);
        });
}


const getEmpByFirstName = (firstName) => {
    console.log(`getEmpByFirstName`);
    fetch(`${restApi}/get-emp-by-first-name/${firstName}`, { method: 'GET' })
        .then(data => {
            return data.json();
        })
        .then((response) => {
            document.getElementById("empData").innerHTML = JSON.stringify(response);
            document.getElementById("firstName").value = '';
            console.log(JSON.stringify(response));

        })
        .catch((error) => {
            document.getElementById("firstName").value = '';
            document.getElementById("empData").innerHTML = 'Something is wrong!';
            console.log(error);
        });
}







const getEmpByCity = (city) => {
    console.log(`getEmpByCity`);
    fetch(`${restApi}/get-emp-by-city/${city}`, { method: 'GET' })
        .then(data => {
            return data.json();
        })
        .then((response) => {
            document.getElementById("empData").innerHTML = JSON.stringify(response);
            document.getElementById("city").value = '';
            console.log(JSON.stringify(response));

        })
        .catch((error) => {
            document.getElementById("city").value = '';
            document.getElementById("empData").innerHTML = 'Something is wrong!';
            console.log(error);
        });
}







const getEmpBySalaryGreaterThan = (salary) => {
    console.log(`getEmpBySalaryGreaterThan`);
    fetch(`${restApi}/get-emp-by-salary-greater-than/${salary}`, { method: 'GET' })
        .then(data => {
            return data.json();
        })
        .then((response) => {
            document.getElementById("empData").innerHTML = JSON.stringify(response);
            document.getElementById("salary").value = '';
            console.log(JSON.stringify(response));

        })
        .catch((error) => {
            document.getElementById("salary").value = '';
            document.getElementById("empData").innerHTML = 'Something is wrong!';
            console.log(error);
        });
}




const addEmp = () => {
    console.log(`addEmp`);
    fetch(`${restApi}/add-emp`, {
        body: JSON.stringify({
            firstName: document.getElementById("firstName").value,
            salary: document.getElementById("salary").value,
            department: {
                departmentId: document.getElementById("departmentId").value
            }
        }),
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(data => data.json())
        .then((json) => {
            response = JSON.stringify(json);
            console.log(response);
            document.getElementById("empAdded").innerHTML = response;
            document.getElementById("firstName").value = '';
            document.getElementById("salary").value = '';
            document.getElementById("departmentId").value = '';
        })
        .catch(() => {
            document.getElementById("empAdded").innerHTML = 'Something is wrong!';
            document.getElementById("firstName").value = '';
            document.getElementById("salary").value = '';
            document.getElementById("departmentId").value = '';
        });
}



const updateEmp = () => {
    console.log(`updateEmp`);
    fetch(`${restApi}/update-emp`, {
        body: JSON.stringify({
            employeeId: document.getElementById("updateEmployeeId").value,
            firstName: document.getElementById("updateFirstName").value,
            salary: document.getElementById("updateSalary").value,
            department: {
                departmentId: document.getElementById("updateDepartmentId").value
            }
        }),
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(data => data.json())
        .then((json) => {
            response = JSON.stringify(json);
            console.log(response);
            document.getElementById("empUpdated").innerHTML = response;
            document.getElementById("updateEmployeeId").value = '';
            document.getElementById("updateFirstName").value = '';
            document.getElementById("updateSalary").value = '';
            document.getElementById("updateDepartmentId").value = '';
        })
        .catch((error) => {
            console.log(error);
            document.getElementById("empAdded").innerHTML = 'Something is wrong!';
            document.getElementById("updateEmployeeId").value = '';
            document.getElementById("updateFirstName").value = '';
            document.getElementById("updateSalary").value = '';
            document.getElementById("updateDepartmentId").value = '';

        });
}



const delEmp = (eid) => {

    console.log(`delEmpById`);

    fetch(`${restApi}/delete-emp-by-id/${eid}`, { method: 'DELETE' })

        .then(data => {

            return data.json();

        })

        .then((response) => {

            document.getElementById("delEmp").innerHTML = JSON.stringify(response);

            document.getElementById("delId").value = '';

            console.log(JSON.stringify(response));



        })

        .catch((error) => {

            document.getElementById("delEmp").value = '';

            document.getElementById("delId").innerHTML = 'Something is wrong!';

            console.log(error);

        });

}




const getAllEmps = () => {
    console.log(`getAllEmps`);
    fetch(`${restApi}/get-all-emps`)
        .then(data => data.json())
        .then((json) => {
            console.log(json);
            response = JSON.stringify(json);
            console.log(response);
            document.getElementById("empList").innerHTML = response;
        })
        .catch(() => {
            document.getElementById("empList").innerHTML = 'Something is wrong!';
        });
}




const getDepById = (did) => {
    console.log(`getDepById`);
    fetch(`${restApi1}/get-dep-by-id/${did}`, { method: 'GET' })
        .then(data => {
            return data.json();
        })
        .then((response) => {
            document.getElementById("depData").innerHTML = JSON.stringify(response);
            document.getElementById("did").value = '';
            console.log(JSON.stringify(response));

        })
        .catch((error) => {
            document.getElementById("did").value = '';
            document.getElementById("depData").innerHTML = 'Something is wrong!';
            console.log(error);
        });
}




    const addDep = () => {
        console.log(`addDep`);
        fetch(`${restApi1}/add-dep`, {
            body: JSON.stringify({
                departmentId: document.getElementById("departmentId").value,
                departmentName: document.getElementById("departmentName").value,
                city: document.getElementById("city").value
                
            }),
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(data => data.json())
            .then((json) => {
                response = JSON.stringify(json);
                console.log(response);
                document.getElementById("depAdded").innerHTML = response;
                document.getElementById("departmentId").value = '';
                document.getElementById("departmentName").value = '';
                document.getElementById("city").value = '';
               
            })
            .catch(() => {
                document.getElementById("depAdded").innerHTML = 'Something is wrong!';
                document.getElementById("departmentId").value = '';
                document.getElementById("departmentName").value = '';
                document.getElementById("city").value = '';
               
            });
    }
    



    const updateDep = () => {
        console.log(`updateDep`);
        fetch(`${restApi1}/update-dep`, {
            body: JSON.stringify({
                departmentId: document.getElementById("updateDepartmentId").value,
                departmentName: document.getElementById("updateDepartmentName").value,
                city: document.getElementById("updatecity").value
               
            }),
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(data => data.json())
            .then((json) => {
                response = JSON.stringify(json);
                console.log(response);
                document.getElementById("empUpdated").innerHTML = response;
                document.getElementById("updateEmployeeId").value = '';
                document.getElementById("updateFirstName").value = '';
                document.getElementById("updatecity").value = '';
            
            })
            .catch((error) => {
                console.log(error);
                document.getElementById("depAdded").innerHTML = 'Something is wrong!';
                document.getElementById("updateDepartmentId").value = '';
                document.getElementById("updateDepartmentName").value = '';
                document.getElementById("updatecity").value = '';
               
    
            });
    }


    const delDep = (did) => {

        console.log(`delDepById`);
    
        fetch(`${restApi1}/delete-dep-by-id/${did}`, { method: 'DELETE' })
    
            .then(data => {
    
                return data.json();
    
            })
    
            .then((response) => {
    
                document.getElementById("delDep").innerHTML = JSON.stringify(response);
    
                document.getElementById("delId").value = '';
    
                console.log(JSON.stringify(response));
    
    
    
            })
    
            .catch((error) => {
    
                document.getElementById("delDep").value = '';
    
                document.getElementById("delDepId").innerHTML = 'Something is wrong!';
    
                console.log(error);
    
            });
    
    }