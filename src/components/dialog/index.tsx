import { useState, useEffect, FC } from "react";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { FormProps } from "./types";
import { BrandType } from "../../api/brand/types";

const ItemForm: FC<FormProps> = ({ visible, itemToEdit, onSave, onHide }) => {
  const [item, setItem] = useState<BrandType>({
    code: "",
    description: "",
    id: 0,
  });

  useEffect(() => {
    if (itemToEdit) {
      setItem(itemToEdit);
    } else {
      setItem({ code: "", description: "", id: 0 });
    }
  }, [itemToEdit]);

  const handleSave = () => {
    onSave(item);
    onHide();
  };

  return (
    <Dialog
      visible={visible}
      onHide={onHide}
      header={itemToEdit ? "Editar Item" : "Criar Item"}
    >
      <div className="p-field">
        <label htmlFor="code">code</label>
        <InputText
          id="code"
          value={item?.code}
          onChange={(e) => setItem({ ...item, code: e.target.value })}
        />
      </div>
      <div className="p-field">
        <label htmlFor="description">description</label>
        <InputText
          id="description"
          value={item?.description}
          onChange={(e) => setItem({ ...item, description: e.target.value })}
        />
      </div>
      <Button label="Salvar" onClick={handleSave} />
      <Button
        label="Cancelar"
        onClick={onHide}
        className="p-button-secondary"
      />
    </Dialog>
  );
};

export default ItemForm;
