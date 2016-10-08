/* Copyright 2015-2016 Axel Smeets */
function flipshit(err) {
    if (Math.random() > 0.5)
        preflip(err)
    else
        postflip(err)
}

process.on("uncaughtException", flipshit)
process.on("unhandledRejection", flipshit)

function preflip(err){
    var emote = [
        '(ﾉ°□°)ﾉ ︵ ┻━┻ ',
        '(ﾉ°Д°)ﾉ ︵ ┻━┻ ',
        '(ﾉ◕ヮ◕)ﾉ'
    ][Math.floor(Math.random() * 3)]
    console.error(emote, err.stack)
}

function postflip(err){
    var emote = [
        '¯\\(ツ)/¯',
        'ಠ_ಠ'
    ][Math.floor(Math.random() * 2)]
    var first = err.stack.substring(0, err.stack.indexOf('\n'))

    console.error(err.stack.replace(first, first + " " + emote))
}

module.exports = flipshit