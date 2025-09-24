export default function SlugTest({ params }: { params: { slug: string } }) {
    return <div>Slug dynamic page test: {params.slug}</div>;
}