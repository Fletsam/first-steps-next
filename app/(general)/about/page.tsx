import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page",
  description: "Pagina de Informacion",
  keywords: ["About Page", "Luis", "informacion"],
};

export default function About() {
  return (
    <>
      <h1 className=""> About Page </h1>
    </>
  );
}
