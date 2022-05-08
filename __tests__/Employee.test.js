const Employee = require("../lib/Employee")

// describe allows you to gether your tests into serperate groupings withing the same file.
describe("employee", function() {
    it("has employee name", function() {
        const name = "Anthony";
        const testEmployee = new Employee(name);
             expect(testEmployee.name).toBe(name); //Creating new employee
    })
    it("has employee id", function() {
        const id = 1;
        const testId = new Employee("Lina", id);
            expect(testId.id).toBe(id); //same thing as the other one
    })
    it("has employee email", function() {
        const email = "applesauce@yahoo.com";
        const testEmail = new Employee("Noah", 1, email);
            expect(testEmail.email).toBe(email); //also same thing as above
    })
})

describe("class functions", function() {
    it("gets name returns name", function() {
        const name = "Anthony"; 
        const testEmployee = new Employee(name);
            expect(testEmployee.getName()).toBe(name);
    })
    it("gets id returns id", function() {
        const id = 1;
        const testId = new Employee("Lina", id);
            expect(testId.getId()).toBe(id);
    })
    it("gets email returns email", function() {
        const email = "applesauce@yahoo.com";
        const testEmail = new Employee("Noah", 1, email);
            expect(testEmail.getEmail()).toBe(email);
    })
    it("gets role returns role", function() {
        const role = "Employee";
        const testEmployee = new Employee("Noah", 1, "applesauce@yahoo.com");
            expect(testEmployee.getRole()).toBe(role)
    })
})


