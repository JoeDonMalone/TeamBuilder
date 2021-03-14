
class Line {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }

    getCardCenters() {
        $('.card').each( function() {
            let $this = $(this);
            let offset = $this.offset();
            let width = $this.width();
            let height = $this.height();
            let centerX = offset.left + width / 2;
            let centerY = offset.top + height / 2;
            console.log(centerX, centerY);
                // If you need to consider the padding property in your calculations, use the following:
            // var width = $this.outerWidth();
            // var height = $this.outerHeight();   
        })
    }
  }
    // $('a[href^="http://"]').each(function(){ 
    //     $(this).attr("href", newUrl); // Set herf value
    // });

class Manager {
    constructor(name, EID, email, phone) {
        this.name = name;
        this.employeeID = EID;
        this.email = email;
        this.phone = phone;
    }

    createManagerCard() {
        const managerCard = `
        <div id =  "manager" class="card text-white bg-primary mb-5" style="max-width: 18rem;">
            <div class="name-icon">
                <h4 class = manager-name>${this.name}</h3>
                <img src='./Assets/Images/Manager-img.jpg' class = "role-mananger-img">
            </div>
            <div class="card-body">
                <p>
                    <div class="employee-id">${this.employeeID}</div>
                    <a class = 'email' href="mailto:${this.email}?subject=Mail from Our Site">Email</a> <br>
                    <div class="phone">${this.phone}</div>
                </p>
            </div>
        </div>
        `;
    return(managerCard)

    }
}

class Engineer {
    constructor(name, EID, email , github) {
        this.name = name;
        this.employeeID = EID;
        this.email = email;
        this.github = github;
    }

    createEngineerCard() {
        const engineerCard = `
            <div class="card text-white bg-primary mb-5 engineer" style="max-width: 18rem;">
                <div class="name-icon">
                    <h5 class = 'name' >${this.name}</h5>
                    <img src='./Assets/Images/Intern-img.png' class = "role-emp-img">
                </div>
                <div class="card-body"><p>
                    <div class="employee-id">${this.employeeID}</div>
                    <a class = 'email' href="mailto:${this.email}?subject=Engineering Needs...">Email</a> <br>
                    <a class = 'github' href="https://github.com/${this.github}">${this.github}</a> <br>
                </p>
                </div>
            </div>`;
    return(engineerCard)
    }
}

class Intern {
    constructor(name, EID, email, school) {
        this.name = name;
        this.employeeID = EID;
        this.email = email;
        this.school = school;
    }

    createInternCard() {
        const internCard = `
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
    return(internCard)
    
    }
}

// var managerObject = new Manager('data.name', 'data.EID', 'data.email', 'data.phone');
// var managerObject = new Manager('Joe Don Malone', '1234', 'joe.d.malone@gmail.com', '830-220-0942');
// console.log(managerObject.createManagerCard())

module.exports = {
    Manager, 
    Engineer, 
    Intern
}