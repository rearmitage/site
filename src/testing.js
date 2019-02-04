import React from "react";

export default class CanvasVideo extends React.Component {
  onPlay = () => {
    console.log("video started!");
    const canvas = this.refs.canvas;
    const context = canvas.getContext("2d");
    const video = this.refs.video;
    const cw = canvas.clientWidth;
    const ch = canvas.clientHeight;
    canvas.width = cw;
    canvas.height = ch;
    this.draw(video, context, cw, ch);
  };

  draw = (v, c, w, h) => {
    if (v.paused || v.ended) return false;

    c.drawImage(v, 0, 0, w, h);
    const idata = c.getImageData(0, 0, w, h);
    const newdata = this.filterdata(idata);
    c.putImageData(newdata, 0, 0);

    setTimeout(this.draw, 20, v, c, w, h);
  };

  filterdata = (idata, type) => {
    const data = idata.data;
    for (var i = 0; i < data.length; i += 4) {
      const average = (data[i] + data[i + 1] + data[i + 2]) / 3;
      data[i] = average;
      data[i + 1] = average + 30;
      data[i + 2] = average;
    }
    idata.data = data;
    return idata;
  };

  render() {
    return (
      <div>
        <canvas ref="canvas" width={640} height={425} />
        <video
          controls
          loop
          autoPlay
          style={{ display: "none" }}
          ref="video"
          onPlay={this.onPlay}
        >
          <source src={this.props.src} type="video/mp4" />
        </video>
      </div>
    );
  }
}
