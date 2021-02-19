#  Javascript 21 - ES12

Every year, Javascript teams brings in new features, this year javascript team has released ES12 (JavaScript 2021)  with  4 new features, which are almost in production rollout.

1).Replace all 



**Note That:**

Use the latest node version,  All examples are tested with Node version 15.8.0.

You can use [this link](https://stackoverflow.com/questions/46210077/how-to-upgrade-nodejs-to-latest-version/46210606) to learn how to upgrade you nodejs to the latest version.

### **1). Replace all**

With this new replaceAll, it replaces all instances of a word provided in the first argument. In case you want to use any regex expression, that can be done by /expression/g, passed in first argument. 

**Example**

~~~javascript

const str = "lux Tech Academy on-boarding session ";
const newStr = str.replaceAll("lux", "Lux");
console.log(newStr);

~~~ 

### **2). Promise Any**

Promise.any gives you a successful response if any one of the promise is resolved. 

~~~javascript
const rejectMe = new Promise((_, reject) => reject("Path issues"));
const resolveMe = new Promise(resolve => resolve())

Promise.any([rejectMe, resolveMe, rejectMe,])
.then(() => console.log("handle resolve"))
.catch(e => console.log("rejected"))
~~~

Here if in place of any, Promise.race is used, it will get a rejection response. 


### **3). Numeric separators**

Really a fancy name to make numbers more readable. This feature is now being supported by many languages.

~~~javascript
const num = 100_000
console.log(num)

~~~ 

## **4). Logical Assignment Operators**

Just like += or *=, we have now logical assignment operators available to us. You can use &&= or ||=. Here is an easy example. 

~~~javascript 
function cartTotal(value){
    value ??= 0
    console.log("Your total is: ", value)
}

cartTotal()
cartTotal(20)
~~~

