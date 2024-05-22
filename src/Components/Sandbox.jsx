import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import "./stylefile.css";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const StyledInput = styled.textarea`
  width: 300px;
  height: 200px;
  margin-bottom: 20px;
`;

const Sandbox = () => {
  const [html, setHtml] = useState('');
  const [css, setCss] = useState('');
  const [javascript, setJavascript] = useState('');

  return (
    <div>
      <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Chela+One&family=Gideon+Roman&family=Kumar+One&family=Labrada:ital,wght@0,100..900;1,100..900&family=Langar&family=Lumanosimo&family=Oi&family=Purple+Purse&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Chela+One&family=Gideon+Roman&family=Kumar+One&family=Labrada:ital,wght@0,100..900;1,100..900&family=Langar&family=Lumanosimo&family=Oi&family=Purple+Purse&family=Smokum&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Gideon+Roman&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Gideon+Roman&family=Langar&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Chela+One&family=Gideon+Roman&family=Langar&family=Lumanosimo&family=Purple+Purse&display=swap" rel="stylesheet" />
      </Helmet>
      <header className="header">
        <h1 className="title">NoteNest</h1>
        <h3 className="h2x">Your sandbox environment</h3>
      </header>

      <StyledContainer id="pdf-content">
        <div >
        <div className="thestable">
          <table className="sandboxtable">
            <tbody>
              <tr>
                <th className="thsand">HTML</th>
                <th className="thsand">CSS</th>
                <th className="thsand">JavaScript</th>
                
              </tr>
              <tr>
                <td>
                  <StyledInput
                    placeholder="Enter HTML"
                    className="boxx"
                    value={html}
                    onChange={(e) => setHtml(e.target.value)}
                  />
                </td>
                <td>
                  <StyledInput
                    placeholder="Enter CSS"
                    className="boxx"
                    value={css}
                    onChange={(e) => setCss(e.target.value)}
                  />
                </td>
                <td>
                  <StyledInput
                    placeholder="Enter JavaScript"
                    className="boxx"
                    value={javascript}
                    onChange={(e) => setJavascript(e.target.value)}
                  />
                </td>
                
              </tr>
            </tbody>
          </table>
          </div>
          <br></br>
          <div className="thestableoutput">
          <iframe
                    className="box"
                    title="sandbox"
                    srcDoc={`<html><head><style>${css}</style></head><body>${html}<script>${javascript}</script></body></html>`}
                  />

                 
                  </div>
                 
          
        </div>
      </StyledContainer>
    </div>
  );
};

export default Sandbox;
