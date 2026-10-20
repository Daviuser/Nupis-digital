import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center">
      <p className="font-display text-6xl font-semibold text-accent">404</p>
      <h1 className="font-display text-2xl">Página não encontrada</h1>
      <Button href="/">Voltar ao início</Button>
    </main>
  );
}
