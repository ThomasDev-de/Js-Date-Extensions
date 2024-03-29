# Js-Date-Extensions
A few useful extensions for the javascript object Date
## Table of contents
- [Js-Date-Extensions](#js-date-extensions)
    * [Table of contents](#table-of-contents)
    * [generell methods](#generell-methods)
        + [setLocale](#setlocale)
        + [getUnits](#getunits)
        + [getDayNames](#getdaynames)
        + [getMonthNames](#getmonthnames)
    * [Method that manipulate the Date object](#method-that-manipulate-the-date-object)
        + [addDays](#adddays)
        + [subDays](#subdays)
        + [addMonths](#addmonths)
        + [subMonths](#submonths)
    * [Methods that return a new instance of the Date object](#methods-that-return-a-new-instance-of-the-date-object)
        + [clone](#clone)
        + [copy](#copy)
        + [getFirstDayOfMonth](#getfirstdayofmonth)
        + [getLastDayOfMonth](#getlastdayofmonth)
        + [getFirstDayOfWeek](#getfirstdayofweek)
        + [getLastDayOfWeek](#getlastdayofweek)
    * [Test methods that return none date object](#test-methods-that-return-none-date-object)
        + [isLeapYear](#isleapyear)
        + [isMonday, isTuesday, isWednesday, isThursday, isFriday, isSaturday, isSunday](#ismonday--istuesday--iswednesday--isthursday--isfriday--issaturday--issunday)
        + [getDaysInMonth](#getdaysinmonth)
        + [getWeek](#getweek)
        + [getCountWeeks](#getcountweeks)
        + [getCountDays](#getcountdays)
        + [fromNow](#fromnow)
        + [getDayName](#getdayname)
        + [getMonthName](#getmonthname)
        + [getMonthCalendar](#getmonthcalendar)
## generell methods

### setLocale
Set the language
```js
// example
Date.setLocale('de');
```
### getUnits
Fetches the time units in milliseconds  
@return {object}
```js
// example
Date.getUnits();
// { year: 31536000000, month: 2628000000, week: 604800000, day: 86400000, hour: 3600000, minute: 60000, second: 1000 }
```

### getDayNames
@param {boolean} abbreviation Default `false`  
@returns {string[]}
```js
// example
Date.getDayNames(true); // [ "Mo", "Di", "Mi", "Do", "Fr", "Sa", "So" ]
```
### getMonthNames
@param {boolean} abbreviation Default `false`  
@returns {string[]}
```js
// example
Date.getMonthNames(true); // [ "Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"]
```
## Method that manipulate the Date object
### addDays
Adds a specified number of days to the date  
@param {number} days  
@return {Date}
```js
// example
let date = new Date('2022-11-01');
date.addDays(4); // 2022-11-05
```
### subDays
Subtracts a specified number of days from the date  
@param {number} days  
@returns {Date}
```js
// example
let date = new Date('2022-11-01');
date.subDays(4); // 2022-10-28
```
### addMonths
Adds a specified number of months to the date  
@param {number} months  
@returns {Date}
```js
// example
let date = new Date('2022-11-01');
date.addMonths(4); // 2023-03-01
```

### subMonths
Subtracts a specified number of months from the date  
@param {number} months  
@returns {Date}
```js
// example
let date = new Date('2022-11-01');
date.subMonths(1); // 2022-10-01
```
## Methods that return a new instance of the Date object

### clone
@returns {Date}
```js
// example
let date = new Date('2022-11-01');
let cloneDate = date.clone(); // 2022-11-01
```
### copy
Returns a new instance of the Date object (alias of `clone`)  
@returns {Date}
```js
// example
let date = new Date('2022-11-01');
let copyDate = date.copy(); // 2022-11-01
```
### getFirstDayOfMonth
Determine the first day of the current month  
@returns {Date}
```js
// example
let date = new Date('2022-11-10');
let firstOfMonth = date.getFirstDayOfMonth(); // 2022-11-01
```
### getLastDayOfMonth
Determine the last day of the current month  
@returns {Date}
```js
// example
let date = new Date('2022-11-10');
let firstOfMonth = date.getLastDayOfMonth(); // 2022-11-30
```
### getFirstDayOfWeek

Determine the previous Monday of the current date  
@returns {Date}

```js
// example
let date = new Date('2022-11-10');
let prevMonday = date.getFirstDayOfWeek(); // 2022-11-07
```
### getLastDayOfWeek
Determine the Sunday of the current date  
@returns {Date}
```js
// example
let date = new Date('2022-11-10');
let nextSunday = date.getLastDayOfWeek(); // 2022-11-13
```

## Test methods that return none date object
### isLeapYear
Checks if the year of the date is a leap year  
@returns {boolean}
```js
// example
let date = new Date('2024-11-01');
if (date.isLeapYear()) // true
{
    // do something
}
```
### isMonday, isTuesday, isWednesday, isThursday, isFriday, isSaturday, isSunday, isWeekend
Checks the date for a weekday  
@returns {boolean}
```js
// example
let date = new Date('2022-11-01');
date.isMonday(); // false
date.isTuesday(); // true
date.isWednesday(); // false
date.isThursday(); // false
date.isFriday(); // false
date.isSaturday(); // false
date.isSunday(); // false
date.isWeekend(); // false
```
### getDaysInMonth
Determine the number of days in the current month  
@returns {number}
```js
// example
let date = new Date('2022-11-01');
date.getDaysInMonth(); // 30
```

### getWeek
Determines the calendar week of the date  
@returns {number}
```js
// example
let date = new Date('2022-11-01');
date.getWeek(); // 44 
```
### getCountWeeks
Determines the number of weeks between two dates  
@param {Date} toDate  
@returns {number}
```js
// example
let date = new Date('2022-11-01');
let toDate = new Date('2022-11-14');
date.getCountWeeks(toDate); // 2
```
### getCountDays
Determines the number of days between two dates  
@param {Date} toDate  
@returns {number}
```js
// example
let date = new Date('2022-11-01');
let toDate = new Date('2022-11-14');
date.getCountDays(toDate); // 14
```
### fromNow
```js
let date = new Date('2022-11-06 23:54:00');
// Now: 2022-11-07 05:55:00
date.fromNow(); // vor 6 Stunden
```
### getDayName
```js
let date = new Date('2022-11-06 23:54:00');
// Now: 2022-11-07 05:55:00
date.getDayName(); // Sonntag
```
### getMonthName
```js
let date = new Date('2022-11-06 23:54:00');
// Now: 2022-11-07 05:55:00
date.getMonthName(); // November
```
### getMonthCalendar
Returns all data of one month as array  
@return {*[]}

```js
// example
let date = new Date('2022-11-01');
let result = date.getMonthCalendar();
// output result
[
    {
        "week": 44,
        "days": [
            "2022-10-31T23:00:00.000Z",
            "2022-11-01T23:00:00.000Z",
            "2022-11-02T23:00:00.000Z",
            "2022-11-03T23:00:00.000Z",
            "2022-11-04T23:00:00.000Z",
            "2022-11-05T23:00:00.000Z",
            "2022-11-06T23:00:00.000Z"
        ]
    },
    {
        "week": 45,
        "days": [
            "2022-11-07T23:00:00.000Z",
            "2022-11-08T23:00:00.000Z",
            "2022-11-09T23:00:00.000Z",
            "2022-11-10T23:00:00.000Z",
            "2022-11-11T23:00:00.000Z",
            "2022-11-12T23:00:00.000Z",
            "2022-11-13T23:00:00.000Z"
        ]
    },
    {
        "week": 46,
        "days": [
            "2022-11-14T23:00:00.000Z",
            "2022-11-15T23:00:00.000Z",
            "2022-11-16T23:00:00.000Z",
            "2022-11-17T23:00:00.000Z",
            "2022-11-18T23:00:00.000Z",
            "2022-11-19T23:00:00.000Z",
            "2022-11-20T23:00:00.000Z"
        ]
    },
    {
        "week": 47,
        "days": [
            "2022-11-21T23:00:00.000Z",
            "2022-11-22T23:00:00.000Z",
            "2022-11-23T23:00:00.000Z",
            "2022-11-24T23:00:00.000Z",
            "2022-11-25T23:00:00.000Z",
            "2022-11-26T23:00:00.000Z",
            "2022-11-27T23:00:00.000Z"
        ]
    },
    {
        "week": 48,
        "days": [
            "2022-11-28T23:00:00.000Z",
            "2022-11-29T23:00:00.000Z",
            "2022-11-30T23:00:00.000Z",
            "2022-12-01T23:00:00.000Z",
            "2022-12-02T23:00:00.000Z",
            "2022-12-03T23:00:00.000Z",
            "2022-12-04T23:00:00.000Z"
        ]
    }
]
```
### getWeekCalendar
Returns all data of one week as array  
@return {*[]}

```js
// example
let date = new Date('2023-02-09');
let result = date.getWeekCalendar();
// output result
[
    "2023-02-06T23:00:00.000Z",
    "2023-02-07T23:00:00.000Z",
    "2023-02-08T23:00:00.000Z",
    "2023-02-09T23:00:00.000Z",
    "2023-02-10T23:00:00.000Z",
    "2023-02-11T23:00:00.000Z",
    "2023-02-12T23:00:00.000Z",
]
```
