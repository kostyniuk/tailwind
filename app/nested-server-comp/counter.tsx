"use client";

import { useState } from "react";
import { handleClick } from "./server-fn";

export default function Counter() {

    const [count, setCount] = useState(0);
    

    return <div className="flex flex-col gap-4">
        <p>Count: {count}</p>
        <div className="flex flex-row gap-4">
            <button className="border border-foreground px-4 py-2 rounded hover:bg-foreground hover:text-background transition-colors" onClick={() => setCount(count + 1)}>Increment</button>
            <button className="border border-foreground px-4 py-2 rounded hover:bg-foreground hover:text-background transition-colors" onClick={handleClick}>Revalidate page</button>
        </div>
    </div>;
}