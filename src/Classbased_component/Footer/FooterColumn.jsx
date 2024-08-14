import React, { Component } from "react";

class FooterColumn extends Component {
  render() {
    console.log(this.props.footerdata);
    
    return (
      <div>
        {this.props.footerdata.map((data, index) => {
          let{title,link}=data
          return (
            <div key={index}>
              <h3>{title}</h3>
              <ul>
                {link.map((object, i) => {
                  let {text,url}=object
                  return (
                    <li key={i}>
                      <a href={url}>{text}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    );
  }
}

export default FooterColumn;
