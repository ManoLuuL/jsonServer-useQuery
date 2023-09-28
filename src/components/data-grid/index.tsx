import { FC } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { DataGridProps } from "./types";
import { BrandType } from "../../api/brand/types";

const CustomGrid: FC<DataGridProps> = (props) => {
  const { columns, data, onCreateClick, onDeleteClick, onEditClick } = props;

  const actionTemplate = (rowData: BrandType) => {
    return (
      <div>
        <Button
          icon="pi pi-pencil"
          className="p-button-success"
          onClick={() => onEditClick(rowData)}
          style={{ margin: "10px" }}
        />
        <Button
          icon="pi pi-trash"
          className="p-button-danger"
          onClick={() => onDeleteClick(rowData)}
          style={{ margin: "10px" }}
        />
      </div>
    );
  };

  return (
    <div>
      <Button
        label="Criar"
        icon="pi pi-plus"
        className="p-button-success"
        onClick={onCreateClick}
        style={{ margin: "10px" }}
      />

      <DataTable value={data}>
        {columns.map((column) => (
          <Column
            key={column.field}
            field={column.field}
            header={column.header}
          />
        ))}
        <Column body={actionTemplate} header="Ações" />
      </DataTable>
    </div>
  );
};

export default CustomGrid;
