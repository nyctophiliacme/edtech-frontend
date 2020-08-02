import React, { Component } from "react";
import "./exam-details.css";
import pdfIcon from "../../../assets/images/Pdf_icon.png";
import { examDetailsCompleteData } from "../exam-ecat-data";

class ExamDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      htmlData: ` 
       <div class="exam-details-heading">
      What is ECAT?
      <div>
        <p class="exam-details-text">
          Engineering College Admission Test (ECAT) is a test conducted in Punjab,
          Pakistan each year for admission in BE/BS/BSc Engineering degree
          programs. ECAT is conducted by the University of Engineering and
          Technology, Lahore. Each year some 45,000 students attempt this test
          while there are some 3,000 seats in public sector engineering
          institutions of the Punjab.
        </p>
        <p class="exam-details-text">
          ECAT is a prerequisite for admission in the University of Engineering
          and Technology, Lahore, and its affiliated institutions and all other
          public sector engineering institutions in the Punjab. Some private
          institutions also require ECAT as a prerequisite.
        </p>
      </div>
    </div>
    <div class="exam-details-heading">
      Eligibility
      <ul class="details-ul">
        <li class="exam-details-text">
          Applicants who have passed or have appeared in F.Sc. / Intermediate,
          B.Sc., DAE, B.Tech. (Pass), or any Equivalent Examination may apply for
          Entry Test.
        </li>
        <li class="exam-details-text">
          Or applicants who have successfully taken the F.Sc (part-II) /
          equivalent A-Level exams and are awaiting are eligible to sit in the
          test on the basis of their 1st year marks.
        </li>
      </ul>
    </div>
    <div class="exam-details-heading">
      Schedule
      <div>
        <p class="exam-details-text">
          ECAT is conducted once a year during the month of July.
        </p>
      </div>
    </div>
    <div class="exam-details-heading">
      Application process
      <ul class="details-ul">
        <li class="exam-details-text">
          The Entry Test Application filled online through the web link
          http://admission.uet.edu.pk as the admission date announce (admission
          started in June probably every year)
        </li>
        <li class="exam-details-text">The UET exam fee is Rs 1200/-</li>
        <li class="exam-details-text">
          UET ECAT tokens are available at the HBL designated Branches by paying a
          fee of Rs 1200/-
        </li>
        <li class="exam-details-text">Login to UET admission Portal</li>
        <li class="exam-details-text">
          Fill out the application online according to the instructions
        </li>
        <li class="exam-details-text">
          After filling the form and read it again and then submit the application
        </li>
        <li class="exam-details-text">
          Now after submitting the form, the applicant is able to download the
          admit card
        </li>
        <li class="exam-details-text">Print the admit card for exam day</li>
        <li class="exam-details-text">Bring CNIC and Admit card on exam day</li>
      </ul>
    </div>
    <div class="exam-details-heading">
      Merit Calculation
      <div>
        <p class="exam-details-text">
          This year, UET has changed the merit calculation formula which is as
          follows: -
        </p>
      </div>
    </div>
    <div>
      <table class="exam-details-table-container">
        <thead class="exam-details-table-container">
          <tr class="exam-details-table-header">
            <th colspan="3">F.Sc</th>
          </tr>
        </thead>
        <tbody>
          <tr class="exam-details-table-content">
            <td class="exam-details-table-subcontent">Matric<br />25%</td>
            <td class="exam-details-table-subcontent">Entry test<br />30%</td>
            <td class="exam-details-table-subcontent">F.Sc Part (1)<br />45%</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div>
      <table class="exam-details-table-container">
        <thead class="exam-details-table-container">
          <tr class="exam-details-table-header">
            <th colspan="2">O-Level</th>
          </tr>
        </thead>
        <tbody>
          <tr class="exam-details-table-content">
            <td class="exam-details-table-subcontent">Entry test<br />30%</td>
            <td class="exam-details-table-subcontent">
              Marks in 11th Class (O level or equivalent)<br />70%
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="exam-details-heading">
      Programs for ECAT candidates
      <ul class="details-ul">
        <li class="exam-details-text">BSc. Architectural Engineering</li>
        <li class="exam-details-text">B. Architecture</li>
        <li class="exam-details-text">BSc. Civil Engineering</li>
        <li class="exam-details-text">BSc. City and Regional Planning</li>
        <li class="exam-details-text">BSc. Computer Science</li>
        <li class="exam-details-text">BSc. Computer Engineering</li>
        <li class="exam-details-text">BSc. Electrical Engineering</li>
        <li class="exam-details-text">BSc. Geological Engineering</li>
        <li class="exam-details-text">BSc. Environmental Engineering</li>
        <li class="exam-details-text">
          BSc. Industrial and Manufacturing Engineering
        </li>
        <li class="exam-details-text">BSc. Mechanical Engineering</li>
        <li class="exam-details-text">
          BSc. Mechatronics &amp;amp; Control Engineering
        </li>
        <li class="exam-details-text">BSc. Mining Engineering</li>
        <li class="exam-details-text">
          BSc. Metallurgical and Materials Engineering
        </li>
        <li class="exam-details-text">BSc. Petroleum and Gas Engineering</li>
        <li class="exam-details-text">BSc. Product and Industrial Design</li>
        <li class="exam-details-text">BSc. Polymer Engineering</li>
        <li class="exam-details-text">BSc. Transportation Engineering</li>
        <li class="exam-details-text">BSc. Chemical Engineering</li>
      </ul>
    </div>`,
    };
  }
  render() {
    return <div dangerouslySetInnerHTML={{ __html: this.state.htmlData }} />;
  }
}
export default ExamDetails;
