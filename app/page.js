"use client";
import BillAndShipInfo from "@/components/BillAndShipInfo/BillAndShipInfo";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { ItemDesTable } from "@/components/ItemDesTable/ItemDesTable";
import Logo from "@/components/Logo/Logo";
import { TermTable } from "@/components/TermTable/TermTable";
import { useState } from "react";

export default function Home() {
  const [showInvoice, setShowInvoice] = useState(false);

  const handlePrint = () => {
    window.print();
  };
  return (
    <main>
      {showInvoice ? (
        <div className="p-10">
          <Header />

          <Logo />

          <BillAndShipInfo />

          <section className="my-5">
            <TermTable />
          </section>

          <section className="my-10">
            <ItemDesTable />
          </section>

          <Footer />
        </div>
      ) : (
        <>Hi</>
      )}

      <button onClick={() => handlePrint()}>Print</button>
    </main>
  );
}
