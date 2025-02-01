import { useState } from "react";

export default function LikeButton() {
    let [isLiked, setIsLicked] = useState(false);
    let toggleLike = () => {
        setIsLicked(!isLiked);
    };

    let likeStyle = { color: "red" };

    return (
        <div>
            <p onClick={toggleLike}>
                {isLiked ? (
                    <i className="fa-solid fa-heart" style={likeStyle}></i>
                    ) : (
                        <i className="fa-regular fa-heart" style={likeStyle}></i>
                )}
            </p>
        </div>
    );
}