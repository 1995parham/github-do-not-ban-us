const replaceLastItemMapper = (valueToReplace) =>
    (item, index, array) =>
        array.length === index + 1 ?
            valueToReplace :
            item

const concatSpace = string => string.concat(' ')

const splitChars = word => word.split('')

const pushToStream = stream =>
    char => stream.push(char)

const execution = (stream) =>
    ['GitHub', 'is', 'for', 'everyone']
        .map( concatSpace )
        .flatMap( splitChars )
        .flatMap( replaceLastItemMapper(['\n', null]) )
        .map( pushToStream(stream) )

const Stream = require('stream')
const readableStream = new Stream.Readable()

readableStream
    .pipe(process.stdout)

execution(readableStream)