const flipshit = require('./index.js')

var ctr = 0
function pass() {
	ctr = ctr + 1
	if (ctr === 2) {
		process.exit(0)
	}
}

setTimeout(() => {
	process.exit(1)
}, 1000)

process.on("uncaughtException", pass)
process.on("unhandledRejection", pass)

Promise.reject(new SyntaxError("NO PROMISES FOR YOU!"))
Promise.reject(new SyntaxError("NO PROMISES FOR YOU!"))
Promise.reject(new SyntaxError("NO PROMISES FOR YOU!"))
Promise.reject(new SyntaxError("NO PROMISES FOR YOU!"))

throw Error("I WANNA BE FREEEE")
