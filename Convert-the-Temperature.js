function convertTemperature(c) {
    const k = c + 273.15;
    const f = c * 1.8 + 32.0;
    return [k, f];
}