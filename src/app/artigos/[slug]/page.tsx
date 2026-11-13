import { getArtigos, getArtigoPorSlug } from "@/lib/artigos";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import styles from "./page.module.css";

type PaginaArtigoProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  const artigos = getArtigos();
  return artigos.map((artigo) => ({
    slug: artigo.slug,
  }));
}

export async function generateMetadata({
  params,
}: PaginaArtigoProps): Promise<Metadata> {
  const { slug } = await params;

  const artigo = getArtigoPorSlug(slug);

  if (!artigo) {
    notFound();
  }
  return {
    title: artigo.titulo,
    description: artigo.descricao,
  };
}

export default async function PaginaArtigo({ params }: PaginaArtigoProps) {
  const { slug } = await params;

  const artigo = getArtigoPorSlug(slug);
  if (!artigo) {
    notFound();
  }
  return (
    <main className={styles.container}>
      <article className={styles.artigo}>
        <header className={styles.cabecalho}>
          <h1 className={styles.titulo}>{artigo.titulo}</h1>
          <div className={styles.metadados}>
            <p>Por {artigo.autor}</p>
            <time dateTime={artigo.dataPublicacao}>
              {artigo.dataPublicacao}
            </time>
          </div>
        </header>
        <div className={styles.conteudo}>
          <p>{artigo.conteudo}</p>
        </div>
        <footer className={styles.rodape}>
          <Link href="/" className={styles.linkVoltar}>
            ← Voltar para a página inicial
          </Link>
        </footer>
      </article>
    </main>
  );
}
