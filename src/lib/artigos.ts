import slugify from "slugify";
import artigosData from "@/data/artigos.json";
import type { Artigo, ArtigoDados } from "@/types/artigo";

const dadosArtigos: ArtigoDados[] = artigosData;

const artigos: Artigo[] = dadosArtigos.map((artigo) => ({
  ...artigo,
  slug: slugify(artigo.titulo, {
    lower: true,
    strict: true,
  }),
}));

export function getArtigos(): Artigo[] {
  return artigos;
}

export function getArtigoPorSlug(slug: string): Artigo | undefined {
  return artigos.find((artigo) => artigo.slug === slug);
}