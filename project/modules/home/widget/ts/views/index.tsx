import * as React from "react";
import { ClinicsContext } from "./context";
import { Table } from "./table";
import { useBinder } from "@beyond-js/react-18-widgets/hooks";

export /*bundle*/
function View({ store: manager }) {
  const [state, setState] = React.useState({});

  const [show, setShow] = React.useState({
    remove: false,
  });
  const toggleConfirmDelete = () => setShow({ ...show, remove: !show.remove });
  useBinder([manager], () => setState({}));
  if (!manager.permissions || !manager.permissions.readP) return null

  const isEdit = !!manager.permissions.writeP
  return (
    <ClinicsContext.Provider value={{ show, toggleConfirmDelete, manager, isEdit }}>
      <main className="container__page">
        <Table />
      </main>
    </ClinicsContext.Provider>
  );
}
