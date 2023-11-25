"use client";
import { Avatar, Button, Popover, Table } from "keep-react";
import { Cube, DotsThreeOutline, Pencil, Trash } from "phosphor-react";

export const TermTable = () => {
  return (
    <Table striped={true}>
      <Table.Head className="bg-green-500">
        <Table.HeadCell className="text-white text-[15px]">
          Invoice Date
        </Table.HeadCell>
        <Table.HeadCell className="text-white text-[15px]">
          Terms
        </Table.HeadCell>
        <Table.HeadCell className="text-white text-[15px]">
          Due Date
        </Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y divide-gray-25">
        <Table.Row className="bg-white">
          <Table.Cell>
            <p>{new Date().toLocaleDateString()}</p>
          </Table.Cell>
          <Table.Cell>
            <p className="text-body-5 font-medium text-metal-500">
              Due on Receipt
            </p>
          </Table.Cell>
          <Table.Cell>
            <p>{new Date().toLocaleDateString()}</p>
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
};
