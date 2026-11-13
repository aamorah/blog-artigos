export interface ArtigoDados {
    titulo: string;
    autor: string;
    dataPublicacao: string;
    descricao: string;
    conteudo: string;
}

export interface Artigo extends ArtigoDados {
    slug: string;
}