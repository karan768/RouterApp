// AccordionItem.js
// Props and Context Usage:

// item: The current item's data including title, content, and children.
// id: The unique identifier for this item.
// activeItems and toggleItem are obtained from the context.
// Rendering:

// A button displays the item's title. Clicking this button calls toggleItem with the item's ID.
// If the item's ID is in activeItems, its content is displayed.
// If the item has children, they are recursively rendered as nested AccordionItem components with their own unique IDs.

import React from 'react';
import { useAccordionContext } from './AccordionContext';

const AccordionItem = ({ item, id }) => {
    console.log("AccordionItem");
    const { activeItems, toggleItem } = useAccordionContext();
    const isActive = activeItems.has(id);

    return (
        <div>
        <button onClick={() => toggleItem(id)}>{item.title}</button>
        {isActive && (
            <div>
            <p>{item.content}</p>
            {item.children && item.children.length > 0 && (
                <div style={{ marginLeft: '20px' }}>
                {item.children.map((child, index) => (
                    <AccordionItem key={`${id}-${index}`} item={child} id={`${id}-${index}`} />
                ))}
                </div>
            )}
            </div>
        )}
        </div>
    );
};

export default AccordionItem;
