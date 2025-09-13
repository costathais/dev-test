import { HomeData } from "@/types";

export async function fetchHomeData(): Promise<HomeData> {
  const res = await fetch('https://sioux-test-dev-api.vercel.app/home.json', {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error(`Erro ao buscar dados da API: ${res.status}`);
  }

  return res.json();
}