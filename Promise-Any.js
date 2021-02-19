const rejectMe = new Promise((_, reject) => reject("Path issues"));
const resolveMe = new Promise(resolve => resolve())

Promise.any([rejectMe, resolveMe, rejectMe,])
.then(() => console.log("handle resolve"))
.catch(e => console.log("rejected"))