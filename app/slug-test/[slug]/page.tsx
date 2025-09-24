export default async function SlugTest({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    return <div>Slug dynamic page test: {slug}</div>;
}