// const Employee = require('../lib/employee_object')
const {Engineer} = require('../lib/object_classes');

describe("engineer", () => {
    describe("Initialization", () => {
        it("should create an object with a name, id, email, phone, and erroneous placeholder(for answers object) if provided proper arguments", () => {
            const engineer = new Engineer({name:'Joe', EID:'M1', email:'email@gmail.com', github: 'github.com/user', erroneous:'undefined'});
            expect(engineer.name).toBe("Joe");
            expect(engineer.employeeID).toBe("M1");
            expect(engineer.github).toBe("github.com/user");
            expect(engineer.erroneous).toBe("undefined");
        })

        it("should throw an error if not provided a valid email", () => {
            const et = () => new engineer({name:"Joe",EID:'M1', email:'email@email.com', phone:'notaphonenumber',erroneous:'undefined'});
        
            // Define the error message that is expected to be thrown
            const err = new Error("Phone number is not defined, or is not a valid phone number");
        
            // Verify that the correct error was thrown when the callback is executed
            expect(et).toThrowError(err);
            });
    });
})