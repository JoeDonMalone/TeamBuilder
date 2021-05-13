const Employee = require('../lib/employee_object');    

class Manager extends Employee{
    constructor({name:name, EID:EID, email:email, phone:phone, erroneous:erroneous}) {
        super({name, EID, email})
        this.phone = phone;
        this.erroneous = erroneous;
        if(!this.validatePhone(phone) || !phone || !phone.trim().length) {
            throw new Error("Phone number is not defined, or is not a valid phone number");
          };
    }

     validatePhone(phone) {
        var phoneNum = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        if (phone.match(phoneNum)) {
          return true;
        }
        else {
          return false;
        }
    }

    getRole() {
        return('Manager');
    };

    createManagerCard() {
        const managerCard = `<div id =  "manager" class="card text-white bg-primary mb-5" style="max-width: 18rem;">
            <div class="name-icon">
                <h4 class = manager-name>${this.name}</h3>
                <img src='./Assets/Images/Manager-img.jpg' class = "role-mananger-img">
            </div>
            <div class="card-body">
                <p>
                    <div class="employee-id">${this.employeeID}</div>
                    <a class = 'email' href="mailto:${this.email}?subject=Mail from Our Site">${this.email}</a> <br>
                    <div class="phone">${this.phone}</div>
                </p>
            </div>
        </div>
        `;
    return(managerCard)

    }
}

class Engineer extends Employee {
    constructor({name, EID, email , github, erroneous} = {name:name, EID:EID, email:email, github:github, erroneous:erroneous}) {
        super({name, EID, email})
        this.github = github;
        this.erroneous = erroneous

    }
    getRole() {
        return('Engineer');
    };

    getGithub() {
        return(github);
    }

    createEngineerCard() {
        const engineerCard = `
            <div class="card text-white bg-primary mb-5 engineer" style="max-width: 18rem;">
                <div class="name-icon">
                    <h5 class = 'name' >${this.name}</h5>
                    <img src='./Assets/Images/employee-img.jpg' class = "role-emp-img">
                </div>
                <div class="card-body"><p>
                    <div class="employee-id">${this.employeeID}</div>
                    <a class = 'email' href="mailto:${this.email}?subject=Engineering Needs...">${this.email}</a> <br>
                    <a class = 'github' href="https://github.com/${this.github}">${this.github}</a> <br>
                </p>
                </div>
            </div>`;
    return(engineerCard)
    }
}

class Intern extends Employee{
    constructor({name, EID, email, school, erroneous} = {name:name, EID:EID, email:email, school:school, erroneous:erroneous}) {
        super({name, EID, email})
        this.school = school;
        this.erroneous = erroneous

    }

    getRole() {
        return('Intern');
    };

    getSchool() {
        return(school)
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
                        <a class = 'email' href="mailto:${this.email}?subject= I need some coffee...">${this.email}</a> <br>
                        <div  class = 'school'>${this.school}</div>
                    </p>
                </div>
            </div>
        `;
    return(internCard)
    
    }
}





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
            console.log("X Center: ", centerX, "Y Center", centerY);
                // If consideration of the padding property is necessary, use the following:
            // var width = $this.outerWidth();
            // var height = $this.outerHeight();   
        })
    }
  // $('a[href^="http://"]').each(function(){ 
    //     $(this).attr("href", newUrl); // Set herf value
    // });
}



module.exports = {
    Manager, 
    Engineer, 
    Intern
}