// تبديل النماذج عند الضغط على الأزرار
document.getElementById('showin5').addEventListener('click', function () {
    document.getElementById('in5').style.display = 'block';
    document.getElementById('in4').style.display = 'none';
    document.getElementById('in3').style.display = 'none';
    document.getElementById('in2').style.display = 'none';
    document.getElementById('in1').style.display = 'none';
});

document.getElementById('showin4').addEventListener('click', function () {
    document.getElementById('in5').style.display = 'none';
    document.getElementById('in4').style.display = 'block';
    document.getElementById('in3').style.display = 'none';
    document.getElementById('in2').style.display = 'none';
    document.getElementById('in1').style.display = 'none';

});

document.getElementById('showin3').addEventListener('click', function () {
    document.getElementById('in5').style.display = 'none';
    document.getElementById('in4').style.display = 'none';
    document.getElementById('in3').style.display = 'block';
    document.getElementById('in2').style.display = 'none';
    document.getElementById('in1').style.display = 'none';

});

document.getElementById('showin2').addEventListener('click', function () {
    document.getElementById('in5').style.display = 'none';
    document.getElementById('in4').style.display = 'none';
    document.getElementById('in3').style.display = 'none';
    document.getElementById('in2').style.display = 'block';
    document.getElementById('in1').style.display = 'none';

});

document.getElementById('showin1').addEventListener('click', function () {
    document.getElementById('in5').style.display = 'none';
    document.getElementById('in4').style.display = 'none';
    document.getElementById('in3').style.display = 'none';
    document.getElementById('in2').style.display = 'none';
    document.getElementById('in1').style.display = 'block';
});


