'use client';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import { useState } from "react";




export default function UserButton(){
    const [open, setOpen] = useState(false);
    return (
        <>
        <Button onClick={() => setOpen(true)}>
            ورود
        </Button>

        <Dialog open={open} onClose={() => setOpen(false)}>

            <DialogTitle>برای ورود ایمیل خود را وارد کنید</DialogTitle>
            <DialogContent>
                <TextField label="ایمیل" type="email" fullWidth />
            </DialogContent>
            <DialogActions>
                <Button onClick={() => setOpen(false)}>بستن</Button>
                <Button variant="contained">ورود</Button>
            </DialogActions>
        </Dialog>
        </>
        
        
    )
}