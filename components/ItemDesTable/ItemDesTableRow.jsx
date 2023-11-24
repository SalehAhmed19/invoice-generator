import { Table } from "keep-react";
import React from "react";

const ItemDesTableRow = () => {
  return (
    <>
      <Table.Row className="bg-white">
        <Table.Cell>
          <p>1</p>
        </Table.Cell>
        <Table.Cell>
          <p>Pepe Jeans</p>
          <p className="text-[#b6b5b5] text-sm">Tapered fit Mid rise - Blue</p>
        </Table.Cell>

        <Table.Cell>
          <p className="text-body-5 font-medium text-metal-500">1.00</p>
          <p className="text-[#b6b5b5] text-sm">Psc</p>
        </Table.Cell>

        <Table.Cell>
          <p className="text-body-5 font-medium text-metal-500">24.99</p>
        </Table.Cell>

        <Table.Cell>
          <p className="text-body-5 font-medium text-metal-500">24.99</p>
        </Table.Cell>
      </Table.Row>
    </>
  );
};

export default ItemDesTableRow;
