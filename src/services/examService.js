import { baseURL } from "../config/appConfig";
import axios from "axios";


export const getAllExams=()=>{
  return axios.get(`${baseURL}exams`);
}
export const getExamSideNav = (exam_code) => {
  const axiosParams = {
    exam_code: exam_code,
  };

  return examSideNavData;
};
export const getExamStaticData = (section_container_1d) => {
  return section_container_1d === 1 ? examDetail1 : examDetail2;
};

let examSideNavData = [
  {
    section_container_1d: 1,
    section_container_title: "about the test",
    sections: [
      {
        section_id: 1,
        section_title: "Overview",
      },
      {
        section_id: 2,
        section_title: "syllabus",
      },
    ],
  },
  {
    section_container_1d: 2,
    section_container_title: "Registration",
    sections: [
      {
        section_id: 3,
        section_title: "Fee",
      },
      {
        section_id: 4,
        section_title: "Past paper",
      },
      {
        section_id: 5,
        section_title: "Past pattern",
      }
    ],
  },
];
let examDetail1 = {
  section_container_1d: 1,
  section_container_title: "about the test",
  sections: [
    {
      section_id: 1,
      section_title: "Overview",
      section_html: `<div class="exam-details-heading">
       What is ECAT?
       </div>
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
     <div class="exam-table1-wrapper">
       <table class="exam-details-table1-container">
         <thead>
           <tr class="exam-details-table1-header">
             <th colspan="3">F.Sc</th>
           </tr>
         </thead>
         <tbody>
           <tr class="exam-details-table1-content">
             <td class="exam-details-table1-subcontent">Matric<br />25%</td>
             <td class="exam-details-table1-subcontent">Entry test<br />30%</td>
             <td class="exam-details-table1-subcontent">F.Sc Part (1)<br />45%</td>
           </tr>
         </tbody>
       </table>
     </div>
     <div class="exam-table1-wrapper">
       <table class="exam-details-table1-container">
         <thead>
           <tr class="exam-details-table1-header">
             <th colspan="2">O-Level</th>
           </tr>
         </thead>
         <tbody>
           <tr class="exam-details-table1-content">
             <td class="exam-details-table1-subcontent">Entry test<br />30%</td>
             <td class="exam-details-table1-subcontent">
               Marks in 11th Class <br />70%
             </td>
           </tr>
         </tbody>
       </table>
     </div>
     <div class="exam-details-heading">
       Programs for ECAT candidates
       <ul class="details-ul-type2">
         <div class="li-type2"><li class="exam-details-text">BSc. Architectural Engineering</li></div>
         <div class="li-type2"><li class="exam-details-text">B. Architecture</li></div>
         <div class="li-type2"><li class="exam-details-text">BSc. Civil Engineering</li></div>
         <div class="li-type2"><li class="exam-details-text">BSc. City and Regional Planning</li></div>
         <div class="li-type2"><li class="exam-details-text">BSc. Computer Science</li></div>
         <div class="li-type2"><li class="exam-details-text">BSc. Computer Engineering</li></div>
         <div class="li-type2"><li class="exam-details-text">BSc. Electrical Engineering</li></div>
         <div class="li-type2"><li class="exam-details-text">BSc. Geological Engineering</li></div>
         <div class="li-type2"><li class="exam-details-text">BSc. Environmental Engineering</li></div>
         <div class="li-type2"><li class="exam-details-text">BSc. Industrial and Manufacturing Engineering</li></div>
         <div class="li-type2"><li class="exam-details-text">BSc. Mechanical Engineering</li></div>
         <div class="li-type2"><li class="exam-details-text">BSc. Mechatronics &amp;amp; Control Engineering</li></div>
         <div class="li-type2"><li class="exam-details-text">BSc. Mining Engineering</li></div>
         <div class="li-type2"><li class="exam-details-text">BSc. Metallurgical and Materials Engineering</li></div>
         <div class="li-type2"><li class="exam-details-text">BSc. Petroleum and Gas Engineering</li></div>
         <div class="li-type2"><li class="exam-details-text">BSc. Product and Industrial Design</li></div>
         <div class="li-type2"><li class="exam-details-text">BSc. Polymer Engineering</li></div>
         <div class="li-type2"><li class="exam-details-text">BSc. Transportation Engineering</li></div>
         <div class="li-type2"><li class="exam-details-text">BSc. Chemical Engineering</li></div>
       </ul>
     </div>`,
    },
    {
      section_id: 2,
      section_title: "syllabus",
      section_html: `<div class="exam-details-container">
          <div class="exam-details-heading">
            English:
            <div>
              <h2 class="exam-details-text">
                With only 10% weightage given to this portion in the test, its
                preparation is relatively less stressful.
              </h2>
              <h2 class="exam-details-text">
                The English portion is further divided into
              </h2>
            </div>
            <ul class="details-ul">
              <li class="exam-details-text">Vocabulary</li>
              <li class="exam-details-text">Grammar</li>
              <li class="exam-details-text">Comprehension</li>
            </ul>
          </div>
          <div class="exam-details-heading">
            Vocabulary:
            <div>
              <p class="exam-details-text">
                The vocabulary preparation consists of the traditional labyrinth of
                synonyms and antonyms even in ECAT. Key books and study materials by
                colleges and academies can aid the student in this regard.
              </p>
            </div>
          </div>
          <div class="exam-details-heading">
            Grammar:
            <div>
              <h2 class="exam-details-text">This part includes common topics like:</h2>
            </div>
            <ul class="details-ul">
              <div class="li-type2"><li class="exam-details-text">Active and passive voice</div></li>
              <div class="li-type2"><li class="exam-details-text">Narration (direct and indirect speech)</div></li>
              <div class="li-type2"><li class="exam-details-text">
                Correct and incorrect word choice or sentences
              </div></li>
              <div class="li-type2"><li class="exam-details-text">Detecting errors in a sentence</div></li>
              <div class="li-type2"><li class="exam-details-text">Subject-verb agreement</div></li>
              <div class="li-type2"><li class="exam-details-text">
                Putting into order the disarranged words in a sentence
              </div></li>
              <div class="li-type2"><li class="exam-details-text">Sentence completion</div></li>
              <div class="li-type2"><li class="exam-details-text">Punctuation</div></li>
            </ul>
          </div>
          <div class="exam-details-heading">
            Comprehension:
            <div>
              <p class="exam-details-text">
                Comprehension basically refers to the understanding of an unseen passage
                and subsequently, answering the queries asked in the end. The questions
                may vary from the content to the vocabulary of the passage.
              </p>
            </div>
          </div>
          <div class="exam-details-heading">
            Chemistry:
            <div>
              <h2 class="exam-details-text">
                The syllabus consists of the text given in the textbooks of the 1st and
                2nd-year intermediate level. The course, as of 2019, consists of 27
                whole chapters (11 from the book of Intermediate part I and 16 from
                Intermediate Part II). Without a doubt, preparing from both books is
                equally crucial in scoring well in ECAT.
              </h2>
              <h2 class="exam-details-text">Chapters Included</h2>
              <h2 class="exam-details-text">
                The important chapters included in the syllabus for ECAT are as follows:
              </h2>
            </div>
            <ul class="details-ul">
              <div class="li-type2"><li class="exam-details-text">Aromatic hydrocarbons</li></div>
              <div class="li-type2"><li class="exam-details-text">Alkyl halides</li></div>
              <div class="li-type2"><li class="exam-details-text">Aldehydes</li></div>
              <div class="li-type2"><li class="exam-details-text">Alcohols</li></div>
              <div class="li-type2"><li class="exam-details-text">Atomic structure</li></div>
              <div class="li-type2"><li class="exam-details-text">Basic concepts of chemistry</li></div>
              <div class="li-type2"><li class="exam-details-text">Chemical equilibrium</li></div>
              <div class="li-type2"><li class="exam-details-text">Chemical bonding</li></div>
              <div class="li-type2"><li class="exam-details-text">Common chemical industries</li></div>
              <div class="li-type2"><li class="exam-details-text">Carboxylic acids</li></div>
              <div class="li-type2"><li class="exam-details-text">Electrochemistry</li></div>
              <div class="li-type2"><li class="exam-details-text">Environmental chemistry</li></div>
              <div class="li-type2"><li class="exam-details-text">Experimental techniques of chemistry</li></div>
              <div class="li-type2"><li class="exam-details-text">Gases</li></div>
              <div class="li-type2"><li class="exam-details-text">Group III-A, IV-A Elements</li></div>
              <div class="li-type2"><li class="exam-details-text">Group V-A, VI-A Elements</li></div>
              <div class="li-type2"><li class="exam-details-text">Halogens</li></div>
              <div class="li-type2"><li class="exam-details-text">Ketones</li></div>
              <div class="li-type2"><li class="exam-details-text">Liquids and solids</li></div>
              <div class="li-type2"><li class="exam-details-text">Macromolecules</li></div>
              <div class="li-type2"><li class="exam-details-text">Phenols and ethers</li></div>
              <div class="li-type2"><li class="exam-details-text">Periodic classification of elements and periodicity</li></div>
              <div class="li-type2"><li class="exam-details-text">Reaction kinetics</li></div>
              <div class="li-type2"><li class="exam-details-text">Solutions</li></div>
              <div class="li-type2"><li class="exam-details-text">Thermochemistry</li></div>
              <div class="li-type2"><li class="exam-details-text">Transition elements</li></div>
            </ul>
          </div>
          <div class="exam-details-heading">
            Physics:
            <div>
              <h2 class="exam-details-text">
                The syllabus comprises 21 Chapters in total (11 from the First Year
                Physics textbook and 10 from the Second Year Physics textbook).
              </h2>
              <h2 class="exam-details-text">Chapters Included</h2>
              <h2 class="exam-details-text">
                Following are the important chapters included in the syllabus for
                Physics:
              </h2>
            </div>
            <ul class="details-ul">
              <div class="li-type2"><li class="exam-details-text">Atomic spectra</li></div>
              <div class="li-type2"><li class="exam-details-text">Alternating current</li></div>
              <div class="li-type2"><li class="exam-details-text">Current electricity</li></div>
              <div class="li-type2"><li class="exam-details-text">Circular motion</li></div>
              <div class="li-type2"><li class="exam-details-text">Dawn of modern physics</li></div>
              <div class="li-type2"><li class="exam-details-text">Electromagnetism</li></div>
              <div class="li-type2"><li class="exam-details-text">Electronics</li></div>
              <div class="li-type2"><li class="exam-details-text">Electrostatics</li></div>
              <div class="li-type2"><li class="exam-details-text">Electronics</li></div>
              <div class="li-type2"><li class="exam-details-text">Heat and thermodynamics</li></div>
              <div class="li-type2"><li class="exam-details-text">Motion and force</li></div>
              <div class="li-type2"><li class="exam-details-text">Measurement</li></div>
              <div class="li-type2"><li class="exam-details-text">Nuclear physics</li></div>
              <div class="li-type2"><li class="exam-details-text">Oscillations</li></div>
              <div class="li-type2"><li class="exam-details-text">Physics of solids</li></div>
              <div class="li-type2"><li class="exam-details-text">Vectors and equilibrium</li></div>
              <div class="li-type2"><li class="exam-details-text">Waves</li></div>
              <div class="li-type2"><li class="exam-details-text">Work</li></div>
            </ul>
          </div>
          <div class="exam-details-heading">
            Mathematics:
            <div>
              <h2 class="exam-details-text">
                Make sure you practice this portion extensively and endlessly. Without a
                profound understanding of all formulae and their applications, you’re
                likely to fall short of the score you have decided to achieve in ECAT.
              </h2>
              <h2 class="exam-details-text">
                The syllabus of mathematics for ECAT consists of following important
                chapters: -
              </h2>
            </div>
            <ul class="details-ul">
              <div class="li-type2"><li class="exam-details-text">Application of trigonometry</li></div>
              <div class="li-type2"><li class="exam-details-text">Fundamentals of trigonometry</li></div>
              <div class="li-type2"><li class="exam-details-text">Inverse trigonometric functions</li></div>
              <div class="li-type2"><li class="exam-details-text">Matrices and determinants</li></div>
              <div class="li-type2"><li class="exam-details-text">Mathematical induction and binomial theorm</li></div>
              <div class="li-type2"><li class="exam-details-text">Number system</li></div>
              <div class="li-type2"><li class="exam-details-text">Partial fraction</li></div>
              <div class="li-type2"><li class="exam-details-text">Permutation, combination, and probability</li></div>
              <div class="li-type2"><li class="exam-details-text">Quadratic equation</li></div>
              <div class="li-type2"><li class="exam-details-text">Sequence and series</li></div>
              <div class="li-type2"><li class="exam-details-text">Solutions of trigonometric equation</li></div>
              <div class="li-type2"><li class="exam-details-text">Sets, functions, and groups</li></div>
              <div class="li-type2"><li class="exam-details-text">Trigonometric identities</li></div>
              <div class="li-type2"><li class="exam-details-text">
                Trigonometric functions and related graphs
              </li></div>
              <div class="li-type2"><li class="exam-details-text">Differentiation</li></div>
              <div class="li-type2"><li class="exam-details-text">Functions and limits</li></div>
              <div class="li-type2"><li class="exam-details-text">Introduction to analytic geometry</li></div>
              <div class="li-type2"><li class="exam-details-text">Integration</li></div>
              <div class="li-type2"><li class="exam-details-text">
                Linear inequalities and linear programming
              </li></div>
              <div class="li-type2"><li class="exam-details-text">Conic section</li></div>
              <div class="li-type2"><li class="exam-details-text">Vectors</li></div>
            </ul>
          </div>
        </div>`,
    },
  ],
};
let examDetail2 = {
  section_container_1d: 2,
  section_container_title: "registrastion",
  sections: [
    {
      section_id: 3,
      section_title: "Fees",
      section_html: `<div class="exam-details-heading">
       What is ECAT?
       </div>
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
     <div class="exam-table1-wrapper">
       <table class="exam-details-table1-container">
         <thead>
           <tr class="exam-details-table1-header">
             <th colspan="3">F.Sc</th>
           </tr>
         </thead>
         <tbody>
           <tr class="exam-details-table1-content">
             <td class="exam-details-table1-subcontent">Matric<br />25%</td>
             <td class="exam-details-table1-subcontent">Entry test<br />30%</td>
             <td class="exam-details-table1-subcontent">F.Sc Part (1)<br />45%</td>
           </tr>
         </tbody>
       </table>
     </div>
     <div class="exam-table1-wrapper">
       <table class="exam-details-table1-container">
         <thead>
           <tr class="exam-details-table1-header">
             <th colspan="2">O-Level</th>
           </tr>
         </thead>
         <tbody>
           <tr class="exam-details-table1-content">
             <td class="exam-details-table1-subcontent">Entry test<br />30%</td>
             <td class="exam-details-table1-subcontent">
               Marks in 11th Class <br />70%
             </td>
           </tr>
         </tbody>
       </table>
     </div>
     <div class="exam-details-heading">
       Programs for ECAT candidates
       <ul class="details-ul-type2">
         <div class="li-type2"><li class="exam-details-text">BSc. Architectural Engineering</li></div>
         <div class="li-type2"><li class="exam-details-text">B. Architecture</li></div>
         <div class="li-type2"><li class="exam-details-text">BSc. Civil Engineering</li></div>
         <div class="li-type2"><li class="exam-details-text">BSc. City and Regional Planning</li></div>
         <div class="li-type2"><li class="exam-details-text">BSc. Computer Science</li></div>
         <div class="li-type2"><li class="exam-details-text">BSc. Computer Engineering</li></div>
         <div class="li-type2"><li class="exam-details-text">BSc. Electrical Engineering</li></div>
         <div class="li-type2"><li class="exam-details-text">BSc. Geological Engineering</li></div>
         <div class="li-type2"><li class="exam-details-text">BSc. Environmental Engineering</li></div>
         <div class="li-type2"><li class="exam-details-text">BSc. Industrial and Manufacturing Engineering</li></div>
         <div class="li-type2"><li class="exam-details-text">BSc. Mechanical Engineering</li></div>
         <div class="li-type2"><li class="exam-details-text">BSc. Mechatronics &amp;amp; Control Engineering</li></div>
         <div class="li-type2"><li class="exam-details-text">BSc. Mining Engineering</li></div>
         <div class="li-type2"><li class="exam-details-text">BSc. Metallurgical and Materials Engineering</li></div>
         <div class="li-type2"><li class="exam-details-text">BSc. Petroleum and Gas Engineering</li></div>
         <div class="li-type2"><li class="exam-details-text">BSc. Product and Industrial Design</li></div>
         <div class="li-type2"><li class="exam-details-text">BSc. Polymer Engineering</li></div>
         <div class="li-type2"><li class="exam-details-text">BSc. Transportation Engineering</li></div>
         <div class="li-type2"><li class="exam-details-text">BSc. Chemical Engineering</li></div>
       </ul>
     </div>`,
    },
    {
      section_id: 4,
      section_title: "paper pattern",
      section_html: `
          <div class="exam-details-container past-paper-container">
          <div class="exam-details-heading">Past Pappers</div>
          <div class="exam-details-download-container">
          <div class="past-paper-left">
            <img class="pdf-icon" src="/static/media/pdf.fbce276c.svg" alt="test" />
            <div class="paper-item-text">2019 ECAT Paper</div>
          </div>
          <div class="past-paper-right">
            <a
              href="https://d15o1jx56rxevg.cloudfront.net/ecat/past_papers/ECAT+2019.pdf"
              class="exam-detail-download"
              target="_blank"
              download="2019EcatPaper.pdf"
              rel="noopener noreferrer"
            >
              <img class="pdf-icon" src="/static/media/download.5f50e9e3.svg" alt="" />
              <div class="paper-download-text">Download PDF</div>
            </a>
          </div>
        </div>
        <div class="exam-details-download-container">
            <div class="past-paper-left">
              <img class="pdf-icon" src="/static/media/pdf.fbce276c.svg" alt="test" />
              <div class="paper-item-text">2018 ECAT Paper</div>
            </div>
            <div class="past-paper-right">
              <a
                href="https://d15o1jx56rxevg.cloudfront.net/ecat/past_papers/ECAT+2018.pdf"
                class="exam-detail-download"
                target="_blank"
                download="2018EcatPaper.pdf"
                rel="noopener noreferrer"
              >
                <img class="pdf-icon" src="/static/media/download.5f50e9e3.svg" alt="" />
                <div class="paper-download-text">Download PDF</div>
              </a>
            </div>
          </div>
          <div class="exam-details-download-container">
            <div class="past-paper-left">
              <img class="pdf-icon" src="/static/media/pdf.fbce276c.svg" alt="test" />
              <div class="paper-item-text">2017 ECAT Paper</div>
            </div>
            <div class="past-paper-right">
              <a
                href="https://d15o1jx56rxevg.cloudfront.net/ecat/past_papers/ECAT+2017.pdf"
                class="exam-detail-download"
                target="_blank"
                download="2017EcatPaper.pdf"
                rel="noopener noreferrer"
              >
                <img class="pdf-icon" src="/static/media/download.5f50e9e3.svg" alt="" />
                <div class="paper-download-text">Download PDF</div>
              </a>
            </div>
          </div>
          <div class="exam-details-download-container">
            <div class="past-paper-left">
              <img class="pdf-icon" src="/static/media/pdf.fbce276c.svg" alt="test" />
              <div class="paper-item-text">2016 ECAT Paper</div>
            </div>
            <div class="past-paper-right">
              <a
                href="https://d15o1jx56rxevg.cloudfront.net/ecat/past_papers/ECAT+2016.pdf"
                class="exam-detail-download"
                target="_blank"
                download="2016EcatPaper.pdf"
                rel="noopener noreferrer"
              >
                <img class="pdf-icon" src="/static/media/download.5f50e9e3.svg" alt="" />
                <div class="paper-download-text">Download PDF</div>
              </a>
            </div>
          </div>
          <div class="exam-details-download-container">
            <div class="past-paper-left">
              <img class="pdf-icon" src="/static/media/pdf.fbce276c.svg" alt="test" />
              <div class="paper-item-text">2015 ECAT Paper</div>
            </div>
            <div class="past-paper-right">
              <a
                href="https://d15o1jx56rxevg.cloudfront.net/ecat/past_papers/ECAT+2015.pdf"
                class="exam-detail-download"
                target="_blank"
                download="2015EcatPaper.pdf"
                rel="noopener noreferrer"
              >
                <img class="pdf-icon" src="/static/media/download.5f50e9e3.svg" alt="" />
                <div class="paper-download-text">Download PDF</div>
              </a>
            </div>
          </div>
          <div class="exam-details-download-container">
            <div class="past-paper-left">
              <img class="pdf-icon" src="/static/media/pdf.fbce276c.svg" alt="test" />
              <div class="paper-item-text">2014 ECAT Paper</div>
            </div>
            <div class="past-paper-right">
              <a
                href="https://d15o1jx56rxevg.cloudfront.net/ecat/past_papers/ECAT+2014.pdf"
                class="exam-detail-download"
                target="_blank"
                download="2014EcatPaper.pdf"
                rel="noopener noreferrer"
              >
                <img class="pdf-icon" src="/static/media/download.5f50e9e3.svg" alt="" />
                <div class="paper-download-text">Download PDF</div>
              </a>
            </div>
          </div>
          <div class="exam-details-download-container">
            <div class="past-paper-left">
              <img class="pdf-icon" src="/static/media/pdf.fbce276c.svg" alt="test" />
              <div class="paper-item-text">2013 ECAT Paper</div>
            </div>
            <div class="past-paper-right">
              <a
                href="https://d15o1jx56rxevg.cloudfront.net/ecat/past_papers/ECAT+2013.pdf"
                class="exam-detail-download"
                target="_blank"
                download="2013EcatPaper.pdf"
                rel="noopener noreferrer"
              >
                <img class="pdf-icon" src="/static/media/download.5f50e9e3.svg" alt="" />
                <div class="paper-download-text">Download PDF</div>
              </a>
            </div>
          </div>
          <div class="exam-details-download-container">
            <div class="past-paper-left">
              <img class="pdf-icon" src="/static/media/pdf.fbce276c.svg" alt="test" />
              <div class="paper-item-text">2012 ECAT Paper</div>
            </div>
            <div class="past-paper-right">
              <a
                href="https://d15o1jx56rxevg.cloudfront.net/ecat/past_papers/ECAT+2012.pdf"
                class="exam-detail-download"
                target="_blank"
                download="2012EcatPaper.pdf"
                rel="noopener noreferrer"
              >
                <img class="pdf-icon" src="/static/media/download.5f50e9e3.svg" alt="" />
                <div class="paper-download-text">Download PDF</div>
              </a>
            </div>
          </div>
          <div class="exam-details-download-container">
            <div class="past-paper-left">
              <img class="pdf-icon" src="/static/media/pdf.fbce276c.svg" alt="test" />
              <div class="paper-item-text">2011 ECAT Paper</div>
            </div>
            <div class="past-paper-right">
              <a
                href="https://d15o1jx56rxevg.cloudfront.net/ecat/past_papers/ECAT+2011.pdf"
                class="exam-detail-download"
                target="_blank"
                download="2011EcatPaper.pdf"
                rel="noopener noreferrer"
              >
                <img class="pdf-icon" src="/static/media/download.5f50e9e3.svg" alt="" />
                <div class="paper-download-text">Download PDF</div>
              </a>
            </div>
          </div>
          <div class="exam-details-download-container">
            <div class="past-paper-left">
              <img class="pdf-icon" src="/static/media/pdf.fbce276c.svg" alt="test" />
              <div class="paper-item-text">2010 ECAT Paper</div>
            </div>
            <div class="past-paper-right">
              <a
                href="https://d15o1jx56rxevg.cloudfront.net/ecat/past_papers/ECAT+2010.pdf"
                class="exam-detail-download"
                target="_blank"
                download="2010EcatPaper.pdf"
                rel="noopener noreferrer"
              >
                <img class="pdf-icon" src="/static/media/download.5f50e9e3.svg" alt="" />
                <div class="paper-download-text">Download PDF</div>
              </a>
            </div>
          </div>           

          </div>
          <div class="exam-table2-wrapper">
            <table class="exam-details-table2-container">
              <thead>
                <tr >
                  <th class="exam-details-table2-header" colspan="2">F.Sc</th>
                </tr>
              </thead>
              <tbody>
                <tr class="exam-details-table2-content odd">
                  <td class="exam-details-table2-subcontent">Matric25%</td>
                  <td class="exam-details-table2-subcontent">Entry test30%</td>
                </tr>
                <tr class="exam-details-table2-content even">
                    <td class="exam-details-table2-subcontent">Matric25%</td>
                    <td class="exam-details-table2-subcontent">Entry test30%</td>
                  </tr>
                  <tr class="exam-details-table2-content odd">
                    <td class="exam-details-table2-subcontent">Matric25%</td>
                    <td class="exam-details-table2-subcontent">Entry test30%</td>
                  </tr>
                  <tr class="exam-details-table2-content even">
                    <td class="exam-details-table2-subcontent">Matric25%</td>
                    <td class="exam-details-table2-subcontent">Entry test30%</td>
                  </tr>
                  <tr class="exam-details-table2-content odd">
                    <td class="exam-details-table2-subcontent">Matric25%</td>
                    <td class="exam-details-table2-subcontent">Entry test30%</td>
                  </tr>
                  <tr class="exam-details-table2-content even">
                    <td class="exam-details-table2-subcontent">Matric25%</td>
                    <td class="exam-details-table2-subcontent">Entry test30%</td>
                  </tr>
              </tbody>
            </table>
          </div>
          `,
    },{
      section_id:5,
      section_title:" new pattern",
      section_html:`<div class="exam-table2-wrapper">
      <table class=" exam-details-table2-container exam-details-table3-container">
        <thead>
          <tr >
            <th class="exam-details-table3-header" >No.</th>
            <th class="exam-details-table3-header" >ECAT Subjects</th>

            <th class="exam-details-table3-header" >No. of Multiple Choice Questions</th>

            <th class="exam-details-table3-header" >Marks</th>
          </tr>
        </thead>
        <tbody>
          <tr class="exam-details-table2-content ">
            <td class="exam-details-table3-subcontent">1</td>
            <td class="exam-details-table3-subcontent">Physics</td>
            <td class="exam-details-table3-subcontent">30</td>
            <td class="exam-details-table3-subcontent">120</td>
          </tr>
          <tr class="exam-details-table2-content ">
            <td class="exam-details-table3-subcontent">2</td>
            <td class="exam-details-table3-subcontent">Mathematics</td>
            <td class="exam-details-table3-subcontent">30</td>
            <td class="exam-details-table3-subcontent">120</td>
          </tr>
          <tr class="exam-details-table2-content ">
            <td class="exam-details-table3-subcontent">3</td>
            <td class="exam-details-table3-subcontent">Chemistry/ Computer Science</td>
            <td class="exam-details-table3-subcontent">30</td>
            <td class="exam-details-table3-subcontent">120</td>
          </tr>
          <tr class="exam-details-table2-content ">
            <td class="exam-details-table3-subcontent">4</td>
            <td class="exam-details-table3-subcontent">English</td>
            <td class="exam-details-table3-subcontent">10</td>
            <td class="exam-details-table3-subcontent">40</td>
          </tr>
          <tr class="exam-details-table-content ">
            <td class="exam-details-table3-subcontent">Total</td>
            <td class="exam-details-table3-subcontent"></td>
            <td class="exam-details-table3-subcontent">100</td>
            <td class="exam-details-table3-subcontent">400</td>
          </tr>
        </tbody>
      </table>
    </div>
`
    }
  ],
};
