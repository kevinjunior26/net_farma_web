// src/app/products/[slug]/page.tsx

type Props = {
    params: Promise<{ slug: string }>;
};

export default async function Page({ params }: Props) {
    const { slug } = await params; // ✅ await aqui

    return (
        <div className="container mx-auto px-4 py-8 mt-32 bg-red-400 h-full">
            <h1>Detalhe do Produto</h1>
            <p>Id do produto: {slug}</p>
        </div>
    );
}
