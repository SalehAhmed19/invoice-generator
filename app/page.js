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
  const [address1, setBillingAddress1] = useState("");
  const [address2, setBillingAddress2] = useState("");
  const [address3, setBillingAddress3] = useState("");
  const [address4, setBillingAddress4] = useState("");
  const [shippingAddress1, setShippingAddress1] = useState("");
  const [shippingAddress2, setShippingAddress2] = useState("");
  const [shippingAddress3, setShippingAddress3] = useState("");
  const [shippingAddress4, setShippingAddress4] = useState("");

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
            address4={address4}
            shippingAddress1={shippingAddress1}
            shippingAddress2={shippingAddress2}
            shippingAddress3={shippingAddress3}
            shippingAddress4={shippingAddress4}
          />
        </>
      ) : (
        <InvoiceEditor
          handlePrint={handlePrint}
          setName={setName}
          setBillingAddress1={setBillingAddress1}
          setBillingAddress2={setBillingAddress2}
          setBillingAddress3={setBillingAddress3}
          setBillingAddress4={setBillingAddress4}
          setShippingAddress1={setShippingAddress1}
          setShippingAddress2={setShippingAddress2}
          setShippingAddress3={setShippingAddress3}
          setShippingAddress4={setShippingAddress4}
        />
      )}
    </main>
  );
}
