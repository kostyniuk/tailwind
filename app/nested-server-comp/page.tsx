import { Suspense } from "react";
import ClientDataFetcher from "./client-data-fetcher";
import SlowServer from "./slow-server";

export default function NestedServerComp() {
    return (
        <div className="flex flex-col gap-4">
            <ClientDataFetcher />
            <Suspense fallback={<div className="text-blue-500 p-4 border border-blue-500 rounded bg-blue-50">Loading slow server component (5s delay)...</div>}>
                <SlowServer />
            </Suspense>
        </div>
    );
};