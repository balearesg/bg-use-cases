import * as React from "react";
import { IconButton } from "pragmate-ui/icons";
import { routing } from "@beyond-js/kernel/routing";

const keys = ["name", "formattedAddress", "floor", "apartment"];

export function Item({ item }) {

  const handleOnEdit = () => {
    routing.pushState(`/clinics/management/${item.id}`);
  };

  const entries = keys.map((key: string) => {
    return (
      <td key={key}>
        <span>{item[key] ?? "Sin valor"}</span>
      </td>
    );
  });

  return (
    <tr>
      {entries}
      <td className="td-icon-button">
        <span>
          <IconButton onClick={handleOnEdit} icon="pencil" />
        </span>
      </td>
    </tr>
  );
}
