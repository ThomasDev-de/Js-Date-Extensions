// noinspection JSUnusedGlobalSymbols

Date.DEFAULT_LOCALE = 'de';

Date.SUNDAY = 0;
Date.MONDAY = 1;
Date.TUESDAY = 2;
Date.WEDNESDAY = 3;
Date.THURSDAY = 4;
Date.FRIDAY = 5;
Date.SATURDAY = 6;

Date.UNITS = {
    year: 24 * 60 * 60 * 1000 * 365,
    month: 24 * 60 * 60 * 1000 * 365 / 12,
    week: 24 * 60 * 60 * 1000 * 7,
    day: 24 * 60 * 60 * 1000,
    hour: 60 * 60 * 1000,
    minute: 60 * 1000,
    second: 1000
}

/**
 *
 * @param {string} locale
 */
Date.setLocale = function (locale) {
    Date.DEFAULT_LOCALE = locale ? locale : Date.DEFAULT_LOCALE;
};

Date.getUnits = function(){
    return Date.UNITS;
}

/**
 *
 * @param {boolean} abbreviation
 * @returns {string[]}
 */
Date.getDayNames = function (abbreviation = false) {
    const formatter = new Intl.DateTimeFormat(Date.DEFAULT_LOCALE, {weekday: abbreviation ? 'short' : 'long', timeZone: 'UTC'});
    const days = [2, 3, 4, 5, 6, 7, 8].map(day => {
        const dd = day < 10 ? `0${day}` : day;
        return new Date(`2017-01-${dd}T00:00:00+00:00`);
    });
    return days.map(date => formatter.format(date));
}

/**
 *
 * @param {boolean} abbreviation
 * @returns {string[]}
 */
Date.getMonthNames = function (abbreviation = false) {
    const formatter = new Intl.DateTimeFormat(Date.DEFAULT_LOCALE, {month: abbreviation ? 'short' : 'long', timeZone: 'UTC'});
    const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(month => {
        const mm = month < 10 ? `0${month}` : month;
        return new Date(`2017-${mm}-01T00:00:00+00:00`);
    });
    return months.map(date => formatter.format(date));
}

/**
 *
 * @param {boolean} abbreviation
 * @return {string}
 */
Date.prototype.getMonthName = function (abbreviation = false) {
    const formatter = new Intl.DateTimeFormat(Date.DEFAULT_LOCALE, {month: abbreviation ? 'short' : 'long', timeZone: 'UTC'});
    return formatter.format(this);
};
/**
 *
 * @param {boolean} abbreviation
 * @return {string}
 */
Date.prototype.getDayName = function (abbreviation = false) {
    const formatter = new Intl.DateTimeFormat(Date.DEFAULT_LOCALE, {weekday: abbreviation ? 'short' : 'long', timeZone: 'UTC'});
    return formatter.format(this);
};

/**
 * Adds a specified number of days to the date
 * @param {number} days
 * @returns {Date}
 */
Date.prototype.addDays = function (days) {
    this.setDate(this.getDate() + days);
    return this;
}

/**
 * Subtracts a specified number of days from the date
 * @param {number} days
 * @returns {Date}
 */
Date.prototype.subDays = function (days) {
    this.setDate(this.getDate() - days);
    return this;
}

/**
 * Adds a specified number of months to the date
 * @param {number} months
 * @returns {Date}
 */
Date.prototype.addMonths = function (months) {
    let n = this.getDate();
    this.setDate(1);
    this.setMonth(this.getMonth() + months);
    this.setDate(Math.min(n, this.getDaysInMonth()));
    return this;
};

/**
 * Subtracts a specified number of months from the date
 * @param {number} months
 * @returns {Date}
 */
Date.prototype.subMonths = function (months) {
    const month = this.getMonth();
    this.setMonth(this.getMonth() - months);
    while (this.getMonth() === month) {
        this.subDays(1);
    }
    return this;
}

/**
 * Checks if the year of the date is a leap year
 * @returns {boolean}
 */
Date.prototype.isLeapYear = function () {
    let year = this.getFullYear();
    return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0));
};

/**
 *
 * @return {boolean}
 */
Date.prototype.isMonday = function () {
    return this.getDay() === Date.MONDAY;
}
/**
 *
 * @return {boolean}
 */
Date.prototype.isTuesday = function () {
    return this.getDay() === Date.TUESDAY;
}
/**
 *
 * @return {boolean}
 */
Date.prototype.isWednesday = function () {
    return this.getDay() === Date.WEDNESDAY;
}
/**
 *
 * @return {boolean}
 */
Date.prototype.isThursday = function () {
    return this.getDay() === Date.THURSDAY;
}

/**
 *
 * @return {boolean}
 */
Date.prototype.isFriday = function () {
    return this.getDay() === Date.FRIDAY;
}
/**
 *
 * @return {boolean}
 */
