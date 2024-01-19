export async function getAllNews() {
  const url = 'https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=100';
  const result = await fetch(url);
  const data = await result.json();
  return data;
}
export async function getNews() {
  const url = 'https://servicodados.ibge.gov.br/api/v3/noticias/?tipo=noticia';
  const result = await fetch(url);
  const data = await result.json();
  return data;
}
export async function getRelease() {
  const url = 'https://servicodados.ibge.gov.br/api/v3/noticias/?tipo=release';
  const result = await fetch(url);
  const data = await result.json();
  return data;
}
