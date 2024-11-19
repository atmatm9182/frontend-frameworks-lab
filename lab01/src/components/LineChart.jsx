export default function LineChart({ data, stroke, background }) {
    const height = 512;
    const width = 512;

    const max = Math.max(...data);

    let points = "";
    for (let i = 0; i < data.length; i++) {
        points += `${i * width / (data.length - 1)},${height - data[i] / max * height} `;
    }

    return <svg viewBox={`0 0 ${width} ${height}`} width={width} height={height}>
        <rect
            x="0"
            y="0"
            width={width}
            height={height}
            fill={background}
        />
        <polyline
            points={points}
            strokeWidth="8"
            stroke={stroke}
            fill="none"
        />
    </svg>;
}
