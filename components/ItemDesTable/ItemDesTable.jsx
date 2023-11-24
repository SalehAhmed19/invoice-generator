"use client";
import { Avatar, Button, Popover, Table } from "keep-react";
import { Cube, DotsThreeOutline, Pencil, Trash } from "phosphor-react";
import ItemDesTableRow from "./ItemDesTableRow";
import ItemDesTableEquation from "./ItemDesTableEquation";

export const ItemDesTable = () => {
  return (
    <Table>
      <Table.Head className="bg-green-500">
        <Table.HeadCell className="text-white text-[15px] min-w-[60px]">
          #
        </Table.HeadCell>
        <Table.HeadCell className="text-white text-[15px] min-w-[300px]">
          Item & Description
        </Table.HeadCell>
        <Table.HeadCell className="text-white text-[15px] min-w-[100px]">
          Qty
        </Table.HeadCell>
        <Table.HeadCell className="text-white text-[15px] min-w-[160px]">
          Rate
        </Table.HeadCell>
        <Table.HeadCell className="text-white text-[15px] min-w-[260px]">
          Amount
        </Table.HeadCell>
      </Table.Head>

      <Table.Body className="divide-y divide-gray-25">
        <ItemDesTableRow />
        <ItemDesTableRow />
        <ItemDesTableRow />
        <ItemDesTableEquation />
      </Table.Body>
    </Table>
  );
};
