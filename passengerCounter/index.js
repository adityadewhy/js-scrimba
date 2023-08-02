let count = 0;
function increment() {
    count += 1;
    document.getElementById("count-el").textContent = count;
}

function save(){
    console.log(count);
    document.getElementById("save-p").textContent += count + " - "
    count = 0;
    document.getElementById("count-el").textContent = 0;
}