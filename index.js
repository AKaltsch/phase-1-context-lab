/* Your Code Here */
function createEmployeeRecord(employeeInfo) {
    let employee = {
        firstName: employeeInfo[0],
        familyName: employeeInfo[1],
        title: employeeInfo[2],
        payPerHour: employeeInfo[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return employee
}

function createEmployeeRecords(employees) {
    return employees.map( employee => {
        return createEmployeeRecord(employee)
    })
}

let createTimeInEvent = function(dateStamp){
    let [date, hour] = dateStamp.split(" ")
    
    this.timeInEvents.push({
        type: "TimeIn", 
        hour: parseInt(hour),
        date: date
    })
    return this
}

let createTimeOutEvent = function(dateStamp){
    let [date, hour] = dateStamp.split(" ")
    
    this.timeOutEvents.push({
        type: "TimeOut", 
        hour: parseInt(hour),
        date: date
    })
    return this
}

let hoursWorkedOnDate = function(desiredDate){
    let timeIn = this.timeInEvents.find( e => {
        return e.date === desiredDate
    })
    let timeOut = this.timeOutEvents.find( e => {
        return e.date === desiredDate
    })
    return (timeOut.hour - timeIn.hour)/100
}

let wagesEarnedOnDate = function(desiredDate){
    let wages = hoursWorkedOnDate.call(this, desiredDate) * this.payPerHour
    return wages
}

let findEmployeeByFirstName = function(srcArray, firstName){
    return srcArray.find(e => {
        return e.firstName = firstName
    })
}

let calculatePayroll = function(employeeArray){
    let totalPayroll = employeeArray.reduce( function(accumulator, employee){
        return accumulator + allWagesFor.call(employee)
    }, 0)
    return totalPayroll
} 












/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

