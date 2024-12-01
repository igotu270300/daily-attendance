import React, { useState } from "react";
import { useRef } from "react";
import { toPng } from "html-to-image";
import "./App.css";

export function App() {
  const tableRef = useRef();
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-GB");

  const downloadTableAsImage = async () => {
    try {
      // Capture the table as an image
      const image = await toPng(tableRef.current);

      // Create a download link
      const link = document.createElement("a");
      link.href = image;
      link.download = "table-image.png";
      link.click();
    } catch (error) {
      console.error("Error capturing table:", error);
    }
  };

  const [planEmpoloyees, setPlanEmployess] = useState("");
  const [planBoat, setPlanBoat] = useState("");
  const [planContract, setPlanContract] = useState("");
  const [actualEmpoloyees, setActualEmployess] = useState("");
  const [actualBoat, setActualBoat] = useState("");
  const [actualContract, setActualContract] = useState("");
  const [commentEmpoloyees, setCommentEmployess] = useState("");
  const [commentBoat, setCommentBoat] = useState("");
  const [commentContract, setCommentContract] = useState("");

  return (
    <div>
      <table ref={tableRef}>
        <caption>IQ Daily Attendance</caption>
        <thead>
          <tr>
            <th scope="col">{formattedDate}</th>
            <th scope="col" colSpan="2">
              IQ - Daily Attendance
            </th>
            <th contentEditable>Shift: 1</th>
          </tr>
        </thead>
        <thead>
          <tr>
            <th>Title</th>
            <th>Plan</th>
            <th>Actual</th>
            <th>Comments</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Employees</th>
            <td
              contentEditable
              onBlur={(e) => setPlanEmployess(Number(e.target.innerText))}
            >
              {planEmpoloyees}
            </td>
            <td
              contentEditable
              onBlur={(e) => setActualEmployess(Number(e.target.innerText))}
            >
              {actualEmpoloyees}
            </td>
            <td></td>
          </tr>
          <tr>
            <th>Boat</th>
            <td
              contentEditable
              onBlur={(e) => setPlanBoat(Number(e.target.innerText))}
            >
              {planBoat}
            </td>
            <td
              contentEditable
              onBlur={(e) => setActualBoat(Number(e.target.innerText))}
            >
              {actualBoat}
            </td>
            <td></td>
          </tr>
          <tr>
            <th>Contract</th>
            <td
              contentEditable
              onBlur={(e) => setPlanContract(Number(e.target.innerText))}
            >
              {planContract}
            </td>
            <td
              contentEditable
              onBlur={(e) => setActualContract(Number(e.target.innerText))}
            >
              {actualContract}
            </td>
            <td></td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th>Total</th>
            <td>{planEmpoloyees + planBoat + planContract}</td>
            <td>{actualEmpoloyees + actualBoat + actualContract}</td>
            <td>-</td>
          </tr>
        </tfoot>
      </table>
      <button onClick={downloadTableAsImage}>Download</button>
    </div>
  );
}
export default App;
