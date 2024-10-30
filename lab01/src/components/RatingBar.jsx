function RatingBar({ rating }) {
    const stars = [];

    for (let i = 0; i < 10; i++) {
        const star = rating > i ? <span>&#9733;</span> : <span>&#9734;</span>;
        stars.push(star);
    }

    return <div style={{ fontSize: "1.2em" }}>{stars}</div>;
}

export default RatingBar;
