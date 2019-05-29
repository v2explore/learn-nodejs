var sum = 0;
process.argv.splice(2).forEach( e => {
    sum += +e;
});
console.log(sum);