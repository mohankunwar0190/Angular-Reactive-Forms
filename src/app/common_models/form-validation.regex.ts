/*
Regular expressions for Form validation
*/

// Student number regular expression
export const SNUMBER_REGEXP = /([S])\d{6}$/;
// Email address regular expression
export const EMAIL_REGEXP = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
// Social Security Number regular expression
export const SSN_REGEXP =  /\d{3}[\-]\d{2}[\-]\d{4}/;
// US Phone number regular expression
export  const PHONE_REGEXP = /^\d{10}$/;
// US Zipcode regular expression
export const ZIPCODE_REGEXP = /^\d{5}$/;
