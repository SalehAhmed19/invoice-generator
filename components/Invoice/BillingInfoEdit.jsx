import React from "react";

const BillingInfoEdit = ({
  setName,
  setBillingAddress1,
  setBillingAddress2,
  setBillingAddress3,
  setBillingAddress4,
}) => {
  return (
    <div>
      <h2 className="text-center font-bold text-xl underline">
        Billing Information
      </h2>
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

      <div className="flex justify-between gap-4">
        <div className="mb-5 w-full">
          <label htmlFor="name" className="text-[#787878]">
            Your Address Line 1
          </label>
          <input
            onChange={(e) => setBillingAddress1(e.target.value)}
            name="name"
            type="address"
            placeholder="Write your address line 1"
            className="border rounded-md p-2 bg-[#f1f1f1] block mt-2 w-full"
            required
          />
        </div>

        <div className="mb-5 w-full">
          <label htmlFor="name" className="text-[#787878]">
            Your Address Line 2
          </label>
          <input
            onChange={(e) => setBillingAddress2(e.target.value)}
            name="name"
            type="address"
            placeholder="Write your address line 2"
            className="border rounded-md p-2 bg-[#f1f1f1] block mt-2 w-full"
            required
          />
        </div>
      </div>

      <div className="flex justify-between gap-4">
        <div className="mb-5 w-full">
          <label htmlFor="name" className="text-[#787878]">
            Your Address Line 3
          </label>
          <input
            onChange={(e) => setBillingAddress3(e.target.value)}
            name="name"
            type="address"
            placeholder="Write your address line 3"
            className="border rounded-md p-2 bg-[#f1f1f1] block mt-2 w-full"
            required
          />
        </div>

        <div className="mb-5 w-full">
          <label htmlFor="name" className="text-[#787878]">
            Your Address Line 4
          </label>
          <input
            onChange={(e) => setBillingAddress4(e.target.value)}
            name="name"
            type="address"
            placeholder="Write your address line 4"
            className="border rounded-md p-2 bg-[#f1f1f1] block mt-2 w-full"
            required
          />
        </div>
      </div>
    </div>
  );
};

export default BillingInfoEdit;
