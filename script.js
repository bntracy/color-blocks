console.log('🟥 🟦 🟩 🟨');

let redCount = 1;
let blueCount = 1;
let greenCount = 1;
let yellowCount = 1;

function createRedBlock() {
    // add the block
    let blockSection = document.getElementById('blocks');
    blockSection.innerHTML += '<div class="block red-fill" onclick="deleteRedBlock(event)"></div>';
    // increment the count
    redCount++;
    // display the new count
    let redCountSpan = document.getElementById('red-count');
    redCountSpan.innerText = redCount;
}

function createBlueBlock() {
    // add the block
    let blockSection = document.getElementById('blocks');
    blockSection.innerHTML += '<div class="block blue-fill" onclick="deleteBlueBlock(event)"></div>';
    // increment the count
    blueCount++;
    // display the new count
    let blueCountSpan = document.getElementById('blue-count');
    blueCountSpan.innerText = blueCount;
}

function createGreenBlock() {
    // add the block
    let blockSection = document.getElementById('blocks');
    blockSection.innerHTML += '<div class="block green-fill" onclick="deleteGreenBlock(event)"></div>';
    // increment the count
    greenCount++;
    // display the new count
    let greenCountSpan = document.getElementById('green-count');
    greenCountSpan.innerText = greenCount;
}

function createYellowBlock() {
    // add the block
    let blockSection = document.getElementById('blocks');
    blockSection.innerHTML += '<div class="block yellow-fill" onclick="deleteYellowBlock(event)"></div>';
    // increment the count
    yellowCount++;
    // display the new count
    let yellowCountSpan = document.getElementById('yellow-count');
    yellowCountSpan.innerText = yellowCount;
}

function deleteBlock(event) {
    event.target.remove();
}

function deleteRedBlock(event) {
    // delete the block
    deleteBlock(event);
    // decrement the count
    redCount--;
    // display the new count
    let redCountSpan = document.getElementById('red-count');
    redCountSpan.innerText = redCount;
}

function deleteBlueBlock(event) {
    // delete the block
    deleteBlock(event);
    // decrement the count
    blueCount--;
    // display the new count
    let blueCountSpan = document.getElementById('blue-count');
    blueCountSpan.innerText = blueCount;
}

function deleteGreenBlock(event) {
    // delete the block
    deleteBlock(event);
    // decrement the count
    greenCount--;
    // display the new count
    let greenCountSpan = document.getElementById('green-count');
    greenCountSpan.innerText = greenCount;
}

function deleteYellowBlock(event) {
    // delete the block
    deleteBlock(event);
    // decrement the count
    yellowCount--;
    // display the new count
    let yellowCountSpan = document.getElementById('yellow-count');
    yellowCountSpan.innerText = yellowCount;
}