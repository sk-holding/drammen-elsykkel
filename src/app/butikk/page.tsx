import { Metadata } from "next";
import Butikker from "@/components/butikk/Butikker";

export const metadata: Metadata = {
  title: "Butikk - Drammen Elsykkel",
  description:
    "I vår butikk i Drammen finner du et bredt sortement, med flere forskjellige elsykkelmerker. ",
};

const Page = () => {
  return (
    <main className="max-width">
      <div className="title-block">
        <h1>Våre butikker</h1>
        <h2>
          Siden 2004 har butikken vår i Drammen tilbudt et bredt utvalg av
          elsykler og fagkunnskap fra våre erfarne ansatte. I 2024 utvidet vi
          med en ny butikk på Fiskum – velkommen innom!
        </h2>
      </div>
      <Butikker />
    </main>
  );
};

export default Page;
