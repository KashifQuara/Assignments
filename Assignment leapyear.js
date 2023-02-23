function checkLeapYear() {
    let year = Number(prompt("Enter a year:"));
    let nextLeapYear = year + (4 - (year % 4));
    let message = (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) ? `${year} is a leap year` : `${year} is not a leap year. After ${year}, ${nextLeapYear} is the next leap year.`;
    console.log(message);
  }
  
  checkLeapYear()