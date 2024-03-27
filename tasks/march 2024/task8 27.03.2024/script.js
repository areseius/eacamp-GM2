// person obyektini name, age və city sahələri ilə yaradın.

let person = {
    name: "ares",
    age: "1e+2",
    city: "norway",
  };
  console.log(person);
  // person obyektindəki yaşın yeni dəyərə dəyişdirin.
  
  person.age = 999;
  console.log(person);
  
  // person obyektinə yeni bir sahə olan country əlavə edin.
  
  person.country = "";
  console.log(person);
  
  // person obyektindən city sahəsini silin.
  
  delete person.city;
  console.log(person);
  
  // printInfo funksiyasını yaradın, bu funksiya person obyektini qəbul edir və onun məlumatlarını konsola çıxarır.
  
  const printInfo = (obj) => {
    for (const [key, value] of Object.entries(obj))
      console.log(key + " : " + value);
  };
  
  printInfo(person);
  
  // car obyektini brand, model və year sahələri ilə yaradın.
  
  let car = {
    brand: "xxx",
    model: "XXX",
    year: 2000,
  };
  
  console.log(car);
  
  // car obyektindəki avtomobilin istehsal ili sahəsini yeni bir dəyərə dəyişdirin.
  
  car.year = 1999;
  console.log(car);
  
  // book obyektini title, author və pages sahələri ilə yaradın.
  // book obyektindəki kitabın müəllifini yeni bir dəyərə dəyişdirin.
  
  const book = {
    title: "aa",
    author: "xx",
    pages: 123,
  };
  
  book.author = "ZZ";
  
  console.log(book);
  
  // student obyektini name, age və grades sahələri ilə yaradın.
  // student obyektinə bir qiymət əlavə edin.
  // student obyektindən qiyməti silin.
  
  let student = {
    nick: "odin",
    age: 12,
    point: 11,
  };
  
  console.log(student);
  
  delete student.point;
  
  console.log(student);
  
  student.grades = [
    { subject: "Math", grade: 23 },
    { subject: "Geography", grade: 63 },
    { subject: "Philosophy", grade: 88 },
    { subject: "Foreign Language", grade: 55 },
    { subject: "Anatomy", grade: 99 },
    { subject: "History", grade: 43 },
  ];
  
  // getAverageGrade funksiyasını yaradın, bu funksiya student obyektini qəbul edir və orta balı qaytarır.
  
  const getAverageGrade = (obj) => (obj.grades.reduce((acc, x) => acc + x.grade, 0) / obj.grades.length).toFixed(2);
  
  console.log(getAverageGrade(student));
  
  // rectangle obyektini width və height sahələri ilə yaradın.
  
  const rectangle = {
    width: 12,
    height: 21,
  };
  
  // calculateArea funksiyasını yazın, bu funksiya rectangle obyektini qəbul edir və onun sahəsini qaytarır.
  
  const calculateArea = (obj) =>`a = ${obj.width}, b = ${obj.height} => S = ${obj.width * obj.height}`;
  
  console.log(calculateArea(rectangle));
  
  // circle obyektini radius və color sahələri ilə yaradın.
  // calculateCircumference funksiyasını yazın, bu funksiya circle obyektini qəbul edir və onun mümkər dairənin uzunluğunu qaytarır.
  
  const circle = {
    radius: 12,
    color: "black",
  };
  
  const calculateCircumference = (obj) => `L = 2 * π * r = ${(2 * Math.PI * obj.radius).toFixed(2)}`;
  
  console.log(calculateCircumference(circle));
  
  // employee obyektini name, position və salary sahələri ilə yaradın.
  // employee obyektindəki işçinin əmək haqqını 10% artırın.
  
  const employee = {
    name: "azra",
    position: "drink coffee",
    salary: 1000,
  };
  
  employee.salary = employee.salary + employee.salary * 0.1;
  
  console.log(employee);
  
  // product obyektini name, price və quantity sahələri ilə yaradın.
  // calculateTotalPrice funksiyasını yazın, bu funksiya product obyektini qəbul edir və məhsulun ümumi qiymətini qaytarır.
  
  const product = {
    name: "jackDaniels",
    price: 50,
    quantity: 5,
  };
  
  const calculateTotalPrice = (obj) =>`Total price = $${obj.price * obj.quantity}`;
  
  console.log(calculateTotalPrice(product));
  
  // movie obyektini title, director və year sahələri ilə yaradın.
  // movie obyektindəki filmin çıxış ili sahəsini yeni bir dəyərə dəyişdirin.
  
  const movie = {
    title: "xx",
    director: "zz",
    year: 2000,
  };
  
  movie.year = 2002;
  
  console.log(movie);
  
  // bankAccount obyektini balance və currency sahələri ilə yaradın.
  // bankAccount obyektindəki hesabın balansını müəyyən bir məbləğdə azaldın.
  
  const bankAccount = {
    balance: 233,
    currency: "Yuan",
  };
  
  bankAccount["balance"] = bankAccount.balance - 20;
  
  console.log(bankAccount);
  
  // team obyektini name, coach və players sahələri ilə yaradın.
  // team obyektinə yeni bir oyunçu əlavə edin.
  // team obyektindən məşqçini silin.
  // printTeamInfo funksiyasını yaradın, bu funksiya team obyektini qəbul edir və komanda haqqında məlumatları konsola çıxarır.
  
  const team = {
    name: "gods",
    coach: "odin",
    players: [
      { name: "ares", number: 7 },
      { name: "zeus", number: 4 },
      { name: "athena", number: 11 },
      { name: "artemis", number: 44 },
      { name: "thor", number: 23 },
      { name: "afrodit", number: 12 },
      { name: "hades", number: 1 },
    ],
  };
  
  team.players.push({ name: "loki", number: 99 });
  
  console.log(team.players);
  
  delete team.coach;
  
  console.log(team);
  
  const printTeamInfo = (obj) => {
    for (const key in obj) {
      console.log(key);
  
      if (typeof obj[key] == "object") {
        for (const elem in obj[key]) {
          console.log(obj[key][elem]);
        }
      } else console.log(obj[key]);
    }
  };
  
  printTeamInfo(team);