
// noinspection JSUnusedGlobalSymbols

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
    this.setMonth(this.getMonth() - 1);
    while (this.getMonth() === month) {
        this.setDate(this.getDate() - 1);
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
Date.prototype.isMonday = function() {
    return this.getDay() === 1;
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
Date.prototype.getMonday = function () {
    let d = new Date(this.valueOf());
    let day = d.getDay(),
        diff = d.getDate() - day + (day === 0 ? -6 : 1); // adjust when day is sunday
    return new Date(d.setDate(diff));
}

/**
 * Determine the Friday of the current date
 * @returns {Date}
 */
Date.prototype.getSunday = function () {
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