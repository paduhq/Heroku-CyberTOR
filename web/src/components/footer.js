import React from "react";

function footer() {
  return (
    <div className="nav">
      <div className="content">
        <div className="nav-logo">
          <h1 className="h4 m-0">Copyright @ 2020. <a className="alpha" href="https://t.me/PaduHQ">Padu HQ</a></h1>
        </div>
        <div className="nav-links" style={{flexDirection: "row"}}>
          <a className="btn primary" href="https://www.facebook.com/PaduHQ" style={{color: "#f7fafc"}}>
    <span className="bnt-icon">
        <ion-icon name="logo-facebook" />
      </span> Facebook
    </a>
     <a className="btn" href="https://t.me/LutfiHamka" style={{color: "#f7fafc"}}>
    <span className="bnt-icon">
        <ion-icon name="logo-telegram" />
      </span> Owner
    </a>
        </div>
      </div>
    </div>
  );
}

export default footer;
