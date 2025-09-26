

const sleep = (ms: number) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export default async function SlowServer() {

    await sleep(5000);

    return <div>
        <p>Slow Server</p>
    </div>;
}