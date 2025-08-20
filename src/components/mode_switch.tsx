'use client';
import { Switch, useColorScheme } from "@mui/material";
// const label = { inputProps: { 'aria-label': 'تغییر تم' } };

export default function ModeSwitch(){
    const { mode, setMode } = useColorScheme();
    if (!mode) {
        return null;
    }

    return <Switch checked={mode === "dark"} onChange={(e) =>  setMode(e.target.checked ? "dark" : "light")}/>
}