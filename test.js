require('./index.js')

if (Math.random() > 0.5)
    throw Error("I WANNA BE FREEEE")
else
    Promise.reject(new SyntaxError("NO PROMISES FOR YOU!"))