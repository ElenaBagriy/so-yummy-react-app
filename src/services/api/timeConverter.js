function timeConvert(data) {
    const time = Number(data);

    if (time < 60) {
        return `${Math.ceil(time / 5) * 5} min`;
    };
    
    const baseHours = Math.floor(time / 60);
    const hourEnd = baseHours === 1 ? 'hour' : 'hours'
    const hours = `${baseHours} ${hourEnd}`;

    const baseMinutes = Math.ceil((time - baseHours * 60) / 5) * 5;
    const minutes = baseMinutes < 5 ? '' : ` ${baseMinutes} min`


    return `${hours}${minutes}`;
};

export default timeConvert;