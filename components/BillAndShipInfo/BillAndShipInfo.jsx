import React from "react";

const BillAndShipInfo = () => {
  return (
    <div className="flex items-baseline justify-between">
      <div>
        <div>
          <p>Bill To</p>
          <h5 className="text-xl font-bold">Scott, Melba R.</h5>
          <p>2476 Blackwell Street</p>
          <p>Fairbanks</p>
          <p>9970 Colorado</p>
          <p>U.S.A</p>
        </div>

        <div className="mt-5">
          <p className="font-bold">Ship To</p>
          <p>2476 Blackwell Street</p>
          <p>Fairbanks</p>
          <p>9970 Colorado</p>
          <p>U.S.A</p>
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
