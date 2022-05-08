const Employee = require("../lib/Intern")

// describe allows you to gether your tests into serperate groupings withing the same file.
describe("Intern", function() {
    it("has school", function() {
        const school = "school";
        const testEmployee = new Employee("Noah", 1, "applesauce@yahoo.com", school);
             expect(testEmployee.school).toBe(school); //getting school
    })
})

describe("class functions", function() {
    it("gets school returns school", function() {
        const school = "school"; 
        const testEmployee = new Employee("Noah", 1, "applesauce@yahoo.com","school");
            expect(testEmployee.getSchool()).toBe(school);
    })
    it("gets role returns role", function() {
        const role = "Intern";
        const testEmployee = new Employee("Noah", 1, "applesauce@yahoo.com", role);
            expect(testEmployee.getRole()).toBe(role);
    })
})