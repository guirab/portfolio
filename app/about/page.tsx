import Link from "next/link";

export default function About() {
  return (
    <div className="h-page w-full">
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-4xl font-bold">Sobre mim</h1>
        <p className="text-2xl font-semibold">
          Meu nome é Guilherme, tenho 21 anos, sou desenvolvedor front-end e
          estudante de engenharia de software.
        </p>
        <Link href="/">Voltar</Link>
      </div>
    </div>
  );
}
