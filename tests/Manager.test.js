// const Employee = require('../lib/employee_object')
const {Manager} = require('../lib/object_classes');

describe("Manager", () => {
    describe("Initialization", () => {
        it("should create an object with a name, id, email, phone, and erroneous placeholder(for answers object) if provided proper arguments", () => {
            const manager = new Manager({name:'Joe', EID:'M1', email:'email@gmail.com', phone:'888-123-9999', erroneous:'undefined'});
            expect(manager.name).toBe("Joe");
            expect(manager.employeeID).toBe("M1");
            expect(manager.email).toBe("email@gmail.com");
            expect(manager.phone).toBe("888-123-9999");
            expect(manager.erroneous).toBe("undefined");
        });

        it("should throw an error if not provided a valid email", () => {
            const et = () => new Manager({name:"Joe",EID:'M1', email:'email@email.com', phone:'notaphonenumber',erroneous:'undefined'});
        
            // Define the error message that is expected to be thrown
            const err = new Error("Phone number is not defined, or is not a valid phone number");
        
            // Verify that the correct error was thrown when the callback is executed
            expect(et).toThrowError(err);
            });

        it("should throw an error if getRole() function does not return 'Manager'", () => {
            const manager = new Manager({name:'Joe', EID:'M1', email:'email@gmail.com', phone:'888-123-9999', erroneous:'undefined'});
            const myMock = manager.getRole();
            expect(myMock).toBe("Manager");
        });
    })
})