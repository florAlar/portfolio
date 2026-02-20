import React, { useState, useEffect } from 'react';
import { PALETTES } from './Palettes';
import { ColorContext } from './ColorContextDefinition';



export const ColorProvider = ({ children }) => {
    const [activePalette, setActivePalette] = useState(() => {
        const savedPaletteName = localStorage.getItem('theme-palette');
        if (savedPaletteName) {
            return PALETTES.find(p => p.name === savedPaletteName) || PALETTES[0];
        }
        return PALETTES[0];
    });

    // Update CSS variables and local storage when palette changes
    useEffect(() => {
        const root = document.documentElement;
        // Legacy support
        root.style.setProperty('--primary-neon', activePalette.primary);
        root.style.setProperty('--secondary-neon', activePalette.secondary);

        // New Design System Mapping
        if (activePalette.colors) {
            Object.entries(activePalette.colors).forEach(([key, value]) => {
                root.style.setProperty(`--${key}`, value);
            });
        } else {
            // Fallback if colors obj missing (shouldn't happen with new const)
            root.style.setProperty('--c1', activePalette.primary);
            root.style.setProperty('--c3', activePalette.secondary);
        }

        localStorage.setItem('theme-palette', activePalette.name);
    }, [activePalette]);

    return (
        <ColorContext.Provider value={{ activePalette, setActivePalette, palettes: PALETTES }}>
            {children}
        </ColorContext.Provider>
    );
};


