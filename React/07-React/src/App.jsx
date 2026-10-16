import { useState } from "react";
import Button from "@mui/material/Button";
import ConfirmModal from "./Components/ConfirmModal";

const App = () => {
  const [open, setOpen] = useState(false);

  const [selectedProduct, setSelectedProduct] = useState(null);

  const [products, setProducts] = useState([
    { id: 1, title: "iPhone", price: "₹79,999" },
    { id: 2, title: "Samsung", price: "₹70,000" },
    { id: 3, title: "Pixel", price: "₹59,999" },
  ]);

  function handleOpen(product) {
    setSelectedProduct(product);
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
    setSelectedProduct(null);
  }

  function handleDelete() {
    if (!selectedProduct) return;

    setProducts((previousProducts) =>
      previousProducts.filter(
        (product) => product.id !== selectedProduct.id
      )
    );

    handleClose();
  }

  return (
    <div>
      <h1>My Products</h1>

      {products.map((product) => (
        <div key={product.id}>
          <p>
            <strong>
              {product.title} — {product.price}
            </strong>
          </p>

          <Button
            variant="outlined"
            color="error"
            onClick={() => handleOpen(product)}
          >
            Delete
          </Button>
        </div>
      ))}

      <ConfirmModal
        open={open}
        onClose={handleClose}
        onConfirm={handleDelete}
        productName={selectedProduct?.title ?? ""}
      />
    </div>
  );
};

export default App;