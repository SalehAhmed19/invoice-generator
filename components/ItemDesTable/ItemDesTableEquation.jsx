import { Table } from "keep-react";
import React from "react";

const ItemDesTableEquation = () => {
  return (
    <>
      <Table.Row className="bg-white">
        <Table.Cell>
          <p>Thanks for your business</p>
        </Table.Cell>
        <Table.Cell></Table.Cell>

        <Table.Cell>
          <p>Sub Total</p>
          <p>Tax Rate</p>
          <p className="font-bold">Total</p>
          <p className="font-bold">Balance Due</p>
        </Table.Cell>

        <Table.Cell></Table.Cell>

        <Table.Cell>
          <p>52.00</p>
          <p>5.00%</p>
          <p className="font-bold">57.06</p>
          <p className="font-bold">57.06</p>
        </Table.Cell>
      </Table.Row>
    </>
  );
};

export default ItemDesTableEquation;
