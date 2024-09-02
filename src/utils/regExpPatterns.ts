const oneUppercase = /[A-Z]/;
const oneLowercase = /[a-z]/;
const oneLetter = /[a-z]/i;
const oneNumber = /\d/;
const oneSpecialChar = /[`/~!@#$%^&*()|+={}:;"\\'<>,.?_[\]\\]/;
const emailPattern = /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/;

export { emailPattern, oneLetter, oneLowercase, oneNumber, oneSpecialChar, oneUppercase };
