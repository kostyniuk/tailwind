export default async function SlugCatchAll({ params }: { params: Promise<{ slug: string[] }> }) {
    const paramsResult = await params;
    console.log(paramsResult);
    return <div>Slug catch all: {paramsResult.slug.join("/")}</div>;
}