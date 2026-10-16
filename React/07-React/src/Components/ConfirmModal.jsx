import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ReusableModal from "./ReusableModal";

const ConfirmModal = ({
  open,
  onClose,
  onConfirm,
  productName,
}) => {
  return (
    <ReusableModal
      open={open}
      onClose={onClose}
      title="Delete Product"
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
        Are you sure you want to delete {productName}?
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
};

export default ConfirmModal;