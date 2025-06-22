export default async function DetalheProduto({
    params,
}: {
    params: { slug: string };
}) {
    const { slug } = params;
    return (
        <div className='container mx-auto px-4 py-8 mt-32 bg-red-400 h-full'>
            <h1>Detalhe do Produto</h1>
            <p>Id do produto: {slug}</p>
        </div>
    );
}
