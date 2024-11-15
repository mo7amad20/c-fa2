function calculateTime() {
    const days = parseFloat(document.getElementById('days').value) || 0;
    const hours = parseFloat(document.getElementById('hours').value) || 0;
    const minutes = parseFloat(document.getElementById('minutes').value) || 0;
    const seconds = parseFloat(document.getElementById('seconds').value) || 0;

    const totalSeconds = days * 3600 * 24 + hours * 3600 + minutes * 60 + seconds;

    const percentage = parseFloat(document.getElementById('percentage').value) || 0;
    const factor = 100 / (100 + percentage);

    let adjustedSeconds = totalSeconds * factor;
    const adjustedDays = Math.floor(adjustedSeconds / (24 * 3600));
    adjustedSeconds %= (24 * 3600);
    const adjustedHours = Math.floor(adjustedSeconds / 3600);
    adjustedSeconds %= 3600;
    const adjustedMinutes = Math.floor(adjustedSeconds / 60);
    adjustedSeconds %= 60;

    const resultText = ` ${adjustedDays}d :${adjustedHours}h :${adjustedMinutes}m :${Math.round(adjustedSeconds)}s`;
    document.getElementById('result').innerText = resultText;
}
