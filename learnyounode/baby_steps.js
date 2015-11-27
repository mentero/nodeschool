if(process.argv.length - 2 <= 0) { return }

var args = process.argv.slice(2);
var sum  = args.reduce(function(previous, current) {
    return Number(previous) + Number(current);
});

console.log(sum)
