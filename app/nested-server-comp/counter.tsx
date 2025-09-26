"use client";

import { useState } from "react";

export default function Counter() {

    const [count, setCount] = useState(0);
    

    return <div>Counter
        <p>Count: {count}</p>
        <button className="border border-foreground px-4 py-2 rounded hover:bg-foreground hover:text-background transition-colors" onClick={() => setCount(count + 1)}>Increment</button>
    </div>;
}