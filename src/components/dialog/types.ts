import { BrandType } from "../../api/brand/types";

export type FormProps = {
  visible: boolean;
  itemToEdit: BrandType | null;
  onSave(item: BrandType): void;
  onHide(): void;
};
