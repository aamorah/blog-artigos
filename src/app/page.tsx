import Link from "next/link";
import { getArtigos } from "@/lib/artigos";
import styles from "./page.module.css";

export default function Home() {
  const artigos = getArtigos();
  return (
    <main className={styles.container}>
      <header className={styles.hero}>
        <p className={styles.eyebrow}>ARTIGOS SOBRE TECNOLOGIA</p>
        <h1 className={styles.title}>Caderno Digital</h1>
        <p className={styles.subtitle}>Conhecimento, tecnologia e desenvolvimento.</p>
      </header>
      {
        /* listagem de artigos */
        <ul className={styles.listaArtigos}>
          {artigos.map((artigo) => (
            <li key={artigo.slug} className={styles.itemLista}>
              <article className={styles.card}>
                <Link href={`/artigos/${artigo.slug}`}>
                  <h2 className={styles.cardTitulo}>{artigo.titulo}</h2>
                </Link>

                <p>Por {artigo.autor}</p>
                <p>{artigo.dataPublicacao}</p>
                <p>{artigo.descricao}</p>

                <Link href={`/artigos/${artigo.slug}`} className={styles.linkArtigo}>
                  Ler artigo →
                </Link>
              </article>
            </li>
          ))}
        </ul>
      }
    </main>
  );
}
              