const Employee = require('../lib/employee_object')
describe("Employee", () => {
    describe("Initialization", () => {
        it("should create an object with a name, id, email, and erroneous placeholder(for answers object) if provided proper arguments", () => {
            const employee = new Employee({name:'Joe',EID:'M1',email:'email@gmail.com',erroneous:'undefined'});
            expect(employee.name).toBe("Joe");
            expect(employee.employeeID).toBe("M1");
            expect(employee.email).toBe("email@gmail.com");
            expect(employee.erroneous).toBe("undefined");
        })

        it("should throw an error if provided no arguments", () => {
            // Wrap the object initialization in a callback function that Jest will run
            const et = () => new Employee();
      
            // Verify that an error was thrown in the callback function
            expect(et).toThrow();
          });

        it("should throw an error if not provided an id", () => {
        const et = () => new Employee({name:"Joe",email:'email@gmail.com', erroneous:'undefined'});
    
        // Define the error message that is expected to be thrown
        const err = new Error("employeeID is not defined or is defined as an empty string");
    
        // Verify that the correct error was thrown when the callback is executed
        expect(et).toThrowError(err);
        });

        it("should throw an error if not provided a valid email", () => {
        const et = () => new Employee({name:"Joe",EID:'M1',email:'notanemail',erroneous:'undefined'});
    
        // Define the error message that is expected to be thrown
        const err = new Error("Expected parameter 'email' must be a valid email");
    
        // Verify that the correct error was thrown when the callback is executed
        expect(et).toThrowError(err);
        });

    });
})