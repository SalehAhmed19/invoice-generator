"use client";
import BillAndShipInfo from "@/components/BillAndShipInfo/BillAndShipInfo";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Invoice from "@/components/Invoice/Invoice";
import InvoiceEditor from "@/components/Invoice/InvoiceEditor";
import { ItemDesTable } from "@/components/ItemDesTable/ItemDesTable";
import Logo from "@/components/Logo/Logo";
import { TermTable } from "@/components/TermTable/TermTable";
import { useState } from "react";

export default function Home() {
  const [showInvoice, setShowInvoice] = useState(false);
  const [name, setName] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [address3, setAddress3] = useState("");

  const handlePrint = () => {
    setShowInvoice(true);
  };

  const handleEdit = () => {
    setShowInvoice(false);
  };
  return (
    <main>
      {showInvoice ? (
        <>
          <button onClick={() => handleEdit()}>Edit</button>
          <Invoice
            name={name}
            address1={address1}
            address2={address2}
            address3={address3}
          />
        </>
      ) : (
        <InvoiceEditor
          handlePrint={handlePrint}
          setName={setName}
          setAddress1={setAddress1}
          setAddress2={setAddress2}
          setAddress3={setAddress3}
        />
      )}
    </main>
  );
}
