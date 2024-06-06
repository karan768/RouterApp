// Accordion.js
// Rendering:
// The Accordion component receives data as a prop, which is an array of items.
// Each item is rendered as an AccordionItem with a unique id.

import React from 'react';
import { AccordionProvider } from './AccordionContext';
import AccordionItem from './AccordionItem';

const Accordion = ({ data }) => {
    console.log("Accordion")
    return (
        <AccordionProvider>
        {data.map((item, index) => {
            return (
                <AccordionItem key={index} item={item} id={`item-${index}`} />
            )
        })}
        </AccordionProvider>
    );
};

export default Accordion;
