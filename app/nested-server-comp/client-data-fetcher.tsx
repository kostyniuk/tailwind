"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface TodoData {
    id: number;
    title: string;
    completed: boolean;
}

export default function ClientDataFetcher() {
    const [todoData, setTodoData] = useState<TodoData | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const fetchData = async () => {
        setIsLoading(true);
        try {
            const id = Math.floor(Math.random() * 100) + 1;
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
            const data = await response.json();
            setTodoData(data);
            console.log("Data fetched:", data);
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleRevalidate = () => {
        console.log("Button clicked - refetching data");
        fetchData();
    };

    // Fetch data on mount
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="flex flex-col gap-4">
            <p className="text-2xl font-bold">
                {isLoading ? "Loading..." : todoData ? `Server Component: ${todoData.title}` : "No data"}
            </p>
            <p>Current time: {new Date().toISOString()}</p>
            <Counter onRevalidate={handleRevalidate} />
        </div>
    );
}

interface CounterProps {
    onRevalidate: () => void;
}

function Counter({ onRevalidate }: CounterProps) {
    const [count, setCount] = useState(0);

    return (
        <div className="flex flex-col gap-4">
            <p>Count: {count}</p>
            <div className="flex flex-row gap-4">
                <button 
                    className="border border-foreground px-4 py-2 rounded hover:bg-foreground hover:text-background transition-colors" 
                    onClick={() => setCount(count + 1)}
                >
                    Increment
                </button>
                <button 
                    className="border border-foreground px-4 py-2 rounded hover:bg-foreground hover:text-background transition-colors" 
                    onClick={onRevalidate}
                >
                    Revalidate data
                </button>
            </div>
        </div>
    );
}
