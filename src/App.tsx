import "./App.css";
import { useQuery } from "@tanstack/react-query";
import { useBrandService } from "./api/brand/use-brand-service";
import { BrandType } from "./api/brand/types";

function App() {
  // const [selectedItem, setSelectedItem] = useState<BrandType | null>(null);

  const { getAllBrands, addBrand } = useBrandService();

  const { data } = useQuery({
    queryKey: ["All"],
    queryFn: getAllBrands,
  });

  const handleAddBrand = async () => {
    const data: BrandType = {
      code: 2,
      description: "Teste",
      id: 2,
    };
    await addBrand(data);
  };

  return (
    <>
      <button onClick={handleAddBrand}>Criar</button>
      <table>
        <thead>
          <tr>
            <th>Código</th>
            <th>Descrição</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item: BrandType) => (
            <tr key={item.id}>
              <td>{item.code}</td>
              <td>{item.description}</td>
              <td>
                <button onClick={() => undefined}>Editar</button>
                <button onClick={() => undefined}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
