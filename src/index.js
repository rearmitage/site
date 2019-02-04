import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import CanvasVideo from "./testing";

//https://drive.google.com/open?id=1M7C6hV2-rEKd7Sc-dekWtvM1xNiyp7v2

const PageWrap = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 10;
  background-color: black;
`;

const Thing = styled.div`
  text-align: center;
  min-width: 500px;
  border: 10px solid rgba(230, 225, 225, 0.9);
  background-color: rgba(225, 225, 225, 0.5);
`;

const Vid = styled.video`
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  z-index: 1;
`;

//https://drive.google.com/open?id=1rawqnf0Bj4M1N2bX641OT0RDTooiKegI
const VideoBackground = () => (
  <Vid
    autoPlay
    loop
    poster="https://uploads.codesandbox.io/uploads/user/db601089-4c21-46ca-9168-ab7f4588dce0/VtA--Screen%20_Shot.jpg"
  >
    <source
      // src="https://drive.google.com/uc?export=download&id=1rawqnf0Bj4M1N2bX641OT0RDTooiKegI"
      type="video/mp4"
    />
    Your browser does not support the video tag.
  </Vid>
);

//<CanvasVideo src="https://drive.google.com/uc?export=download&id=1rawqnf0Bj4M1N2bX641OT0RDTooiKegI"/>
// <VideoBackground />
const App = () => {
  return (
    <div>
      <VideoBackground />
      <PageWrap>
        <Thing className="App">
          <h1>Rich Armitage</h1>
          <h2>Welcome to my Site</h2>
        </Thing>
      </PageWrap>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
