employees = [
  {
    name: "a",
    age: 30,
    role: "engineer",
  },
  {
    name: "b",
    age: 35,
    role: "lead engineer",
  },
  {
    name: "c",
    age: 40,
    role: "manager",
  },
];

let getAge = (emp) => emp.age;
let ages = employees.map(getAge);
console.log(ages);

let newEmp = (emp) => {
  return {
    fname: emp.name,
    fage: emp.age + 10,
  };
};

let newEmps = employees.map(newEmp);

console.log(newEmps);
