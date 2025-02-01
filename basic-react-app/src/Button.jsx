function handleHover() {
    console.log("hover");
}

export default function Button() {
    return (
        <div>
            <button onMouseOver={handleHover}>Hover on Me!</button>
        </div>
    );
}