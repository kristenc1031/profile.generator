//officeNumber
//getRole() - return Manager 

const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.OfficeNumber = officeNumber;
    }
    getOfficeNumber() {
        this.OfficeNumber;
    }
    getRole() {
        return Manager;
    }
}

module.exports = Manager;