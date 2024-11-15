// // تبديل النماذج عند الضغط على الأزرار
document.getElementById('showForm1').addEventListener('click', function () {
    document.getElementById('form1').style.display = 'block';
    document.getElementById('form2').style.display = 'none';
});

document.getElementById('showForm2').addEventListener('click', function () {
    document.getElementById('form1').style.display = 'none';
    document.getElementById('form2').style.display = 'block';
});

function calculateTotal() {
    const quantity1 = parseInt(document.getElementById("type1").value) || 0;
    const quantity2 = parseInt(document.getElementById("type2").value) || 0;
    const quantity3 = parseInt(document.getElementById("type3").value) || 0;
    const quantity4 = parseInt(document.getElementById("type4").value) || 0;
    const quantity5 = parseInt(document.getElementById("type5").value) || 0;
    const quantity6 = parseInt(document.getElementById("type6").value) || 0;
    const quantity7 = parseInt(document.getElementById("type7").value) || 0;
    const quantity8 = parseInt(document.getElementById("type8").value) || 0;
    const quantity9 = parseInt(document.getElementById("type9").value) || 0;
    const quantity10 = parseInt(document.getElementById("type10").value) || 0;
    //
    const quantity11 = parseInt(document.getElementById("type11").value) || 0;
    const quantity12 = parseInt(document.getElementById("type12").value) || 0;
    const quantity13 = parseInt(document.getElementById("type13").value) || 0;
    const quantity14 = parseInt(document.getElementById("type14").value) || 0;
    const quantity15 = parseInt(document.getElementById("type15").value) || 0;
    const quantity16 = parseInt(document.getElementById("type16").value) || 0;
    const quantity17 = parseInt(document.getElementById("type17").value) || 0;
    const quantity18 = parseInt(document.getElementById("type18").value) || 0;
    const quantity19 = parseInt(document.getElementById("type19").value) || 0;
    const quantity20 = parseInt(document.getElementById("type20").value) || 0;
    

    const total1 = ((quantity1 * 5000000) + (quantity2 * 1500000) + (quantity3 * 500000) + (quantity4 * 150000) + (quantity5 * 50000) + 
    (quantity6 * 30000) + (quantity7 * 10000) + (quantity8 * 4000) + (quantity9 * 2000) + (quantity10 * 1000) )/* Add other calculations */;
    
    document.getElementById("totalResult1").textContent = `Total: ${total1} units`;

    const total2 = ((quantity11 * 500000) + (quantity12 * 150000) + (quantity13 * 50000) + (quantity14 * 15000) + (quantity15 * 5000) + 
    (quantity16 * 3000) + (quantity17 * 1000) + (quantity18 * 400) + (quantity19 * 200) + (quantity20 * 100) )/* Add other calculations */;
    
    document.getElementById("totalResult2").textContent = `Total: ${total2} units`;

}
// function calculateTotal() {
//     const quantity11 = parseInt(document.getElementById("type11").value) || 0;
//     const quantity12 = parseInt(document.getElementById("type12").value) || 0;
//     const quantity13 = parseInt(document.getElementById("type13").value) || 0;
//     const quantity14 = parseInt(document.getElementById("type14").value) || 0;
//     const quantity15 = parseInt(document.getElementById("type15").value) || 0;
//     const quantity16 = parseInt(document.getElementById("type16").value) || 0;
//     const quantity17 = parseInt(document.getElementById("type17").value) || 0;
//     const quantity18 = parseInt(document.getElementById("type18").value) || 0;
//     const quantity19 = parseInt(document.getElementById("type19").value) || 0;
//     const quantity20 = parseInt(document.getElementById("type20").value) || 0;

//     const total = ((quantity11 * 500000) + (quantity12 * 150000) + (quantity13 * 50000) + (quantity14 * 15000) + (quantity15 * 5000) + 
//     (quantity16 * 3000) + (quantity17 * 1000) + (quantity18 * 400) + (quantity19 * 200) + (quantity20 * 100) )/* Add other calculations */;
    
//     document.getElementById("totalResult2").textContent = `Total: ${total} units`;

// }





