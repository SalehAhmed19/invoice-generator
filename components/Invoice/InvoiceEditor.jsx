import { Label, TextInput } from "keep-react";
import React from "react";
import BillingInfoEdit from "./BillingInfoEdit";
import ShippingInfoEdit from "./ShippingInfoEdit";

const InvoiceEditor = ({
  handlePrint,
  setName,
  setBillingAddress1,
  setBillingAddress2,
  setBillingAddress3,
  setBillingAddress4,
  setShippingAddress1,
  setShippingAddress2,
  setShippingAddress3,
  setShippingAddress4,
}) => {
  return (
    <div className="p-10">
      <h1 className="text-center font-bold text-3xl">Invoice Generator</h1>
      <ul>
        <li>
          <button onClick={() => handlePrint()}>Print</button>
        </li>
      </ul>

      <form>
        <BillingInfoEdit
          setName={setName}
          setBillingAddress1={setBillingAddress1}
          setBillingAddress2={setBillingAddress2}
          setBillingAddress3={setBillingAddress3}
          setBillingAddress4={setBillingAddress4}
        />
        <ShippingInfoEdit
          setShippingAddress1={setShippingAddress1}
          setShippingAddress2={setShippingAddress2}
          setShippingAddress3={setShippingAddress3}
          setShippingAddress4={setShippingAddress4}
        />
      </form>
    </div>
  );
};

export default InvoiceEditor;
