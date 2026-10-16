
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ReusableModal from "./ReusableModal";

export default function ConfirmModal({
  open,
  onClose,
  onConfirm,
  productName,
}) {
  return (
    <ReusableModal
      open={open}
      onClose={onClose}
      title="Delete Product"
      maxWidth="xs"
      actions={
        <>
          <Button onClick={onClose}>
            Cancel
          </Button>

          <Button
            variant="contained"
            color="error"
            onClick={onConfirm}
          >
            Delete
          </Button>
        </>
      }
    >
      <Typography>
        Are you sure you want to delete{" "}
        <strong>{productName}</strong>?
      </Typography>

      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ mt: 1 }}
      >
        This action cannot be undone.
      </Typography>
    </ReusableModal>
  );
}
