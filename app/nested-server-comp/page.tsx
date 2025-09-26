import { Suspense } from "react";
import Counter from "./counter";
import SlowServer from "./slow-server";

export default async function NestedServerComp() {
    const id = Math.floor(Math.random() * 100) + 1;
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    const data = await response.json();
    console.log(data);

    const currentTime = new Date().toISOString();
    console.log(currentTime);
    return <div className="flex flex-col gap-4">
        <p className="text-2xl font-bold">Server Component: {data.title}</p>
        <Counter />
        <Suspense fallback={<div>Loading...</div>}>
            <SlowServer />
        </Suspense>
        <p>Current time: {currentTime}</p>
    </div>;
};