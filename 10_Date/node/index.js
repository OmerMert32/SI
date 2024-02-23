console.log(new Date())

console.log(new Date().toString)

console.log(Date.now)

// ISO 8601 - YYYYMMDD

const date = new Date()

const danishDate = new Intl.DateTimeFormat("da-dk").format(date);
console.log(danishDate)

const americanDate = new Intl.DateTimeFormat("en-us").format(date);
console.log(americanDate)