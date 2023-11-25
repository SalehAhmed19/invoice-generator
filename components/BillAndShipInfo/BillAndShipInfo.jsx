import React from "react";

const BillAndShipInfo = ({
  name,
  address1,
  address2,
  address3,
  address4,
  shippingAddress1,
  shippingAddress2,
  shippingAddress3,
  shippingAddress4,
}) => {
  return (
    <div className="flex items-baseline justify-between">
      <div>
        <div>
          <p>Bill To</p>
          <h5 className="text-xl font-bold">{name}</h5>
          <p>{address1}</p>
          <p>{address2}</p>
          <p>{address3}</p>
          <p>{address4}</p>
        </div>

        <div className="mt-5">
          <p className="font-bold">Ship To</p>
          <p>{shippingAddress1}</p>
          <p>{shippingAddress2}</p>
          <p>{shippingAddress3}</p>
          <p>{shippingAddress4}</p>
        </div>
      </div>
      <div>
        <p>Invoice#</p>
        <p className="font-bold uppercase">INV-00002</p>
      </div>
    </div>
  );
};

export default BillAndShipInfo;
