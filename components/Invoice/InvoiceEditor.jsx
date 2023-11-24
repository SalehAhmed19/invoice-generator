import { Label, TextInput } from "keep-react";
import React from "react";

const InvoiceEditor = ({
  handlePrint,
  setName,
  setAddress1,
  setAddress2,
  setAddress3,
}) => {
  return (
    <div className="p-10 bg-[#f1f1f1]">
      <h1 className="text-center font-bold text-3xl">Invoice Generator</h1>
      <ul>
        <li>
          <button onClick={() => handlePrint()}>Print</button>
        </li>
      </ul>

      <div className="bg-white p-10 my-10 rounded-md">
        <form>
          <div className="mb-5">
            <label htmlFor="name" className="text-[#787878]">
              Your Name
            </label>
            <input
              onChange={(e) => setName(e.target.value)}
              name="name"
              type="text"
              placeholder="Write your name"
              className="border rounded-md p-2 bg-[#f1f1f1] block mt-2 w-full"
              required
            />
          </div>

          <div className="mb-5">
            <label htmlFor="name" className="text-[#787878]">
              Your Address Line 1
            </label>
            <input
              onChange={(e) => setAddress1(e.target.value)}
              name="name"
              type="address"
              placeholder="Write your address line 1"
              className="border rounded-md p-2 bg-[#f1f1f1] block mt-2 w-full"
              required
            />
          </div>

          <div className="mb-5">
            <label htmlFor="name" className="text-[#787878]">
              Your Address Line 2
            </label>
            <input
              onChange={(e) => setAddress2(e.target.value)}
              name="name"
              type="address"
              placeholder="Write your address line 2"
              className="border rounded-md p-2 bg-[#f1f1f1] block mt-2 w-full"
              required
            />
          </div>

          <div className="mb-5">
            <label htmlFor="name" className="text-[#787878]">
              Your Address Line 3
            </label>
            <input
              onChange={(e) => setAddress3(e.target.value)}
              name="name"
              type="address"
              placeholder="Write your address line 3"
              className="border rounded-md p-2 bg-[#f1f1f1] block mt-2 w-full"
              required
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default InvoiceEditor;
