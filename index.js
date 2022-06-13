// Write your solution in this file!
const employee = {
    name: "Taine Meyer",
    streetAddress: "12 Seagull Terrace"
   };
   function updateEmployeeWithKeyAndValue(employee, key, value) {
       return Object.assign({}, employee, {[key]: value});
   };
   function destructivelyUpdateEmployeeWithKeyAndValue(){
       employee.name = 'Sam';
       employee.streetAddress = '12 Broadway';
       return employee;
   };
   function deleteFromEmployeeByKey(employee, key) {
       return Object.assign({}, delete employee.key);
   };
   function destructivelyDeleteFromEmployeeByKey (employee, key, value) {
       employee[key] = value;
       return employee;
   };