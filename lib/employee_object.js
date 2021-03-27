class Employee {
    constructor({name:name, EID:EID, email:email, erroneous:erroneous}) {
        if (typeof name !== "string" || !name.trim().length) {
          throw new Error("Expected parameter 'name' to be a non-empty string");
        }
        if (!EID || !EID.trim().length) {
          throw new Error("employeeID is not defined or is defined as an empty string");
        }
        if (!this.validateEmail(email) || !email.trim().length || !email) {
          throw new Error("Expected parameter 'email' must be a valid email");
        }
        this.name = name;
        this.employeeID = EID;
        this.email = email;
        this.erroneous = erroneous
    }

    getName() {
        return(this.name)
    };

    getId() {
        return(this.employeeID)
    };

    validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    getEmail() {
        return(this.email)
    };

    getRole() {
        return('Employee');
    };

    createEmployeeCard() {
        const employeeCard = `
            <div class="card text-white bg-primary mb-5 intern" style="max-width: 18rem;">
                <div class="name-icon">
                    <h5 class = 'name' >${this.name}</h5>
                    <img src='./Assets/Images/Intern-img.png' class = "role-emp-img">
                </div>
                <div class="card-body">
                    <p>
                        <div class= "employee-id">${this.employeeID}</div>
                        <a class = 'email' href="mailto:${this.email}?subject= I need some coffee...">Email</a> <br>
                        <div  class = 'school'>${this.school}</div>
                    </p>
                </div>
            </div>
        `;
    return(employeeCard)
    
    }
}
// const employee = new Employee({name: 'Joe', EID: 'M1', email: 'email@gmail.com', erroneous:'undefined'})
// console.log(employee);

module.exports = Employee