// noinspection JSUnusedGlobalSymbols
Date.locale = {
    en: {
        dayNames: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        dayNamesShort: ["M", "T", "W", "T", "F", "S", "S"],
        monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    de: {
        dayNames: ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag"],
        dayNamesShort: ["M", "D", "M", "D", "F", "S", "S"],
        monthNames: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
        monthNamesShort: ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez']
    }
};

Date.DEFAULT_LOCALE = 'de';
/**
 *
 * @param {string} locale
 */
Date.setLocale = function (locale) {
    Date.DEFAULT_LOCALE = locale && (locale in Date.locale) ? locale : Date.DEFAULT_LOCALE;
};

/**
 *
 * @param {boolean} abbreviation
 * @return {string}
 */
Date.prototype.getMonthName = function (abbreviation = false) {
    let locale = Date.locale[Date.DEFAULT_LOCALE];
    let month = this.getMonth();
    return abbreviation
        ? locale.monthNamesShort[month]
        : locale.monthNames[month];
};
/**
 *
 * @param {boolean} abbreviation
 * @return {string}
 */
Date.prototype.getDayName = function (abbreviation = false) {
    let locale = Date.locale[Date.DEFAULT_LOCALE];

    let day = this.getDay() === 0 ? 6 : (this.getDay() - 1);
    // console.log(day);
    return abbreviation
        ? locale.dayNamesShort[day]
        : locale.dayNames[day];
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
    return this.getDay() === 1;
}
/**
 *
 * @return {boolean}
 */
Date.prototype.isTuesday = function () {
    return this.getDay() === 2;
}
/**
 *
 * @return {boolean}
 */
Date.prototype.isWednesday = function () {
    return this.getDay() === 3;
}
/**
 *
 * @return {boolean}
 */
Date.prototype.isThursday = function () {
    return this.getDay() === 4;
}

/**
 *
 * @return {boolean}
 */
Date.prototype.isFriday = function () {
    return this.getDay() === 5;
}
/**
 *
 * @return {boolean}
 */
Date.prototype.isSaturday = function () {
    return this.getDay() === 6;
}
/**
 *
 * @return {boolean}
 */
Date.prototype.isSunday = function () {
    return this.getDay() === 0;
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
    let d = new Date(this.valueOf());
    let day = d.getDay(),
        diff = d.getDate() - day + (day === 0 ? -6 : 1); // adjust when day is sunday
    return new Date(d.setDate(diff));
}

/**
 * Determine the Sunday of the current date
 * @returns {Date}
 */
Date.prototype.getLastDayOfWeek = function () {
    let d = new Date(this.valueOf());
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
    return Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
}

/**
 *
 * @param {Date} toDate
 * @return {number}
 */
Date.prototype.getCountWeeks = function (toDate) {
    return Math.round(
        Math.abs(toDate.getTime() - this.getTime()) / (1000 * 60 * 60 * 24 * 7),
    );
}

/**
 *
 * @param {Date} toDate
 * @return {number}
 */
Date.prototype.getCountDays = function (toDate) {
    return Math.round(
        Math.abs(toDate.getTime() - this.getTime()) / (1000 * 60 * 60 * 24),
    );
}
Date.prototype.fromNow = function () {
    let nowTime = new Date().getTime() / 1000;
    let time = this.getTime() / 1000;
    let duration = (nowTime > time) ? nowTime - time : time - nowTime ;
    let minus = (nowTime > time);

    let aSecond = 1;
    let aMinute = aSecond * 60;
    let aHour = aMinute * 60;
    let aDay = aHour * 24;
    let aMonth = aDay * 30;
    let aYear = aDay * 365;

    let text = 'seconds';
    let number = duration;

    switch (true) {
        case duration > aYear:
            text = 'year';
            number = Math.round(duration / aYear);
            break;
        case duration > aDay:
            text = 'month';
            number = Math.round(duration / aMonth);
            break;
        case duration > aDay:
            text = 'day';
            number = Math.round(duration / aDay);
            break;
        case duration > aHour:
            text = 'hour';
            number = Math.round(duration / aHour);
            break;
        case duration > aMinute:
            text = 'minutes';
            number = Math.round(duration / aMinute);
            break;
            case duration > 30 * aSecond:
            text = 'seconds';
            number = Math.round(duration);
            break;
        default:
            return "a moment ago"
    }

    if (minus)
        number *= -1;


    return new Intl.RelativeTimeFormat("de", { numeric: "auto" }).format(number, text);

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
    this.setHours(0, 0, 0, 0)
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