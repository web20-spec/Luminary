"use client";

import { useEffect, useState } from "react";

export default function Counter({ end, duration = 2000 }: { end: number; duration?: number }) {
const [count, setCount] = useState(0);

useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
        start += increment;

        if (start >= end) {
        clearInterval(timer);
        setCount(end);
    } else {
        setCount(Math.floor(start));
    }
    }, 16);

    return () => clearInterval(timer);
}, [end, duration]);

return <span>{count}</span>;
}