Date.prototype.isSaturday = function () {
    return this.getDay() === Date.SATURDAY;
}
/**
 *
 * @return {boolean}
 */
Date.prototype.isSunday = function () {
    return this.getDay() === Date.SUNDAY;
}

Date.prototype.isWeekend = function () {
    return (this.getDay() === Date.SUNDAY) || (this.getDay() === Date.SATURDAY);
}

/**
 * Determine the number of days in the current month
 * @returns {number}
 */
Date.prototype.getDaysInMonth = function () {
    return [31, (this.isLeapYear() ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][this.getMonth()];
};

/**
 * Determine the first day of the current month
 * @returns {Date}
 */
Date.prototype.getFirstDayOfMonth = function () {
    return new Date(this.getFullYear(), this.getMonth(), 1);
}

/**
 * Determine the last day of the current month
 * @returns {Date}
 */
Date.prototype.getLastDayOfMonth = function () {
    return new Date(this.getFullYear(), this.getMonth() + 1, 0);
}


/**
 * Determine the previous Monday of the current date
 * @returns {Date}
 */
Date.prototype.getFirstDayOfWeek = function () {
    let d = this.copy();
    let day = d.getDay(),
        diff = d.getDate() - day + (day === 0 ? -6 : 1); // adjust when day is sunday
    return new Date(d.setDate(diff));
}

/**
 * Determine the Sunday of the current date
 * @returns {Date}
 */
Date.prototype.getLastDayOfWeek = function () {
    let d = this.clone();
    const first = d.getDate() - d.getDay() + 1;
    const last = first + 6;

    return new Date(d.setDate(last));
}
/**
 *
 * @returns {Date}
 */
Date.prototype.clone = function () {
    return new Date(this.valueOf());
}
/**
 *
 * @returns {Date}
 */
Date.prototype.copy = function () {
    return this.clone();
}

/**
 *
 * @returns {number}
 */
Date.prototype.getWeek = function () {
    // Copy date so don't modify original
    let d = new Date(Date.UTC(this.getFullYear(), this.getMonth(), this.getDate()));
    // Set to the nearest Thursday: current date + 4 - current day number
    // Make Sunday's day number 7
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
    // Get first day of year
    let yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    // Calculate full weeks to the nearest Thursday and return  week number
    return Math.ceil((((d - yearStart) / Date.UNITS.day) + 1) / 7);
}

/**
 *
 * @param {Date} toDate
 * @return {number}
 */
Date.prototype.getCountWeeks = function (toDate) {
    return Math.round(
        Math.abs(toDate.getTime() - this.getTime()) / Date.UNITS.week,
    );
}

/**
 *
 * @param {Date} toDate
 * @return {number}
 */
Date.prototype.getCountDays = function (toDate) {
    return Math.round(
        Math.abs(toDate.getTime() - this.getTime()) / Date.UNITS.day,
    );
}
Date.prototype.fromNow = function () {
    let rtf = new Intl.RelativeTimeFormat(Date.DEFAULT_LOCALE, {numeric: 'auto'})

    let getRelativeTime = (d1, d2 = new Date()) => {
        let elapsed = d1 - d2

        // "Math.abs" accounts for both "past" & "future" scenarios
        for (let u in Date.UNITS)
            if (Math.abs(elapsed) > Date.UNITS[u] || u == 'second')
                return rtf.format(Math.round(elapsed / Date.UNITS[u]), u);
    }

    return getRelativeTime(this.valueOf())
}

/**
 *
 * @param asArray
 * @returns {(number|string)[]|string}
 */
Date.prototype.formatDate = function (asArray) {
    let month = '' + (this.getMonth() + 1),
        day = '' + this.getDate(),
        year = this.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return asArray ? [year, month, day] : [year, month, day].join('-');
}
/**
 * Returns all data of one month as array
 * @return {*[]}
 */
Date.prototype.getMonthCalendar = function () {
    // this.setHours(0, 0, 0, 0);
    const startDay = this.getFirstDayOfMonth().getFirstDayOfWeek();
    const endDay = this.getLastDayOfMonth().getLastDayOfWeek();

    console.log(startDay, endDay);

    let array = [];
    while (startDay <= endDay) {
        array.push({
            week: startDay.getWeek(),
            days: Array(7).fill(0).map(() => {
                let d = startDay.clone();
                startDay.addDays(1);
                return d;
            })
        });
    }
    return array;
}
/**
 * Returns all data of one week as array
 * @return {Date[]}
 */
Date.prototype.getWeekCalendar = function () {
    const startDay = this.getFirstDayOfWeek();
    return Array(7).fill(0).map(() => {
        let d = startDay.clone();
        startDay.addDays(1);
        return d;
    });
}