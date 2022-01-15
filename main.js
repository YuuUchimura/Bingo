const view = document.getElementById("view");

const sheet = [
    ["B", "I", "N", "G", "O"],
    [],
    [],
    [],
    [],
    []
];

for (let i = 0; sheet[1].length < 5; i++) {
    const random = Math.floor(Math.random() * (15 - 1)) + 1;
    if (!sheet[1].includes(random)) {
        sheet[1].push(random)
    }
}
for (let i = 0; sheet[2].length < 5; i++) {
    const random = Math.floor(Math.random() * (30 - 16)) + 16;
    if (!sheet[2].includes(random)) {
        sheet[2].push(random)
    }
}
for (let i = 0; sheet[3].length < 5; i++) {
    const random = Math.floor(Math.random() * (45 - 31)) + 31;
    if (!sheet[3].includes(random)) {
        sheet[3].push(random)
    }
}
for (let i = 0; sheet[4].length < 5; i++) {
    const random = Math.floor(Math.random() * (60 - 46)) + 46;
    if (!sheet[4].includes(random)) {
        sheet[4].push(random)
    }
}
for (let i = 0; sheet[5].length < 5; i++) {
    const random = Math.floor(Math.random() * (75 - 61)) + 61;
    if (!sheet[5].includes(random)) {
        sheet[5].push(random)
    }
}
// i = 列
// j = 行
let tdId = "tdId";
for (let i = 0; i < 6; i++) {
    const tr = document.createElement("tr");
    view.appendChild(tr);
    for (let j = 0; j < 5; j++) {
        const td = document.createElement("td");
        if (i === 0) {
            td.textContent = sheet[0][j];
        } else {
            td.textContent = sheet[j + 1][i - 1];
            td.setAttribute("id", tdId + sheet[j + 1][i - 1]);
            if (i === 3 && j === 2) {
                td.textContent = "Free";
                td.classList.add("hit-num");
            }
        }
        tr.appendChild(td);
    }
}

let a = [];
let turn = 0
const hitNum = document.getElementById("hitNum");
hitNum.addEventListener("click", () => {
    let randomNum;
    while (true) {
        randomNum = Math.floor(Math.random() * (75 - 1)) + 1;
        if (!a.includes(randomNum)) {
            a.push(randomNum)
            console.log(`数字は${randomNum}番です！`);
            break;
        }
    }
    const td2 = document.getElementById(`tdId${randomNum}`);
    if (td2 !== null) {
        td2.classList.add("hit-num");
    }
    turn++
    if (turn === 75) {
        location.reload();
    }
});
