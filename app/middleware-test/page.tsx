export default async function MiddlewareTest({ searchParams }: { searchParams: Promise<{ repos: string }> }) {
    const repos = JSON.parse((await searchParams).repos);
    return <div>Middleware test
        <ul>
            {repos.map((repo: string) => (
                <li key={repo}>{repo}</li>
            ))}
        </ul>
    </div>;
}