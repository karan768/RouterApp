// Detailed Explanation
// AccordionContext.js
// State Management:

// The state activeItems is a Set which stores the IDs of the currently active (open) items. Using a Set ensures each item is unique and prevents duplicates.
// toggleItem Function:

// This function toggles the presence of an item's ID in the activeItems set. If the ID is already in the set, it removes it (closes the item). If it's not, it adds it (opens the item).

import React, { createContext, useState, useContext } from 'react';

const AccordionContext = createContext();

export const useAccordionContext = () => useContext(AccordionContext);

export const AccordionProvider = ({ children }) => {
    const [activeItems, setActiveItems] = useState(new Set());

    const toggleItem = (id) => {
        setActiveItems((prevItems) => {
        const newItems = new Set(prevItems);
        if (newItems.has(id)) {
            newItems.delete(id);
        } else {
            newItems.add(id);
        }
        return newItems;
        });
    };

    return (
        <AccordionContext.Provider value={{ activeItems, toggleItem }}>
        {children}
        </AccordionContext.Provider>
    );
};
