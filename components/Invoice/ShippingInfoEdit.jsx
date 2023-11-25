import React from "react";

const ShippingInfoEdit = ({
  setShippingAddress1,
  setShippingAddress2,
  setShippingAddress3,
  setShippingAddress4,
}) => {
  return (
    <div>
      <h2 className="text-center font-bold text-xl underline">
        Shipping Information
      </h2>

      <div className="flex justify-between gap-4 mt-5">
        <div className="mb-5 w-full">
          <label htmlFor="name" className="text-[#787878]">
            Your Address Line 1
          </label>
          <input
            onChange={(e) => setShippingAddress1(e.target.value)}
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
            onChange={(e) => setShippingAddress2(e.target.value)}
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
            onChange={(e) => setShippingAddress3(e.target.value)}
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
            onChange={(e) => setShippingAddress4(e.target.value)}
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

export default ShippingInfoEdit;
