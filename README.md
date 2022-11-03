# Js-Date-Extensions

```javascript
let date = new Date('2022-11-01');
// change the date object
date
    .addDays(1) // 2022-11-02
    .subDays(2) // 2022-10-31
    .addMonths(3) // 2023-01-31
    .subMonths(3); // 2022-10-31

// create a new instance with clone
let newDate = date.clone().addDays(10);

// check mehtods
date.isLeapYear(); // false
date.isMonday(); // true

// follow methods create a new date instance

date.getDaysInMonth(); // 31
date.getFirstDayOfMonth(); // 2022-10-01
date.getLastDayOfMonth(); // 2022-10-31

// example get month calendar

const today = new Date();
const startDay = today.getFirstDayOfMonth().getMonday();
const endDay = today.getLastDayOfMonth().getSunday();

let date = startDay.clone().subDays(1);

let weeks = [];
while (date <= endDay) {
    weeks.push({
        
        days: Array(7).fill(0).map(() => {
            date = date.clone().addDays(1);
            return date;
        }),
        week: date.getWeek()
    });
}
console.log(weeks);
```