const data = [
    { name: "john", age: 24, profession: "developer" },
    { name: "jane", age: 27, profession: "admin" },
  ];
  
  // 1. Print Developers
  function printDeveloper() {
    for (let i = 0; i < data.length; i++) {
      if (data[i].profession === "developer") {
        console.log(data[i]);
      }
    }
  }
  
  // 2. Add Data
  function addData() {
    const name = prompt("Enter name:");
    const age = parseInt(prompt("Enter age:"));
    const profession = prompt("Enter profession:");
    
    const newData = { name, age, profession };
    data.push(newData);
    console.log("Data added",newData);
  }
  
  // 3. Remove Admins
  function removeAdmin() {
    const admins = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].profession === "admin") {
        admins.push(data[i]);
        data.splice(i, 1);
        i--; // Adjust index after splicing
      }
    }
    return admins;
  }
  
  // 4. Concatenate Array
  function concatenateArray() {
    const dummyArray = [
      { name: "jack", age: 30, profession: "developer" },
      { name: "jill", age: 35, profession: "admin" },
    ];
    
    const result = data.concat(dummyArray);
    console.log(result);
  }
  
  // 5. Average Age
  function averageAge() {
    let totalAge = 0;
    for (let i = 0; i < data.length; i++) {
      totalAge += data[i].age;
    }
    const avgAge = totalAge / data.length;
    console.log(`Average Age: ${avgAge}`);
  }
  
  // 6. Age Check
  function checkAgeAbove25() {
    for (let i = 0; i < data.length; i++) {
      if (data[i].age > 25) {
        console.log("At least one person is above 25");
        return;
      }
    }
    console.log("No person is above 25");
  }
  
  // 7. Unique Professions
  function uniqueProfessions() {
    const professions = [];
    for (let i = 0; i < data.length; i++) {
      if (!professions.includes(data[i].profession)) {
        professions.push(data[i].profession);
      }
    }
    console.log(professions);
  }
  
  // 8. Sort by Age
  function sortByAge() {
    data.sort((a, b) => a.age - b.age);
    console.log(data);
  }
  
  // 9. Update Profession
  function updateJohnsProfession() {
    for (let i = 0; i < data.length; i++) {
      if (data[i].name === "john") {
        data[i].profession = "manager";
      }
    }
    console.log("John's Updated Profession",data);
  }
  
  // 10. Profession Count
  function getTotalProfessions() {
    let developerCount = 0;
    let adminCount = 0;
    
    for (let i = 0; i < data.length; i++) {
      if (data[i].profession === "developer") {
        developerCount++;
      } else if (data[i].profession === "admin") {
        adminCount++;
      }
    }
    
    console.log(`Developers: ${developerCount}, Admins: ${adminCount}`);
  }
  