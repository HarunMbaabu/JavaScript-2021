#  Javascript 21 - ES12
<div align="center">
    
![ES12 IMAGE](https://github.com/LuxTechAcademy/JavaScript-2021/blob/main/es12.png) 

</div>

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


#### **weakRef**
This one is easy to understand by very tricky to get an hands on example. When an object no longer have strong reference to any variable or part of code, JS engine's garbage collector may destroy and reclaim it's memory.

A very standard process of how GC works. When we store such weak refs in cache, it sometimes creates a little issue and hopefully in near future, this will be resolved. 

You should really take some time and read this official [TC 39 WeakRef proposal guide](https://github.com/tc39/proposal-weakrefs/blob/master/reference.md) that is writted in very depth and use cases.

Best Wishes from Lux Tech Academy Team.

Happy Coding 🥳


