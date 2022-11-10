import { useEffect } from "react";

// Title Hook

const UseTitle = (title) => {
    useEffect(() => {
        document.title = `${title} | AC Solutions`;
    },[title]);
};

export default UseTitle;