//school
//getSchool(), gerRole(),
//return as intern 

const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
    super(name, id, email);
        this.school = school;
    }
    getSchool() {
        return this.school;
    }
    getRole() {
        return "intern";
    }
}

module.exports = Intern;