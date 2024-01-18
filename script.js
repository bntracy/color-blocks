console.log('🟥 🟦 🟩 🟨');

function createRedBlock() {
    let blockSection = document.getElementById('blocks');
    blockSection.innerHTML += '<div class="block red-fill" onclick="deleteBlock(event)"></div>';
}

function createBlueBlock() {
    let blockSection = document.getElementById('blocks');
    blockSection.innerHTML += '<div class="block blue-fill" onclick="deleteBlock(event)"></div>';
}

function createGreenBlock() {
    let blockSection = document.getElementById('blocks');
    blockSection.innerHTML += '<div class="block green-fill" onclick="deleteBlock(event)"></div>';
}

function createYellowBlock() {
    let blockSection = document.getElementById('blocks');
    blockSection.innerHTML += '<div class="block yellow-fill" onclick="deleteBlock(event)"></div>';
}

function deleteBlock(event) {
    event.target.remove();
}