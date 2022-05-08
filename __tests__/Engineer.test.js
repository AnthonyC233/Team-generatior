const Employee = require("../lib/Engineer")

// describe allows you to gether your tests into serperate groupings withing the same file.
describe("engineer", function() {
    it("has github", function() {
        const github = "github";
        const testEmployee = new Employee("Noah", 1, "applesauce@yahoo.com", github);
             expect(testEmployee.github).toBe(github); //getting github
    })
})

describe("class functions", function() {
    it("gets github returns github", function() {
        const github = "github"; 
        const testEmployee = new Employee("Noah", 1, "applesauce@yahoo.com","github");
            expect(testEmployee.getgitHub()).toBe(github);
    })
    it("gets role returns role", function() {
        const role = "Engineer";
        const testEmployee = new Employee("Noah", 1, "applesauce@yahoo.com", role);
            expect(testEmployee.getRole()).toBe(role);
    })
})