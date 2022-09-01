import React from "react";

//Class based App Component
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      hovering: false,
      pos: 'right'
    }
  }
  mouseOver = () => {
    this.setState({ hovering: true });
  }

  mouseOut = () => {
    this.setState({ hovering: false });
  }

  changePos(event) {
    this.setState({
      pos: event.target.value
    });
  }

  render() {
  
    let tooltip = { backgroundColor:"black", borderRadius:"5px", color:"white",padding:'4px',width:"100px" ,opacity:"0.3"}

    if (this.state.pos === 'left') {
      tooltip = { ...tooltip, position: "absolute", bottom: '-35%', right: "110%" }
    }
    else if (this.state.pos === 'top') {
      tooltip = {...tooltip, position: "absolute", left:"15px", bottom: '130%' }
    }
    else if (this.state.pos === 'bottom') {
      tooltip = { ...tooltip, position: "absolute", left:"15px", top: '130%' }
    }
    else {
      tooltip = { ...tooltip, position: "absolute", bottom: '-35%', left: "110%" }
    }
    return (
      <div className="App">
          <select style={ddlStyle} onChange={this.changePos.bind(this)}>
            <option value="right" selected> -- Select Direction  -- </option>
            <option value="right" >Right(default)</option>
            <option value="bottom">Bottom</option>
            <option value="left">Left</option>
            <option value="top">Top</option>
          </select>
          <button style={mystyle} onMouseOver={this.mouseOver} onMouseOut={this.mouseOut} >Hover over me!
            {this.state.hovering ? <div style={tooltip}>Thanks for hovering! <br /> I'm a tooltip. </div> : null}
          </button>
      </div>
    );
  }
}

const mystyle = {
  backgroundColor: "#f5f5f5",
  padding: "10px",
  margin: "200px",
  fontFamily: "Arial",
  position: "relative",
  textDecoration:"underline"
};

const ddlStyle = {
  padding: "0.375rem 2.25rem 0.375rem 0.75rem",
  mozpaddingstart: "calc(0.75rem - 3px)",
  fontsize: "1rem",
  fontweight: "400",
  lineheight: "1.5",
  color: "#212529",
  backgroundcolor: "#fff",
  marginLeft:"100px",
  backgroundrepeat: "no-repeat",
  backgroundposition: "right 0.75rem center",
  backgroundsize: "16px 12px",
  border: "2px solid black",
  borderradius: "0.25rem",
  transition: "border-color .15s ease-in-out,box-shadow .15s ease-in-out",
  webkitappearance: "none",
  mozappearance: "none",
  appearance: "none"
};

export default App;