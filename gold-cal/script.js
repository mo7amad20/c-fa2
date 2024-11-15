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
    const quantity11 = parseInt(document.getElementById("type11").value) || 0;
    // Add similar lines for other types

    const total = ((quantity1 * 150000) + (quantity2 * 50000) + (quantity3 * 10000) + (quantity4 * 2000) + (quantity5 * 1000) + 
    (quantity6 * 200) + (quantity7 * 100) + (quantity8 * 50) + (quantity9 * 20) + (quantity10 * 10) + (quantity11 * 5) )/* Add other calculations */;
    
    document.getElementById("totalResult").textContent = `Total: ${total} units`;
}
