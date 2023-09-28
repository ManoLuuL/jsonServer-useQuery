import { BrandType } from "../../api/brand/types";

export type DataGridProps = {
  data: BrandType[];
  columns: { field: string; header: string }[];
  onEditClick(rowData: BrandType): void;
  onCreateClick(): void;
  onDeleteClick(rowData: BrandType): void;
};
