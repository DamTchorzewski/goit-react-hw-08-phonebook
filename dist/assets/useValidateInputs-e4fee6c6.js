import{Q as r}from"./index-1b8a4d94.js";const d=()=>({validateUsername:e=>{const t={length:e.length>=3&&e.length<=25,format:/^[A-Za-z]+(\s?[A-Za-z]+)*$/.test(e)},a=Object.keys(t).filter(n=>!t[n]);return a.includes("length")?r.error("Username length must be from 3 to 25 characters"):a.includes("format")?r.error("Enter a valid username"):!1},validateEmail:e=>({format:/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/.test(e)}).format?!1:r.error("Enter a valid e-mail address"),validatePassword:e=>{const t={length:e.length>=8,letter:/[A-Za-z]/.test(e),number:/\d/.test(e)},a=Object.keys(t).filter(n=>!t[n]);return a.includes("length")?r.error("Password must contain at least 8 characters"):a.includes("letter")?r.error("Password must contain at least one letter"):a.includes("number")?r.error("Password must contain at least one number"):!1},validateName:e=>({format:/^[a-zA-Z]+((['-][a-zA-Z ])?[a-zA-Z]*)*$/.test(e)}).format?!1:r.error("Enter a valid name"),validateNumber:e=>({format:/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/.test(e)}).format?!1:r.error("Enter a valid phone number")});export{d as u};
