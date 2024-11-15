// // function calculateAcceleration() {
// //     const days = parseInt(document.getElementById('days').value);
// //     const hours1 = parseInt(document.getElementById('hours1').value);
// //     const hours2 = parseInt(document.getElementById('hours2').value);
// //     const hours3 = parseInt(document.getElementById('hours3').value);
// //     const hours4 = parseInt(document.getElementById('hours4').value);
// //     const hours5 = parseInt(document.getElementById('hours5').value);
// //     const minutes1 = parseInt(document.getElementById('minutes1').value);
// //     const minutes2 = parseInt(document.getElementById('minutes2').value);
// //     const minutes3 = parseInt(document.getElementById('minutes3').value);

// //     const accelerations = [
// //         ['days', days],
// //         ['hours', hours1],
// //         ['hours', hours2],
// //         ['hours', hours3],
// //         ['hours', hours4],
// //         ['hours', hours5],
// //         ['minutes', minutes1],
// //         ['minutes', minutes2],
// //         ['minutes', minutes3]
// //     ];

// //     let totalSeconds = 0;

// //     for (const [duration, quantity] of accelerations) {
// //         if (duration === 'days') {
// //             totalSeconds += quantity * 24 * 60 * 60;
// //         } else if (duration === 'hours') {
// //             totalSeconds += quantity * 60 * 60;
// //         } else if (duration === 'minutes') {
// //             totalSeconds += quantity * 60;
// //         }
// //     }

// //     const totalDays = Math.floor(totalSeconds / (24 * 60 * 60));
// //     totalSeconds %= (24 * 60 * 60);
// //     const totalHours = Math.floor(totalSeconds / 3600);
// //     totalSeconds %= 3600;
// //     const totalMinutes = Math.floor(totalSeconds / 60);
// //     totalSeconds %= 60;

// //     displayResult(totalDays, totalHours, totalMinutes, totalSeconds);
// // }

// // function displayResult(days, hours, minutes, seconds) {
// //     document.getElementById('totalDays').innerText = `Days: ${days}`;
// //     document.getElementById('totalHours').innerText = `Hours: ${hours}`;
// //     document.getElementById('totalMinutes').innerText = `Minutes: ${minutes}`;
// //     document.getElementById('totalSeconds').innerText = `Seconds: ${seconds}`;
// // }

// function calculateAcceleration() {
//     // الحصول على القيم من الإدخالات
//     const days = parseInt(document.getElementById('days').value) || 0;
//     const hours1 = parseInt(document.getElementById('hours1').value) || 0;
//     const hours2 = parseInt(document.getElementById('hours2').value) || 0;
//     const hours3 = parseInt(document.getElementById('hours3').value) || 0;
//     const hours4 = parseInt(document.getElementById('hours4').value) || 0;
//     const hours5 = parseInt(document.getElementById('hours5').value) || 0;
//     const minutes1 = parseInt(document.getElementById('minutes1').value) || 0;
//     const minutes2 = parseInt(document.getElementById('minutes2').value) || 0;
//     const minutes3 = parseInt(document.getElementById('minutes3').value) || 0;

//     // تحويل الأوقات إلى ثوانٍ لحساب المجموع
//     let totalSeconds = 0;

//     totalSeconds += days * 24 * 60 * 60;          // تحويل الأيام إلى ثوانٍ
//     totalSeconds += hours1 * 60 * 60;            // تحويل الساعات إلى ثوانٍ
//     totalSeconds += hours2 * 60 * 60;
//     totalSeconds += hours3 * 60 * 60;
//     totalSeconds += hours4 * 60 * 60;
//     totalSeconds += hours5 * 60 * 60;
//     totalSeconds += minutes1 * 60;               // تحويل الدقائق إلى ثوانٍ
//     totalSeconds += minutes2 * 60;
//     totalSeconds += minutes3 * 60;

//     // تحويل مجموع الثواني إلى (أيام، ساعات، دقائق، ثوانٍ)
//     const totalDays = Math.floor(totalSeconds / (24 * 60 * 60));
//     totalSeconds %= (24 * 60 * 60);
//     const totalHours = Math.floor(totalSeconds / 3600);
//     totalSeconds %= 3600;
//     const totalMinutes = Math.floor(totalSeconds / 60);
//     const totalSecondsRemaining = totalSeconds % 60;

//     // عرض النتائج
//     displayResult(totalDays, totalHours, totalMinutes, totalSecondsRemaining);
// }

// function displayResult(days, hours, minutes, seconds) {
//     // تحديث العرض في الصفحة
//     document.getElementById('totalDays').innerText = `Days: ${days}`;
//     document.getElementById('totalHours').innerText = `Hours: ${hours}`;
//     document.getElementById('totalMinutes').innerText = `Minutes: ${minutes}`;
//     document.getElementById('totalSeconds').innerText = `Seconds: ${seconds}`;
// }
