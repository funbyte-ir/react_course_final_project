'use client';
import { createTheme } from '@mui/material/styles';




const theme = createTheme({
    colorSchemes: {
        light: {
            palette: {
                primary: {
                    main: '#ab003c',

                },
                background: {
                    default: '#f5f5f5',
                    paper: '#ffffff',
                },
                text: {
                    primary: '#000000',
                },
                AppBar: {
                    defaultBg: '#ffffff',
                    darkColor: '#000000',
                },
            },
        },
        dark: {
            palette: {
                primary: {
                    main: '#ab003c',
                },
                background: {
                    default: '#121212',
                    paper: '#1e1e1e',
                },
                text: {
                    primary: '#ffffff',
                },
                AppBar: {
                    darkBg: '#1e1e1e',
                    darkColor: '#ffffff',
                },
                Button: {
                    inheritContainedBg: '#ab003c',
                    inheritContainedHoverBg: '#ffffff',
                },

            },

        },
    },

    cssVariables: {
        colorSchemeSelector: 'class',
    },
    typography: {
        fontFamily: "IranYekanX",
    },
    components: {
        MuiAlert: {
            styleOverrides: {
                root: {
                    variants: [
                        {
                            props: { severity: 'info' },
                            style: {
                                backgroundColor: '#60a5fa',
                            },
                        },
                    ],
                },
            },
        },
    },
});

export default theme;