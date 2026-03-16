export function darkenColor(hex, factor = 0.2) {
    // Ensure the factor is between 0 and 1
    const clampedFactor = Math.min(1, Math.max(0, factor));

    // Parse the hex color into RGB components
    let r = parseInt(hex.slice(1, 3), 16);
    let g = parseInt(hex.slice(3, 5), 16);
    let b = parseInt(hex.slice(5, 7), 16);

    // Calculate the darkened color by reducing each RGB component
    r = Math.round(r * (1 - clampedFactor));
    g = Math.round(g * (1 - clampedFactor));
    b = Math.round(b * (1 - clampedFactor));

    // Convert back to hex format
    const darkenedHex = `#${(r << 16 | g << 8 | b).toString(16).padStart(6, '0')}`;

    return darkenedHex;
}

export function getDesignTokens(mode) {
    let bgBase = {
        light: {
            default: '#fafafa',
            paper: '#f0f0f0',
        },
        dark: {
            default: '#2F3136',
            paper: '#212529',
        },
    };
    let darkenRatio = {
        light: 0.05,
        dark: 0.5
    };

    let compoBase = {
        MuiDialogTitle: {
            styleOverrides: {
                root: {
                    fontWeight: "800"
                }
            }
        },
        MuiListItemButton: {
            styleOverrides: {
                root: {
                    borderRadius: '5px',
                    '&.Mui-selected': {
                        backgroundColor: darkenColor(bgBase[mode].default, darkenRatio[mode]),
                    },
                    '&.Mui-selected:hover': {
                        backgroundColor: darkenColor(bgBase[mode].default, darkenRatio[mode]),
                    },
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundColor: bgBase[mode].paper,
                }
            }
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: "8px",
                    backgroundColor: darkenColor(bgBase[mode].paper, darkenRatio[mode]),
                }
            }
        },
        MuiToolbar: {
            styleOverrides: {
                root: {
                    '& .user-profile:hover': {
                        backgroundColor: darkenColor(bgBase[mode].default, 0.15),
                    },
                },
            },
        },
        MuiDrawer: {
            styleOverrides: {
                paper: {
                    backgroundColor: bgBase[mode].paper,
                    backgroundImage: `linear-gradient(${bgBase[mode].paper}, ${bgBase[mode].paper})`,
                }
            }
        }
    };

    return {
        typography: {
            fontFamily: 'Open Sans, sans-serif',
        },
        darkenRatio: darkenRatio[mode],
        palette: {
            mode, ...(mode === 'light'
                ? {
                    primary: {
                        main: '#fafafa',
                    },
                    secondary: {
                        main: '#dadada',
                    },
                    background: bgBase[mode],
                    text: {
                        primary: '#3c3c3c',
                        secondary: '#606060',
                    },
                }
                : {
                    primary: {
                        main: '#2F3136'
                    },
                    secondary: {
                        main: '#212529'
                    },
                    background: bgBase[mode],
                    text: {
                        primary: '#fafafa',
                        secondary: '#efefef'
                    },
                })
        }, components: {
            mode, ...compoBase
        },
    };
};