function square(num) {
    return num * num;
}

// Loop from 1 to 10
for (let i = 1; i <= 10; i++) {
    let squaredValue = square(i);
    console.log("The square of " + i + " is: " + squaredValue);
}