const {Intern} = require('../lib/object_classes');

describe("Intern", () => {
    describe("Initialization", () => {
        it("Should create an object with a name, id, email, and Attending school", () => {
            const intern = new Intern({
                name: "Alisha",
                EID: "I-1",
                email: "Alisha.Malone@gmail.com",
                school: "Howard Payne University",
                erroneous: "undefined"
            });

            expect(intern.name).toBe("Alisha");
            expect(intern.employeeID).toBe("I-1");
            expect(intern.email).toBe("Alisha.Malone@gmail.com");
            expect(intern.school).toBe("Howard Payne University");
            expect(intern.erroneous).toBe("undefined");
        })
        it("shoud throw an error if not provided a valid email", () => {
            const et = () => new Intern({
                name: "Alisha",
                EID: "I-1",
                email: "notanemail.com",
                school: "Howard Payne University"
            })
            
            //Define the error message that is expected to be thrown
            const err = new Error("Expected parameter 'email' must be a valid email");

            //Verify that the correct error was thrown when the callback is executed
            expect(et).toThrowError(err);
        })
    })
})