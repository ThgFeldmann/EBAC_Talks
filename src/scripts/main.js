AOS.init();

const dataDoEvento = new Date("jul 27, 2024 17:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteEvento = timeStampDoEvento - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;

    const diasAteOEvento = Math.floor(distanciaAteEvento / diaEmMs)
    const horasAteOEvento = Math.floor((distanciaAteEvento % diaEmMs) / horaEmMs);
    const minutosAteOEvento = Math.floor((distanciaAteEvento % horaEmMs) / minutoEmMs);
    const segundosAteOEvento = Math.floor((distanciaAteEvento % minutoEmMs) / 1000);

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`
    
    if (distanciaAteEvento < 0) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = 'Evento expirado'
    }
}, 1000);