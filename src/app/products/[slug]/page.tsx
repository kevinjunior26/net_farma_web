export default async function DetalheProduto({
   params
} : {
    params: Promise<{ slug: string }>
}) {
    const slug = ( await params).slug
    return (
        <div className='container mx-auto px-4 py-8 mt-32 bg-red-400 h-full'>
            <h1>Detalhe do Produto</h1>
            <p>Id do produto: {slug}</p>
        </div>
    );
}