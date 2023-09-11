import * as React from "react";
import { JView } from "jview/jview.code";
import { Item } from "./item";
import { useBinder } from "@beyond-js/react-18-widgets/hooks";
import { ClinicsUseContext } from "./context";

export function Table() {
  const { manager, isEdit } = ClinicsUseContext();
  const [items, setItems] = React.useState(manager.items);

  useBinder([manager], () => setItems(manager.items));

  const value: any = {
    dataHead: [
      { label: "Nombre", id: "1" },
      { label: "Dirección", id: "2" },
      { label: "Piso", id: "3" },
      { label: "Apartamento", id: "4" },
      { label: "Estado", id: "5" },
    ],
    entries: manager.items,
    currentPage: manager.currentPage,
    item: Item,
    rows: manager.limit,
    total: manager.collection.total,
    pagerNext: true,
    onNext: manager.next,
    onPrev: manager.prev,
    loading: manager.fetching,
  };

  return (
    <div className="table">
      <JView {...value} />
    </div>
  );
}
