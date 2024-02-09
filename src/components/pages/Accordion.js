import "../pagesCSS/AccordionCSS.css";
import React from "react";

function Accordion({ data, isOpen, toggleAccordion }) {

  return (
    <div>
      <button className="accordion-button" onClick={toggleAccordion}>
        Transaction {data.blockNumber}
      </button>
      {isOpen && (
        <div className="accordion-content">
          <table>
            <tbody>
              <tr>
                <td>Image Name</td>
                <td>{data.imagename}</td>
              </tr>
              <tr>
                <td>Result</td>
                <td>{data.result}</td>
              </tr>
              <tr>
                <td>Block Hash</td>
                <td>{data.blockHash}</td>
              </tr>
              <tr>
                <td>Block Number</td>
                <td>{data.blockNumber}</td>
              </tr>
              <tr>
                <td>Hash</td>
                <td>{data.txnHash}</td>
              </tr>
              <tr>
                <td>Date and Time</td>
                <td>{data.dateTime}</td>
              </tr>
              <tr>
                <td>URL</td>
                <td>
                  <a
                    href={data.imgUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Accordion;