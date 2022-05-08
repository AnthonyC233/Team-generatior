const Employee = require("../lib/Manager")

// describe allows you to gether your tests into serperate groupings withing the same file.
describe("Manager", function() {
    it("has officeNumber", function() {
        const officeNumber = 2;
        const testEmployee = new Employee("Noah", 1, "applesauce@yahoo.com", officeNumber);
             expect(testEmployee.officeNumber).toBe(officeNumber); //getting officeNumber
    })
})

describe("class functions", function() {
    it("gets officeNumber returns officeNumber", function() {
        const officeNumber = 2; 
        const testEmployee = new Employee("Noah", 1, "applesauce@yahoo.com", officeNumber);
            expect(testEmployee.getofficeNumber()).toBe(officeNumber);
    })
    it("gets role returns role", function() {
        const role = "Manager";
        const testEmployee = new Employee("Noah", 1, "applesauce@yahoo.com", role);
            expect(testEmployee.getRole()).toBe(role);
    })
})