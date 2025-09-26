import { Suspense } from "react";
import Counter from "./counter";
import SlowServer from "./slow-server";

export default async function NestedServerComp() {
    const response = await fetch("https://api.github.com/repos/vercel/next.js");
    const data = await response.json();
    console.log(data);

    return <div className="flex flex-col gap-4">
        <p className="text-2xl font-bold">Server Component: {data.full_name}</p>
        <Counter />
        <Suspense fallback={<div>Loading...</div>}>
            <SlowServer />
        </Suspense>
    </div>;
};