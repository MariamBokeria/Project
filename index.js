function addDay() {
    let row1 = document.getElementById("row1");
    let col1 = row1.insertCell(2);
    col1.innerHTML = prompt("Enter the Date: ");

    let row2 = document.getElementById("row2");
    let col = row2.insertCell(2);
    col.innerHTML = prompt("Enter the value for გიორგი აბზიანიძე: ");
    let avg1 = document.getElementById("avg1");
    let sum = 0;
    sum += col.innerHTML;
    avg1.innerHTML = sum / col;
    
    let row3 = document.getElementById("row3");
    col = row3.insertCell(2);
    col.innerHTML = prompt("Enter the value for დათო ქარსელაძე: ");
    let avg2 = document.getElementById("avg2");
    sum = 0;
    sum += col.innerHTML;
    avg2.innerHTML = sum / col;

    let row4 = document.getElementById("row4");
    col = row4.insertCell(2);
    col.innerHTML = prompt("Enter the value for ელენე ქუში: ");
    let avg3 = document.getElementById("avg3");
    sum = 0;
    sum += col.innerHTML;
    avg3.innerHTML = sum / col;

    let row5 = document.getElementById("row5");
    col = row5.insertCell(2);
    col.innerHTML = prompt("Enter the value for ვახტანგ ნოდაძე: ");
    let avg4 = document.getElementById("avg4");
    sum = 0;
    sum += col.innerHTML;
    avg4.innerHTML = sum / col;

    let row6 = document.getElementById("row6");
    col = row6.insertCell(2);
    col.innerHTML = prompt("Enter the value for თამუნა გოგოლაძე: ");
    let avg5 = document.getElementById("avg5");
    sum = 0;
    sum += col.innerHTML;
    avg5.innerHTML = sum / col;

    let row7 = document.getElementById("row7");
    col = row7.insertCell(2);
    col.innerHTML = prompt("Enter the value for თეა სილაგავა: ");
    let avg6 = document.getElementById("avg6");
    sum = 0;
    sum += col.innerHTML;
    avg6.innerHTML = sum / col;

    let row8 = document.getElementById("row8");
    col = row8.insertCell(2);
    col.innerHTML = prompt("Enter the value for მამუკა ანჯაფარიძე: ");
    let avg7 = document.getElementById("avg7");
    sum = 0;
    sum += col.innerHTML;
    avg7.innerHTML = sum / col;

    let row9 = document.getElementById("row9");
    col = row9.insertCell(2);
    col.innerHTML = prompt("Enter the value for მარიამ ბოკერია: ");
    let avg8 = document.getElementById("avg8");
    sum = 0;
    sum += col.innerHTML;
    avg8.innerHTML = sum / col;

    let row10 = document.getElementById("row10");
    col = row10.insertCell(2);
    col.innerHTML = prompt("Enter the value for მარიამ ჯანანაშვილი: ");
    let avg9 = document.getElementById("avg9");
    sum = 0;
    sum += col.innerHTML;
    avg9.innerHTML = sum / col;

    let row11 = document.getElementById("row11");
    col = row11.insertCell(2);
    col.innerHTML = prompt("Enter the value for ნინო გრიგალაშვილი: ");
    let avg10 = document.getElementById("avg10");
    sum = 0;
    sum += col.innerHTML;
    avg10.innerHTML = sum / col;
};

function removeDay() {
    let col = document.getElementById("row1");
    col.deleteCell(2);
    col = document.getElementById("row2");
    col.deleteCell(2);
    col = document.getElementById("row3");
    col.deleteCell(2);
    col = document.getElementById("row4");
    col.deleteCell(2);
    col = document.getElementById("row5");
    col.deleteCell(2);
    col = document.getElementById("row6");
    col.deleteCell(2);
    col = document.getElementById("row7");
    col.deleteCell(2);
    col = document.getElementById("row8");
    col.deleteCell(2);
    col = document.getElementById("row9");
    col.deleteCell(2);
    col = document.getElementById("row10");
    col.deleteCell(2);
    col = document.getElementById("row11");
    col.deleteCell(2);
};
