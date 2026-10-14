
// import { useState } from "react";

// import {
//   Box,
//   Button,
//   Typography,
// } from "@mui/material";

// import ReusableModal from "./Components/ReusableModal";

// export default function App() {
//   const [open, setOpen] = useState(false);

//   const handleOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <Box sx={{ p: 4 }}>
//       <Typography variant="h4" sx={{ mb: 2 }}>
//         My Dashboard
//       </Typography>

//       <Button
//         variant="contained"
//         onClick={handleOpen}
//       >
//         Open Modal
//       </Button>

//       <ReusableModal
//         open={open}
//         onClose={handleClose}
//         title="Welcome!"
//       >
//         <Typography sx={{ mb: 2 }}>
//           This is my reusable modal.
//           I can display any content inside it.
//         </Typography>

//         <Button
//           variant="contained"
//           onClick={handleClose}
//         >
//           Close
//         </Button>
//       </ReusableModal>
//     </Box>
//   );
// }
import { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Stack,
} from "@mui/material";

import ReusableModal from "./Components/ReusableModal";

export default function App() {
  const [open, setOpen] = useState(false);
  const [modalType, setModalType] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleOpen = (type) => {
    setModalType(type);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSaveUser = () => {
    if (!name.trim() || !email.trim()) {
      alert("Please enter your name and email.");
      return;
    }

    alert(`User saved: ${name} (${email})`);
    setName("");
    setEmail("");
    handleClose();
  };

  const handleDelete = () => {
    alert("Item deleted successfully!");
    handleClose();
  };

  const titles = {
    add: "Add New User",
    delete: "Delete Item",
    details: "User Details",
  };

  return (
    <Box sx={{ p: 4, maxWidth: 800, mx: "auto" }}>
      <Typography variant="h4" sx={{ mb: 1 }}>
        My Dashboard
      </Typography>

      <Typography color="text.secondary" sx={{ mb: 3 }}>
        Reusable Modal using children
      </Typography>

      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={2}
      >
        <Button
          variant="contained"
          onClick={() => handleOpen("add")}
        >
          Add User
        </Button>

        <Button
          variant="contained"
          color="error"
          onClick={() => handleOpen("delete")}
        >
          Delete Item
        </Button>

        <Button
          variant="outlined"
          onClick={() => handleOpen("details")}
        >
          View Details
        </Button>
      </Stack>

      <ReusableModal
        open={open}
        onClose={handleClose}
        title={titles[modalType]}
        actions={
          modalType === "add" ? (
            <>
              <Button onClick={handleClose}>
                Cancel
              </Button>

              <Button
                variant="contained"
                onClick={handleSaveUser}
              >
                Save User
              </Button>
            </>
          ) : modalType === "delete" ? (
            <>
              <Button onClick={handleClose}>
                Cancel
              </Button>

              <Button
                variant="contained"
                color="error"
                onClick={handleDelete}
              >
                Confirm Delete
              </Button>
            </>
          ) : null
        }
      >
        {modalType === "add" && (
          <Stack spacing={2} sx={{ pt: 1 }}>
            <TextField
              label="Full Name"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <TextField
              label="Email Address"
              type="email"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Stack>
        )}

        {modalType === "delete" && (
          <Typography>
            Are you sure you want to delete this item?
            This action cannot be undone.
          </Typography>
        )}

        {modalType === "details" && (
          <Box sx={{ py: 1 }}>
            <Typography sx={{ mb: 1 }}>
              <strong>Name:</strong> Bhavya
            </Typography>

            <Typography sx={{ mb: 1 }}>
              <strong>Role:</strong> Developer
            </Typography>

            <Typography>
              <strong>Status:</strong> Active
            </Typography>
          </Box>
        )}
      </ReusableModal>
    </Box>
  );
}
