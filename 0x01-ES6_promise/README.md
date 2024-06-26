# 0x01-ES6_promise

Promises are methods thats used for creating asynchronous functions or codes that ensures that all codes are executed before moving on the next code of execution.

Promises are widely used in codes that are trying to communicate with an API or codes that could generally take longer to execute.

With this method you are sure of getting a response (either resolve or reject) in which you can work with after code execution.

Promises are very powerful and together with async/await and try catch, you are sure to have a well executed code.

## How to Create A Promise

To create a Promise use the following syntax:

const promise = new Promise((resolve, reject) => {
// returned code to be executed
})

### Note:

Ensure that all promises are returned because if a Promise is attached with the `.then` method, the `.then()` wouldnt have any value to work with.