function calculateTotal() {
    // مؤشر 5
    const quantity1 = parseInt(document.getElementById("type1").value) || 0;
    const quantity2 = parseInt(document.getElementById("type2").value) || 0;
    const quantity3 = parseInt(document.getElementById("type3").value) || 0;
    const quantity4 = parseInt(document.getElementById("type4").value) || 0;
    const quantity5 = parseInt(document.getElementById("type5").value) || 0;
    const quantity6 = parseInt(document.getElementById("type6").value) || 0;

    const days5 = parseFloat(document.getElementById('days5').value) || 0;
    const hours5 = parseFloat(document.getElementById('hours5').value) || 0;
    const minutes5 = parseFloat(document.getElementById('minutes5').value) || 0;
    const seconds5 = parseFloat(document.getElementById('seconds5').value) || 0;

    const totalSeconds5 = days5 * 3600 * 24 + hours5 * 3600 + minutes5 * 60 + seconds5;

    const percentage5 = parseFloat(document.getElementById('percentage5').value) || 0;
    const factor5 = 100 / (100 + percentage5);

    let adjustedSeconds5 = totalSeconds5 * factor5;
    const adjustedDays5 = Math.floor(adjustedSeconds5 / (24 * 3600));
    adjustedSeconds5 %= (24 * 3600);
    const adjustedHours5 = Math.floor(adjustedSeconds5 / 3600);
    adjustedSeconds5 %= 3600;
    const adjustedMinutes5 = Math.floor(adjustedSeconds5 / 60);
    adjustedSeconds5 %= 60;

    const resultText5 = ` ${adjustedDays5}d :${adjustedHours5}h :${adjustedMinutes5}m :${Math.round(adjustedSeconds5)}s`;
    

    const total1 = quantity1 * quantity2;
    const total2 = quantity2 * quantity3;
    const total3 = quantity2 * quantity4;
    const total4 = quantity2 * quantity5;
    const total5 = quantity2 * quantity6;

    document.getElementById("totalResult5").innerHTML = `
        عدد الجنود المطلوبة للتجنيد: ${total1}<br>
        مجموع القمح المطلوب للمشاة و للعجلات: ${total2}<br>
        مجموع الخشب المطلوب للمشاة و للعجلات: ${total3}<br>
        مجموع القمح المطلوب للفرسان و الرماة: ${total4}<br>
        مجموع الخشب المطلوب للفرسان و الرماة: ${total5}<br>
        الوقت الحالي: ${ resultText5}
    `;
    // document.getElementById('result5').innerText = resultText;
    

    // مؤشر 4
    const quantity7 = parseInt(document.getElementById("type7").value) || 0;
    const quantity8 = parseInt(document.getElementById("type8").value) || 0;
    const quantity9 = parseInt(document.getElementById("type9").value) || 0;
    const quantity10 = parseInt(document.getElementById("type10").value) || 0;
    const quantity11 = parseInt(document.getElementById("type11").value) || 0;
    const quantity12 = parseInt(document.getElementById("type12").value) || 0;


    
    const days4 = parseFloat(document.getElementById('days4').value) || 0;
    const hours4 = parseFloat(document.getElementById('hours4').value) || 0;
    const minutes4 = parseFloat(document.getElementById('minutes4').value) || 0;
    const seconds4 = parseFloat(document.getElementById('seconds4').value) || 0;

    const totalSeconds4 = days4 * 3600 * 24 + hours4 * 3600 + minutes4 * 60 + seconds4;

    const percentage4 = parseFloat(document.getElementById('percentage4').value) || 0;
    const factor4 = 100 / (100 + percentage4);

    let adjustedSeconds4 = totalSeconds4 * factor4;
    const adjustedDays4 = Math.floor(adjustedSeconds4 / (24 * 3600));
    adjustedSeconds4 %= (24 * 3600);
    const adjustedHours4 = Math.floor(adjustedSeconds4 / 3600);
    adjustedSeconds4 %= 3600;
    const adjustedMinutes4 = Math.floor(adjustedSeconds4 / 60);
    adjustedSeconds4 %= 60;

    const resultText4 = ` ${adjustedDays4}d :${adjustedHours4}h :${adjustedMinutes4}m :${Math.round(adjustedSeconds4)}s`;
    

    const total10 = quantity7 * quantity8;
    const total20 = quantity8 * quantity9;
    const total30 = quantity8 * quantity10;
    const total40 = quantity8 * quantity11;
    const total50 = quantity8 * quantity12;

    document.getElementById("totalResult4").innerHTML = `
        عدد الجنود المطلوبة للتجنيد: ${total10}<br>
        مجموع القمح المطلوب للمشاة و للعجلات: ${total20}<br>
        مجموع الخشب المطلوب للمشاة و للعجلات: ${total30}<br>
        مجموع القمح المطلوب للفرسان و الرماة: ${total40}<br>
        مجموع الخشب المطلوب للفرسان و الرماة: ${total50}<br>
        الوقت الحالي: ${resultText4}
    `;
    // مؤشر 3

    const quantity13 = parseInt(document.getElementById("type13").value) || 0;
    const quantity14 = parseInt(document.getElementById("type14").value) || 0;
    const quantity15 = parseInt(document.getElementById("type15").value) || 0;
    const quantity16 = parseInt(document.getElementById("type16").value) || 0;
    const quantity17 = parseInt(document.getElementById("type17").value) || 0;
    const quantity18 = parseInt(document.getElementById("type18").value) || 0;

    const days3 = parseFloat(document.getElementById('days3').value) || 0;
    const hours3 = parseFloat(document.getElementById('hours3').value) || 0;
    const minutes3 = parseFloat(document.getElementById('minutes3').value) || 0;
    const seconds3 = parseFloat(document.getElementById('seconds3').value) || 0;

    const totalSeconds3 = days3 * 3600 * 24 + hours3 * 3600 + minutes3 * 60 + seconds3;

    const percentage3 = parseFloat(document.getElementById('percentage3').value) || 0;
    const factor3 = 100 / (100 + percentage3);

    let adjustedSeconds3 = totalSeconds3 * factor3;
    const adjustedDays3 = Math.floor(adjustedSeconds3 / (24 * 3600));
    adjustedSeconds3 %= (24 * 3600);
    const adjustedHours3 = Math.floor(adjustedSeconds3 / 3600);
    adjustedSeconds3 %= 3600;
    const adjustedMinutes3 = Math.floor(adjustedSeconds3 / 60);
    adjustedSeconds3 %= 60;

    const resultText3= ` ${adjustedDays3}d :${adjustedHours3}h :${adjustedMinutes3}m :${Math.round(adjustedSeconds3)}s`;

    const total100 = quantity13 * quantity14;
    const total200 = quantity14 * quantity15;
    const total300 = quantity14 * quantity16;
    const total400 = quantity14 * quantity17;
    const total500 = quantity14 * quantity18;

    document.getElementById("totalResult3").innerHTML = `
        عدد الجنود المطلوبة للتجنيد: ${total100}<br>
        مجموع القمح المطلوب للمشاة و للعجلات: ${total200}<br>
        مجموع الخشب المطلوب للمشاة و للعجلات: ${total300}<br>
        مجموع القمح المطلوب للفرسان و الرماة: ${total400}<br>
        مجموع الخشب المطلوب للفرسان و الرماة: ${total500}<br>
        الوقت الحالي: ${ resultText3}
    `;
    
    // مؤشر 2

    const quantity19 = parseInt(document.getElementById("type19").value) || 0;
    const quantity20 = parseInt(document.getElementById("type20").value) || 0;
    const quantity21 = parseInt(document.getElementById("type21").value) || 0;
    const quantity22 = parseInt(document.getElementById("type22").value) || 0;
    const quantity23 = parseInt(document.getElementById("type23").value) || 0;
    const quantity24 = parseInt(document.getElementById("type24").value) || 0;

    const days2 = parseFloat(document.getElementById('days2').value) || 0;
    const hours2 = parseFloat(document.getElementById('hours2').value) || 0;
    const minutes2 = parseFloat(document.getElementById('minutes2').value) || 0;
    const seconds2 = parseFloat(document.getElementById('seconds2').value) || 0;

    const totalSeconds2 = days2 * 3600 * 24 + hours2 * 3600 + minutes2 * 60 + seconds2;

    const percentage2 = parseFloat(document.getElementById('percentage2').value) || 0;
    const factor2 = 100 / (100 + percentage2);

    let adjustedSeconds2 = totalSeconds2 * factor2;
    const adjustedDays2 = Math.floor(adjustedSeconds2 / (24 * 3600));
    adjustedSeconds2 %= (24 * 3600);
    const adjustedHours2 = Math.floor(adjustedSeconds2 / 3600);
    adjustedSeconds2 %= 3600;
    const adjustedMinutes2 = Math.floor(adjustedSeconds2 / 60);
    adjustedSeconds2 %= 60;

    const resultText2= ` ${adjustedDays2}d :${adjustedHours2}h :${adjustedMinutes2}m :${Math.round(adjustedSeconds2)}s`;

    const total1000 = quantity19 * quantity20;
    const total2000 = quantity20 * quantity21;
    const total3000 = quantity20 * quantity22;
    const total4000 = quantity20 * quantity23;
    const total5000 = quantity20 * quantity24;

    document.getElementById("totalResult2").innerHTML = `
        عدد الجنود المطلوبة للتجنيد: ${total1000}<br>
        مجموع القمح المطلوب للمشاة و للعجلات: ${total2000}<br>
        مجموع الخشب المطلوب للمشاة و للعجلات: ${total3000}<br>
        مجموع القمح المطلوب للفرسان و الرماة: ${total4000}<br>
        مجموع الخشب المطلوب للفرسان و الرماة: ${total5000}<br>
        الوقت الحالي: ${ resultText2}
    `;

    // مؤشر 1

    const quantity25 = parseInt(document.getElementById("type25").value) || 0;
    const quantity26 = parseInt(document.getElementById("type26").value) || 0;
    const quantity27 = parseInt(document.getElementById("type27").value) || 0;
    const quantity28 = parseInt(document.getElementById("type28").value) || 0;
    const quantity29 = parseInt(document.getElementById("type29").value) || 0;
    const quantity30 = parseInt(document.getElementById("type30").value) || 0;

    const days1 = parseFloat(document.getElementById('days1').value) || 0;
    const hours1 = parseFloat(document.getElementById('hours1').value) || 0;
    const minutes1 = parseFloat(document.getElementById('minutes1').value) || 0;
    const seconds1 = parseFloat(document.getElementById('seconds1').value) || 0;

    const totalSeconds1 = days1 * 3600 * 24 + hours1 * 3600 + minutes1 * 60 + seconds1;

    const percentage1 = parseFloat(document.getElementById('percentage1').value) || 0;
    const factor1 = 100 / (100 + percentage1);

    let adjustedSeconds1 = totalSeconds1 * factor1;
    const adjustedDays1 = Math.floor(adjustedSeconds1 / (24 * 3600));
    adjustedSeconds1 %= (24 * 3600);
    const adjustedHours1 = Math.floor(adjustedSeconds1 / 3600);
    adjustedSeconds1 %= 3600;
    const adjustedMinutes1 = Math.floor(adjustedSeconds1 / 60);
    adjustedSeconds1 %= 60;

    const resultText1= ` ${adjustedDays1}d :${adjustedHours1}h :${adjustedMinutes1}m :${Math.round(adjustedSeconds1)}s`;

    const total10000 = quantity25 * quantity26;
    const total20000 = quantity26 * quantity27;
    const total30000 = quantity26 * quantity28;
    const total40000 = quantity26 * quantity29;
    const total50000 = quantity26 * quantity30;

    document.getElementById("totalResult1").innerHTML = `
        عدد الجنود المطلوبة للتجنيد: ${total10000}<br>
        مجموع القمح المطلوب للمشاة و للعجلات: ${total20000}<br>
        مجموع الخشب المطلوب للمشاة و للعجلات: ${total30000}<br>
        مجموع القمح المطلوب للفرسان و الرماة: ${total40000}<br>
        مجموع الخشب المطلوب للفرسان و الرماة: ${total50000}<br>
        الوقت الحالي: ${ resultText1}
    `;
}
