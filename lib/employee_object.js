class Employee {
    constructor(name, EID, email) {
        this.name = name;
        this.employeeID = EID;
        this.email = email;
    }

    getName() {
    };

    getId() {
    };

    getEmail() {
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

module.exports = Employee