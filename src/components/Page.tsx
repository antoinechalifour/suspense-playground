import { ReactNode, Suspense } from "react";
import { Link } from "react-router-dom";
import { Loader } from "./Loader";

type TitleProps = { children: ReactNode };
const Title = ({ children }: TitleProps) => (
  <h2 className="text-5xl font-light pb-1 min-h-[52px] truncate">{children}</h2>
);

type HeaderProps = { title: ReactNode };
const Header = ({ title }: HeaderProps) => (
  <header>
    <h1 className="text-sky-600 font-semibold mb-2">
      <Link to="/">Pokémon TCG</Link>
    </h1>
    <Title>
      <Suspense fallback={null}>{title}</Suspense>
    </Title>

    <hr className="mt-8 mb-4 border-sky-200" />
  </header>
);

type ContentProps = { children: ReactNode };
const Content = ({ children }: ContentProps) => (
  <main>
    <Suspense fallback={<Loader />}>{children}</Suspense>
  </main>
);

type PageRootProps = { children: ReactNode };
const PageRoot = ({ children }: PageRootProps) => (
  <Suspense fallback={null}>
    <div className="max-w-screen-md m-auto py-8 px-2">{children}</div>
  </Suspense>
);

export const Page = Object.assign(PageRoot, { Header, Content });
