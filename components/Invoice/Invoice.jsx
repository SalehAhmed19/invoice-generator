import React from "react";
import Header from "../Header/Header";
import Logo from "../Logo/Logo";
import BillAndShipInfo from "../BillAndShipInfo/BillAndShipInfo";
import { TermTable } from "../TermTable/TermTable";
import { ItemDesTable } from "../ItemDesTable/ItemDesTable";
import Footer from "../Footer/Footer";

const Invoice = ({
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
    <div>
      <div className="p-10">
        <Header />

        <Logo />

        <BillAndShipInfo
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

        <section className="my-5">
          <TermTable />
        </section>

        <section className="my-10">
          <ItemDesTable />
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default Invoice;
