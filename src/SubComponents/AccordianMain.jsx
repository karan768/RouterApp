// Data Structure:
// The data array includes nested items to demonstrate the recursive rendering capability of the AccordionItem.

import React from 'react'
import Accordion from './Accordion';
import TestAcc from './TestAcc';

const data = [
    {
      title: "Item 1",
      content: "Content for item 1",
      children: [
        {
          title: "Item 1.1",
          content: "Content for item 1.1"
        },
        {
          title: "Item 1.2",
          content: "Content for item 1.2",
          children: [
            {
              title: "Item 1.2.1",
              content: "Content for item 1.2.1",
              children: [
                {
                  title: "Item 1.2.1.00",
                  content: "Content for item 1.2.1.00"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      title: "Item 2",
      content: "Content for item 2"
    },
    {
      title: "Item 3",
      content: "Content for item 3"
    }
];  

function AccordianMain() {
    console.log("AccordianMain");
    console.log(data, 'data');
    return (
      <>
        <div>
          <h1>Accordion Example</h1>
          <Accordion data={data} />
        </div>
        <div>
          {/* <TestAcc items={data}/> */}
        </div>
      </>
    );
}

export default AccordianMain