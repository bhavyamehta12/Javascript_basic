
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material/styles";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function ReusableModal({
  open,
  onClose,
  title = "Modal title",
  children,
  actions,
  maxWidth = "sm",
  fullWidth = true,
  showCloseButton = true,
}) {
  return (
    <BootstrapDialog
      open={open}
      onClose={onClose}
      aria-labelledby="reusable-modal-title"
      maxWidth={maxWidth}
      fullWidth={fullWidth}
    >
      <DialogTitle
        id="reusable-modal-title"
        sx={{ m: 0, p: 2, pr: 6 }}
      >
        {title}
      </DialogTitle>

      {showCloseButton && (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={(theme) => ({
            position: "absolute",
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
      )}

      <DialogContent dividers>
        {children}
      </DialogContent>

      {actions && (
        <DialogActions>
          {actions}
        </DialogActions>
      )}
    </BootstrapDialog>
  );
}
