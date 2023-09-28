import "./App.css";
import { useQuery } from "@tanstack/react-query";
import { useBrandService } from "./api/brand/use-brand-service";
import { BrandType } from "./api/brand/types";
import { useState } from "react";
import CustomGrid from "./components/data-grid";
import ItemForm from "./components/dialog";

function App() {
  const { getAllBrands, addBrand, editBrand, deleteBrand } = useBrandService();
  const [selectedItem, setSelectedItem] = useState<BrandType | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [gridData, setGridData] = useState<BrandType[]>([]);

  const { data, isLoading } = useQuery({
    queryKey: ["All"],
    queryFn: getAllBrands,
    onSuccess: (data) => setGridData(data),
  });

  const handleEditClick = (rowData: BrandType) => {
    setSelectedItem(rowData);
    setShowForm(true);
  };

  const handleDeleteClick = async (rowData: BrandType) => {
    await deleteBrand(rowData.id);
  };

  const columns = [
    { field: "id", header: "ID" },
    { field: "code", header: "Codigo" },
    { field: "description", header: "Descrição" },
  ];

  const handleCreateClick = () => {
    setSelectedItem(null);
    setShowForm(true);
  };

  const handleFormSave = async (item: BrandType) => {
    if (selectedItem) {
      await editBrand(item, item.id);
    } else {
      const newData: BrandType = {
        ...item,
        id: 0,
      };

      await addBrand(newData);
    }
    const grid = await getAllBrands();
    setGridData(grid);

    setShowForm(false);
  };

  const handleFormHide = () => {
    setShowForm(false);
  };

  console.log(data, isLoading);

  return (
    <>
      {isLoading ? (
        <>Carregando</>
      ) : (
        <>
          {gridData.length > 0 && (
            <CustomGrid
              data={gridData ?? []}
              columns={columns}
              onCreateClick={handleCreateClick}
              onDeleteClick={handleDeleteClick}
              onEditClick={handleEditClick}
            />
          )}

          <ItemForm
            visible={showForm}
            itemToEdit={selectedItem}
            onSave={handleFormSave}
            onHide={handleFormHide}
          />
        </>
      )}
    </>
  );
}

export default App;
