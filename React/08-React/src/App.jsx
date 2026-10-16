
import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import ReusableModal from "./Components/ReusableModal";
import ConfirmModal from "./Components/ConfirmModal";

const App = () => {
  const [products, setProducts] = useState([]);

  // Add product form state
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  // Add modal state
  const [openAddModal, setOpenAddModal] = useState(false);

  // Delete modal state
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  function handleOpenAdd() {
    setOpenAddModal(true);
  }

  function handleCloseAdd() {
    setOpenAddModal(false);
    setTitle("");
    setPrice("");
  }

  function handleAdd() {
    const trimmedTitle = title.trim();
    const numericPrice = Number(price);

    if (!trimmedTitle) {
      alert("Please enter a product name.");
      return;
    }

    if (price.trim() === "" || !Number.isFinite(numericPrice) || numericPrice <= 0) {
      alert("Please enter a valid price greater than zero.");
      return;
    }

    const newProduct = {
      id: crypto.randomUUID(),
      title: trimmedTitle,
      price: numericPrice,
    };

    setProducts((previousProducts) => [
      ...previousProducts,
      newProduct,
    ]);

    handleCloseAdd();
  }

  function handleOpenDelete(product) {
    setSelectedProduct(product);
    setOpenDeleteModal(true);
  }

  function handleCloseDelete() {
    setOpenDeleteModal(false);
    setSelectedProduct(null);
  }

  function handleDelete() {
    if (!selectedProduct) return;

    setProducts((previousProducts) =>
      previousProducts.filter(
        (product) => product.id !== selectedProduct.id
      )
    );

    handleCloseDelete();
  }

  return (
    <div style={{ padding: "24px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "24px",
        }}
      >
        <h1>My Products</h1>

        <Button variant="contained" onClick={handleOpenAdd}>
          + Add Product
        </Button>
      </div>

      {products.length === 0 ? (
        <p>No products yet. Click Add Product to get started.</p>
      ) : (
        products.map((product) => (
          <div
            key={product.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "16px",
              padding: "16px",
              border: "1px solid #ddd",
              borderRadius: "8px",
            }}
          >
            <div>
              <h3 style={{ margin: "0 0 8px" }}>{product.title}</h3>
              <p style={{ margin: 0 }}>
                ₹{product.price.toLocaleString("en-IN")}
              </p>
            </div>

            <Button
              variant="outlined"
              color="error"
              onClick={() => handleOpenDelete(product)}
            >
              Delete
            </Button>
          </div>
        ))
      )}

      {/* Add Product Modal */}
      <ReusableModal
        open={openAddModal}
        onClose={handleCloseAdd}
        title="Add Product"
        maxWidth="sm"
        actions={
          <>
            <Button onClick={handleCloseAdd}>
              Cancel
            </Button>

            <Button variant="contained" onClick={handleAdd}>
              Add Product
            </Button>
          </>
        }
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <TextField
            label="Product Name"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            fullWidth
            required
          />

          <TextField
            label="Price (₹)"
            type="number"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
            slotProps={{
              htmlInput: { min: 0.01, step: "0.01" },
            }}
            fullWidth
            required
          />
        </div>
      </ReusableModal>

      {/* Delete Confirmation Modal */}
      <ConfirmModal
        open={openDeleteModal}
        onClose={handleCloseDelete}
        onConfirm={handleDelete}
        productName={selectedProduct?.title ?? ""}
      />
    </div>
  );
};

export default App;
