
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";

export default function ReusableModal({
  open,
  onClose,
  title,
  children,
  actions,
}) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
    >
      <DialogTitle>{title}</DialogTitle>

      <DialogContent dividers>
        {children}
      </DialogContent>

      <DialogActions sx={{ p: 2 }}>
        {actions || (
          <Button onClick={onClose} variant="contained">
            Close
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
}
