
function recursive(n, total = 0) {
    if(n <= 0) {
        console.log("Done");
        return total;
    }
    total += n;
    recursive(n - 1);
}

recursive(3)