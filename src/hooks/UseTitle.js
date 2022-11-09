import { useEffect } from "react";


const UseTitle = (title) => {
    useEffect(() => {
        document.title = `${title} | AC Solutions`;
    },[title]);
};

export default UseTitle;