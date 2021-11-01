let users = [
    {age: 5, name: "Viki"},
    {age: 8, name: "Dan"},
    {age: 14, name: "Vlad"},
    {age: 19, name: "Igor"},
    {age: 39, name: "Nathalie"},
    {age: 44, name: "Oleg"}
  ];
  let someUsers = users.filter(item => item.age > 18);
  alert(someUsers.length);