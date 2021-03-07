import React from "react"
import axios from "axios";
import arrestwarrant from "../../../assets/Images/aww.jpg";
import ReactToPrint from 'react-to-print';
import "./Arrest.css"
export class ComponentToPrint extends React.PureComponent {
    render() {
      return (
       <div>
           <h2 className="top-one">ARREST WARRANT</h2>
           <br/>
           <p>____________ COURT<br/>
           <br/>
COUNTRY OF_____________ STATE OF ___________ PART _______</p>
<br/>
<p>[Use Caption as Per <br/>
Mandate of Commitment, supra]</p>
<p className="three-heading">
WARRANT OF ARREST<br/>
PURSUANT TO<br/>
JUDICIARY LAW § 2-b(3)
</p>
<p>_____________________________</p>
<p>TO ANY PEACE OFFICER OF THE STATE OF PAKISTAN:</p>
<p>GREETINGS:</p>
<br/>
<p className="letter">An order to show cause having been personally served on the  [Name of Contemnor]
commanding his/ her appearance] before the court on the ______ <br/>day of ______, 20__,
and said person having failed to appear,</p>
<br/>




<p className="lettertwo">YOU ARE HEREBY COMMANDED to arrest said person and bring said person
directly before [Name of Judge], a Justice/Judge of the _________ Court, Part ____<br/>
thereof, held at the courthouse located at _________, New York, on the
____ day of
_____, 20__, at _____ o’clock in the _____ noon, to answer for his/her disobedience to
the order <br/>to show cause, and also the charges contained therein,
issued by [Name of
Judge] and duly served on said person on the _____ day of ______, 20__, and pursuant to the Judiciary Law §
2-b(3) you have this warrant,and it is

</p>
<p>So Ordered</p>
<p className="last-dash">_____________________________</p>
<p className="last-dashh">Justice/Judge of the _____________ court</p>
<br/>
<p>Dated this ______ day of______,20______.</p>

       </div>
      );
    }
  }
class ArrestWarrant extends React.PureComponent {
    render() {
      return (
        <div>
          <ReactToPrint
            trigger={() => {
              // NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
              // to the root node of the returned component as it will be overwritten.
              return <a href="#">Print this out!</a>;
            }}
            content={() => this.componentRef}
          />
          <ComponentToPrint ref={el => (this.componentRef = el)} />
        </div>
      );
    }
  }
  export default ArrestWarrant;