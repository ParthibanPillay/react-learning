import { useState } from "react"

export default function LikeButton() {

    const [liked, setLiked] = useState(0);

    const handleLike = () => {
        setLiked(liked => liked + 1);
    }

    return (
        <div>
            <button onClick={handleLike}>{liked} liked</button>
        </div>
    );
};