import React from 'react';
import './App.css';
function App() {
  return (
    <div>
      <div style={{fontSize:"45px",textAlign:"center"}}>React Tasks</div>
      <center>
      <table id="id1">
        <tr>
          <td style={{width:"150px"}}>S.No</td>
          <td style={{width:"600px"}}>Title</td>
          <td style={{width:"300px"}}>Git Repo</td>
          <td style={{width:"400px"}}>Link</td>
        </tr>
        <tr id="id">
          <td>1</td>
          <td>Paragraph Word Counter</td>
          <td><a href="https://github.com/KPNVSR/reacttask1">Repo Task-1</a></td>
          <td><a href="https://react6-z1ve.vercel.app/">Word Count</a></td>
        </tr>
        <tr>
          <td>2</td>
          <td>Calculator</td>
          <td><a href="https://github.com/KPNVSR/react2">Repo Task-2</a></td>
          <td><a href="https://react2-weld.vercel.app/">Calculator</a></td>
        </tr>
        <tr>
          <td>3</td>
          <td>Color Picker</td>
          <td><a href="https://github.com/KPNVSR/react3">Repo Task-3</a></td>
          <td><a href="https://react2-9obi.vercel.app/">Color Picker</a></td>
        </tr>
        <tr>
          <td>4</td>
          <td>API Fetch</td>
          <td><a href="https://github.com/KPNVSR/react4">Repo Task-4</a></td>
          <td><a href="https://react4-one.vercel.app/">API Fetching</a></td>
        </tr>
        <tr>
          <td>5</td>
          <td>Age Calculator</td>
          <td><a href="https://github.com/KPNVSR/react5">Repo Task-5</a></td>
          <td><a href="https://react5-nu.vercel.app/">Age Calculator</a></td>
        </tr>
        <tr>
          <td>6</td>
          <td>PortFolio</td>
          <td><a href="https://github.com/KPNVSR/react6">Repo Task-6</a></td>
          <td><a href="https://react6-three.vercel.app/">Portfolio</a></td>
        </tr>
      </table>
      </center>
    </div>
  );
}
export default App;