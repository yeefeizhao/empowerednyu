import React from "react";
import GetInvolvedHeader from "./GetInvolvedHeader";
import GetInvolvedConsultant from "./GetInvolvedConsultant";
import GetInvolvedNonprofit from "./GetInvolvedNonprofit";

function GetInvolved() {
    return (
        <div className="get-involved">
            <div className="get-involved-container">
              <GetInvolvedHeader />
              <GetInvolvedConsultant />
              <GetInvolvedNonprofit />
            </div>
        </div>
    );
}

export default GetInvolved;
