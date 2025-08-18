const allTests = {
    mockTest1: [
    {
        "question": "1. Dr. Armstrong, a plastic surgeon, completed a bilateral rhytidectomy of the neck and a suction- assisted lipectomy of the right upper arm. Which code(s) should be reported for Dr. Armstrong's services?",
        "a": "15828-50, 15879-RT-59",
        "b": "15826-59, 15879-RT-59",
        "c": "15828-50, 15878-RT-59",
        "d": "15826-RT, 15828-50, 15878-RT-59",
        "correct": "c"
    },
    {
        "question": "3. A 32-year-old female is having excision of a mass in her left breast. What CPT code(s) should be reported for this example?",
        "a": "19120-LT",
        "b": "19125-LT",
        "c": null,
        "d": null,
        "correct": "a"
    },
    {
        "question": "5. A 61-year-old patient had benign lesions excised from his right arm, trunk, and neck, with all defects closed by simple suture. How should you report these services?",
        "a": "11423, 11404-59, 11402-RT-59",
        "b": "11422, 12004-51, 11404-59, 11402-59",
        "c": "11401, 11403-51, 11423-51",
        "d": "11602-RT, 11604-59, 11622-59",
        "correct": "a"
    },
    {
        "question": "6. A 55-year-old patient had seven toenails debrided. How should you report this service?",
        "a": "11000",
        "b": "11000, 11001-51",
        "c": "11720",
        "d": "11721",
        "correct": "d"
    },
    {
        "question": "7. A patient underwent a secondary procedure for a non-healing left radius fracture, where Dr. Gene completed an open treatment with internal fixation of the radial neck, including replacement of the prosthetic radial head. How should you report Dr. Gene's services?",
        "a": "24666-LT",
        "b": "24366-LT",
        "c": "25607-LT",
        "d": "24587-LT",
        "correct": "a"
    },
    {
        "question": "9. A patient, under general anesthesia, underwent a primary repair to the left ankle for a disrupted ligament and a percutaneous tenotomy to lengthen the Achilles tendon. How should you report the surgeon's services?",
        "a": "27695-LT, 27606-59-LT",
        "b": "27698-LT, 27685-59-LT, 01472-47",
        "c": "27695-LT, 27685-59-LT, 01472-47",
        "d": "27698-LT, 27605-59-LT",
        "correct": "a"
    },
    {
        "question": "10. Dr. Hewes completed an anterior arthrodesis fusion, with a structural allograft, and minimal discectomy at L1-2, L3-4, and L4-5, with anterior instrumentation for the entire lumbar region. How should Dr. Hewes report this procedure?",
        "a": "22612, 22614 x 2, 20931, 22846",
        "b": "22558, 22585 x 2, 20931, 22846",
        "c": "22558, 22585 x 2, 20931-51, 22846-62",
        "d": "63075, 22558, 22614 x 2, 20931-51, 22846-62",
        "correct": "b"
    },
    {
        "question": "14. A patient underwent thoracentesis aspiration of the pleural cavity with ultrasound guidance. How should you report this procedure?",
        "a": "32554, 76942-26",
        "b": "32555",
        "c": "32555, 76942-26",
        "d": "32557",
        "correct": "b"
    },
    {
        "question": "15. A 50-year-old male with pleural effusion had a pigtail catheter inserted into the pleural cavity under ultrasound guidance for drainage. What is the CPT® code?",
        "a": "32557",
        "b": "32555",
        "c": "32556",
        "d": "32551",
        "correct": "a"
    },
    {
        "question": "16. Jenny underwent a right upper lobectomy and a therapeutic wedge resection of the right middle lobe. How should you report this procedure?",
        "a": "32480, 32505, 32506-51",
        "b": "32484, 32506",
        "c": "32480, 32505-59",
        "d": "32440, 32480-59",
        "correct": "c"
    },
    {
        "question": "17. Darlene underwent SRS/SRBT thoracic target delineation for stereotactic body radiation therapy, requiring a course of four sessions. How should the surgeon report this procedure?",
        "a": "31626, 32701 x 4",
        "b": "32701, 77435",
        "c": "32701 x 4",
        "d": "32701",
        "correct": "d"
    },
    {
        "question": "20. A 45-year-old male diagnosed with a large paraesophageal hernia underwent a laparoscopic repair with implantation of mesh and a wedge gastroplasty. How should you report today's service?",
        "a": "43282, 49594",
        "b": "43281, 43282, 43283",
        "c": "43332, 49594",
        "d": "43280, 43283",
        "correct": "a"
    },
    {
        "question": "21. A patient underwent a laparoscopic gastric restrictive procedure with placement of only a gastric band, considered an individual component placement. How should you report this service?",
        "a": "43659-59",
        "b": "43770-22",
        "c": "43659-58",
        "d": "43770-52",
        "correct": "d"
    },
    {
        "question": "22. A 57-year-old female with a large tumor of the posterior rectal wall underwent a transanal full-thickness excision of the tumor. How should Dr. Singh report the procedure?",
        "a": "45172, 0184T-59",
        "b": "45190",
        "c": "45172",
        "d": "45160",
        "correct": "c"
    },
    {
        "question": "23. A patient underwent a flexible sigmoidoscopy with endoscopic ultrasound examination. How should you report these professional services?",
        "a": "45342, 76975-26",
        "b": "45342",
        "c": "45341",
        "d": "45341, 76975-26",
        "correct": "c"
    },
    {
        "question": "26. A 34-year-old patient had a cesarean delivery after an attempted vaginal delivery, and also requested a tubal ligation. Dr. Milton provided all antepartum, delivery, and postpartum care. How should Dr. Milton report her services?",
        "a": "59510, 58611",
        "b": "59618, 58611",
        "c": "59510, 58605-59",
        "d": "59618, 58611-51",
        "correct": "a"
    },
    {
        "question": "27. Lydia, a new patient, was self-referred to Dr. Nedder for severe dysplasia. Dr. Nedder performed a comprehensive history and exam, with moderate decision-making, followed by a colposcopic examination with three biopsies of the cervix, endocervical curettage, and endometrial sampling. How should Dr. Nedder report his services?",
        "a": "99213-25, 57455, 57456, 58110",
        "b": "99244-25, 57454, 58110",
        "c": "99204-25, 57454, 58110",
        "d": "99204-25, 57455, 57456, 58110",
        "correct": "c"
    },
    {
        "question": "28. A 46-year-old patient underwent anterior colporrhaphy repair of a cystocele with repair of the urethrocele and inserted mesh via a vaginal approach. How should you report this surgery?",
        "a": "57240, 57267",
        "b": "57250, 57267",
        "c": "57240, 57267-51",
        "d": "57240, 49568-51",
        "correct": "a"
    },
    {
        "question": "29. A patient underwent a surgical laparoscopy with ablation of four renal lesions, with the surgeon using ultrasound guidance. How should you report this service?",
        "a": "50205, 77002-26",
        "b": "50542",
        "c": "50593",
        "d": "50542, 77002-26",
        "correct": "b"
    },
    {
        "question": "30. A patient completed three antepartum visits with her PCP before being referred to an OB-GYN. How should the PCP report her services for the first three antepartum visits?",
        "a": "59426",
        "b": "59425",
        "c": "59510",
        "d": "Appropriate evaluation and management (E/M) codes",
        "correct": "b"
    },
    {
        "question": "31. A patient with hydrocephalus required an aspiration and investigative nonvascular shuntogram via a puncture into a previously placed shunt. How should you report the physician's professional services?",
        "a": "61070, 75809-26",
        "b": "62180, 75898-26",
        "c": "62220, 75809-26",
        "d": "62160, 75898-26",
        "correct": "a"
    },
    {
        "question": "32. Which of the following statement(s) is correct when reporting cranial stereotactic radiosurgery?",
        "a": "Report code 61796 when all lesions are simple",
        "b": "Report code 61798 if treating multiple lesions and any single lesion treated is complex",
        "c": "Do not report codes 61796-61800 in conjunction with code 20660",
        "d": "All of the above",
        "correct": "d"
    },
    {
        "question": "33. A patient underwent a transforaminal epidural injection of anesthetic and steroids at L1, L2, and L3 under fluoroscopy guidance. How should you report the professional services?",
        "a": "64483, 64484 x 2",
        "b": "64483, 64484 x2, 76942-26",
        "c": "64493, 64494, 64495",
        "d": "0230T, 0231T x 2, 76942-26",
        "correct": "a"
    },
    {
        "question": "34. Dr. Grant injected Mrs. Brown with two units of chemodenervation (onabotulinumtoxinA) to treat her bilateral blepharospasm. How should Dr. Grant report his services?",
        "a": "67345-50, J0585 x 2",
        "b": "67345",
        "c": "64612-50, J0585 x 2",
        "d": "64612",
        "correct": "c"
    },
    {
        "question": "35. A patient underwent a removal of the lens in his right eye via a pars plana approach without a vitrectomy, followed by a McCannel suture technique to repair the ciliary body. How should you report these services?",
        "a": "66982-50, 66250-RT-59",
        "b": "66852-RT, 66682-RT-51",
        "c": "66840-E3, 66250-E3-59",
        "d": "66820, 66682-51, 66990-51",
        "correct": "b"
    },
    {
        "question": "36. Dr. Tubman completed an excision and repair to one-half of the margin of the left eyelid, including preparation for skin grafts that will be done later. How should Dr. Tubman report her services?",
        "a": "67950-LT",
        "b": "67971-LT, 15120-59",
        "c": "67966-LT, 15120-59",
        "d": "67966-LT",
        "correct": "d"
    },
    {
        "question": "37. A 56-year-old female is having a bilateral screening mammogram with computer-aided detection due to family history of breast cancer. What radiological services are reported?",
        "a": "77065 x 2",
        "b": "77065, 77066",
        "c": "77067",
        "d": "77066",
        "correct": "c"
    },
    {
        "question": "40. A patient underwent a thyroid imaging test with vascular flow and three uptakes on the same date. How should you report this?",
        "a": "78014 x 3",
        "b": "78020",
        "c": "78012, 78014 x 3",
        "d": "78013, 78014",
        "correct": "b"
    },
    {
        "question": "41. A patient with primary hyperparathyroidism underwent a parathyroid planar imaging with SPECT and concurrently acquired CT. How should you report this study and the diagnosis?",
        "a": "78070, 70498, 78071, E21.0",
        "b": "78072, E21.3",
        "c": "78803, 78099, 78071, E20.9",
        "d": "78072, E21.0",
        "correct": "d"
    },
    {
        "question": "42. A patient undergoing treatment for a malignant lung tumor received intracavitary hyperthermia treatment on Wednesday. How should you report the physician's service for that day?",
        "a": "77620",
        "b": "77600",
        "c": "77620, 77401",
        "d": "77605, 77401-26",
        "correct": "a"
    },
    {
        "question": "43. A patient had a comprehensive metabolic panel and a renal function panel completed from the same single collection. How should you report these services?",
        "a": "80053-22",
        "b": "80069, 82247, 84075, 84155, 84460, 84450",
        "c": "80053, 80069",
        "d": "80053, 84100",
        "correct": "d"
    },
    {
        "question": "44. A patient underwent a comprehensive metabolic panel and an acute hepatitis panel from the same single collection. How should you report these services?",
        "a": "80047, 80053-52",
        "b": "80053-52, 80074",
        "c": "80074",
        "d": "80053, 80074",
        "correct": "d"
    },
    {
        "question": "45. A 17-year-old was delirious after taking an herbal remedy. A urine specimen was sent to the lab to determine if mitragynine is present. How should this test be coded?",
        "a": "80322",
        "b": "80323",
        "c": "80323, 80324",
        "d": "80324",
        "correct": "b"
    },
    {
        "question": "46. A patient was administered drugs and completed a breath test analysis at a pathology laboratory for H. pylori testing. How should you report these services?",
        "a": "87338",
        "b": "83013, 83014",
        "c": "87339",
        "d": "83009",
        "correct": "b"
    },
    {
        "question": "49. Cassidy, a diabetic patient, was referred for retinal images with fundus photography of both eyes for diabetic retinopathy. Dr. Nelson reviewed the study and sent a detailed report. How should Dr. Nelson report her services?",
        "a": "99242-25, 92228, 92250-59",
        "b": "92228",
        "c": "99242-25, 92227, 92250-59",
        "d": "92227",
        "correct": "b"
    },
    {
        "question": "50. A patient with chronic renal failure is being evaluated by his nephrologist after a catheter was placed into the peritoneal cavity for dialysis to ensure the prescription is correct. What code should be reported for this service?",
        "a": "90935",
        "b": "90937",
        "c": "90947",
        "d": "90945",
        "correct": "d"
    },
    {
        "question": "51. George returned for his scheduled psychotherapy visit. In addition to the 45-minute psychotherapy session, Dr. Morris documented an expanded problem-focused E/M service. Total time was 65 minutes. How should Dr. Morris report services?",
        "a": "99213, 90836",
        "b": "99213, 90834",
        "c": "99214, 90838",
        "d": "99214, 90836",
        "correct": "a"
    },
    {
        "question": "56. A healthy 32-year-old patient required an urgent vaginal hysterectomy following delivery. What anesthesia code(s) should you report?",
        "a": "01962-P1, 01969-51",
        "b": "01967-P1, 01969",
        "c": "01963-P1",
        "d": "01962-P1",
        "correct": "d"
    },
    {
        "question": "57. A patient underwent anesthesia for a Leriche operation. Which procedure code should the anesthesiologist use?",
        "a": "64809-AA-P1",
        "b": "00620-AA-P1",
        "c": "00632-AA-P1",
        "d": "00640-AA-P1",
        "correct": "c"
    },
    {
        "question": "58. A 74-year-old patient with severe hypertension had an emergency muscle flap repair for a deep open wound on his right lower leg. The case required both an anesthesiologist and an independently acting CRNA. Which anesthesia codes should be reported?",
        "a": "Dr. Smith: 01480-P3, 01480-P3, 99100, 99140-51; Ms. Jones: 01480-P3, 99100, 99140-51",
        "b": "Dr. Smith: 01470-QZ-P3, 99100-51; Ms. Jones: 01470-AA-P3, 99100-51",
        "c": "Dr. Smith: 01480-AA-P3, 99100, 99140; Ms. Jones: 01480-QZ-P3, 99100, 99140",
        "d": "Dr. Smith: 01470-AA-P3, 99100, 99140; Ms. Jones: 01470-QZ-P3, 99100, 99140",
        "correct": "d"
    },
    {
        "question": "59. A 22-year-old healthy patient required three units of blood administered by the anesthesiologist during an open radical excision and graft of her left elbow. What code(s) should the anesthesiologist report?",
        "a": "01756-AA-P1",
        "b": "01756-AA-P1, 36430-59",
        "c": "01732-P1",
        "d": "01740-QZ-P1, 36430-59",
        "correct": "a"
    },
    {
        "question": "60. A 42-year-old with renal pelvis cancer and controlled type 2 diabetes receives general anesthesia for a laparoscopic radical nephrectomy. What are the correct CPT® and ICD-10-CM codes for the anesthesia services?",
        "a": "00860-P1, C64.9, E11.9",
        "b": "00840-P3, C65.9, E11.9",
        "c": "00862-P2, C65.9, E11.9",
        "d": "00868-P2, C79.02, E11.9",
        "correct": "c"
    },
    {
        "question": "61. Dr. Martin admitted and discharged Mrs. Worth on the same day for a laparoscopic cholecystectomy. The admission involved a comprehensive history, comprehensive exam, and moderate decision-making. How should Dr. Martin report her admission services?",
        "a": "99222",
        "b": "99225",
        "c": "99235",
        "d": "99219, 99217",
        "correct": "c"
    },
    {
        "question": "64. Baby boy Busch was evaluated in the birthing center on the day of his birth, including a comprehensive exam and history, with a straightforward decision to discharge later that same day. How should you report this service?",
        "a": "99463",
        "b": "99460-25, 99463",
        "c": "99221-25, 99238",
        "d": "99234",
        "correct": "a"
    },
    {
        "question": "66. A 64-year-old female fell and sustained multiple lacerations. Repairs included: intermediate repair of 6 cm on the face; layered closure of 5 cm on the right arm and 5 cm on the left leg; and closure with adhesive strips for 3 cm on the hand and foot. Select the appropriate procedure codes.",
        "a": "99283-25, 12014, 12034-59, 12002-59, 11042-51",
        "b": "99283-25, 12053, 12034-59, 12002-59",
        "c": "99283-25, 12014, 12034-59, 11042-51",
        "d": "99283-25, 12053, 12034-59",
        "correct": "b"
    },
    {
        "question": "67. Which of the following lies upon the subcutaneous tissue layer?",
        "a": "Epidermis",
        "b": "Dermis",
        "c": "Stratum germinativum",
        "d": "Stratum corneum",
        "correct": "b"
    },
    {
        "question": "68. A pregnant woman infected with rubella virus gave birth to a child with multiple birth defects. Which of the following terms describes these types of birth defects?",
        "a": "Congenital",
        "b": "Hereditary",
        "c": "Contagious",
        "d": "Robotic",
        "correct": "a"
    },
    {
        "question": "69. Cushing's syndrome, which can be caused by prednisone therapy, is considered a disorder of which gland(s)?",
        "a": "Thymus",
        "b": "Testes",
        "c": "Ovaries",
        "d": "Adrenal gland",
        "correct": "d"
    },
    {
        "question": "70. Which of the following describes the location of the femur?",
        "a": "Distal to the acetabulum and proximal to the patella",
        "b": "Proximal to the acetabulum and distal to the patella",
        "c": "Distal to the patella and proximal to the ischium",
        "d": "Proximal to the ischium and distal to the patella",
        "correct": "a"
    },
    {
        "question": "71. Where is the parahippocampal gyrus located?",
        "a": "Spine",
        "b": "Brain",
        "c": "Small intestine",
        "d": "Superior vena cava",
        "correct": "b"
    },
    {
        "question": "73. Which body part is commonly treated with a balloon-type Sengstaken tamponade procedure?",
        "a": "Intervertebral disc",
        "b": "Esophagus",
        "c": "Tricuspid valve",
        "d": "Coracoid process",
        "correct": "b"
    },
    {
        "question": "74. Which of the following body parts does the splenic flexure connect?",
        "a": "Transverse and ascending colon",
        "b": "Transverse and descending colon",
        "c": "Descending colon and rectum",
        "d": "Ascending colon and cecum",
        "correct": "b"
    },
    {
        "question": "75. An adverse effect code may be the first-listed code for an encounter such as a tick bite.",
        "a": "True",
        "b": "False",
        "c": null,
        "d": null,
        "correct": "b"
    },
    {
        "question": "76. If a provider moves to a different practice, patients who follow the provider to the new practice are new patients for code selection.",
        "a": "True",
        "b": "False",
        "c": null,
        "d": null,
        "correct": "b"
    },
    {
        "question": "77. The provider documents a headache without more specific details for an Oct. 28, 2020, encounter. Which ICD-10-CM code should you report?",
        "a": "R51",
        "b": "R51.0",
        "c": "R51.9",
        "d": "G50.1",
        "correct": "c"
    },
    {
        "question": "78. What does HES stand for in ICD-10-CM 2021 subcategory D72.11-?",
        "a": "Hypoeosinophilic syndrome",
        "b": "Hypoeosinophilic status",
        "c": "Hypereosinophilic syndrome",
        "d": "Hypereosinophilic status",
        "correct": "c"
    },
    {
        "question": "79. A patient with cirrhosis of the liver has an endoscopy showing hemorrhagic esophageal varices. How are the ICD-10-CM codes reported?",
        "a": "I85.01, K74.69",
        "b": "I85.11, K74.60",
        "c": "K74.60, I85.11",
        "d": "I85.00, K74.69",
        "correct": "c"
    },
    {
        "question": "80. A patient undergoes a gastric bypass (90-day global period) on Jan. 5. On March 20, the patient develops an incisional hernia at the bypass site and returns to the operating room for repair. Which modifier is reported for the March visit?",
        "a": "79",
        "b": "78",
        "c": "59",
        "d": "58",
        "correct": "b"
    },
    {
        "question": "81. What is the HCPCS Level II code for 'Ostomy pouch, closed; with barrier attached, 1 piece'?",
        "a": "A5051",
        "b": "A5052",
        "c": "A5053",
        "d": "A5054",
        "correct": "a"
    },
    {
        "question": "82. What is the HCPCS level II code for the drug Dalbavancin, 10 mg, administered via injection?",
        "a": "J0878 x 2",
        "b": "J0875",
        "c": "J0878",
        "d": "J0875 x 2",
        "correct": "d"
    },
    {
        "question": "83. All of the following are true regarding the history and exam according to the proposed 2021 E/M guidelines except:",
        "a": "History and exam will no longer be key components for code selection.",
        "b": "CMS is adding a requirement that a medically appropriate history and exam should be documented.",
        "c": "Performance of a medically appropriate history and/or exam will affect the level of service.",
        "d": "Providers only need to document what has changed since the last encounter.",
        "correct": "c"
    },
    {
        "question": "84. The most effective way to reduce coding errors is to do which of the following?",
        "a": "Hire only experienced coders",
        "b": "Mentor new coders for a minimum of three years",
        "c": "Implement a daily review by the compliance department head",
        "d": "Improve provider documentation and reduce the coder's need to request more information from the provider",
        "correct": "d"
    },
    {
        "question": "85. Who is under midlevel provider?",
        "a": "DO",
        "b": "Physician",
        "c": "Physician assistant",
        "d": "MD",
        "correct": "c"
    },
    {
        "question": "86. If a claim has been denied for lack of medical necessity, you should do which of the following?",
        "a": "Reply with a standard appeal letter",
        "b": "Review it, but take no action",
        "c": "Adjust it, and take the loss",
        "d": "Review the denial and the claim, and when appropriate, appeal with documentation that supports the coding",
        "correct": "d"
    },
    {
        "question": "87. Healthcare compliance describes the observance of all of the following except:",
        "a": "Guidelines",
        "b": "City ordinances",
        "c": "State and federal laws",
        "d": "Conventions",
        "correct": "b"
    },
    {
        "question": "88. What is thrombophlebitis?",
        "a": "Inflammation of a vein accompanied by a clot",
        "b": "Blood cancer",
        "c": "Pulmonary embolism",
        "d": "Inflammation of thrombocytes",
        "correct": "a"
    }
],
    mockTest2: [
    {
        "question": "1. Dr. Smith performed a cryosurgery to destroy three premalignant lesions for a patient. Which code(s) should you report for this procedure?",
        "a": "17106",
        "b": "17260",
        "c": "17003x3",
        "d": "17000, 17003x2",
        "correct": "d"
    },
    {
        "question": "2. A patient had an excision of a primary malignant carcinoma on the left hand, measuring 1 cm with 0.6 cm margins, closed with simple sutures. Which code should be reported?",
        "a": "11603",
        "b": "11622",
        "c": "11423",
        "d": null,
        "correct": "b"
    },
    {
        "question": "5. Barry underwent a complex incision and drainage due to a postoperative wound infection, which required an extensive secondary closure of the surgical site. Which codes describe this procedure?",
        "a": "13160",
        "b": "10121, 12020-51",
        "c": "13160, 10180-51",
        "d": "10061, 12021-59",
        "correct": "c"
    },
    {
        "question": "6. Dr. Ralph performed a diagnostic skin biopsy with frozen section and a Mohs surgery on the same day for a lesion on the trunk. The surgery required three stages, with five tissue blocks in each stage, plus an additional four blocks in stage two. Which codes should Dr. Ralph report?",
        "a": "17313, 17314 x 2, 17315 x 4, 11100-59, 88331-59",
        "b": "17313, 17314 x 2, 17315-59",
        "c": "17311, 17312 x 2, 17315",
        "d": "17311, 17312 x 4, 17315-59, 11101-51, 88331-51",
        "correct": "a"
    },
    {
        "question": "7. A patient with a cam lesion in the right femoral head-neck region underwent an arthroscopy of the right hip with debridement and a femoroplasty. How should Dr. Curtis report her procedure?",
        "a": "29914-RT",
        "b": "29862-RT, 29914-59",
        "c": "29861-RT, 29862, 29914",
        "d": "29860-RT, 29862-59, 29914-59",
        "correct": "a"
    },
    {
        "question": "8. Dr. Reese completed a deep transfer of the anterior tibial and flexor digitorum tendons. Which code(s) should be used to report this procedure?",
        "a": "27658 x 2",
        "b": "27690, 27692-51",
        "c": "27691, 27692",
        "d": "27691, 27692 x 2",
        "correct": "c"
    },
    {
        "question": "9. A patient underwent a left knee arthroscopic repair of the lateral meniscus, which included debridement and suturing. The 3.5-cm wound was closed with intermediate subcutaneous sutures. Which code(s) should you report?",
        "a": "29882, 29877-52, 29870-51",
        "b": "29866, 29868",
        "c": "29870, 29882, 12032",
        "d": "29882",
        "correct": "d"
    },
    {
        "question": "10. Two weeks after an open repair of a lower femur fracture, a patient returns as planned for an application of a new long leg cast by the same physician. How should today's services be reported?",
        "a": "29345-58, Z46.89",
        "b": "99024, Z46.89",
        "c": "29345, 29700-59, 99024, Z46.89, M84.48XD",
        "d": "29345-76, S82.122, Z46.89",
        "correct": "a"
    },
    {
        "question": "11. What type of soft tissue tumor resection is commonly used for malignant tumors or very aggressive benign tumors?",
        "a": "Manipulative soft tissue resection",
        "b": "Radical soft tissue resection",
        "c": "Residual soft tissue resection",
        "d": "Manageable soft tissue resection",
        "correct": "b"
    },
    {
        "question": "12. A patient with a stab wound to the right arm underwent wound exploration, including widening the wound, subcutaneous debridement, and ligation of minor blood vessels. No other procedures were required. How would you report this procedure?",
        "a": "20103, 11011-51",
        "b": "20103",
        "c": "20103, 11011-59",
        "d": "11043, 12036-59, 20103-51",
        "correct": "b"
    },
    {
        "question": "13. A catheter is placed non-selectively for an abdominal aortography at the renal arteries, then moved for a pelvic angiography, demonstrating stenosis in the left external iliac. What CPT codes are reported for the professional service?",
        "a": "36245, 36245-59, 75630-26",
        "b": "36245, 36245-59, 75716-26, 75625-26",
        "c": "36245, 36200, 75716-26",
        "d": "36200, 75716-26, 75625-26",
        "correct": "d"
    },
    {
        "question": "14. Alicia, a 20-month-old, underwent a planned procedure where Dr. Marion inserted an incisional tracheal tube under general anesthesia. How should Dr. Marion report this procedure?",
        "a": "31610",
        "b": "31600-63",
        "c": "31603",
        "d": "31615",
        "correct": "b"
    },
    {
        "question": "15. Dr. Manning consulted with Nancy, a 66-year-old established patient, on Monday and decided on surgery. On Tuesday, he performed a reoperative two-vessel bypass using one arterial and one venous graft (harvested endoscopically). How should Dr. Manning report his services for both days?",
        "a": "Monday: 99255-57; Tuesday: 33511, 33517, 35600",
        "b": "Monday: 99215-57; Tuesday: 33533, 33517-51, 35572-80, 33530-51",
        "c": "Monday: 99255-57; Tuesday: 33533, 33510, 33572, 33530",
        "d": "Monday: 99215-57; Tuesday: 33533, 33517, 35572, 33530",
        "correct": "d"
    },
    {
        "question": "16. A patient had a temporary transvenous pacemaker system inserted with electrodes placed in the right atrial and ventricular chambers. How should you report this service?",
        "a": "33211",
        "b": "33208",
        "c": "33217",
        "d": "33211, 33208-51",
        "correct": "a"
    },
    {
        "question": "18. Dr. Lim completed an external ECG with 48-hour continuous rhythm testing and interpretation for Mr. Brown to evaluate his pacemaker system. How should Dr. Lim report her services for the cardiovascular monitoring?",
        "a": "33224",
        "b": "33244, 93224-59",
        "c": "93224",
        "d": "33208, 33225-51, 93225-59",
        "correct": "c"
    },
    {
        "question": "19. A patient underwent a colonoscopy with snare removal of three benign colonic polyps. How should you report this?",
        "a": "44393, K63.5",
        "b": "45385 x 3, R63.4, K59.00, R19.5, K63.5",
        "c": "45378, 45385 x 3, R63.4, K59.00, R19.5",
        "d": "45385, K63.5",
        "correct": "d"
    },
    {
        "question": "20. During a diagnostic colonoscopy, the physician was unable to advance the scope beyond the splenic flexure. How would you report this diagnostic colonoscopy?",
        "a": "44388-52",
        "b": "45330",
        "c": "45378-53",
        "d": "None of the above",
        "correct": "c"
    },
    {
        "question": "21. A 3-year-old patient swallowed a marble, which required an esophagotomy via thoracic approach for removal. How should you code this procedure?",
        "a": "43045",
        "b": "43020",
        "c": "43215",
        "d": "43135",
        "correct": "a"
    },
    {
        "question": "22. A 22-year-old patient was scheduled for repair of an incarcerated bilateral recurrent inguinal hernia. After the incision was made, the procedure was halted because the patient went into shock. How should the surgeon report this procedure?",
        "a": "49507-74, T81.10XA, K40.30, Z53.09",
        "b": "49521-53, K40.33, T81.10XA, Z53.09",
        "c": "00830-P1, 49521-51, K40.30, T81.10XA, Z53.09",
        "d": "49521-47, K40.33, T81.10XA, Z53.09",
        "correct": "a"
    },
    {
        "question": "24. A patient underwent an EGD with transendoscopic ultrasound-guided transmural fine needle aspiration. How should you code this procedure?",
        "a": "43242, 76942-26",
        "b": "43242",
        "c": "43235, 43238-59",
        "d": "43235, 43242-51, 76942-26",
        "correct": "b"
    },
    {
        "question": "25. A patient had three needle biopsies of the prostate completed under imaging and guidance. Which codes capture the professional services for this procedure?",
        "a": "55700 x 3, 76942-26",
        "b": "10022, 55700 x 3, 76942-26",
        "c": "55700, 76942-26",
        "d": "55705 x 3, 10022, 76942-26",
        "correct": "c"
    },
    {
        "question": "26. Newborn baby boy Martinez underwent a procedure to slit the prepuce to relieve constriction. How would Dr. David report his services for this procedure?",
        "a": "54000-63",
        "b": "54000",
        "c": "54001-52",
        "d": "54001-63",
        "correct": "b"
    },
    {
        "question": "27. A patient underwent destruction of extensive condyloma lesions on the penis (12 or more lesions) by laser technique. How should you report this procedure?",
        "a": "54057 x 12, 54065-59",
        "b": "54065 x 12",
        "c": "54057-22",
        "d": "54065",
        "correct": "d"
    },
    {
        "question": "28. A patient underwent an injection for voiding urethrocystography, a urethral pressure profile study, and a simple UFR. How should you report the professional services for this procedure?",
        "a": "51600, 74455-26, 51727-51, 51736-51",
        "b": "51605, 74430-26, 51727-26, 51741-51",
        "c": "51600, 74430-26, 51727-26, 51797-51",
        "d": "51605, 74455-TC, 51727-26, 51736-51",
        "correct": "a"
    },
    {
        "question": "30. Diane suffered a spontaneous incomplete miscarriage during the second trimester and required surgical completion. How should this procedure be reported?",
        "a": "59812",
        "b": "59820",
        "c": "59821",
        "d": "59840",
        "correct": "a"
    },
    {
        "question": "31. A 16-year-old patient had bilateral impacted ventilating tubes removed and replaced with new tubes via tympanostomy under general anesthesia. What code(s) would be reported?",
        "a": "69424-50, 69436-50",
        "b": "69433-50",
        "c": "69436-50",
        "d": "69424-50, 69433-50",
        "correct": "c"
    },
    {
        "question": "32. Two weeks after surgery, a patient returned as planned for a change in his drug delivery system. The previously placed reservoir was removed, and a new programmable subcutaneous pump was connected, tested, and programmed. How should Dr. Harvey report this service?",
        "a": "62362-58",
        "b": "62365, 62362-59",
        "c": "62350-58",
        "d": "62350, 62355-59",
        "correct": "a"
    },
    {
        "question": "33. Dr. Adams completed an anterior discectomy with decompression at C3-C5 and stabilized the levels with an anterior cervical interbody fusion, using an operating microscope throughout. How should Dr. Adams report this procedure?",
        "a": "63075, 63078-51, 22551, 22554x2, 69990-51",
        "b": "63075, 63078-51, 22551 x 2, 69990-51",
        "c": "63075, 63076, 22554 x 2",
        "d": "63075, 63076, 22551, 22552",
        "correct": "d"
    },
    {
        "question": "34. With which code set or individual codes can add-on code 61781 be correctly reported?",
        "a": "61720-61791",
        "b": "62201",
        "c": "77371-77373",
        "d": "None of the above",
        "correct": "d"
    },
    {
        "question": "36. A 6-month-old patient required a bilateral subdural tap through a suture. How would this initial procedure be reported?",
        "a": "61001-50",
        "b": "61020-63",
        "c": "61000-50",
        "d": "61020-63, 61000-50",
        "correct": "a"
    },
    {
        "question": "37. How should you report services for a 3-D radiation therapy simulation field setup?",
        "a": "77290",
        "b": "77295",
        "c": "77263",
        "d": "77280, 77295",
        "correct": "b"
    },
    {
        "question": "38. A patient with a family history of breast cancer has swelling in both arms and undergoes a bilateral lymphangiography. How should the professional services and diagnoses be reported?",
        "a": "75807-26, M79.89, Z85.3",
        "b": "75801-26, M79.89, Z80.3",
        "c": "75803-26, M79.89, Z85.3",
        "d": "75803-26, M79.89, Z80.3",
        "correct": "d"
    },
    {
        "question": "39. Angela, pregnant with triplets in her second trimester, is evaluated by transabdominal ultrasound to ensure adequacy of fetal growth. This is her third follow-up ultrasound. How would you report this service?",
        "a": "76816, 76816-59, 76816-59",
        "b": "76816, 76810 x 2",
        "c": "76830, 76830-59, 76830-59",
        "d": "76805, 76810x2",
        "correct": "a"
    },
    {
        "question": "40. A patient had an MRI of the face without contrast materials followed by contrast for six further sequences during the same scanning session. How should this professional service be reported?",
        "a": "70540-26, 70542x5",
        "b": "70540, 70542-26",
        "c": "70543-26",
        "d": "70543 x 5",
        "correct": "c"
    },
    {
        "question": "41. A therapeutic radiologist admitted a patient and, after a comprehensive E/M service, placed 12 interstitial ribbons for clinical brachytherapy. How would you report these services?",
        "a": "77778",
        "b": "99223, 77778",
        "c": "99223, 77763",
        "d": "77763",
        "correct": "a"
    },
    {
        "question": "42. A patient with osteoporosis reports for a DXA bone density study of her spine. What is the correct CPT code for the DXA scan?",
        "a": "77080",
        "b": "77081",
        "c": "77086",
        "d": "77078",
        "correct": "a"
    },
    {
        "question": "43. A patient with AIDS presents for follow-up care, and a total T-cell count is ordered. Choose the code(s) for this study.",
        "a": "86703",
        "b": "86360",
        "c": "86361",
        "d": "86359",
        "correct": "d"
    },
    {
        "question": "44. Jane underwent a combined rapid anterior pituitary evaluation panel and a hepatic function panel. How should these tests be reported?",
        "a": "82024x4, 83002x4, 83001x4, 84146 x 4, 83003 x 4, 82533 x 4, 84443x4",
        "b": "80418, 80076",
        "c": "80418, 82024, 83002, 83001, 84146, 83003, 82533, 84443",
        "d": "80076",
        "correct": "b"
    },
    {
        "question": "46. Larry had a venipuncture for the following antibody tests: West Nile IgM, Shigella, mumps, and total hepatitis B. How should you report these tests?",
        "a": "36415",
        "b": "86486",
        "c": "86788, 86771, 86735, 86704",
        "d": "36415-32, 86788, 86771, 86735, 86704",
        "correct": "c"
    },
    {
        "question": "47. Today, an extended culture of five-day embryos was completed. How should the culture service be reported?",
        "a": "89272",
        "b": "89250",
        "c": "89258",
        "d": "89255, 89272",
        "correct": "a"
    },
    {
        "question": "48. A patient had a comprehensive metabolic panel, a direct bilirubin, and a hepatitis A IgM test completed. How should these services be reported?",
        "a": "80053, 82248, 86709",
        "b": "80053-22",
        "c": "80076-52, 80074-52, 80053-52",
        "d": "80047, 80053, 80076",
        "correct": "a"
    },
    {
        "question": "49. A patient wore a noninvasive ambulatory continuous glucose monitoring device for 72 hours. The physician's office provided the device, training, sensor placement, removal, and data analysis. Which code captures this service?",
        "a": "99090",
        "b": "99091",
        "c": "95250",
        "d": "95251",
        "correct": "c"
    },
    {
        "question": "50. Which CPT® code should you report when your cardiologist performs a complete cardiac stress test service (supervision, equipment, tracing, interpretation, and report)?",
        "a": "93015",
        "b": "93016",
        "c": "93017",
        "d": "93018",
        "correct": "a"
    },
    {
        "question": "51. If your cardiologist performs a complete service of a stress echocardiogram combined with a complete cardiovascular stress test in a non-facility setting, which CPT® code should you report?",
        "a": "93316",
        "b": "93317",
        "c": "93350",
        "d": "93351",
        "correct": "d"
    },
    {
        "question": "52. What codes are not reported in conjunction with a comprehensive electrophysiologic evaluation (93620)?",
        "a": "93600, 93602, 93610, 93612, 93618, 93619",
        "b": "No codes are restricted from conjunction reporting with 93620",
        "c": "93600-51, 93602-51, 93610-51, 93612-51, 93618-51, 93619",
        "d": "Both a & c",
        "correct": "a"
    },
    {
        "question": "53. An 11-year-old female had one face-to-face visit and three daily dialysis services during a one-month period prior to her kidney transplant. How should these services be reported?",
        "a": "90945",
        "b": "90968 x 3",
        "c": "90964 x 3",
        "d": "90956",
        "correct": "b"
    },
    {
        "question": "54. As of Jan. 1, 2021, which CPT® code should be used for external electrocardiographic recording for more than 48 hours up to 7 days?",
        "a": "93244",
        "b": "93245",
        "c": "93241",
        "d": "93242",
        "correct": "c"
    },
    {
        "question": "55. What condition is caused by an accumulation of uric acid crystals in the base joint of the large toe and other joints of the feet and legs?",
        "a": "Bursitis",
        "b": "Fibrosis",
        "c": "Arthritis",
        "d": "Gout",
        "correct": "d"
    },
    {
        "question": "56. What part of the eye is the white, outermost layer of the eyeball, composed of tough connective tissue?",
        "a": "Pupil",
        "b": "Iris",
        "c": "Cornea",
        "d": "Sclera",
        "correct": "d"
    },
    {
        "question": "57. What term describes a muscle shortening its length in a resting state and then remaining in this position?",
        "a": "Contracture",
        "b": "Atrophy",
        "c": "Hypertrophy",
        "d": "Contusion",
        "correct": "a"
    },
    {
        "question": "58. Which of the following represents the correct pathway for electrical activity in the heart?",
        "a": "SA node, Purkinje fibers, AV node, bundle branches",
        "b": "SA node, AV node, bundle branches, Purkinje fibers",
        "c": "AV node, SA node, Purkinje fibers, bundle branches",
        "d": "Purkinje fibers, bundle branches, SA node, AV node",
        "correct": "b"
    },
    {
        "question": "59. What process describes blood cell formation occurring in the red bone marrow?",
        "a": "Syneresis",
        "b": "Hematopoiesis",
        "c": "Fibrinolysis",
        "d": "Erythrocytosis",
        "correct": "b"
    },
    {
        "question": "61. Dr. Burns, a surgeon, provided regional anesthesia and completed an exploration for postoperative hemorrhage in the neck on a 55-year-old patient. How would Dr. Burns report his services?",
        "a": "00350-P2, 35800",
        "b": "35800-47",
        "c": "00350-P2",
        "d": "00350-47",
        "correct": "b"
    },
    {
        "question": "62. A healthy 54-year-old patient received general anesthesia for a cervical procedure performed in a sitting position. How should the anesthesiologist report his services?",
        "a": "00604",
        "b": "00600-P1",
        "c": "00604-P1",
        "d": "00620",
        "correct": "c"
    },
    {
        "question": "63. According to anesthesia guidelines, what forms of monitoring are not included or bundled with anesthesia services?",
        "a": "Intra-arterial",
        "b": "Central venous",
        "c": "Swan-Ganz",
        "d": "All of the above",
        "correct": "d"
    },
    {
        "question": "64. Dr. Will, an anesthesiologist, provided three days of hospital management for epidural continuous drug administration after insertion of the catheter. How should Dr. Will report these three days of care?",
        "a": "01996-P1 x 3",
        "b": "01996",
        "c": "64999-P1",
        "d": "64999",
        "correct": "a"
    },
    {
        "question": "65. An anesthesiologist provided services for a patient with severe systemic disease undergoing emergency excision, debridement, and extensive skin grafting for a third-degree burn of 54% of his body. How should the anesthesiologist report her services?",
        "a": "01952-P5, 01953-P5 x 5, 99140",
        "b": "01952-P5, 01953-P5",
        "c": "01951, 01952, 01953 x 4",
        "d": "01951, 01952, 01953 x 5, 99140-51",
        "correct": "a"
    },
    {
        "question": "66. Dr. Miller completed an annual assessment for Mary, an established patient in a nursing facility, including a comprehensive history, comprehensive exam, and high decision-making. Which code should Dr. Miller report?",
        "a": "99306",
        "b": "99215",
        "c": "99318",
        "d": "99310",
        "correct": "c"
    },
    {
        "question": "67. Dr. Loma spent 45 minutes on the discharge services for a patient leaving a nursing facility. How would Dr. Loma report her services?",
        "a": "99024",
        "b": "99239",
        "c": "99315",
        "d": "99316",
        "correct": "d"
    },
    {
        "question": "68. Dr. Mayer admitted Sally to observation status on Monday. On Tuesday, he saw her again for a subsequent observation visit, documenting an expanded problem-focused interval history, expanded problem-focused examination, and straightforward decision-making. How should Dr. Mayer report Tuesday's visit?",
        "a": "99220-25, 99232",
        "b": "99219",
        "c": "99232",
        "d": "99225",
        "correct": "d"
    },
    {
        "question": "69. Dr. Counsel saw Tim in the office for a consultation at the request of Dr. Peters. The visit included a comprehensive exam, extended HPI, complete PFSH, and high-complexity decision-making. How would Dr. Counsel report today's visit?",
        "a": "99214",
        "b": "99245",
        "c": "99244",
        "d": "99205",
        "correct": "b"
    },
    {
        "question": "70. Dr. Susan conducted a follow-up inpatient consultation for Lou, whom she first saw the day after his surgery. Today's visit involved a detailed history and physical examination with high decision-making. How would Dr. Susan report her services for today's visit?",
        "a": "99253",
        "b": "99234",
        "c": "99233",
        "d": "99252",
        "correct": "c"
    },
    {
        "question": "71. A physician provided 185 minutes of critical care for an 82-year-old patient. During the encounter, the physician spent an additional 20 minutes (outside the critical care time) inserting a VAD. Bundled services performed included a chest x-ray, pulse oximetry, and arterial puncture. How should these services be reported?",
        "a": "99291-25, 99292x4, 36571",
        "b": "99291-25, 99292 x 4, 71010, 94760, 36600",
        "c": "99291, 99292 x 5",
        "d": "99291, 99292 x 4",
        "correct": "a"
    },
    {
        "question": "72. Which two organizations evaluate, establish regulations, and provide accreditation standards for managed care organizations?",
        "a": "National Committee for Quality Assurance (NCQA) and The Joint Commission (formerly JCAHO)",
        "b": "NCQA and CMS",
        "c": "CMS and QISMC",
        "d": "The Joint Commission and QISMC",
        "correct": "a"
    },
    {
        "question": "74. A patient was fitted with a hemipelvectomy, Canadian type; molded socket, hip joint, single-axis constant-friction knee, shin, SACH foot. Which supply code would be reported?",
        "a": "L5400-F9",
        "b": "L5250-RT",
        "c": "L5280-RT",
        "d": "L5280-RT, L5595",
        "correct": "c"
    },
    {
        "question": "75. What modifier should be reported when services are delivered via asynchronous telecommunication system?",
        "a": "GT",
        "b": "JW",
        "c": "GQ",
        "d": "HC",
        "correct": "c"
    },
    {
        "question": "76. A patient's new ostomy pouch is drainable, with an extended wear barrier attached, and has built-in convexity (1 piece). How should you report this supply?",
        "a": "A4390",
        "b": "A4387",
        "c": "A4385",
        "d": "A4392",
        "correct": "a"
    },
    {
        "question": "77. A patient received a speech-generating synthesized device, activated by physical contact with the device. Which code would you report for the supply?",
        "a": "E2502",
        "b": "E2510",
        "c": "E2500",
        "d": "E2508",
        "correct": "d"
    },
    {
        "question": "78. What is the correct ICD-10-CM code(s) for malignant hypertension with stage III kidney disease?",
        "a": "I10, N18.3",
        "b": "I12.9",
        "c": "I10",
        "d": "I12.9, N18.3",
        "correct": "d"
    },
    {
        "question": "79. A patient presents to the ER with a simple laceration to her left forearm with embedded glass particles after falling off a chair and striking a glass stove in her kitchen. What are the correct ICD-10-CM codes?",
        "a": "S51.812A, W18.02XA, W25.XXXA, Y92.030",
        "b": "S51.822A, W18.02XA, W25.XXXA, Y92.030, Y93.E9",
        "c": "S51.812A, Y92.030, W07.XXXA, W25.XXXA",
        "d": "S51.822A, W07.XXXA, W25.XXXA, Y93.E9, Y92.030",
        "correct": "d"
    },
    {
        "question": "80. A patient was treated for third-degree burns on the face and thighs, and second-degree burns on the upper arms and forearms after falling into a bonfire. Using the rule of nines, the TBSA is 45% with 27% third-degree burns. What are the correct codes?",
        "a": "T20.20XA, T20.30XA, T22.259A, T22.219A, T24.319A, T31.42, X03.0XXA",
        "b": "T20.30XA, T24.319A, T22.299A, T31.42, X03.0XXA",
        "c": "T20.09XA, T22.099A, T24.099A, T31.64, X03.0XXA",
        "d": "T20.30XA, T22.299A, T24.319A, T31.64, X03.0XXA",
        "correct": "b"
    },
    {
        "question": "81. A 35-year-old elderly primigravida at 38 weeks is admitted. She experiences a prolonged first stage of labor and eventually births a healthy baby boy. What are the correct codes?",
        "a": "O63.0, O09.519, Z37.0",
        "b": "O80, Z3A.38, O09.513, Z37.0",
        "c": "O80, O63.0, O09.519, Z37.0",
        "d": "O63.0, O09.513, Z37.0",
        "correct": "d"
    },
    {
        "question": "82. A patient is diagnosed with a displaced tuft fracture of the right middle finger after colliding with another player during a baseball game. What are the correct codes?",
        "a": "S62.632A, Y93.64, W51.XXXA, Y92.320",
        "b": "S62.662A, Y93.64, W03.XXXA, Y92.320",
        "c": "S62.392A, Y93.64, W51.XXXA, Y92.320",
        "d": "S62.632A, Y93.67, W03.XXXA, Y92.320",
        "correct": "a"
    },
    {
        "question": "83. A patient who is known to be HIV positive but who has no documented symptoms would be assigned which ICD-10-CM code?",
        "a": "B20",
        "b": "R75",
        "c": "Z21",
        "d": "B97.35",
        "correct": "c"
    },
    {
        "question": "85. In the CPT® Professional Edition, the same detailed definition for 'separate procedures' can be located in which main section guidelines?",
        "a": "Evaluation and Management, Surgery, and Medicine",
        "b": "Medicine, Radiology, and Surgery",
        "c": "Radiology, Surgery, and Pathology and Laboratory",
        "d": "Cardiovascular System, Radiology, and Medicine",
        "correct": "b"
    },
    {
        "question": "86. What do the guidelines for Category II codes state about the use of these codes?",
        "a": "The use of these codes is optional and may not be used as a substitute for Category I codes",
        "b": "The use of these codes is mandatory and required for proper coding as substitutes for Category I codes",
        "c": "The use of these codes is required only for reporting to federal regulatory agencies related to new technology",
        "d": "The use of these codes is indispensable and required for proper coding in addition to Category I codes",
        "correct": "a"
    },
    {
        "question": "87. Which of the following does the CPT® Professional Edition indicate is always included in the surgical package in addition to the operation itself?",
        "a": "Evaluating the patient in the pre-anesthesia recovery area",
        "b": "Local infiltration, general, and digital block or topical anesthesia",
        "c": "Immediate postoperative care, including dictating operative notes and talking with the family and other physicians",
        "d": "Prior to the decision for surgery, all evaluation and management visits are included",
        "correct": "c"
    },
    {
        "question": "88. How does the CPT® Professional Edition describe concurrent care of a patient?",
        "a": "Concurrent care is the provision of similar evaluation and management services for different patients during the same day. When this care is provided, no special reporting is required.",
        "b": "Concurrent care is the provision of management for some or all of the patient's current problems and relinquishing responsibility of past management to another physician. When this care is provided, special forms must be completed.",
        "c": "Concurrent care is the provision of similar services to the same patient by more than one physician on the same day. When concurrent care is provided, no special reporting is required.",
        "d": "Concurrent care is the provision of different services to the same patient by one physician on the same day. When concurrent care is provided, special reporting is required.",
        "correct": "c"
    },
    {
        "question": "89. Which elements are listed to determine the complexity of decision-making for evaluation and management services?",
        "a": "Number of diagnoses or management options, amount and/or complexity of data to be reviewed, and risk of complications and/or morbidity or mortality",
        "b": "Minimal management options, amount and/or complexity of lab results, and risk of complications",
        "c": "Number of diagnoses or management options, unit and floor time, and risk of complications and/or morbidity or mortality",
        "d": "Amount and/or complexity of data to be reviewed, risk of complications, and number of diagnoses related only to past family and/or social history",
        "correct": "a"
    },
    {
        "question": "90. Which types of contrast administration alone do not qualify as a study 'with contrast'?",
        "a": "Oral and/or extravascular",
        "b": "Oral and/or intrathecal",
        "c": "Oral and/or intravascular",
        "d": "Oral and/or rectal",
        "correct": "d"
    },
    {
        "question": "CASE 2: 93. Based on the 50-minute psychotherapy session for a 6-year-old boy with PTSD and ADHD, what is/are the appropriate procedure code(s) for this encounter?",
        "a": "90834",
        "b": "90837",
        "c": "99213",
        "d": "99213, 90834",
        "correct": "b"
    },
    {
        "question": "CASE 2: 94. Are there any additional audit findings for this case?",
        "a": "The provider did not select the appropriate diagnosis code",
        "b": "Incorrect date of service is billed",
        "c": "The documentation does not support psychotherapy",
        "d": "There are no other audit findings",
        "correct": "d"
    },
    {
        "question": "CASE 3: 95. A patient presents to the ED for a left wrist injury. The E/M service was a level 3. The physician performed a closed treatment of a Colle's fracture without manipulation and applied a short arm splint. What are the correct CPT® codes?",
        "a": "99284, 25600, 29126",
        "b": "99284, 25600",
        "c": "99283, 29126",
        "d": "99283, 25600",
        "correct": "d"
    },
    {
        "question": "CASE 3: 96. Based on the ED encounter for a wrist fracture where the decision for the procedure was made during the visit, what are the correct modifiers?",
        "a": "Modifiers 57 and 51",
        "b": "Modifiers 57, 54 and 51",
        "c": "Modifiers 25, 54 and 51",
        "d": "Modifiers 57 and 54",
        "correct": "d"
    },
    {
        "question": "CASE 4: 97. In the physical therapy audit, what issue should be addressed regarding documentation?",
        "a": "Total duration of time is not documented in the medical record",
        "b": "Time in and out is not documented on the encounter form",
        "c": "97014 is not supported in the documentation",
        "d": "97010 is not supported in the documentation",
        "correct": "c"
    },
    {
        "question": "CASE 4: 98. What additional audit findings can be identified in the physical therapy case?",
        "a": "Electronic signature missing",
        "b": "No additional findings identified",
        "c": "Incorrect modifier appended to 97530",
        "d": "The diagnosis is incorrect",
        "correct": "b"
    }
],
    mockTest3: [
    {
        "question": "1. A patient undergoes an excision of a 5-cm benign follicular cyst from the upper midback. The incision was closed with deep layers and a subcuticular stitch. What are the correct codes?",
        "a": "11406, 12002",
        "b": "11424",
        "c": "11406, 12032",
        "d": "11606, 12032",
        "correct": "c"
    },
    {
        "question": "2. A 74-year-old male presents to the ED after a fall, resulting in a 1.5- to 2-cm simple laceration on the bridge of his nose, which was repaired with sutures. How should this encounter be coded?",
        "a": "12051, S01.20XA",
        "b": "12011, S01.20XA",
        "c": "12011, S01.23XA",
        "d": "12011, 11000, S01.23XA",
        "correct": "b"
    },
    {
        "question": "3. A patient with an inverted nipple and mammary duct ectasia on the left side undergoes an excision of a 3 x 4 cm mass deep to the nipple, with reconstruction of the breast tissue. How should this be coded?",
        "a": "19120-RT, N60.49",
        "b": "11404-LT, N60.39",
        "c": "19112, N60.49",
        "d": "19120-LT, N60.49",
        "correct": "d"
    },
    {
        "question": "4. A patient receives palliative care involving the debridement of seven mycotic toenails (four on the left, three on the right). How should this service be coded?",
        "a": "11721 X7, B48.8",
        "b": "99212, 11721, B35.1",
        "c": "11719, B35.1",
        "d": "11721, B35.1",
        "correct": "d"
    },
    {
        "question": "5. A patient undergoes excision of a benign left breast lesion, guided by a wire localization previously placed by radiology. A core of tissue approximately 1-2 cm was removed. How should this procedure be coded?",
        "a": "11602-LT, D24.1",
        "b": "19101-LT, D24.2",
        "c": "19125-LT, D24.2",
        "d": "19301-LT, D24.2",
        "correct": "c"
    },
    {
        "question": "6. A patient receives split-thickness skin grafts to cover a 1400 sq cm (40 x 35 cm) open wound on the left thigh. How should the graft procedure be coded?",
        "a": "15120, 15121 X 12",
        "b": "15100, 15101, 11010",
        "c": "15220, 15221 X 13",
        "d": "15100, 15101 X 13",
        "correct": "d"
    },
    {
        "question": "7. A 21-year-old male dislocated his left carpometacarpal joint. The surgeon manipulated the joint back into alignment and fixed it by placing a wire percutaneously. How is this procedure coded?",
        "a": "26608-F1",
        "b": "26650-FA",
        "c": "26706-LT",
        "d": "26676-LT",
        "correct": "d"
    },
    {
        "question": "8. An 84-year-old male with a fractured right patella underwent an open procedure where a severely fragmented portion of the patella was removed, and the remaining fractures were wired. How should this be coded?",
        "a": "27524-RT, S82.001A",
        "b": "27520-RT, S82.009A",
        "c": "27524-RT, S82.009A",
        "d": "27524-RT, S82.002A",
        "correct": "a"
    },
    {
        "question": "9. A patient with a right tibial shaft fractured in three places had percutaneous screws and pins placed to secure the fracture sites. How should this procedure be coded?",
        "a": "27750-RT, S82.209A",
        "b": "27756-RT, S82.202A",
        "c": "27756-RT, S82.201A",
        "d": "27750-RT, S82.201A",
        "correct": "c"
    },
    {
        "question": "10. A patient sustained a craniofacial separation in a rollover accident, requiring complicated internal and external fixation using an open approach and a halo device. How is this coded?",
        "a": "21435, 20661",
        "b": "21435",
        "c": "21432",
        "d": "21436, 20661",
        "correct": "b"
    },
    {
        "question": "12. To temporarily stabilize a tibial fracture, a small incision was made over the left proximal tibia, and a traction pin was inserted through the bone, to which weights were affixed. How is this procedure coded?",
        "a": "20650-LT",
        "b": "20663-LT",
        "c": "20690-LT",
        "d": "20692-LT",
        "correct": "a"
    },
    {
        "question": "13. A patient with hypoxia and pneumothorax had a chest tube placed in the left chest after blunt dissection to the pleural space. What are the correct procedure and diagnosis codes?",
        "a": "32422, R09.2, J93.9",
        "b": "32020, 71001, R09.01, J93.9",
        "c": "32551, J93.9, R09.02",
        "d": "32422, R09.01, S12.0",
        "correct": "c"
    },
    {
        "question": "14. A 68-year-old male in a coma had a triple lumen central line placed in the right subclavian vein. How should this be coded?",
        "a": "36011, R40.1",
        "b": "36011, R40.20",
        "c": "36556, R40.22",
        "d": "36556, R40.20",
        "correct": "d"
    },
    {
        "question": "15. What code would you use to report the percutaneous insertion of a permanent dual-chamber pacemaker by means of the subclavian vein?",
        "a": "33249",
        "b": "33217",
        "c": "33208",
        "d": "33240",
        "correct": "c"
    },
    {
        "question": "17. A 52-year-old morbidly obese male undergoes a flap tracheostomy and a cervical lipectomy, which was necessary for adequate exposure. How are these procedures coded?",
        "a": "31610, 15839-51",
        "b": "31610",
        "c": "31610, 15838",
        "d": "31603, 15839-51",
        "correct": "a"
    },
    {
        "question": "19. What code would you use if the physician performs a pyloroplasty and vagotomy in the same surgical session?",
        "a": "43865",
        "b": "50400",
        "c": "43635",
        "d": "43640",
        "correct": "d"
    },
    {
        "question": "20. A patient with an acute intestinal anastomosis leak is taken back to the operating room by the same surgeon 3 days after the initial surgery for a proximal ileostomy and oversew of a right colonic fistula. How should this be coded?",
        "a": "44310",
        "b": "44310-78",
        "c": "45136",
        "d": "45136-78",
        "correct": "b"
    },
    {
        "question": "21. A patient with a necrotic ileostomy stoma undergoes a revision. The necrotic end of the bowel is resected, and a new stoma is created. The surgeon is not the original surgeon. How is this procedure coded?",
        "a": "44310",
        "b": "45136",
        "c": "44312",
        "d": "44314",
        "correct": "c"
    },
    {
        "question": "22. A patient is brought back to the operating room by the same physician 2 days after an esophagectomy to repair an esophagogastrostomy leak using a transthoracic approach. How is the repair coded?",
        "a": "43320-78",
        "b": "43340-78",
        "c": "43405-78",
        "d": "43415-78",
        "correct": "d"
    },
    {
        "question": "23. The physician is using an abdominal approach to perform a proctopexy combined with a sigmoid resection. What is the correct code?",
        "a": "45540",
        "b": "45541",
        "c": "45550",
        "d": "45345",
        "correct": "c"
    },
    {
        "question": "24. A patient with melena undergoes a diagnostic EGD, which is advanced to the second duodenum. The exam is normal with no abnormalities found. How should this be coded?",
        "a": "45378",
        "b": "43235",
        "c": "49320",
        "d": "43255",
        "correct": "b"
    },
    {
        "question": "25. A patient undergoes a suction D&C for a missed abortion at 11 weeks. How should this be coded?",
        "a": "59812, O03.1",
        "b": "59812, O03.0",
        "c": "59820, O02.1",
        "d": "59856, O02.1",
        "correct": "c"
    },
    {
        "question": "26. A patient with a right ureteral stricture undergoes a cystoscopy where the existing right ureteral stent is grasped, removed, and exchanged for a new stent under fluoroscopic control. How is this procedure coded?",
        "a": "51702-LT, N13.5",
        "b": "52005-RT, N13.4",
        "c": "52332-RT, N13.4",
        "d": "52332-RT, N13.5",
        "correct": "d"
    },
    {
        "question": "27. A 52-year-old female with heavy bleeding undergoes a hysteroscopy with removal of a few small benign endometrial polyps and a sharp endometrial curettage. How should this be coded?",
        "a": "58558, 57460-51, N92.0, N84.0",
        "b": "58558, N92.0, N84.0",
        "c": "58558, 57558-51, N92.0, N84.0",
        "d": "58558, N92.0, N84.2",
        "correct": "b"
    },
    {
        "question": "28. A 35-year-old patient at 36 weeks' gestation undergoes a repeat lower-segment transverse cesarean section, delivering a single liveborn infant. At the patient's request, a bilateral tubal ligation is also performed. How is this coded?",
        "a": "59510, 58600-51, Z30.2",
        "b": "59620, 58615-51, Z37.0",
        "c": "59514, 58605-51, Z37.0",
        "d": "59514, 58611, Z37.0, Z30.2",
        "correct": "d"
    },
    {
        "question": "29. A patient with a history of bladder cancer undergoes a cystoscopy with multiple random biopsies and fulguration of a hyperemic area (total 7 sq cm). Pathology showed no evidence of recurrence. How should this be coded?",
        "a": "52224, Z85.51",
        "b": "51020, 52204, Z80.52",
        "c": "52234, Z85.51",
        "d": "52224 X 4, D41.4",
        "correct": "a"
    },
    {
        "question": "30. A patient with VIN-III has a wide local excision of a multifocal lesion on the right labium minora. How should this be coded?",
        "a": "56605, C51.9",
        "b": "56625, D07.1",
        "c": "56620, D07.1",
        "d": "11620, C51.9",
        "correct": "c"
    },
    {
        "question": "31. A patient undergoes a left frontal ventricular puncture for implanting a catheter, along with a layered repair of an 8-cm scalp laceration and repair of multiple facial/eyelid lacerations totaling 12 cm. How are these procedures coded?",
        "a": "61020, 12015-51",
        "b": "61107, 12034-51, 12015-51",
        "c": "61215, 12015-51",
        "d": "61107, 12034-51",
        "correct": "b"
    },
    {
        "question": "32. A patient requires full-thickness repair of a marginal laceration of the left lower eyelid and a laceration of the left upper eyelid involving the tarsus, plus a full-thickness layered repair of multiple stellate lacerations (24.2 cm) above the left eye. How is this coded?",
        "a": "67935-E2, 12017",
        "b": "67930-E2, 13152-51, 13153",
        "c": "67935-E2, 67935-E1-51, 12056-51",
        "d": "67935-E2, 12017-51",
        "correct": "c"
    },
    {
        "question": "33. A patient with a fever undergoes a diagnostic lumbar puncture between L4 and L5. CSF was collected and sent for analysis. How should this be coded?",
        "a": "62272",
        "b": "62268, R50.9",
        "c": "62272, R60.9, R50.9",
        "d": "62270, R50.9",
        "correct": "d"
    },
    {
        "question": "34. A patient undergoes a laminotomy and foraminotomy with removal of a herniated disk at L4-5 on the left. How is this procedure coded?",
        "a": "63030-LT, M51.26",
        "b": "63012-LT, M51.27",
        "c": "63047-LT, M51.27",
        "d": "63047-LT, 63048-LT, M51.26",
        "correct": "a"
    },
    {
        "question": "35. A patient with a suspected brain tumor undergoes a craniotomy. Three burr holes were made, the dura was incised, and a cavity of pus was located and removed, confirming an abscess. How is this coded?",
        "a": "61154, G06.0",
        "b": "61154, D49.6",
        "c": "61320, G06.0",
        "d": "61320, D49.6",
        "correct": "c"
    },
    {
        "question": "36. A patient with an obstructed ventriculoperitoneal shunt has the entire cerebrospinal fluid shunt system removed and a similar replacement shunt system placed. How is this coded?",
        "a": "62180",
        "b": "62258",
        "c": "62225",
        "d": "62190",
        "correct": "b"
    },
    {
        "question": "37. A 69-year-old female with new seizure activity undergoes an MRI of the brain, first without contrast, then with contrast administration for further sequences. What are the correct codes for the professional component?",
        "a": "70543-26, R56.00",
        "b": "70543-26, R56.9",
        "c": "70553-26, R56.9",
        "d": "70553, G40.909",
        "correct": "c"
    },
    {
        "question": "38. A patient undergoes a limited ultrasound (sonogram) of the gallbladder due to epigastric pain. The common bile duct measurement is at the upper limits of normal. How is the professional component coded?",
        "a": "76700-26, R10.13",
        "b": "76705-26, R10.13",
        "c": "76700, R10.13",
        "d": "76705, R10.13",
        "correct": "b"
    },
    {
        "question": "39. A patient with stiffness and numbness in the neck, shoulders, and arms is ordered an MRI of the cervical spine, without and with contrast. Code the MRI procedure.",
        "a": "72020",
        "b": "72127",
        "c": "72141, 72142",
        "d": "72156",
        "correct": "d"
    },
    {
        "question": "40. A patient with clinical symptoms of ascites undergoes a CT of the abdomen and pelvis without contrast. The findings show no ascites but a moderate-sized pleural effusion on the right. How should the professional component be coded?",
        "a": "74177-26, R18.8",
        "b": "74176-26, J91.8",
        "c": "74178, J91.8",
        "d": "74176, R18.8",
        "correct": "b"
    },
    {
        "question": "41. A patient with a headache undergoes a CT of the brain without contrast. The impression is an acute subarachnoid hemorrhage. How is the professional component coded?",
        "a": "70460-26, R51",
        "b": "70250, R51",
        "c": "70450-26, I60.9",
        "d": "70450-26, R51",
        "correct": "c"
    },
    {
        "question": "42. A 68-year-old male with prostate cancer receives 10 radiation treatments over 2 weeks. The oncologist performs complex clinical treatment planning, dosimetry calculation, a complex isodose plan with devices, and treatment management. How are these services coded?",
        "a": "77263, 77300, 77307, 77334, C61",
        "b": "77300, 77307, 77427 X 2, C61",
        "c": "77263, 77300, 77307, 77334, 77427 X 2, C61",
        "d": "77263, 77427 X 2, C61",
        "correct": "c"
    },
    {
        "question": "44. A kidney biopsy specimen is sent to pathology for gross and microscopic examination. The results were inconclusive. How would the global service (technical and professional) be reported?",
        "a": "88305-26, N28.9",
        "b": "88307-26, N28.82",
        "c": "88307, N28.9",
        "d": "88305, N28.9",
        "correct": "d"
    },
    {
        "question": "45. An established patient has her yearly physical. The physician orders a comprehensive metabolic panel, a CBC with manual differential, and a thyroid stimulating hormone test. How should the lab tests be coded?",
        "a": "99395, 80050",
        "b": "80050-52",
        "c": "80069, 80050",
        "d": "80050",
        "correct": "d"
    },
    {
        "question": "46. A patient returns to the lab for a repeat creatine test after yesterday's results were higher than normal. How is the test for the second day reported?",
        "a": "82550-91",
        "b": "82550",
        "c": "82551",
        "d": "82540",
        "correct": "d"
    },
    {
        "question": "47. How would you code a pregnancy test performed on urine?",
        "a": "84702",
        "b": "84703",
        "c": "81025",
        "d": "84702 X 2",
        "correct": "c"
    },
    {
        "question": "48. A patient with DVT has regular PTTs drawn to monitor heparin therapy. What code describes this testing?",
        "a": "85730",
        "b": "85520",
        "c": "80299",
        "d": "None of these",
        "correct": "a"
    },
    {
        "question": "49. A patient with hypertension and an acute MI has a Swan-Ganz catheter inserted via the right internal jugular vein for monitoring. How should this be coded?",
        "a": "93501, 93503-51, I10",
        "b": "93508, I10",
        "c": "93503, 93539, I10, I21.3",
        "d": "93503, I10, I21.3",
        "correct": "d"
    },
    {
        "question": "50. A patient with atrial flutter is successfully sedated and converted to sinus tachycardia using 50 joules of external electrical cardioversion. How is this procedure coded?",
        "a": "92961, I49.1",
        "b": "92960, I48.92",
        "c": "92960, 92973, I48.92",
        "d": "92960, I48.92",
        "correct": "b"
    },
    {
        "question": "51. What code would be used to report the technical aspect of an evaluation of swallowing by video recording using a flexible fiberoptic endoscope?",
        "a": "92611",
        "b": "92612",
        "c": "92610",
        "d": "92613",
        "correct": "b"
    },
    {
        "question": "52. Which code would be used to report an EEG (electroencephalogram) provided during a nonintracranial surgery, such as a carotid surgery?",
        "a": "95816",
        "b": "95819",
        "c": "95822",
        "d": "95955",
        "correct": "d"
    },
    {
        "question": "53. How would you report a screening hearing test?",
        "a": "92551",
        "b": "92555",
        "c": "92553",
        "d": "92620",
        "correct": "a"
    },
    {
        "question": "54. A patient underwent a spontaneous nystagmus test that included gaze, fixation, recording, and the use of vertical electrodes. How is this coded?",
        "a": "92541",
        "b": "92547",
        "c": "92541, 92544, 92547",
        "d": "92541, 92547",
        "correct": "d"
    },
    {
        "question": "55. This is the first portion of the small intestine:",
        "a": "jejunum",
        "b": "ileum",
        "c": "duodenum",
        "d": "cecum",
        "correct": "c"
    },
    {
        "question": "56. This is a part of the inner ear:",
        "a": "vestibule",
        "b": "malleus",
        "c": "incus",
        "d": "stapes",
        "correct": "a"
    },
    {
        "question": "57. This is the area behind the cornea:",
        "a": "anterior chamber",
        "b": "choroid layer",
        "c": "ciliary body",
        "d": "fundus",
        "correct": "a"
    },
    {
        "question": "58. This is the collarbone:",
        "a": "patella",
        "b": "tibia",
        "c": "scapula",
        "d": "clavicle",
        "correct": "d"
    },
    {
        "question": "59. The act of turning upward, such as the hand turned palm upward:",
        "a": "supination",
        "b": "adduction",
        "c": "pronation",
        "d": "circumduction",
        "correct": "a"
    },
    {
        "question": "60. What is the anesthesia code for a pneumocentesis for lung aspiration (CPT 32420)?",
        "a": "00522",
        "b": "00500",
        "c": "00520",
        "d": "00524",
        "correct": "d"
    },
    {
        "question": "61. A patient presents for a vaginal delivery, but after 12 hours of labor, the OB/GYN decides to perform a cesarean delivery, and anesthesia is administered for the C-section. What is the correct anesthesia code?",
        "a": "01960",
        "b": "01961",
        "c": "01960, 01961",
        "d": "01963",
        "correct": "b"
    },
    {
        "question": "62. What are the anesthesia codes for a craniotomy for evacuation of an intracranial hematoma on a 74-year-old patient?",
        "a": "00215, 99100",
        "b": "00211, 99100",
        "c": "00210",
        "d": "00211",
        "correct": "b"
    },
    {
        "question": "63. A complex therapeutic radiology simulation-aided field setting procedure (CPT codes 77280-77290) is for the:",
        "a": "Simulation of a single treatment area of interest.",
        "b": "Simulation of three separate treatment areas.",
        "c": "Simulation of two treatment areas.",
        "d": "Simulation of five separate treatment areas",
        "correct": "b"
    },
    {
        "question": "64. What is the correct code for place of service birthing center?",
        "a": "26",
        "b": "25",
        "c": "17",
        "d": "12",
        "correct": "b"
    },
    {
        "question": "65. HIPAA was established with which goal?",
        "a": "To allow standardization in claims processing and submission",
        "b": "To provide incentives to payers",
        "c": "To provide incentives to providers",
        "d": "To identify submission of paper claims",
        "correct": "a"
    },
    {
        "question": "66. Which of the following are included in Medicare Part A?",
        "a": "Hospital inpatient services",
        "b": "Hospital outpatient services",
        "c": "Prescription drugs",
        "d": "Both outpatient and inpatient services.",
        "correct": "a"
    },
    {
        "question": "67. Which modifier indicates a discontinued procedure?",
        "a": "52",
        "b": "53",
        "c": "26",
        "d": "51",
        "correct": "b"
    },
    {
        "question": "68. A patient was on observation status for 12 hours and discharged the same day. The physician provided a comprehensive history and exam and low complexity medical decision making. How should this be coded?",
        "a": "99218, Z04.9, W18.30XA",
        "b": "99234, Z04.3, W17.89XA",
        "c": "99217, Z04.3, W18.30A",
        "d": "99234, 99217, Z04.3, W17.89XA",
        "correct": "b"
    },
    {
        "question": "69. A 65-year-old patient is admitted to the hospital with acute pericarditis. The physician completes a comprehensive history and physical exam, with high-level medical decision making. What are the correct codes?",
        "a": "99236, R07.2, R06.82",
        "b": "99223, I30.9, I30.0, I72.9, I26.99, K22.9",
        "c": "99245, I30.9, I30.0, I72.9, I29.99, K22.9",
        "d": "99223, R07.2, R06.82",
        "correct": "d"
    },
    {
        "question": "70. A gynecologist admits an established patient for dysfunctional uterine bleeding (DUB). The visit includes a comprehensive history and exam with moderate complexity MDM. How should the admission be coded?",
        "a": "99215, 99222, Z89.42, Z80.49",
        "b": "99222, N92.0",
        "c": "99215, 99222, N89.8",
        "d": "99222, N91.5",
        "correct": "b"
    },
    {
        "question": "71. A patient is admitted with a low-grade fever, tachycardia, tachypnea, and basal lung consolidation. The physician performs a comprehensive H&P with high complexity MDM. How should this initial hospital care be coded?",
        "a": "99233, R50.9, R00.0, R06.82, J18.1, J91.8, R19.15",
        "b": "99233, R50.9, I47.1, R06.82, J16.4, J91.8",
        "c": "99223, R50.9, R00.0, R06.82, J18.1",
        "d": "99223, R50.9, R00.0, R06.82, J18.1, J91.8, R19.15",
        "correct": "d"
    },
    {
        "question": "72. A physician makes a subsequent hospital visit for a patient with primary viral pneumonia who now has a secondary bacterial pneumonia. The visit includes a problem-focused interval history, a problem-focused exam, and straightforward MDM. How is this coded?",
        "a": "99231, R06.00, R09.89, R50.9, M79.1, R89.9",
        "b": "99231, J15.9, J12.9",
        "c": "99221, R06.00, R09.89, R50.9, M79.1, R89.9",
        "d": "99234, J15.9",
        "correct": "b"
    },
    {
        "question": "74. A patient is issued a 22-inch seat cushion for his wheelchair. What is the HCPCS code?",
        "a": "E0995",
        "b": "E0950",
        "c": "E0190",
        "d": "E2601",
        "correct": "d"
    },
    {
        "question": "75. A patient with chronic lumbar pain who previously purchased a TENS now needs replacement batteries. What is the HCPCS code?",
        "a": "E1592",
        "b": "A5082",
        "c": "A4772",
        "d": "A4630",
        "correct": "d"
    },
    {
        "question": "76. A patient with COPD is issued a medically necessary nebulizer with a compressor and a humidifier for extensive use with oxygen delivery. What are the HCPCS codes?",
        "a": "E0570, E0550",
        "b": "E0555, E0571",
        "c": "E0580, E0550",
        "d": "E0575, E0550",
        "correct": "a"
    },
    {
        "question": "77. A Type 1 diabetic patient is brought to the ER in a coma due to an insulin pump failure, leading to diabetic ketoacidosis. What is the correct code sequence?",
        "a": "T85.614A, T38.3X1A, E10.641",
        "b": "T85.614A, T38.3X6A, E10.11",
        "c": "E10.11, T85.614A, T38.3X6A",
        "d": "T85.614A, T38.3X6A, E11.641",
        "correct": "b"
    },
    {
        "question": "78. A patient is morbidly obese with a BMI of 47.6. How is this coded?",
        "a": "E66.1",
        "b": "E66.2, Z68.42",
        "c": "E66.01, Z68.42",
        "d": "Z68.42, E66.01",
        "correct": "c"
    },
    {
        "question": "79. A patient presents with pain associated with his primary lung cancer of the left upper lobe. How is this coded?",
        "a": "C34.12, G89.29",
        "b": "G89.3",
        "c": "G89.3, C34.12",
        "d": "G89.3, C34.11",
        "correct": "c"
    },
    {
        "question": "80. A patient has malignant hypertensive heart disease and Stage V chronic kidney disease, without heart failure. How is this coded?",
        "a": "I13.11, I10",
        "b": "I13.11",
        "c": "I13.11, N18.5",
        "d": "I11.9, N18.5",
        "correct": "c"
    },
    {
        "question": "81. A patient is treated for three pressure ulcers: stage 3 on the right buttock, stage 2 on the left buttock, and stage 4 on the sacral area. How is this coded?",
        "a": "L89.44, L89.303, L89.312",
        "b": "L89.154, L89.300, L89.014",
        "c": "L89.154, L89.313, L89.322",
        "d": "L89.153, L89.313, L89.322",
        "correct": "c"
    },
    {
        "question": "82. A 79-year-old with osteoporosis presents with a new pathological fracture of the right femur. How is this coded?",
        "a": "M81.0, M84.451A",
        "b": "M80.051A, M84.451A",
        "c": "M80.051A",
        "d": "M81.0, S72.91XA",
        "correct": "c"
    },
    {
        "question": "83. A patient has moderate (Stage 3) chronic kidney disease due to Type 1 diabetes. How is this coded?",
        "a": "I12.9, N18.3",
        "b": "I12.0, N18.3",
        "c": "E10.22, N18.3",
        "d": "E11.22, N18.3",
        "correct": "c"
    },
    {
        "question": "84. How do you code a full term, uncomplicated delivery of a single live birth?",
        "a": "O80, Z37.0, Z3A.00",
        "b": "O80, Z37.0, Z3A.39",
        "c": "Z37.2, Z3A.00",
        "d": "Z37.3, Z3A.00",
        "correct": "a"
    },
    {
        "question": "85. Specific coding guidelines in the CPT manual are located in the:",
        "a": "index.",
        "b": "introduction.",
        "c": "beginning of each section.",
        "d": "Appendix A.",
        "correct": "c"
    },
    {
        "question": "86. Which punctuation mark between codes in the index of the CPT manual indicates a range of codes is available?",
        "a": "period",
        "b": "comma",
        "c": "semicolon",
        "d": "hyphen",
        "correct": "d"
    },
    {
        "question": "88. Specific coding guidelines in the CPT manual are located in the:",
        "a": "index.",
        "b": "introduction.",
        "c": "beginning of each section.",
        "d": "Appendix A.",
        "correct": "c"
    },
    {
        "question": "89. Anesthesia service includes the following care:",
        "a": "Preoperative, intraoperative",
        "b": "Preoperative, intraoperative, postoperative",
        "c": "Intraoperative, postoperative",
        "d": "Preoperative, postoperative",
        "correct": "b"
    },
    {
        "question": "90. When you see the symbol '⨂' (circle with an x) next to a code in the CPT manual, you know that:",
        "a": "the code is a new code.",
        "b": "there is new or revised text.",
        "c": "the code is a modifier -51 exempt code.",
        "d": "FDA approval is pending.",
        "correct": "c"
    }
],
    mockTest4: [
    {
        "question": "1. Two days after surgery for a severe crushing injury to his left upper leg, a patient required a dressing change under general anesthesia. How would you report this service?",
        "a": "16020-LT",
        "b": "15852, 01232, J2060",
        "c": "01232-P6",
        "d": "15852-LT",
        "correct": "d"
    },
    {
        "question": "2. Dr. Alexis completed Mohs surgery on a patient's left arm. The procedure was done in three stages, with a total of seven blocks in the second stage (five standard, two additional). How would you report Dr. Alexis' services?",
        "a": "17313, 17314-58, 17315-59, 88314-59",
        "b": "17311, 17312",
        "c": "17313, 17314 x 2, 17315 x 2",
        "d": "17311, 88302, 17314 x 3, 17312 x 7",
        "correct": "c"
    },
    {
        "question": "3. A patient's lacerations were repaired as follows: superficial repair to the arm (12.8 cm), an intermediate repair to the hand (7.9 cm), and a simple repair to the foot (9.6 cm). How would you report the wound repairs?",
        "a": "12034, 12036, 12046, 12007",
        "b": "12034, 12006-51",
        "c": "12044, 12006-51",
        "d": "12044, 12034-51, 12006-51",
        "correct": "c"
    },
    {
        "question": "4. An 18-year-old patient presented for her annual well woman visit and to receive a NorPlant implantable contraceptive capsule. How should this be coded?",
        "a": "99213",
        "b": "99214, 11981",
        "c": "99395, 11981",
        "d": "99385, 11981",
        "correct": "c"
    },
    {
        "question": "5. A malignant lesion (4.6 cm) was removed from a patient's right arm. During the same visit, the dermatologist took a biopsy of a new growth on the left arm, which required simple closure. How would the biopsy procedure be reported?",
        "a": "The biopsy is included in the primary procedure and not reported",
        "b": "11100-59",
        "c": "11101",
        "d": "11100, 12001, 11406-51",
        "correct": "b"
    },
    {
        "question": "6. A patient had a 2 cm malignant lesion excised from her left foot. Three days later, during the postoperative period, the same physician re-excised the margins due to a residual tumor, with a new excised diameter of 3 cm. How would the physician code the re-excision?",
        "a": "11622, 11623-59",
        "b": "11626",
        "c": "11623-59",
        "d": "11623-58",
        "correct": "d"
    },
    {
        "question": "7. A patient with a burst fracture of the lumbar spine underwent a partial corpectomy (L2) via a transperitoneal approach, followed by an anterior arthrodesis (L1-L3) with anterior instrumentation and a structural allograft. How would the procedure be reported?",
        "a": "63090, 22558-51, 22585, 22845, 20931",
        "b": "63085, 22533, 22585-51, 22808-59",
        "c": "22612 x 2, 22808, 22840-51, 20931",
        "d": "22585, 22585-51, 22845-51, 20931-59",
        "correct": "a"
    },
    {
        "question": "8. A patient had an open treatment of a femoral head fracture with replacement using a prosthetic femoral head. How would you report this procedure?",
        "a": "27236",
        "b": "27235",
        "c": "27238",
        "d": "27275, 27236-59",
        "correct": "a"
    },
    {
        "question": "9. A patient with a penetrating knife wound to the back underwent wound exploration with enlargement, debridement, and removal of gravel. A laparotomy was not necessary. How would you report this procedure?",
        "a": "This procedure is bundled with the laparotomy",
        "b": "49000, 97602-51, 20100-59",
        "c": "49000, 20102-59",
        "d": "20102",
        "correct": "d"
    },
    {
        "question": "10. A patient had a closed treatment under anesthesia for an open dislocation of the patella after falling from a tree at home. How would you report the treatment and diagnoses?",
        "a": "27420, S83.006A",
        "b": "27562, S83.006A, W14.xxxA, Y92.017",
        "c": "27840, 27562-51, S83.006A, W14.xxxA",
        "d": "27560, S83.006A, W14.xxxA, Y92.017",
        "correct": "b"
    },
    {
        "question": "11. A patient with acute osteomyelitis of the right olecranon process underwent a sequestrectomy. How would you report the procedure?",
        "a": "99244-57, 24138-RT",
        "b": "24138-57",
        "c": "24138-RT",
        "d": "99244-RT",
        "correct": "c"
    },
    {
        "question": "12. How do you code for a revision of a total shoulder arthroplasty, including allograft when performed, for both the humeral AND glenoid components?",
        "a": "23472",
        "b": "23473",
        "c": "23474",
        "d": "23470",
        "correct": "c"
    },
    {
        "question": "13. A patient had a unilateral percutaneous intradiscal electrothermal annuloplasty (IDET) at L3-L5 with magnetic resonance guidance for needle placement. How would you report this professional service?",
        "a": "22526, 22527, 77002-26",
        "b": "22526, 22527, 77021-26",
        "c": "22899, 77021-26",
        "d": "22526, 77021-26",
        "correct": "b"
    },
    {
        "question": "14. An ESRD patient had a percutaneous transluminal balloon angioplasty of an obstructed hemodialysis AV graft. The 45-minute procedure was performed under moderate conscious sedation by the physician, who also provided radiological S&I. What code(s) capture this service?",
        "a": "37246, 36903",
        "b": "37246, 37248",
        "c": "37246, 36905",
        "d": "37246, 99152, 99153X2",
        "correct": "d"
    },
    {
        "question": "15. What code would you report for a mediastinotomy with exploration, drainage, removal of a foreign body, or biopsy, using a cervical approach?",
        "a": "39010",
        "b": "39000",
        "c": "39200",
        "d": "39401",
        "correct": "b"
    },
    {
        "question": "16. One year after a primary rhinoplasty, a patient had a secondary rhinoplasty with major revisions, closed with a single-layer technique. How would you report the second procedure?",
        "a": "30450",
        "b": "30450-78",
        "c": "30420, 12014",
        "d": "30430, 12014-59",
        "correct": "a"
    },
    {
        "question": "17. A surgeon began with a diagnostic thoracoscopy and, in the same session, proceeded with a surgical thoracoscopy to control a hemorrhage. How would you report this procedure?",
        "a": "32601",
        "b": "32601, 32654-59",
        "c": "32601, 32654-59-51",
        "d": "32654",
        "correct": "d"
    },
    {
        "question": "18. A patient had the battery changed for her single chamber permanent pacemaker pulse generator. This involved removing the old generator and reinserting a new one in the same session. How should the provider's services be coded?",
        "a": "33233, 33212-59",
        "b": "33233, 33212-51",
        "c": "33234, 33213-59",
        "d": "33234, 33213-51",
        "correct": "b"
    },
    {
        "question": "19. Five months after a previous CABG, a patient underwent another coronary artery bypass by the same surgeon, this time using three venous grafts with harvesting of a femoropopliteal vein segment. How would the current surgery be reported?",
        "a": "33512, 33530-51, 35572-51",
        "b": "33535, 35500-51, 33519",
        "c": "33512, 33530, 35572",
        "d": "33535, 33519, 33530-51, 35500",
        "correct": "c"
    },
    {
        "question": "20. A patient with a family history of colon cancer undergoes a screening colonoscopy where three benign polyps are discovered and removed via hot biopsy forceps. What codes capture these services?",
        "a": "Z12.11, Z80.0, 45315, 45331",
        "b": "Z12.11, D12.6, Z80.0, 45384",
        "c": "45378",
        "d": "Z12.11, D12.6, 45380",
        "correct": "b"
    },
    {
        "question": "21. A patient underwent a posterior, bilateral vestibuloplasty to allow her to wear complete dentures. How would you report this procedure?",
        "a": "40845",
        "b": "40843-50",
        "c": "40844",
        "d": "40843",
        "correct": "d"
    },
    {
        "question": "22. A physician places needles under fluoroscopic guidance at the base of a patient's tongue for subsequent interstitial radioelement application. How would you report the professional services for the needle placement?",
        "a": "41019, 77002-26",
        "b": "41019, 77012-26, 77021-26",
        "c": "61770, 41019-59",
        "d": "77002",
        "correct": "a"
    },
    {
        "question": "23. An 88-year-old patient's gastrostomy tube was accidentally pulled out. An interventional radiologist administered moderate sedation and, under guidance, found the entry site open and replaced the tube. The intra-service time was 45 minutes. How would the radiologist's services be reported?",
        "a": "49440, 99152, 99153*2",
        "b": "49440, 49450-59",
        "c": "49450, 99152, 99153*2",
        "d": "49450",
        "correct": "c"
    },
    {
        "question": "24. A patient had a hernioplasty to repair a recurrent, incarcerated ventral hernia, which required implantation of mesh and debridement for necrotizing soft tissue infection. How would you report this procedure?",
        "a": "49566, 11005-51, 49568",
        "b": "49565, 11005-51, 49568",
        "c": "49565",
        "d": "49525, 11006, 49568-51",
        "correct": "a"
    },
    {
        "question": "26. A healthy 32-year-old male underwent an ERCP with insertion of a nasobiliary drainage tube. In the same session, the surgeon also performed a sphincterotomy. How would you code this service?",
        "a": "43262-P1",
        "b": "43260, 43262-51, 43263-51",
        "c": "43267, 43262-51",
        "d": "43274",
        "correct": "c"
    },
    {
        "question": "27. A patient had a renal auto-transplantation that included extracorporeal surgery, reimplantation of the kidney, and a partial nephrectomy. How would you report this procedure?",
        "a": "50340, 50380, 50240-51",
        "b": "50380, 50340-51",
        "c": "50380, 50240-51",
        "d": "50380, 50220-51",
        "correct": "c"
    },
    {
        "question": "28. A 52-year-old male was admitted and treated for prostatic malignancy with interstitial transperineal prostate brachytherapy, including implantation of 51 iodine-125 seeds. How would you report the professional service for both the implantation and brachytherapy?",
        "a": "99222, 55876, 77763 x 51",
        "b": "55875, 77778",
        "c": "99221, 58720, 77770",
        "d": "58346, 77799 x 125",
        "correct": "b"
    },
    {
        "question": "29. A patient with kidney stones in both kidneys underwent extracorporeal shock wave lithotripsy (ESWL) with 3,500 shocks. How would you report this procedure?",
        "a": "50590",
        "b": "50561",
        "c": "50080",
        "d": "50081",
        "correct": "a"
    },
    {
        "question": "30. A patient was placed under general anesthesia for an excision of a local lesion of the epididymis. How would you report the surgeon's services?",
        "a": "54861-50",
        "b": "54860-47",
        "c": "54830, 00920-51",
        "d": "54830",
        "correct": "d"
    },
    {
        "question": "31. Three days after undergoing muscle repair surgery on his upper legs, a patient was taken back to the OR by the same surgeon for an unrelated plastic repair of a penis injury. What code would capture today's procedure?",
        "a": "54440-79",
        "b": "27385, 54440-59",
        "c": "27393, 54620-79",
        "d": "54440-26",
        "correct": "a"
    },
    {
        "question": "32. A patient had a bilateral laparoscopic occlusion of her fallopian tubes using a Falope ring. How would you report this procedure?",
        "a": "58615",
        "b": "58671",
        "c": "58671-50",
        "d": "58679-50",
        "correct": "b"
    },
    {
        "question": "33. An infant born at 33 weeks underwent five photocoagulation treatments to both eyes for retinopathy of prematurity, using an operating microscope. The treatments occurred once per day for five days. How would you report all of these services?",
        "a": "67229-50",
        "b": "67229 x 5",
        "c": "67229, 69990",
        "d": "67229-50, 69990",
        "correct": "a"
    },
    {
        "question": "36. A patient was admitted for an aspiration of two thyroid cysts, which was performed with CT guidance of the needle, including interpretation and report. How would you report the professional services?",
        "a": "60300-26, 76942-26",
        "b": "60300 x 2, 77012-26",
        "c": "10021, 60300-51, 77012-26",
        "d": "60300",
        "correct": "b"
    },
    {
        "question": "37. An infant with meningitis had a subdural tap through a fontanel on Monday. On Wednesday, the baby required another subdural tap, this time bilaterally. How would you report Wednesday's service?",
        "a": "61001",
        "b": "61000, 61001",
        "c": "61001-50",
        "d": "61000",
        "correct": "a"
    },
    {
        "question": "39. Dr. Martin performed an excision of a vascular lesion at the middle cranial fossa (intradural, with dural repair and graft). Her partner, Dr. Sutter, performed the infratemporal approach with decompression of the auditory canal. How should Dr. Martin report her services?",
        "a": "61590, 61606-51",
        "b": "61606-62",
        "c": "61606",
        "d": "61601",
        "correct": "c"
    },
    {
        "question": "40. How does the CPT Professional Edition define a new patient?",
        "a": "A new patient is one who has not received any professional services from the physician or another physician of the same specialty who belongs to the same group practice, within the past two years.",
        "b": "A new patient is one who has not received any professional services from the physician or another physician of the exact same specialty and subspecialty who belongs to the same group practice, within the past three years.",
        "c": "A new patient is one who has received professional services from the physician or another physician of the same specialty within the last two years for the same problem.",
        "d": "A new patient is one who has received hospital services but has never been seen in the clinic by the reporting physician.",
        "correct": "b"
    },
    {
        "question": "41. A patient had a hysterectomy in the morning and suffered a cardiac arrest that afternoon. A cardiologist responded and delivered 95 minutes of critical care, which included ordering a chest x-ray and providing ventilation management. How should you report the cardiologist's services?",
        "a": "99291, 99292",
        "b": "99291, 99292, 71045, 94002",
        "c": "71045, 94002, 99231",
        "d": "99291, 99292, 99292-52",
        "correct": "a"
    },
    {
        "question": "42. An established patient was seen for knee pain after falling off a bunk bed. The physician documented a detailed examination and moderate complexity MDM. How should the physician report the office visit?",
        "a": "99214",
        "b": "99394, 99214",
        "c": "99213",
        "d": "99203",
        "correct": "a"
    },
    {
        "question": "43. A patient saw his doctor for chest pain and a cough. After an exam and x-ray in the office, the doctor admitted the patient to the hospital for pneumonia on the same day, where he documented a comprehensive H&P and moderate complexity MDM. How would you report the physician's services for that day?",
        "a": "99214",
        "b": "99222",
        "c": "99204, 99222-51",
        "d": "99223, 99214-21",
        "correct": "b"
    },
    {
        "question": "44. A physician provides outpatient management of warfarin therapy, including review of 8 INR tests, patient instructions, and dosage adjustments over an initial 90-day period. How would you report this?",
        "a": "93793",
        "b": "93793, 99471",
        "c": "99214",
        "d": "This service is bundled with evaluation and management services",
        "correct": "a"
    },
    {
        "question": "45. A patient was admitted for an acute MI (Day 1: comprehensive H&P, high MDM). The physician visited on Day 2 & 3 (expanded problem focused exam, moderate MDM), Day 4 (problem focused exam, straightforward MDM), and discharged the patient on Day 5 (took over an hour). How would you report all services?",
        "a": "99213, 99232, 99231, 99239x2",
        "b": "99221, 99222, 99223, 99238",
        "c": "99231, 99232, 99355, 99239",
        "d": "99223, 99232, 99232, 99231, 99239",
        "correct": "d"
    },
    {
        "question": "47. An established patient, previously told he needed hospitalization for a diabetic foot ulcer, seeks a second opinion from Dr. Myers. Dr. Myers performs a comprehensive H&P and high complexity MDM, concurs with hospitalization, and sends a report back. How would Dr. Myers' visit be reported?",
        "a": "99245",
        "b": "99205",
        "c": "99215",
        "d": "99255",
        "correct": "b"
    },
    {
        "question": "48. An anesthesiologist provides general anesthesia for a 72-year-old patient with mild systemic disease who is undergoing a ventral hernia repair. How would you report the anesthesia service?",
        "a": "00834-P2, 99100",
        "b": "00832-P2, 99100",
        "c": "49560, 00834, 99100-P2",
        "d": "00832",
        "correct": "b"
    },
    {
        "question": "49. Anesthesia is administered by an anesthesiologist to a female patient with severe systemic disease for a Cesarean delivery. What code(s) correctly capture the anesthesia services?",
        "a": "01961-P3",
        "b": "00851",
        "c": "01961-P2, 99100",
        "d": "01962",
        "correct": "a"
    },
    {
        "question": "50. A physician performed a transesophageal echocardiography for a congenital cardiac condition on a 16-year-old patient, including probe placement, image acquisition, interpretation, and report. Moderate conscious sedation was administered by the same physician. What code(s) capture the services?",
        "a": "93315, 99152, 99153*2",
        "b": "00320, 99152, 99153*2",
        "c": "93315",
        "d": "93315-P1",
        "correct": "c"
    },
    {
        "question": "51. A 77-year-old new patient with severe hypertensive disease underwent cataract surgery on both eyes under general anesthesia provided by Dr. Sharon. Prior to the procedure, Dr. Sharon completed a preoperative visit. How would you report Dr. Sharon's anesthesia services?",
        "a": "99203, 00142-P2, 99100",
        "b": "66820, 00144",
        "c": "00140-P1, 99116-59",
        "d": "00142-P3, 99100",
        "correct": "d"
    },
    {
        "question": "52. A surgeon performed a cervical approach esophagoplasty with repair of a tracheoesophageal fistula and also provided the general anesthesia for the procedure. How would you report the surgeon's services?",
        "a": "00500, 43305",
        "b": "43305-47",
        "c": "00500-47",
        "d": "Both A and C",
        "correct": "b"
    },
    {
        "question": "53. Which service is not included (bundled) with anesthesia services?",
        "a": "Swan-Ganz monitoring",
        "b": "Administration of blood",
        "c": "Blood pressure monitoring",
        "d": "Mass spectrometry",
        "correct": "a"
    },
    {
        "question": "54. A procedure that usually requires local anesthesia was performed under general anesthesia due to unusual circumstances. What modifier would best describe this situation?",
        "a": "-47",
        "b": "-22",
        "c": "-23",
        "d": "-52",
        "correct": "c"
    },
    {
        "question": "55. An asymptomatic 45-year-old female has her annual bilateral screening mammography with computer-aided detection (CAD) at a hospital. How would you report the professional services for this study?",
        "a": "77066-26",
        "b": "77067-26",
        "c": "77065-26",
        "d": "77067, 77063",
        "correct": "b"
    },
    {
        "question": "56. At a freestanding radiology center, a patient had ultrasonic guidance for needle placement into two separate lesions in the left breast, requiring several passes. This included imaging supervision and interpretation. How would you report the imaging procedure?",
        "a": "76930 x 2",
        "b": "76941",
        "c": "76942 x 2-LT",
        "d": "76942-LT",
        "correct": "c"
    },
    {
        "question": "57. A patient had a DXA bone density study for her hips, pelvis, and spine at a hospital. How would you report the professional services for this study?",
        "a": "77078-26, 77080-26",
        "b": "77080-26",
        "c": "77081-26",
        "d": "77081-26, 77080-26",
        "correct": "b"
    },
    {
        "question": "58. Dr. Jones owns the x-ray equipment in his office. He ordered, performed, and interpreted a three-view film of a patient's zygomatic bone. What code captures all of Dr. Jones' services?",
        "a": "70150-26",
        "b": "70150",
        "c": "70150-TC",
        "d": "70150-52",
        "correct": "b"
    },
    {
        "question": "59. A patient received radiation treatment for stomach cancer, involving 7 MeV to a single area that required a single port and a simple block. How should the facility report this technical service?",
        "a": "77402 x 7",
        "b": "77407",
        "c": "77402",
        "d": "77402-TC",
        "correct": "c"
    },
    {
        "question": "60. A patient in her first trimester with a twin pregnancy has a transabdominal follow-up ultrasound to evaluate fetal size and a suspected abnormality from a previous scan. What code(s) correctly capture this service?",
        "a": "76816, 76816-59",
        "b": "76816 x 2",
        "c": "76801, 76802 x 2",
        "d": "76811, 76812",
        "correct": "a"
    },
    {
        "question": "61. How would you code for oncology (ovarian), biochemical assays of two proteins (CA-125 and HE4), utilizing serum, with menopausal status, where an algorithm reports a risk score?",
        "a": "81500",
        "b": "81503",
        "c": "81506",
        "d": "81508",
        "correct": "a"
    },
    {
        "question": "62. A patient had the following lab tests: Calcium, ionized; Carbon dioxide; Chloride; Creatinine; Glucose; Potassium; Sodium; and Urea Nitrogen (BUN). How should this lab work be reported?",
        "a": "80048",
        "b": "80047-52",
        "c": "82310, 82374, 82435, 82565, 82947, 84132, 84295, 84520",
        "d": "80047",
        "correct": "d"
    },
    {
        "question": "63. A pathologist performed an intra-operative consultation on a bile duct tumor requiring a frozen section, and a separate cytological evaluation on a bladder tumor. How would you report the professional services?",
        "a": "88329",
        "b": "88331-26, 88334-26",
        "c": "88331, 88332 x 2",
        "d": "88331-26, 88333-26",
        "correct": "b"
    },
    {
        "question": "64. How do you report a non-automated urinalysis by dip stick for urobilinogen, without microscopy?",
        "a": "81000",
        "b": "81001",
        "c": "81002",
        "d": "81003",
        "correct": "c"
    },
    {
        "question": "66. A pathologist provided a comprehensive clinical pathology consultation at the request of another physician, reviewing complex medical records for a hospitalized patient but without seeing the patient. A written report was provided. How would the pathologist report his services?",
        "a": "80502",
        "b": "99244",
        "c": "99244-25, 80502",
        "d": "99255-25, 80500",
        "correct": "a"
    },
    {
        "question": "67. A patient with abdominal pain and diarrhea has a fecal Calprotectin test ordered to check for Crohn's disease. How should you report the lab test?",
        "a": "82270",
        "b": "82272, 83993",
        "c": "83993",
        "d": "82271, 82272",
        "correct": "c"
    },
    {
        "question": "68. A patient had a comprehensive audiometry threshold evaluation and speech recognition testing performed on the left ear only. What code(s) capture this procedure?",
        "a": "92557-52",
        "b": "92553, 92556",
        "c": "92557",
        "d": "92700-59",
        "correct": "a"
    },
    {
        "question": "69. An adult patient received the following immunizations: yellow fever vaccine (subcutaneous), Hepatitis B vaccine (IM), and Zoster (shingles) vaccine (subcutaneous), along with the administration. How would you report these services?",
        "a": "90460, 90461 x 2, 90717-51, 90746-51, 90736-51",
        "b": "90471, 90472 x 2, 90717, 90746, 90736",
        "c": "90473, 90474 x 2, 90746, 90736, 90717",
        "d": "90471, 90472 x 2, 90736-51, 90746-51, 90717-51",
        "correct": "b"
    },
    {
        "question": "70. What code would report an internet assessment and management service by a qualified nonphysician healthcare professional to an established patient, not originating from a related service within the previous seven days?",
        "a": "96150",
        "b": "98968",
        "c": "98969",
        "d": "99444",
        "correct": "c"
    },
    {
        "question": "71. A new patient with a family history of melanoma sees a dermatologist for a consultation. The visit includes a comprehensive H&P, moderate complexity MDM, and whole body integumentary photography. A report was sent to the PCP. What codes report the dermatologist's services?",
        "a": "99244-25, 96904",
        "b": "99213",
        "c": "96904",
        "d": "99204, 96904",
        "correct": "a"
    },
    {
        "question": "73. A physician performed a percutaneous left heart catheterization with coronary angiography and left ventriculography in a hospital setting, including imaging supervision, interpretation, and report. How should the physician code these services?",
        "a": "93452-26",
        "b": "93454-26",
        "c": "93458-26",
        "d": "93459-26",
        "correct": "c"
    },
    {
        "question": "74. A patient presents with acute low back pain due to trauma. What are the correct diagnosis codes?",
        "a": "G89.11, M54.5",
        "b": "M54.5",
        "c": "G89.11",
        "d": "R52",
        "correct": "a"
    },
    {
        "question": "75. A patient presents for evaluation of his chronic bilateral knee pain. How should this be coded?",
        "a": "M25.561, M25.562, G89.4",
        "b": "M25.561, M25.562, G89.29",
        "c": "M25.561, M25.562",
        "d": "G89.29",
        "correct": "b"
    },
    {
        "question": "76. A patient is being treated for bone pain related to bilateral, central breast cancer that has metastasized. What is the correct coding and sequencing?",
        "a": "G89.3, C50.111, C50.112, C79.9",
        "b": "G89.3, C50.112, C79.81",
        "c": "C50.111, C50.112, C79.9",
        "d": "G89.3, C50.111, C50.112, C79.81",
        "correct": "a"
    },
    {
        "question": "77. A patient with asthma wakes up a couple of nights per month with coughing fits and uses an inhaler weekly, with some activity limitation. He is diagnosed with mild persistent asthma. How is this coded?",
        "a": "J45.31",
        "b": "J45.30",
        "c": "J45.998",
        "d": "J69.8",
        "correct": "b"
    },
    {
        "question": "78. A patient is admitted with severe anemia due to right breast carcinoma. The focus of care is the anemia. What is the correct sequencing and codes?",
        "a": "D63.0, C50.111",
        "b": "C50.111, D63.0",
        "c": "Sequencing depends on the focus of care",
        "d": "C50.111, D61.810",
        "correct": "b"
    },
    {
        "question": "79. If the type of diabetes mellitus is not documented in the medical record, what is the default type you should assign?",
        "a": "There are no guidelines to determine the type assignment",
        "b": "Type I and Type II",
        "c": "Type II",
        "d": "Type I",
        "correct": "c"
    },
    {
        "question": "80. A pregnant patient is admitted with enteritis due to C. difficile. In what order should you report the diagnosis codes?",
        "a": "There are no sequencing rules that would apply to code this case.",
        "b": "Symptoms, Signs, and Abnormal Clinical and Laboratory Finding Not Elsewhere Classified (Chapter 18).",
        "c": "Complications of Pregnancy, Childbirth and Puerperium (Chapter 15) codes first, followed by Infectious and Parasitic codes (Chapter 1).",
        "d": "Infectious and Parasitic codes (Chapter 1), followed by Complications of Pregnancy, Childbirth and Puerperium (Chapter 15) codes",
        "correct": "c"
    },
    {
        "question": "81. A patient received a 12 sq. cm. dermal tissue substitute of human origin for a burn on the abdomen. How would you report the supply?",
        "a": "C1762",
        "b": "Q4106 x 12",
        "c": "C1763",
        "d": "C9360 x 12",
        "correct": "a"
    },
    {
        "question": "82. During an ER visit, a patient was treated with 500 mg of azithromycin (Zithromax) through an IV route for pneumonia. How would you report the supply of this drug?",
        "a": "J0456",
        "b": "Q0144",
        "c": "J1190 x 2",
        "d": "J2020 x 2",
        "correct": "a"
    },
    {
        "question": "84. Which HCPCS code describes an addition to the lower extremity, knee disarticulation, leather socket?",
        "a": "L5624",
        "b": "L5640",
        "c": "L5105",
        "d": "L5850",
        "correct": "b"
    },
    {
        "question": "85. What modifier would most likely be used for a blepharoplasty to the upper right eyelid?",
        "a": "-E1",
        "b": "-51",
        "c": "-E3",
        "d": "-RT",
        "correct": "c"
    },
    {
        "question": "86. A type 2 diabetic patient, who is on long-term use of Lantus insulin, presents for a recheck. How is this coded?",
        "a": "E11.9, Z79.4",
        "b": "E11.65, Z79.4",
        "c": "E13.9, Z79.84",
        "d": "E10.9, Z79.4",
        "correct": "a"
    },
    {
        "question": "87. A patient presents to the ED with a type I open fracture of the shaft of the right radius. The patient is in the healing phase. How would this be coded?",
        "a": "S52.354C",
        "b": "S52.324B",
        "c": "S52.354B",
        "d": "S52.321B",
        "correct": "d"
    },
    {
        "question": "88. A patient with a secondary malignant tumor of the Bartholin's gland (from an unknown primary site) is coming in for radiation therapy. How would you report her diagnoses for today's treatment?",
        "a": "Z51.0, C79.82, C80.1",
        "b": "C79.82, Z51.0",
        "c": "C80.1, C79.82, Z51.0",
        "d": "D49.59, C79.82, Z51.0, C80.1",
        "correct": "a"
    },
    {
        "question": "89. When using the CPT index, which of the following are considered the four primary classes for main entries?",
        "a": "Procedure or service; organ or other anatomic site; condition; synonyms, eponyms, and abbreviations.",
        "b": "Abbreviations; signs and symptoms; anatomic site; and code assignment.",
        "c": "Conventions; code ranges; modifying terms; and clinical examples.",
        "d": "Procedure or service; modifiers; clinical examples; and definitions.",
        "correct": "a"
    },
    {
        "question": "90. When coding for a liver transplantation, what are the three distinct components of the physician's work?",
        "a": "Cadaver biopsy, cholecystectomy, reconstruction of the liver graft.",
        "b": "Cadaver/living donor hepatectomy, backbench work, recipient liver allotransplantation.",
        "c": "Preparations of the common bile duct, trisegment split, management of liver hemorrhage with re-exploration of post-operative abscess.",
        "d": "Hemorrhoidopexy, ligation and hepatectomy, cholecystectomy.",
        "correct": "b"
    }
],
    mockTest5: [
    {
        "question": "1. A patient with a hypertrophic scar on the left leg undergoes excision of the scar, creating a 90 sq cm defect. A split-thickness skin graft is harvested from the thigh to cover the defect. How should this be coded?",
        "a": "15110-52, 15002",
        "b": "15100, 11406",
        "c": "15100, 15002",
        "d": "15110, 15002",
        "correct": "c"
    },
    {
        "question": "2. A 17-year-old MVA victim requires repair of multiple lacerations: 8.6 cm forehead (complex), 5.5 cm right cheek (complex), 4 cm left cheek (complex), 4 cm chin (layered), and 12.5 cm chest (complex). How should these repairs be coded?",
        "a": "13132, 13133 x 4, 13101, 12052",
        "b": "13132, 13133 x 3, 13133-52, 13101, 13102, 12052",
        "c": "13132, 13133 x 3, 13101, 13102, 12052",
        "d": "13131, 13132, 13133 x 3, 13101, 13102, 12052",
        "correct": "c"
    },
    {
        "question": "3. A 36-year-old male has three benign lesions on his face and five actinic keratoses on his left arm destroyed. How would you code for the procedures?",
        "a": "17000, 17003",
        "b": "17000, 17003 x 4, 17110",
        "c": "17110",
        "d": "17280 x 5, 17000, 17003",
        "correct": "b"
    },
    {
        "question": "4. A physician removes a tumor from a patient's neck using Mohs micrographic surgery. The first stage involved four tissue blocks. The second stage required two additional tissue blocks. What are the appropriate CPT® codes?",
        "a": "17311, 17312, 17315",
        "b": "17313, 17315",
        "c": "17313, 17314, 17315",
        "d": "17311, 17312",
        "correct": "d"
    },
    {
        "question": "5. A breast mass (1.5-2 cm) was excised by sharp dissection from the left breast with clear margins confirmed by frozen section. The wound was reapproximated with a running inverted subcuticular suture. Select the procedure and diagnosis codes.",
        "a": "19120, D24.2",
        "b": "19301, N63",
        "c": "19125, D24.2",
        "d": "19101, N64.59",
        "correct": "a"
    },
    {
        "question": "6. A paraplegic patient with a sacral decubitus ulcer undergoes extensive debridement of the ulcer down to healthy tissue, including removal of part of the coccyx. A 25 sq. cm. split-thickness skin graft is then used to cover the defect. Code the procedure(s).",
        "a": "15002, 15100-51",
        "b": "15937, 15100-51",
        "c": "15937",
        "d": "15937, 15100-51, 15002",
        "correct": "b"
    },
    {
        "question": "7. A patient presents with an ingrown toenail on the right great toe. After anesthesia, the lateral border of the nail was incised and excised in total, followed by a phenol application. The patient decided to have only the right foot done. Code the procedure.",
        "a": "11765",
        "b": "11750",
        "c": "11752",
        "d": "11740",
        "correct": "b"
    },
    {
        "question": "8. A patient with back and hip pain receives a sacroiliac joint injection of Celestone and Marcaine under fluoroscopic guidance at an ambulatory surgery center. Code the procedure(s).",
        "a": "27096, 77003-26",
        "b": "20610",
        "c": "27096, 73525-26",
        "d": "27096",
        "correct": "d"
    },
    {
        "question": "9. A patient with a displaced comminuted fracture of the lateral condyle, right elbow, underwent an ORIF procedure where the fracture was manually reduced and fixed with two pins. A long arm cast was applied. What are the correct CPT® and ICD-10-CM codes?",
        "a": "24579, 29065-51, S42.431A",
        "b": "24577, S42.451A",
        "c": "24579, S42.451A",
        "d": "24575, S42.431A",
        "correct": "c"
    },
    {
        "question": "10. The physician performed a medial meniscectomy and a removal of loose bodies from the lateral compartment of the knee for a Medicare patient. Select the appropriate codes.",
        "a": "29881",
        "b": "29881, G0289",
        "c": "29880, 29874",
        "d": "G0289",
        "correct": "b"
    },
    {
        "question": "11. A 17-year-old with a sprained knee ligament is seen by an orthopedic surgeon in the emergency department. The surgeon applies a long leg walking cast. What are the procedure and diagnosis codes?",
        "a": "29358, S83.8X9A",
        "b": "29355, S83.90XA",
        "c": "27520-54, S83.429A",
        "d": "29345, S83.90XA",
        "correct": "b"
    },
    {
        "question": "12. A patient with reflex sympathetic dystrophy (RSD) receives six trigger point injections into four muscle groups. How would you code this?",
        "a": "20552 x 6",
        "b": "20610 x 6",
        "c": "20552 x 5",
        "d": "20553",
        "correct": "d"
    },
    {
        "question": "13. A 15-year-old female with a Grade I open right femur shaft fracture undergoes irrigation and debridement, including excision of devitalized bone, followed by intramedullary rodding with locking screws. What are the correct codes?",
        "a": "27506, 11044-51, S72.301B",
        "b": "27506, 11012-51, S72.301B",
        "c": "27507, 11012-51, S72.302B",
        "d": "27507, 11044-51, S72.90XB",
        "correct": "b"
    },
    {
        "question": "15. A patient is brought to the ER with multiple fractured ribs and labored breathing. A thoracic surgeon performs a tube thoracostomy for relief. What is the correct code for the procedure?",
        "a": "32100",
        "b": "32421",
        "c": "32422",
        "d": "32551",
        "correct": "d"
    },
    {
        "question": "16. At the patient's bedside, a 6 French dual lumen PICC line is inserted into the right cephalic vein of a 72-year-old patient under ultrasound guidance. Code the procedure(s).",
        "a": "36569",
        "b": "36556, 76942-26",
        "c": "36585, 77001-26",
        "d": "36569, 76942-26",
        "correct": "d"
    },
    {
        "question": "17. A patient underwent a direct laryngoscopy with injection of the vocal cords. During the surgery, an operating microscope was necessary. How should these services be reported?",
        "a": "31571",
        "b": "31561",
        "c": "31571, 69990",
        "d": "31545",
        "correct": "a"
    },
    {
        "question": "18. A 62-year-old female undergoes a CABG with three autologous saphenous vein grafts (harvested endoscopically) and a modified MAZE procedure to treat supraventricular tachycardia. Choose the procedure code(s).",
        "a": "33519, 33508, 33254-51",
        "b": "33512, 33508, 33999-51",
        "c": "33512, 33508, 33254-51",
        "d": "33512, 33508-51, 33254-51",
        "correct": "c"
    },
    {
        "question": "19. An ENT physician performed a diagnostic maxillary sinusoscopy on a patient with breathing trouble. How should the sinusoscopy be reported?",
        "a": "31237",
        "b": "31256",
        "c": "31233",
        "d": "31256-LT",
        "correct": "c"
    },
    {
        "question": "20. A patient with a history of sigmoid colon cancer undergoes a diagnostic flexible sigmoidoscopy to screen for recurrence. Three benign polyps were found and removed by hot biopsy forceps. Code the encounter.",
        "a": "45333, Z85.038, K63.5",
        "b": "45331, K63.5",
        "c": "45338, Z85.038",
        "d": "45346, K63.5, Z86.010",
        "correct": "a"
    },
    {
        "question": "21. A patient with GERD was scheduled for an upper GI endoscopy to deliver thermal energy. After anesthesia was administered, the procedure was discontinued due to a dangerous drop in blood pressure. What are the codes for the physician's service?",
        "a": "43257-73, K22.6, I95.89",
        "b": "43499, K21.9, I95.9",
        "c": "43257-74, K21.9, I95.81",
        "d": "43257-53, K21.9, I95.81, Z53.09",
        "correct": "d"
    },
    {
        "question": "22. During a colonoscopy on a patient with a history of colon polyps, a 3 mm polyp in the ascending colon and a 4 mm polyp in the rectum were both removed with hot biopsy forceps. Code the CPT® procedure(s).",
        "a": "45384",
        "b": "45384, 45384-51",
        "c": "45380, 45384",
        "d": "45388",
        "correct": "a"
    },
    {
        "question": "23. A patient with esophageal cancer undergoes a subtotal esophagectomy with a thoracotomy incision. The stomach is pulled into the chest and anastomosed to the cervical esophageal stump. What is the correct procedure code?",
        "a": "43101",
        "b": "43117",
        "c": "43107",
        "d": "43112",
        "correct": "d"
    },
    {
        "question": "24. A patient with suspected biliary obstruction undergoes an ERCP. A stone is found in the common bile duct and removed with a stone basket under radiologic guidance. How should the professional services be coded?",
        "a": "43260, 74328-26",
        "b": "43264, 74328-26",
        "c": "43265",
        "d": "43275, 74329",
        "correct": "b"
    },
    {
        "question": "25. A 30-year-old patient undergoes a laparoscopic repair of a left inguinal hernia, and mesh is tacked into place. What are the correct procedure and diagnosis codes?",
        "a": "49650-LT, K40.90",
        "b": "49505-LT, 49568, K40.90",
        "c": "49525-LT, K40.20",
        "d": "49501-LT, 49568, K40.20",
        "correct": "a"
    },
    {
        "question": "26. A 24-year-old male with chronic tonsillitis and adenoiditis undergoes a tonsillectomy and adenoidectomy. What are the procedure and diagnosis codes?",
        "a": "42826, 42831-59, J35.02",
        "b": "42826, 42831-51-59, 42809, J35.03",
        "c": "42821-50, 42809-59, J35.01, J35.02",
        "d": "42821, J35.03",
        "correct": "d"
    },
    {
        "question": "27. During a procedure for a suspected right ovarian mass, a surgeon finds a right ovarian cyst and a necrotic-looking left ovary. The surgeon performs a right ovarian cystectomy and a left salpingo-oophorectomy. Code this encounter.",
        "a": "58720-RT, 58925-LT",
        "b": "58925-RT, 58720-51-LT",
        "c": "58925, 58720-50",
        "d": "58720, 58925-51",
        "correct": "b"
    },
    {
        "question": "28. A 35-year-old male patient undergoes a circumcision using a clamp with a regional block for recurrent yeast infections. Code this procedure.",
        "a": "54150",
        "b": "54160",
        "c": "54161",
        "d": "54150-52",
        "correct": "a"
    },
    {
        "question": "29. A 55-year-old man with an elevated PSA undergoes random needle biopsies of the prostate under ultrasonic guidance at an outpatient surgical facility. How would this be coded?",
        "a": "55700, 76872-26",
        "b": "55706",
        "c": "55700, 76942-26",
        "d": "55700",
        "correct": "c"
    },
    {
        "question": "30. Using a colposcope, a physician uses electrocautery and laser vaporization to destroy an extensive number of vaginal lesions. What are the procedure and diagnosis codes?",
        "a": "57061, N89.8",
        "b": "57065, N89.8",
        "c": "57000, N85.9",
        "d": "57120, N85.9",
        "correct": "b"
    },
    {
        "question": "31. A pregnant patient with an incompetent cervix undergoes a vaginal cervical cerclage using purse-string sutures to prevent a spontaneous abortion. What are the procedure and diagnosis codes?",
        "a": "57700, O34.30",
        "b": "59320, N88.3",
        "c": "59325, N88.3",
        "d": "59320, O34.30",
        "correct": "b"
    },
    {
        "question": "32. A physician performs a cystourethroscopy with fulguration and resects a 7 cm bladder tumor. Which CPT® code(s) would you use for this service?",
        "a": "52000, 52235",
        "b": "52000, 52240",
        "c": "52240",
        "d": "52204, 52240",
        "correct": "c"
    },
    {
        "question": "33. A patient underwent repair for an ectropion of the right lower eyelid via tarsal wedge excision, and a suture repair for an ectropion of the left lower lid. Code this procedure.",
        "a": "67917-E4, 67914-E2",
        "b": "67916-E4, 67914-E2",
        "c": "67916-50",
        "d": "67923-E4, 67921-E2",
        "correct": "b"
    },
    {
        "question": "34. A patient develops a CSF leak from a lumbar puncture done three days prior. The neurologist performs a blood patch by epidural injection to repair the leak. Code the services for today's visit.",
        "a": "62272",
        "b": "62273",
        "c": "62270, 62273",
        "d": "62270, 62287",
        "correct": "b"
    },
    {
        "question": "35. A new patient presents with symptoms of flashing lights in the right eye. The ophthalmologist performs a comprehensive evaluation of the visual system, discovers a peripheral retinal tear, and uses a laser to repair it on the same day. Code this visit.",
        "a": "67210, 92004-25",
        "b": "67145, 92004-25",
        "c": "66821",
        "d": "67145",
        "correct": "b"
    },
    {
        "question": "36. A patient with cervical nerve impingement receives three injections of an anesthetic agent into the cervical plexus. Select the procedure code.",
        "a": "64400 x 3",
        "b": "64405",
        "c": "64413",
        "d": "64413 x 3",
        "correct": "c"
    },
    {
        "question": "37. A four-year-old with chronic otitis media undergoes a bilateral tympanostomy with placement of ventilating tubes under general anesthesia. Select the procedure code.",
        "a": "69420-50",
        "b": "69421-50",
        "c": "69433-50",
        "d": "69436-50",
        "correct": "d"
    },
    {
        "question": "38. A patient presents to the ED with a painful right eye. The physician identifies a corneal foreign body and removes it using a slit lamp. Code the encounter.",
        "a": "65205-RT",
        "b": "65220-RT",
        "c": "65222-RT",
        "d": "65435-RT",
        "correct": "c"
    },
    {
        "question": "39. A patient was admitted for acute diverticulitis on 2/2 and is being discharged on 2/5. The physician spent 40 minutes on the discharge service. What CPT code(s) should be reported for the discharge?",
        "a": "99233, 99239",
        "b": "99238",
        "c": "99252, 99238",
        "d": "99239",
        "correct": "d"
    },
    {
        "question": "40. An established patient has a pre-op visit for a liver transplant. The E/M service includes an expanded problem focused history, detailed exam, and moderate MDM. The physician then spends an additional 30 minutes in counseling. What CPT® codes should be reported?",
        "a": "99213, 99354",
        "b": "99214, 99358",
        "c": "99215",
        "d": "99214, 99354",
        "correct": "d"
    },
    {
        "question": "41. A physician attends the birth of a critically ill 1000g neonate at 29 weeks. The physician performs resuscitation including endotracheal intubation and insertion of an umbilical line before admitting the neonate to the NICU. What are the appropriate procedure codes?",
        "a": "99465, 99468",
        "b": "99465, 99464, 99468-25, 31500, 36510-51",
        "c": "99468, 99464",
        "d": "99465, 99468-25, 31500-59, 36510-59",
        "correct": "d"
    },
    {
        "question": "42. A new 48-year-old female patient presents with neck and back pain. The physician performs a comprehensive history, a comprehensive 8-system exam, and documents moderate MDM. Select the appropriate CPT® code for this visit.",
        "a": "99203",
        "b": "99204",
        "c": "99214",
        "d": "99244",
        "correct": "b"
    },
    {
        "question": "43. An ED physician evaluates a 4-year-old for a forearm injury. The E/M service consists of an extended HPI, extended ROS, complete PFSH, an extended 6-system exam, and moderate MDM. The physician then provides 30 minutes of moderate conscious sedation for a procedure performed by an orthopedist. Code the ED physician's services.",
        "a": "99284, 99143",
        "b": "99284-25, 99148",
        "c": "99283-25, 99143",
        "d": "99283",
        "correct": "b"
    },
    {
        "question": "44. Dr. X performs a follow-up consultation in a nursing facility for a 75-year-old male. The visit includes a problem-focused history, an expanded problem-focused exam, and low MDM. What CPT® code should be reported for Dr. X?",
        "a": "99241",
        "b": "99310",
        "c": "99308",
        "d": "99251",
        "correct": "c"
    },
    {
        "question": "45. A patient receives general anesthesia for an open pleura biopsy. An anesthesiologist medically directs a CRNA on this case while also directing two other cases. What are the appropriate codes for both providers?",
        "a": "00540-AA, 00540-QZ",
        "b": "00540-QK, 00540-QX",
        "c": "00541-AA, 00540-QZ",
        "d": "00541-QK, 00541-QX",
        "correct": "b"
    },
    {
        "question": "46. A patient receives general anesthesia for a carpal tunnel release. For postoperative pain management, the anesthesiologist also performs an axillary block. What are the appropriate codes?",
        "a": "01810",
        "b": "01810, 64417",
        "c": "01830",
        "d": "01830, 64417-59",
        "correct": "c"
    },
    {
        "question": "47. A healthy 45-year-old is having a needle thyroid biopsy. The anesthesiologist begins prep at 0900. Surgery is from 0915 to 0945. The anesthesiologist turns over care at 1000. What is the anesthesia code and time?",
        "a": "00320, one hour",
        "b": "00320, 45 minutes",
        "c": "00322, 45 minutes",
        "d": "00322, one hour",
        "correct": "d"
    },
    {
        "question": "48. A patient in labor receives a neuraxial epidural for a vaginal delivery. Due to fetal distress, a cesarean section is performed. Following delivery, the patient hemorrhages, requiring a hysterectomy. Code the anesthesia services.",
        "a": "01967, 00840",
        "b": "01962",
        "c": "01968",
        "d": "01967, 01969",
        "correct": "d"
    },
    {
        "question": "49. A patient with severe systemic disease (COPD) undergoes a CABG x 3 venous grafts on cardiopulmonary bypass. Code the anesthesia service.",
        "a": "00562-P3",
        "b": "00560-P4",
        "c": "00567-P3",
        "d": "00566-P4",
        "correct": "c"
    },
    {
        "question": "50. A healthy 11-month-old patient undergoes a bilateral, single-stage cleft lip repair. Code the anesthesia service.",
        "a": "00170-P1, 99100",
        "b": "00102-P1",
        "c": "00102-P1, 99100",
        "d": "00170-P1",
        "correct": "c"
    },
    {
        "question": "51. The physician requests a dual energy absorptiometry (DXA) of the foot. Which code should be reported for this diagnostic test?",
        "a": "77080",
        "b": "77081",
        "c": "77078",
        "d": "77077",
        "correct": "b"
    },
    {
        "question": "52. A patient with colon cancer receives seven radiation treatments. During the course of treatments, the physician views port films, reviews records, and assesses the patient's response. How do you code for the radiation treatment management?",
        "a": "77427",
        "b": "77431 x 4",
        "c": "77427 x 2",
        "d": "77432",
        "correct": "a"
    },
    {
        "question": "54. Using ultrasound guidance in the office, a physician performed a percutaneous needle core biopsy on a suspicious lump on the patient's right breast. Code this encounter.",
        "a": "10022-RT",
        "b": "19101-RT, 76942",
        "c": "19083-RT, 76942",
        "d": "19083-RT",
        "correct": "d"
    },
    {
        "question": "55. Due to an elevated CEA level two years after a colon resection, a patient's oncologist ordered a diagnostic liver ultrasound. Code this encounter.",
        "a": "76700",
        "b": "78216",
        "c": "76705",
        "d": "76970",
        "correct": "c"
    },
    {
        "question": "56. The physician orders a heart CT without contrast to evaluate the amount of coronary calcium. What is the correct code?",
        "a": "75571",
        "b": "75572",
        "c": "75574",
        "d": "75557",
        "correct": "a"
    },
    {
        "question": "57. A surgical specimen from the proximal jejunum, resected for adenocarcinoma, was submitted for gross and microscopic examination. The correct code for this service is:",
        "a": "88300",
        "b": "88309",
        "c": "88304",
        "d": "88305",
        "correct": "b"
    },
    {
        "question": "58. A patient with rheumatoid arthritis is being treated with gold. The physician orders a therapeutic drug test to measure the level of gold. What is the correct code?",
        "a": "80172",
        "b": "80150",
        "c": "80172",
        "d": "80299",
        "correct": "a"
    },
    {
        "question": "59. Which of the following panels does NOT include chloride?",
        "a": "80061",
        "b": "80050",
        "c": "80053",
        "d": "80047",
        "correct": "a"
    },
    {
        "question": "60. Which of the following coding combinations is an example of unbundling?",
        "a": "80048, 80061",
        "b": "80076, 80100",
        "c": "80061, 83718, 84478",
        "d": "82310, 82355, 82374",
        "correct": "c"
    },
    {
        "question": "61. Following follicular fluid retrieval for IVF, a physician uses a microscope to examine the fluid to identify oocytes. What is the code for this laboratory service?",
        "a": "89250",
        "b": "89254",
        "c": "89255",
        "d": "89258",
        "correct": "b"
    },
    {
        "question": "62. A bone marrow specimen from a patient with myelofibrosis is sent to pathology for examination. What is the appropriate code for the pathologist's service?",
        "a": "88304",
        "b": "88305",
        "c": "88309",
        "d": "88307",
        "correct": "b"
    },
    {
        "question": "63. A patient scheduled for chemotherapy is found to be severely dehydrated. The physician cancels chemotherapy and instead orders hydration therapy for 1 hour and 10 minutes. Select the code(s).",
        "a": "96413-53, 96360",
        "b": "96360",
        "c": "96360, 96361",
        "d": "96413, 96361",
        "correct": "b"
    },
    {
        "question": "64. A cardiologist at a hospital performs a left heart catheterization with selective coronary angiography and left ventriculography, including all supervision and interpretation. The CPT® code is:",
        "a": "93458",
        "b": "93452",
        "c": "93452, 93563",
        "d": "93452, 93454",
        "correct": "a"
    },
    {
        "question": "65. The correct code for OMT performed on the cervical, thoracic, and sacral regions would be:",
        "a": "97110",
        "b": "98941",
        "c": "98926",
        "d": "97124",
        "correct": "c"
    },
    {
        "question": "66. A physician oversees a home health agency's plan of care for a patient with cystic fibrosis on a ventilator. On day 20 of the month, the physician has spent a total of 45 minutes on oversight. How should this be coded?",
        "a": "94002",
        "b": "94003",
        "c": "94005",
        "d": "94004",
        "correct": "c"
    },
    {
        "question": "67. Photodynamic therapy involving external application of light was used to destroy premalignant lesions on a patient's lower lip. Code the encounter.",
        "a": "96573",
        "b": "96910",
        "c": "96567",
        "d": "96913",
        "correct": "c"
    },
    {
        "question": "68. A patient presents to see the nurse for a scheduled 1000 mcg vitamin B12 injection, ordered at the last visit. The physician is in the office. The nurse administers the injection intramuscularly. How should this be coded?",
        "a": "99211-25, 96372, J3420",
        "b": "99211-25, J3420",
        "c": "96372, J3420",
        "d": "96401, J3420",
        "correct": "c"
    },
    {
        "question": "69. In the inpatient setting, a psychiatrist provides psychotherapy for 30 minutes. What is the procedure code?",
        "a": "90834",
        "b": "90832",
        "c": "90845",
        "d": "90791",
        "correct": "b"
    },
    {
        "question": "70. What is orchitis?",
        "a": "Inner ear imbalance",
        "b": "Lacrimal infection",
        "c": "Inflammation of testis",
        "d": "Inflammation of an ilioinguinal hernia",
        "correct": "c"
    },
    {
        "question": "71. The wound was debrided. What was done to the wound?",
        "a": "It was closed with layered sutures and dressed",
        "b": "It was medicated and left open to heal",
        "c": "It was cleansed of foreign materials or dead tissue",
        "d": "It was examined radiographically for defects",
        "correct": "c"
    },
    {
        "question": "72. Which of the following patients might be documented as having meconium staining?",
        "a": "Woman with renal failure",
        "b": "Teenage boy with sickle cell anemia",
        "c": "Newborn with pneumonia",
        "d": "Man with alcoholic cirrhosis of the liver",
        "correct": "c"
    },
    {
        "question": "73. Which of the following anatomical sites have septums?",
        "a": "Nose, heart",
        "b": "Kidney, lung",
        "c": "Sternum, coccyx",
        "d": "Brain, liver",
        "correct": "a"
    },
    {
        "question": "74. Lordosis is a disorder of which anatomical site?",
        "a": "Spine",
        "b": "Integument",
        "c": "Male genitalia",
        "d": "Eye",
        "correct": "a"
    },
    {
        "question": "75. What occurs in angiography?",
        "a": "The veins or arteries are viewed by X-ray",
        "b": "The patient is checked for angina",
        "c": "The heart is viewed using ultrasonography",
        "d": "The electrical current of the heart is mapped",
        "correct": "a"
    },
    {
        "question": "76. A newborn in the NICU is being treated for herpetic vesicles on her torso and lower extremities. Code the patient's diagnosis.",
        "a": "B00.9",
        "b": "P35.2",
        "c": "A60.09",
        "d": "B00.0",
        "correct": "b"
    },
    {
        "question": "78. The patient has a history of symptomatic HIV. What is the diagnosis code?",
        "a": "Z21",
        "b": "B20",
        "c": "Z71.7",
        "d": "R75",
        "correct": "b"
    },
    {
        "question": "79. A mother at 38 weeks gestation advances to severe pre-eclampsia during labor, leading to a C-section. The male infant weighs 1587 gm, has low Apgars, and shows evidence of intrauterine growth retardation. Select the best code sequence for the infant's chart.",
        "a": "P00.0, P03.810, Z37.0",
        "b": "P00.0, P03.811, P05.16, Z38.01",
        "c": "P00.0, P03.811, P05.16, Z38.01",
        "d": "P00.0, P03.810, P05.05, Z37.1",
        "correct": "c"
    },
    {
        "question": "80. Which of the following Z codes can be reported as a first listed code?",
        "a": "Z37.0",
        "b": "Z79.890",
        "c": "Z87.710",
        "d": "Z00.129",
        "correct": "d"
    },
    {
        "question": "81. A child is diagnosed with congenital tritanopia, a condition his mother also has. Code the diagnosis.",
        "a": "Q14.8",
        "b": "H53.53",
        "c": "H53.55",
        "d": "Q15.8",
        "correct": "c"

    },
    {
        "question": "82. What is the full CPT® code description for 61535?",
        "a": "Craniotomy with elevation of bone flap; for subdural implantation of an electrode array, for long-term seizure monitoring",
        "b": "Craniotomy with elevation of bone flap; for excision of epileptogenic focus without electrocorticography during surgery",
        "c": "for removal of epidural or subdural electrode array, without excision of cerebraltissue (separate procedure)",
        "d": "for removal ofepidural or subdural electrode array, without excision of cerebral tissue (separate procedure)",
        "correct": "b"
    },
    {
        "question": "83. Which place of service code is reported for fracture care performed by an orthopedic physician in the emergency department?",
        "a": "11",
        "b": "20",
        "c": "22",
        "d": "23",
        "correct": "d"
    },
    {
        "question": "84. Which of the following statements regarding ICD-10-CM coding conventions is TRUE?",
        "a": "If the same condition is described as both acute and chronic, code only the acute condition.",
        "b": "Only assign a combination code when the Alphabetic Index explanation directs the coder to use it.",
        "c": "An ICD-10-CM code is still valid even if it has not been coded to the full number of digits required.",
        "d": "Signs and symptoms that are integral to the disease process should not be assigned as additional codes, unless otherwise instructed.",
        "correct": "d"
    },
    {
        "question": "85. Which of the following is an example of fraud?",
        "a": "Reporting the code for ultrasound guidance when used to perform a liver biopsy.",
        "b": "Reporting a biopsy and excision performed on the same skin lesion during the same encounter.",
        "c": "Failing to append modifier 26 on an X-ray that is performed in the physician's office.",
        "d": "Failure to append modifier 57 on the E/M service performed the day prior to a minor procedure.",
        "correct": "b"
    },
    {
        "question": "86. Which of the following statements regarding advanced beneficiary notices (ABN) is TRUE?",
        "a": "An ABN must specify only the CPT® code that Medicare is expected to deny.",
        "b": "A generic ABN stating a denial is possible is acceptable.",
        "c": "An ABN must be completed before delivery of items or services are provided.",
        "d": "An ABN must be obtained from a patient even in a medical emergency when the services are not covered.",
        "correct": "c"
    },
    {
        "question": "87. Which of the following services are covered by Medicare Part B?",
        "a": "Inpatient chemotherapy",
        "b": "Minor surgery performed in a physician's office",
        "c": "Routine dental care",
        "d": "Assisted living facility charges",
        "correct": "b"
    },
    {
        "question": "88. A patient with a known arrhythmia presented to an outpatient clinic for the insertion of a cardiac event recorder. What is the proper HCPCS Level II code for this device?",
        "a": "C1764",
        "b": "C1771",
        "c": "C1777",
        "d": "C1785",
        "correct": "a"
    },
    {
        "question": "89. A physician performed manipulation of a closed distal radius fracture on a 12-year-old male and placed a short arm fiberglass cast. What is the HCPCS Level II code for the supply?",
        "a": "Q4012",
        "b": "Q4011",
        "c": "Q4010",
        "d": "Q4009",
        "correct": "c"
    },
    {
        "question": "90. An insulin pump of 100 units is refilled. Which code reports the supply of insulin for the pump?",
        "a": "J1817",
        "b": "J1815 x 20",
        "c": "J1817 x 2",
        "d": "J1835",
        "correct": "c"
    }
],
mockTest6: [
    {
        "question": "1. A 46-year-old female, with a previous biopsy indicating positive margins, has an 8cm malignant lesion excised from her neck with a layered closure. What are the code(s) for this procedure?",
        "a": "11426",
        "b": "11626",
        "c": "11626, 12044-51",
        "d": "11426, 13132, 13133",
        "correct": "c"
    },
    {
        "question": "2. A 64-year-old female sustained multiple lacerations. The ED physician performed an intermediate repair of the face (6 cm total) and an intermediate repair of the arm and leg (10 cm total). Lacerations on the hand and foot were closed with adhesive strips. Select the appropriate procedure codes.",
        "a": "12014, 12034-51, 12002-51",
        "b": "12053, 12034-51, 12002-51",
        "c": "12014, 12034-51",
        "d": "12053, 12034-51",
        "correct": "d"
    },
    {
        "question": "4. A 76-year-old patient with dermatochalasis undergoes a bilateral upper blepharoplasty where an elliptical incision is made and excess skin is excised. The wounds are closed with sutures. What is the correct CPT code?",
        "a": "15822, 15823-51",
        "b": "15823-50",
        "c": "15822-50",
        "d": "15820-LT, 15820-RT",
        "correct": "c"
    },
    {
        "question": "5. A patient with basal cell carcinoma on his upper back undergoes Mohs surgery. Stage one involved three tissue blocks. Stage two involved six tissue blocks. No tumor was identified after the final stage. What procedure codes should be reported?",
        "a": "17313, 17314 x 2",
        "b": "17313, 17315",
        "c": "17260, 17313, 17314",
        "d": "17313, 17314, 17315",
        "correct": "d"
    },
    {
        "question": "6. A 45-year-old male has a 1.2 cm basal cell carcinoma excised from his right nose (excised diameter 1.5 cm), creating a 1.8 cm primary defect. The defect is repaired with a 3 sq cm adjacent tissue transfer (advancement flap). Which CPT code(s) should be used?",
        "a": "14060",
        "b": "11642, 14060",
        "c": "11642, 15115",
        "d": "15574",
        "correct": "a"
    },
    {
        "question": "7. A 52-year-old female has a 4x4 cm well-encapsulated lipoma excised from the subcutaneous tissue of her right flank. What CPT code should be reported?",
        "a": "21932, D17.9",
        "b": "21935, D17.39",
        "c": "21931, D17.39",
        "d": "11404, R19.09",
        "correct": "c"
    },
    {
        "question": "8. An infant with genu valgum undergoes a bilateral medial distal femur hemiepiphysiodesis using an Orthofix figure-of-eight plate on each knee. What procedure code should be used?",
        "a": "27470-50",
        "b": "27475-50",
        "c": "27472-50",
        "d": "27485-50",
        "correct": "d"
    },
    {
        "question": "9. A 42-year-old male with a frozen left shoulder undergoes an arthroscopic procedure involving the release of the rotator interval, superior and middle glenohumeral ligaments, and a circumferential release of the capsule. What CPT code describes this procedure?",
        "a": "23450-LT",
        "b": "23466-LT",
        "c": "29805-LT, 29806-51-LT",
        "d": "29825-LT",
        "correct": "d"
    },
    {
        "question": "10. A patient undergoes posterior interbody fusions at L3-4, L4-5, and L5-S1, with laminectomies and discectomies. The fusions used allografts augmented with autogenous bone from the iliac crest and posterior instrumentation (titanium rods and screws). Select the appropriate CPT code(s).",
        "a": "22612, 22614 x 2, 22842, 20938, 20930",
        "b": "22533, 22534 x 2, 22842",
        "c": "22630, 22632 x 2, 22842, 20938, 20930",
        "d": "22554, 22632 x 2, 22842",
        "correct": "c"
    },
    {
        "question": "11. A 46-year-old female with a displaced impacted Colles fracture of the left distal radius and ulna undergoes closed reduction with the application of a uniplane external fixator. What CPT codes should be reported?",
        "a": "25600-LT, 20692-51",
        "b": "25605-LT, 20690-51",
        "c": "25606-LT",
        "d": "25607-LT",
        "correct": "b"
    },
    {
        "question": "12. A 66-year-old female with Dupuytren's disease undergoes a subtotal palmar fasciectomy on the right hand, which includes the release of the ring digit MP joint and excision of diseased fascia involving the digital nerve. What procedure code should be used?",
        "a": "26123-RT, 26125",
        "b": "26121-RT",
        "c": "26035-RT",
        "d": "26040-RT",
        "correct": "a"
    },
    {
        "question": "13. A 67-year-old patient with metastatic colon cancer has an Infuse-A-Port placed for chemotherapy. The procedure involves tunneling a catheter into the left subclavian vein and creating a subcutaneous pocket for the port, all under fluoroscopic guidance. What code should be used?",
        "a": "36556, 77001-26",
        "b": "36558",
        "c": "36561, 77001-26",
        "d": "36571",
        "correct": "c"
    },
    {
        "question": "14. A 50-year-old male with a moderate-sized right pleural effusion undergoes a thoracentesis (needle aspiration) to drain 800 cc of fluid under ultrasound guidance. What procedure code should be used?",
        "a": "32554, 76942-26",
        "b": "32400, 77002-26",
        "c": "32405, 76942-26",
        "d": "32400, 77012-26",
        "correct": "a"
    },
    {
        "question": "15. A 59-year-old male undergoes a re-do left carotid endarterectomy for recurrent stenosis. The procedure involves reopening the previous incision, dissection, shunting, removal of intimal hyperplasia, and closure with a Dacron patch. Which CPT code(s) should be used?",
        "a": "35301",
        "b": "35301, 35390",
        "c": "35302",
        "d": "35311, 35390",
        "correct": "b"
    },
    {
        "question": "16. A 79-year-old male with symptomatic bradycardia receives a new dual-chamber (DDD) permanent pacemaker. The procedure involves creating a subcutaneous pocket and transvenously placing leads in the right atrium and ventricle. What code should be used?",
        "a": "33208",
        "b": "33212",
        "c": "33228",
        "d": "33235",
        "correct": "a"
    },
    {
        "question": "17. A 58-year-old male, one month status post pneumonectomy, has a planned return to surgery for the removal of a tunneled cuffed pleural catheter that was placed to drain a post-pneumonectomy empyema. The correct CPT code is:",
        "a": "32440-78",
        "b": "32035-58",
        "c": "32036-79",
        "d": "32552-58",
        "correct": "d"
    },
    {
        "question": "18. A patient with a failing AV graft returns to the OR the day after a revision. An open thrombectomy is performed, along with a balloon angioplasty of the venous anastomosis to remove a pseudo-intima causing a flow defect. Select the appropriate codes for this visit.",
        "a": "36831-76, 35460-51-76, 75978-26",
        "b": "36831, 35460-51, 75978-26",
        "c": "36831-78, 75791-26, 35460-78, 75978-26",
        "d": "36831-58, 35460-51-58, 75978-26",
        "correct": "c"
    },
    {
        "question": "19. A 52-year-old patient with chronic cholecystitis undergoes a laparoscopic cholecystectomy where multiple adhesions were taken down and the gallbladder was removed. What CPT and ICD-10-CM codes should be reported?",
        "a": "47564, K80.18",
        "b": "47562, K81.1",
        "c": "47610, K80.64",
        "d": "47600, K81.9",
        "correct": "b"
    },
    {
        "question": "20. A 70-year-old female undergoes a laparoscopic repair of an incarcerated ventral hernia, where adhered omentum was reduced and mesh was tacked on to cover the defect. What procedure code should be used?",
        "a": "49560, 49568",
        "b": "49653",
        "c": "49652",
        "d": "49653, 49568",
        "correct": "b"
    },
    {
        "question": "21. A 50-year-old male with acute appendicitis undergoes a laparoscopic appendectomy. A window was made in the mesoappendix and the appendix was divided and removed. What is the appropriate code for this visit?",
        "a": "44970",
        "b": "44950",
        "c": "44960",
        "d": "44979",
        "correct": "a"
    },
    {
        "question": "22. An 82-year-old female with a proximal small bowel obstruction undergoes an open procedure involving extensive and time-consuming lysis of adhesions to free the entire gastrointestinal tract. What is the correct CPT code?",
        "a": "44005",
        "b": "44180",
        "c": "44005-22",
        "d": "44180-59",
        "correct": "c"
    },
    {
        "question": "23. A 15-year-old female with chronic tonsillitis and hypertrophied tonsils undergoes a bilateral tonsillectomy by dissection. Due to edema, part of the uvula was also removed and oversewn. Which CPT code(s) should be used?",
        "a": "42820, 42106-51",
        "b": "42825, 42104-51",
        "c": "42826, 42106-51",
        "d": "42842",
        "correct": "c"
    },
    {
        "question": "24. A 34-year-old male undergoes an open ventral herniorrhaphy where the hernia sac was reduced and a large plug of mesh was placed into the fascial defect and sutured. What procedure code(s) should be used?",
        "a": "49560",
        "b": "49561, 49568",
        "c": "49652",
        "d": "49560, 49568",
        "correct": "d"
    },
    {
        "question": "25. A 45-year-old male donates his kidney to his son. The procedure is a laparoscopic donor nephrectomy where the kidney is isolated, the renal artery and vein are divided, and the kidney is extracted and placed on ice. The correct CPT code is:",
        "a": "50543",
        "b": "50547",
        "c": "50300",
        "d": "50320",
        "correct": "b"
    },
    {
        "question": "26. A 67-year-old female with urinary incontinence undergoes a cystoscopy and placement of a suburethral sling. The sling is weaved around the urethra and brought up to a suprapubic incision without tension. What code should be used?",
        "a": "57288",
        "b": "57287",
        "c": "52000, 57288",
        "d": "52000, 51992",
        "correct": "a"
    },
    {
        "question": "27. A 16-day-old male baby undergoes a repeat circumcision due to redundant foreskin from the original procedure. The excess foreskin was removed and the skin surfaces were sutured. Select the appropriate code.",
        "a": "54150",
        "b": "54160",
        "c": "54163",
        "d": "54164",
        "correct": "c"
    },
    {
        "question": "28. A 22-year-old patient at 7.5 weeks pregnant undergoes a suction curettage, dilation and evacuation (D&E) to terminate the pregnancy. Which CPT code should be used?",
        "a": "59840",
        "b": "59841",
        "c": "59812",
        "d": "59851",
        "correct": "b"
    },
    {
        "question": "29. A 37-year-old female with menorrhagia undergoes a hysteroscopic endometrial ablation and a laparoscopic bilateral salpingo-oophorectomy for sterilization. What are the codes for these procedures?",
        "a": "58661, 58353-51",
        "b": "58661, 58563-51",
        "c": "58660, 58563-51",
        "d": "58662, 58563-51",
        "correct": "b"
    },
    {
        "question": "30. A patient's laparoscopic treatment for a left tubal ectopic pregnancy was terminated due to body habitus. The procedure was converted to an open surgery where the left fallopian tube was removed (salpingectomy). What code(s) should be used?",
        "a": "59150, 59120",
        "b": "59151",
        "c": "59121",
        "d": "59120",
        "correct": "d"
    },
    {
        "question": "31. A 55-year-old female with a symptomatic rectocele undergoes a posterior colporrhaphy, where fascial tissue is brought together to reduce the rectocele. What procedure code should be reported?",
        "a": "45560",
        "b": "57284",
        "c": "57250",
        "d": "57240",
        "correct": "c"
    },
    {
        "question": "32. A 64-year-old female undergoes removal of a previously implanted intrathecal pain pump and catheter due to a possible infection. What are the CPT and ICD-10-CM codes for this procedure?",
        "a": "62365, 62350-51, T85.89XA, Z45.49",
        "b": "62360, 62355, T81.4XXA",
        "c": "62365, 62355-51, T85.79XA",
        "d": "36590, T85.89XA, T88.8XXA",
        "correct": "c"
    },
    {
        "question": "33. A 73-year-old male with progressive gait instability and ventriculomegaly on MRI undergoes a right frontal ventriculoperitoneal shunt placement with a programmable valve. What is the correct code?",
        "a": "62220",
        "b": "62223",
        "c": "62190",
        "d": "62192",
        "correct": "b"
    },
    {
        "question": "34. What is the CPT code for the decompression of the median nerve in the carpal tunnel at the wrist?",
        "a": "64704",
        "b": "64713",
        "c": "64721",
        "d": "64718",
        "correct": "c"
    },
    {
        "question": "35. A 2-year-old male under general anesthesia has multiple chalazia incised and drained from both the upper and lower lids of the right eye. What code should be used?",
        "a": "67801",
        "b": "67805",
        "c": "67800",
        "d": "67808",
        "correct": "d"
    },
    {
        "question": "36. A patient with cervical stenosis undergoes bilateral cervical laminectomy at C3 through C6, with foraminotomies at C4, C5, and C6, and facetectomy. Which CPT codes should be used?",
        "a": "63045-50, 63048-50",
        "b": "63020-50, 63035-50, 63035-50",
        "c": "63015-50",
        "d": "63045, 63048 x 3",
        "correct": "d"
    },
    {
        "question": "37. An extracapsular cataract removal is performed on the right eye. The procedure requires an iris expansion device and involves phacoemulsification and insertion of an intraocular lens. What code should be used?",
        "a": "66983",
        "b": "66984",
        "c": "66982",
        "d": "66983",
        "correct": "c"
    },
    {
        "question": "38. An extensive entropion repair is performed on the left lower eyelid, involving undermining and deep sutures, along with a tarsal strip procedure. The correct CPT code is:",
        "a": "67914-E4",
        "b": "67924-E2",
        "c": "67921-E2",
        "d": "67917-E1",
        "correct": "b"
    },
    {
        "question": "39. An 80-year-old established patient returns to the gynecologist's office for a routine pessary cleaning performed by the nurse. What CPT® and ICD-10-CM codes should be used for this service?",
        "a": "99201, Z97.5",
        "b": "99211, Z44.8",
        "c": "99202, T83.6XXA",
        "d": "99212, Z46.89",
        "correct": "b"
    },
    {
        "question": "40. A patient's primary care physician sees him in the ER for constipation, nausea, and vomiting. The physician admits the patient to the hospital on the same day, documenting a detailed history, comprehensive exam, and moderate MDM. Which E/M service is reported?",
        "a": "99285",
        "b": "99284",
        "c": "99221",
        "d": "99222",
        "correct": "c"
    },
    {
        "question": "41. A neonatologist attends the delivery of a 20-day-old infant, admits the baby to the NICU for cyanosis, and performs intubation, ventilation management, and a complete echocardiogram, which revealed congenital heart disease. Select the correct code(s) for the physician's service.",
        "a": "99468-25, 93303-26",
        "b": "99471-25, 31500, 94002, 93303",
        "c": "99460-25, 31500, 94002, 93303",
        "d": "99291-25, 93303",
        "correct": "a"
    },
    {
        "question": "42. A 50-year-old established patient sees her PCP for hypertension (expanded problem focused exam, low MDM). She then discusses her anxiety over an abnormal Pap smear. The physician spends an additional 45 minutes in counseling, for a total visit time of 60 minutes. What code(s) should be used?",
        "a": "99215",
        "b": "99213, 99354",
        "c": "99213, 99354, 99355",
        "d": "99214",
        "correct": "a"
    },
    {
        "question": "43. A patient was admitted yesterday for possible gallstones. On the following day, the admitting physician performs a subsequent hospital visit with a detailed history, detailed exam, and low MDM, and recommends a cholecystectomy. What code should be reported for this E/M service?",
        "a": "99253",
        "b": "99232",
        "c": "99233",
        "d": "99234",
        "correct": "c"
    },
    {
        "question": "44. A patient is seen in the ER with an acute asthma exacerbation. The ER physician documents a comprehensive H&P and moderate complexity MDM, gives three nebulizer treatments, and decides to place the patient in observation care. Select the appropriate code(s) for the initial observation care.",
        "a": "99284, 99220",
        "b": "99219",
        "c": "99284",
        "d": "99235",
        "correct": "b"
    },
    {
        "question": "45. A new patient office visit includes a detailed history (extended HPI, extended ROS, complete PFSH), a detailed exam (extended 6 systems), and high complexity MDM. Which E/M service level is supported?",
        "a": "99205",
        "b": "99204",
        "c": "99203",
        "d": "99202",
        "correct": "c"
    },
    {
        "question": "46. A 42-year-old with renal pelvis cancer and controlled type II diabetes receives general anesthesia for a laparoscopic radical nephrectomy. What are the correct CPT® and ICD-10-CM codes for the anesthesia service?",
        "a": "00860-P1, C64.9, E11.9",
        "b": "00840-P3, C65.9, E11.9",
        "c": "00862-P2, C65.9, E11.9",
        "d": "00868-P2, C79.00, E11.9",
        "correct": "c"
    },
    {
        "question": "47. A healthy 32-year-old with a closed distal radius fracture received monitored anesthesia care (MAC) for an ORIF of the distal radius. What is the code for the anesthesia service?",
        "a": "01830-P1",
        "b": "01860-QS-P1",
        "c": "01830-QS-P1",
        "d": "01860-QS-G9-P1",
        "correct": "c"
    },
    {
        "question": "48. A 10-month-old child is taken to the operating room for removal of a laryngeal mass. What is the appropriate anesthesia code?",
        "a": "00320",
        "b": "00326",
        "c": "00320, 99100",
        "d": "00326, 99100",
        "correct": "b"
    },
    {
        "question": "49. A 6-month-old patient is administered general anesthesia to repair a cleft palate. What anesthesia code(s) should be used?",
        "a": "00170, 99100",
        "b": "00172",
        "c": "00172, 99100",
        "d": "00176",
        "correct": "c"
    },
    {
        "question": "50. A 50-year-old female, status post left mastectomy, now returns for reconstruction with a single TRAM flap and a right mastopexy for asymmetry. Code the anesthesia for this procedure.",
        "a": "00404",
        "b": "00402",
        "c": "00406",
        "d": "00400",
        "correct": "b"
    },
    {
        "question": "51. A patient having a total knee replacement receives general anesthesia. The surgeon also requests the anesthesiologist insert a lumbar epidural for postoperative pain management, which the anesthesiologist manages for two days. How should the anesthesiologist's services be coded?",
        "a": "01400-AA, 62319",
        "b": "01402-AA, 01996 x 2",
        "c": "01402-AA, 62319, 01996 x 2",
        "d": "01400-AA, 62319",
        "correct": "c"
    },
    {
        "question": "52. What is the appropriate code to report remote afterloading high dose rate radionuclide interstitial or intracavitary brachytherapy involving 10 channels?",
        "a": "77770",
        "b": "77771",
        "c": "77772",
        "d": "77786",
        "correct": "c"
    },
    {
        "question": "53. A patient with prostate cancer has a complete transrectal ultrasonography for dosimetry purposes, followed by transrectal ultrasound guidance for the percutaneous placement of I-125 seeds. Select the appropriate codes.",
        "a": "55860, 76942-26",
        "b": "55875, 76965-26",
        "c": "55860, 76873-26",
        "d": "55875, 77778-26, 76965-26",
        "correct": "d"
    },
    {
        "question": "54. A 76-year-old female has x-rays of the right wrist (oblique and lateral views) in the ED, which reveal a grade I open displaced distal radius fracture. What radiological service and ICD-10-CM codes should be reported?",
        "a": "73100-26, S52.509B, W18.49XA, Y92.099",
        "b": "73110-26, S52.509B, Y92.099",
        "c": "73115-26, S52.509A, W18.49XA, Y92.099",
        "d": "73100-26, S52.509C, W18.49XA, Y92.099",
        "correct": "a"
    },
    {
        "question": "55. A post-menopausal female undergoes a CT bone density study of the spine to screen for osteoporosis. Which CPT code should be used?",
        "a": "77084",
        "b": "77080",
        "c": "77078",
        "d": "72082",
        "correct": "c"
    },
    {
        "question": "56. A patient at 15 weeks with a twin pregnancy has a follow-up transabdominal ultrasound to reassess anatomic abnormalities of both fetuses found on a previous scan. What code(s) should be used?",
        "a": "76815",
        "b": "76816, 76816-59",
        "c": "76801, 76802",
        "d": "76805, 76810",
        "correct": "b"
    },
    {
        "question": "57. What is the proper coding for brachytherapy isodose planning that uses five sources in two channels?",
        "a": "77316",
        "b": "77317",
        "c": "77318",
        "d": "77317, 77300",
        "correct": "b"
    },
    {
        "question": "58. A physician orders a comprehensive metabolic panel, an ionized calcium test, and a basic metabolic panel. How should this be reported?",
        "a": "80053, 80047",
        "b": "80053",
        "c": "80047, 82040, 82247, 82310, 84075, 84155, 84460, 84450",
        "d": "80053, 82330",
        "correct": "d"
    },
    {
        "question": "59. Which is the proper coding for an obstetric panel with HIV-1 antigen(s), with HIV-1 and HIV-2 antibodies, single result?",
        "a": "80055",
        "b": "80055, 87389",
        "c": "80081",
        "d": "85025, 86780",
        "correct": "c"
    },
    {
        "question": "60. Which modifier is used to indicate a repeat clinical diagnostic laboratory test?",
        "a": "-52",
        "b": "-91",
        "c": "-90",
        "d": "-92",
        "correct": "b"
    },
    {
        "question": "61. A patient undergoes an oral glucose tolerance test where five blood specimens were taken over three hours. What code(s) should be reported?",
        "a": "82947 x 5",
        "b": "82946",
        "c": "80422",
        "d": "82951, 82952 x 2",
        "correct": "d"
    },
    {
        "question": "62. A physician orders a blood gas for oxygen saturation (O2) only and performs the arterial puncture. An hour later, the test is repeated. Select the codes for reporting both services.",
        "a": "82805, 82805-51",
        "b": "82810, 82810-91",
        "c": "82803, 82803-51",
        "d": "82805, 82805-90",
        "correct": "b"
    },
    {
        "question": "63. Cells from amniotic fluid are analyzed for chromosomes. A geneticist performs the analysis with two G-banded karyotypes, analyzing 30 cells total. Select the lab codes.",
        "a": "88248",
        "b": "88267, 88280, 88285",
        "c": "88273, 88280, 88291",
        "d": "88267 x 2, 88285",
        "correct": "b"
    },
    {
        "question": "64. Sperm is prepared via a washing method, and then each of 10 oocytes or fewer is injected with sperm for fertilization (ICSI). Choose the CPT® codes.",
        "a": "89257, 89280",
        "b": "89260, 89280",
        "c": "89261, 89280",
        "d": "89260, 89268",
        "correct": "b"
    },
    {
        "question": "65. A patient with chronic renal failure is evaluated by his physician after a peritoneal dialysis catheter placement to ensure the dialysate prescription is correct. What code should be reported for this evaluation?",
        "a": "90935",
        "b": "90937",
        "c": "90947",
        "d": "90945",
        "correct": "d"
    },
    {
        "question": "66. An established patient with dry eye syndrome in both eyes has her corneas measured by an ophthalmologist for the fitting of soft therapeutic contact lenses. What codes are reported?",
        "a": "92071",
        "b": "99214-25, 92325-50",
        "c": "92014-25, 92325-50",
        "d": "92014-25, 92310",
        "correct": "a"
    },
    {
        "question": "67. A new patient undergoes a cardiovascular stress test in the cardiologist's office. Before the test, the physician performs a comprehensive H&P with moderate complexity MDM. The physician supervises and interprets the test. How should this encounter be coded?",
        "a": "93015-26, 99204-25",
        "b": "93016, 93018, 99204-25",
        "c": "93015, 99204-25",
        "d": "93018-26, 99204-25",
        "correct": "c"
    },
    {
        "question": "68. A cancer patient scheduled for chemotherapy is dehydrated, so the physician administers a hydration infusion for 1 hour and 30 minutes instead. Select the code(s) for this encounter.",
        "a": "96360",
        "b": "96360, 96361",
        "c": "96365, 96366",
        "d": "96422",
        "correct": "b"
    },
    {
        "question": "69. An occupational therapist spends 45 minutes at the home of a patient with hemiparesis from a CVA, observing and teaching one-handed meal preparation techniques and use of adaptive equipment. Report the CPT® and ICD-10-CM codes.",
        "a": "97530 x 3, I67.89, G81.91",
        "b": "97535 x 3, G81.91, I69.951",
        "c": "97530 x 3, I69.951, I67.89",
        "d": "97535 x 3, I69.951",
        "correct": "d"
    },
    {
        "question": "70. A 10-year-old with a cochlear implant sees an audiologist to check magnet strength and program the external speech processor. Which CPT® code should be used?",
        "a": "92601",
        "b": "92603",
        "c": "92562",
        "d": "92626",
        "correct": "b"
    },
    {
        "question": "71. What type of graft is used when pigskin is applied to a burn wound?",
        "a": "Xenograft",
        "b": "Allograft",
        "c": "Autograft",
        "d": "Pinch",
        "correct": "a"
    },
    {
        "question": "72. Ventral, umbilical, spigelian, and incisional are types of:",
        "a": "Surgical approaches",
        "b": "Hernias",
        "c": "Organs found in the digestive system",
        "d": "Cardiac catheterizations",
        "correct": "b"
    },
    {
        "question": "73. Fracturing the acetabulum involves what area?",
        "a": "Skull",
        "b": "Shoulder",
        "c": "Pelvis",
        "d": "Ankle",
        "correct": "c"
    },
    {
        "question": "74. When a patient is having a tenotomy performed on the abductor hallucis muscle, where is this muscle located?",
        "a": "Foot",
        "b": "Upper Arm",
        "c": "Upper Leg",
        "d": "Hand",
        "correct": "a"
    },
    {
        "question": "75. An angiogram is a study to look inside:",
        "a": "Female Reproductive System",
        "b": "The Brain",
        "c": "Blood Vessels",
        "d": "The Urinary System",
        "correct": "c"
    },
    {
        "question": "76. A newborn in the NICU is being treated for herpetic vesicles on her torso and lower extremities. Code the patient's diagnosis.",
        "a": "B00.9",
        "b": "P35.2",
        "c": "A60.09",
        "d": "B00.0",
        "correct": "b"
    },
    {
        "question": "77. A patient develops congestive heart failure as an adverse effect of trastuzumab therapy for breast cancer. The therapy is being discontinued. Code the diagnosis.",
        "a": "I50.9, T45.1X1A, Z85.3",
        "b": "I50.9, T45.1X5A, C50.919",
        "c": "I50.9, C50.919",
        "d": "T45.1X5A, I50.9, C50.919",
        "correct": "b"
    },
    {
        "question": "78. The patient has a history of symptomatic HIV. What is the diagnosis code?",
        "a": "Z21",
        "b": "B20",
        "c": "Z71.7",
        "d": "R75",
        "correct": "b"
    },
    {
        "question": "79. A mother with severe pre-eclampsia undergoes a C-section at 38 weeks. The 1587 gm male infant has low Apgars and evidence of intrauterine growth retardation. Select the best code sequence for the infant's chart.",
        "a": "P00.0, P03.810, Z37.0",
        "b": "P00.0, P03.811, P05.16, Z38.01",
        "c": "P00.0, P03.811, P05.16, Z38.01",
        "d": "P00.0, P03.810, P05.05, Z37.1",
        "correct": "b"
    },
    {
        "question": "80. A patient with Type 1 diabetes and diabetic retinopathy is found to have retinal edema during an eye checkup. What is the correct diagnosis code?",
        "a": "E11.351",
        "b": "E10.9, H35.81",
        "c": "E13.9, H35.81",
        "d": "E10.311",
        "correct": "d"
    },
    {
        "question": "81. A 66-year-old high-risk Medicare patient (due to ulcerative colitis) undergoes a colorectal cancer screening via barium enema. What HCPCS Level II code is reported?",
        "a": "G0106",
        "b": "G0105",
        "c": "G0120",
        "d": "G0121",
        "correct": "c"
    },
    {
        "question": "82. A 10-year-old male receives an application of a short arm fiberglass cast for a Colles' fracture. Identify the HCPCS Level II code for the supply.",
        "a": "Q4012",
        "b": "A4580",
        "c": "A4570",
        "d": "Q4024",
        "correct": "a"
    },
    {
        "question": "83. For a cornea transplant, the donor cornea was prepared, preserved in Optisol, rinsed, and transferred to the patient's eye. Select the HCPCS Level II code for the corneal tissue.",
        "a": "V2790",
        "b": "V2785",
        "c": "V2628",
        "d": "V2799",
        "correct": "b"
    },
    {
        "question": "84. A patient receives an injection into the gluteus maximus of 1 cc Kenalog-40 (40mg triamcinolone acetonide), 2 cc Marcaine, and 2 cc lidocaine. Choose the HCPCS Level II code for the Kenalog.",
        "a": "J3301 x 4",
        "b": "J3301",
        "c": "J3300 x 40",
        "d": "J3302",
        "correct": "a"
    },
    {
        "question": "85. Which of the following health plans does not fall under HIPAA?",
        "a": "Medicaid",
        "b": "Medicare",
        "c": "Workers' compensation",
        "d": "Private plans",
        "correct": "c"
    },
    {
        "question": "86. Local Coverage Determinations (LCDs) are published by Medicare Administrative Contractors to give providers information on which of the following?",
        "a": "Information on modifier use with procedure codes",
        "b": "A list of CPT® and HCPCS Level II codes representing covered procedures",
        "c": "Fee schedule information listed by CPT® code",
        "d": "Medical necessity exclusions to coverage",
        "correct": "d"
    },
    {
        "question": "87. Which place of service code should be reported on the physician's claim for a surgical procedure performed in an Ambulatory Surgical Center (ASC)?",
        "a": "21",
        "b": "22",
        "c": "24",
        "d": "11",
        "correct": "c"
    },
    {
        "question": "88. A single code used to classify two diagnoses, or a diagnosis with an associated secondary process is a:",
        "a": "Definitive diagnosis",
        "b": "Default code",
        "c": "Combination code",
        "d": "Residual diagnosis",
        "correct": "c"
    },
    {
        "question": "89. In which of the following cases is the diabetes-related problem sequenced first?",
        "a": "If the patient has an underdose of insulin due to an insulin pump malfunction",
        "b": "If the patient is being treated for secondary diabetes",
        "c": "If the patient is pregnant and has gestational diabetes",
        "d": "If the patient has hyperglycemia that is not responding to medication",
        "correct": "a"
    },
    {
        "question": "90. If an AMI is documented as nontransmural or subendocardial, but the site is provided, how is it reported according to ICD-10-CM guidelines?",
        "a": "As unspecified",
        "b": "As a subendocardial AMI",
        "c": "As STEMI of that site",
        "d": "As both STEMI and NSTEMI",
        "correct": "c"
    }
],
mockTest7: [
    {
        "question": "1. A 10-day global period lasts how many days?",
        "a": "10",
        "b": "11",
        "c": "12",
        "d": "A 10-day global period no longer exists for any procedures.",
        "correct": "b"
    },
    {
        "question": "2. A 90-day global period includes how many days?",
        "a": "90",
        "b": "91",
        "c": "92",
        "d": "93",
        "correct": "c"
    },
    {
        "question": "3. Which global period correlates to a 'minor' surgical service?",
        "a": "0-day",
        "b": "10-day",
        "c": "90-day",
        "d": "Both A and B",
        "correct": "d"
    },
    {
        "question": "4. The provider sees a patient for a new problem, and as a result of the E/M service, performs a procedure with a 10-day global period on the same day. What is the appropriate modifier for the E/M service code?",
        "a": "24",
        "b": "25",
        "c": "57",
        "d": "78",
        "correct": "b"
    },
    {
        "question": "5. The provider returns a patient to the operating room to treat complications of a previous procedure during the global period. Which modifier should you append to the CPT procedure code?",
        "a": "58",
        "b": "59",
        "c": "78",
        "d": "79",
        "correct": "c"
    },
    {
        "question": "6. A patient is seen for a rash. During the visit, the provider removes four skin tags from her neck and uses cryosurgery to destroy a wart on her left index finger. What is the proper CPT® coding?",
        "a": "99213, 17000-LT, 11200",
        "b": "99213-25, 17000, 11200",
        "c": "99213-25, 17110-59-LT, 11200",
        "d": "99213-25, 17110, 11200-59",
        "correct": "d"
    },
    {
        "question": "7. A 40-year-old multigravida patient in her second trimester is seen for a routine obstetric exam. The provider codes O09.522 (Supervision of elderly multigravida, second trimester), Z34.02 (Encounter for supervision of normal first pregnancy, second trimester), and Z3A.25 (25 weeks of gestation). Which code(s) should be removed?",
        "a": "Z34.02",
        "b": "O09.522",
        "c": "Z3A.25",
        "d": "All codes are correct",
        "correct": "a"
    },
    {
        "question": "8. A patient presents with a fever, throat pain, urinary frequency, and a headache. The physician diagnoses streptococcal pharyngitis and a urinary tract infection. The physician codes R50.9 (Fever), J02.0 (Strep pharyngitis), N39.0 (UTI), and R51 (Headache). Which code(s) should be removed?",
        "a": "R50.9",
        "b": "J02.0",
        "c": "R50.9 and R51",
        "d": "R50.9, N39.0, and R51",
        "correct": "c"
    },
    {
        "question": "9. Per NCCI manual, what is the proper coding for an FNA biopsy of a thyroid nodule performed under ultrasound guidance, followed by a needle core biopsy of the same lesion?",
        "a": "10005, 60100",
        "b": "10005, 60100, 76942-59",
        "c": "60100, 76942",
        "d": "10005, +10006",
        "correct": "c"
    },
    {
        "question": "10. What is an archived lab specimen?",
        "a": "A specimen found in medical records by mistake",
        "b": "A test that is sent to an outside lab",
        "c": "A specimen collected outside the clinical setting",
        "d": "A specimen stored longer than 30 calendar days prior to testing",
        "correct": "d"
    },
    {
        "question": "11. Anesthesia is provided for a total thyroidectomy for a goiter. The total anesthesia time is from 10:03 to 11:56. The CPT for the surgery crosswalks to anesthesia code 00320 (6 base units). Is modifier 22 appropriate?",
        "a": "Inappropriate because the base unit value is 6 units and there is no benefit to reporting.",
        "b": "Appropriate because the surgery is around the neck and shoulder girdle of the patient.",
        "c": "Inappropriate because there is no documented evidence that substantially greater work effort was performed.",
        "d": "Appropriate to demonstrate that the anesthesiologist did not have easy access to the patient's airway.",
        "correct": "c"
    },
    {
        "question": "12. A patient attempts a vaginal birth after a previous cesarean (VBAC), but it is unsuccessful due to fetal distress, requiring a cesarean delivery. The OB/GYN provided all routine obstetric care. What are the correct CPT® and ICD-10-CM codes?",
        "a": "59510; O82, Z37.0, Z3A.38",
        "b": "59510; O76, O34.211, Z37.0, Z3A.38",
        "c": "59618; O76, O34.211, Z37.0, Z3A.38",
        "d": "59618; O82, O76, O34.211, Z37.0, Z3A.38",
        "correct": "c"
    },
    {
        "question": "13. What is the ICD-10-CM coding for a type 2 diabetic with chronic stage 3 renal disease?",
        "a": "E11.22",
        "b": "N18.3, E11.22",
        "c": "E11.22, N18.3",
        "d": "E11.9, N18.3",
        "correct": "c"
    },
    {
        "question": "14. A patient has diabetes mellitus caused by chronic pancreatitis and it is controlled by oral drugs. What is the ICD-10-CM coding?",
        "a": "E08.9",
        "b": "K86.1, E08.9",
        "c": "E08.9, K86.1, Z79.84",
        "d": "K86.1, E08.9, Z79.84",
        "correct": "d"
    },
    {
        "question": "15. A patient with Alzheimer's disease is brought in by her daughter due to recent evening confusion and an episode of wandering out of the house. How might this visit be coded?",
        "a": "G30.9, F02.80",
        "b": "G30.8, F02.81, Z91.83",
        "c": "G30.1, F02.81, F05, Z91.83",
        "d": "G30.9, F02.81, F05, Z91.83",
        "correct": "d"
    },
    {
        "question": "16. A patient who had a hip arthroscopy as a teenager now presents for a total hip replacement surgery due to severe osteoarthritis. Which code best describes this surgery?",
        "a": "27130",
        "b": "27132",
        "c": "27125",
        "d": "27091",
        "correct": "b"
    },
    {
        "question": "17. A patient with a total hip replacement has a loose femoral component. The surgeon exchanges the prosthetic femoral head and stem. Which code best describes this procedure?",
        "a": "27130",
        "b": "27134",
        "c": "27091",
        "d": "27138",
        "correct": "d"
    },
    {
        "question": "18. A 57-year-old patient was taken to the operating room for a repair of an incarcerated inguinal hernia, requiring mesh placement. What is the proper CPT® coding?",
        "a": "49505, +49568",
        "b": "49505",
        "c": "49507",
        "d": "49501, +49568",
        "correct": "c"
    },
    {
        "question": "19. What procedure code should be reported for a polysomnography with titration for a 5-year-old patient?",
        "a": "95811",
        "b": "95782",
        "c": "95810",
        "d": "95783",
        "correct": "d"
    },
    {
        "question": "20. An ICD-10-CM code with an Excludes1 notation means:",
        "a": "You will need a modifier on the excluded ICD-10 code.",
        "b": "You can't use any of the listed ICD-10 codes with the selected code.",
        "c": "You might be able to use any of the listed ICD-10 codes with the selected code if both conditions exist.",
        "d": "The same as the Excludes notations in ICD-9.",
        "correct": "b"
    },
    {
        "question": "21. A patient presents with an open tibial shaft fracture of the lower right leg. The provider opts for closed treatment without manipulation. What CPT® code would you report?",
        "a": "27502",
        "b": "27750",
        "c": "27507",
        "d": "27780",
        "correct": "b"
    },
    {
        "question": "22. A patient with a closed, displaced fracture of the left radial head undergoes open reduction and internal fixation. What CPT code would you report?",
        "a": "24650",
        "b": "24666",
        "c": "24655",
        "d": "24665",
        "correct": "d"
    },
    {
        "question": "23. True or False? CPT 99406 (intermediate smoking cessation counseling) cannot be billed with CPT® 99407 (intensive smoking cessation counseling).",
        "a": "True",
        "b": "False",
        "c": null,
        "d": null,
        "correct": "a"
    },
    {
        "question": "24. A patient has 35 painful skin tags removed from their neck and axilla. Code this procedure.",
        "a": "11200, +11201-59",
        "b": "+11201, +11201, 11200",
        "c": "11200, +11201, +11201",
        "d": "11200, +11201-51",
        "correct": "c"
    },
    {
        "question": "25. An arthroscopic rotator cuff repair is performed with extensive debridement of both the biceps tendon and the labrum. What code(s) do you report?",
        "a": "29827",
        "b": "28983",
        "c": "29827, 29822",
        "d": "29827, 29823",
        "correct": "d"
    },
    {
        "question": "26. A superior labral tear from anterior to posterior (SLAP) repair is performed with debridement of the biceps tendon and labrum. Which code(s) do you report?",
        "a": "29807",
        "b": "29807, 29823, 29822",
        "c": "29807 and 29822",
        "d": "29807 and 29823",
        "correct": "a"
    },
    {
        "question": "27. In 2020, what CPT® code is reported for 22 ccs of fat harvested via liposuction for defects of the neck?",
        "a": "15771",
        "b": "+15772",
        "c": "15773",
        "d": "+15774",
        "correct": "c"
    },
    {
        "question": "28. Which is a new time-based code created to report online digital E/M services in 2020?",
        "a": "99421",
        "b": "99422",
        "c": "99443",
        "d": "99444",
        "correct": "b"
    },
    {
        "question": "29. Which CPT code in 2020 is used for pericardial drainage with the insertion of an indwelling catheter using ultrasound guidance on a 7-year-old patient without a congenital cardiac anomaly?",
        "a": "33015",
        "b": "33016",
        "c": "33017",
        "d": "33018",
        "correct": "c"
    },
    {
        "question": "30. A 78-year-old female has a 4.1 cm benign soft tissue neoplasm excised from the subfascial neck. What is the proper coding?",
        "a": "R22.1, 21556",
        "b": "R22.1, 21552",
        "c": "D21.0, 21556",
        "d": "D21.0, 21554",
        "correct": "c"
    },
    {
        "question": "31. A physician removes three lesions via shave technique: a 1.2 cm lesion from the left shoulder, and a 0.7 cm and a 0.8 cm lesion from the right lower arm. Code this procedure.",
        "a": "11302, 11301-51, 11301-59",
        "b": "11302, 11301, 11306",
        "c": "11305, 11301, 11301",
        "d": "11302, 11301, 11301-59",
        "correct": "d"
    },
    {
        "question": "32. A patient with chronic sinusitis undergoes right total ethmoidectomy with sphenoidotomy, left total ethmoidectomy, and left maxillary antrostomy with tissue removal, all endoscopically with frameless stereotactic navigation. What is the proper coding?",
        "a": "31256-LT, 31255-LT, 31288-RT, +61782",
        "b": "31257-50, 31267-LT, +61782",
        "c": "31257-RT, 31255-LT, 31267-LT",
        "d": "31257-RT, 31255-LT, 31267-LT, +61782",
        "correct": "d"
    },
    {
        "question": "33. The physician excises a malignant lesion from a patient's face. The lesion measures 1.5 cm, and the surgeon includes a margin of 1.0 cm on all sides. Code this procedure.",
        "a": "11444",
        "b": "11624",
        "c": "11644",
        "d": "11642",
        "correct": "c"
    },
    {
        "question": "34. You can take bathroom breaks during the CPC® exam, but the timer will continue to run during those breaks.",
        "a": "True",
        "b": "False",
        "c": null,
        "d": null,
        "correct": "a"
    },
    {
        "question": "35. An ER physician repaired multiple lacerations: 2.7 cm on the cheek (simple), 5.6 cm on the scalp (simple), 4.4 cm on the neck (simple), and a separate 3.4 cm scalp wound requiring layered closure. Code this encounter.",
        "a": "12005, 12032-59",
        "b": "12034, 12002, 12013-59",
        "c": "12032, 12004-59, 12013-59",
        "d": "12032, 12005",
        "correct": "c"
    },
    {
        "question": "36. Which CPT® code(s) should you report for a PCNL procedure on two stones in the same kidney, one measuring 1.5 cm and one measuring 2.5 cm?",
        "a": "50080",
        "b": "50081",
        "c": "50080 and 50081",
        "d": "52000",
        "correct": "b"
    },
    {
        "question": "37. Medical coders translate what four things into numeric and alphanumeric codes?",
        "a": "DME, prosthetics, orthotics, revenue",
        "b": "CPT®, HCPCS Level II, ICD-10-CM, modifiers",
        "c": "Claims, doctors' notes, medical transcription, insurance",
        "d": "Diagnoses, procedures, services, supplies",
        "correct": "d"
    },
    {
        "question": "38. Which fetal and maternal obstetrical ultrasound evaluation code should you report for a patient in her third trimester?",
        "a": "76801",
        "b": "+76802",
        "c": "76805",
        "d": "+76806",
        "correct": "c"
    },
    {
        "question": "39. When coding multiple infusions and injections, what is the correct hierarchical order for a facility service?",
        "a": "Hydration, IV push, infusions",
        "b": "IV push, injections, infusions",
        "c": "IV push, hydration, infusions",
        "d": "Infusions, injections, hydration",
        "correct": "d"
    },
    {
        "question": "40. The active form of vitamin D is manufactured in the:",
        "a": "Liver",
        "b": "Kidneys",
        "c": "Thyroid",
        "d": "Epidermis",
        "correct": "b"
    },
    {
        "question": "41. A patient undergoes a partial colectomy of the transverse colon, including low pelvic anastomosis, due to cancer of the colon and rectum. What is the CPT code?",
        "a": "44204",
        "b": "44145",
        "c": "44150",
        "d": "44208",
        "correct": "b"
    },
    {
        "question": "42. A 75-year-old established Medicare patient presents for her annual exam for cervical and breast cancer screening. A pelvic and clinical breast exam were performed and a Pap smear was obtained. What is the HCPCS code?",
        "a": "G0101",
        "b": "S0612",
        "c": "G0123",
        "d": "G0124",
        "correct": "a"
    },
    {
        "question": "43. A 27-year-old male with obesity (BMI of 35) undergoes an open Roux-en-Y gastric bypass. What is the CPT code?",
        "a": "43644",
        "b": "43846",
        "c": "43645",
        "d": "43847",
        "correct": "b"
    },
    {
        "question": "44. Which of the following is a Resequenced code?",
        "a": "33240",
        "b": "99140",
        "c": "98960",
        "d": "33273",
        "correct": "d"
    },
    {
        "question": "45. A patient has 19 warts (nine on the right hand, ten on the left) destroyed using cryosurgery. What CPT code(s) should be reported?",
        "a": "17110, 17111",
        "b": "17111",
        "c": "17004",
        "d": "17110",
        "correct": "b"
    },
    {
        "question": "46. A screening bilateral mammography is performed, followed by computer-aided detection (CAD). What is the CPT code?",
        "a": "77067",
        "b": "77067, 77063",
        "c": "77065, 77063",
        "d": "77063",
        "correct": "a"
    },
    {
        "question": "47. HIPAA was created with which goal in mind?",
        "a": "To provide an incentive for providers who maintain patient privacy.",
        "b": "To provide an incentive for providers who implement an electronic health record.",
        "c": "To allow for standardized code set claims transmissions",
        "d": "To identify providers who do not transmit claims electronically",
        "correct": "a"
    },
    {
        "question": "48. A patient receives 1,000 mg of ceftriaxone sodium via IV in the physician's office. How would you code this?",
        "a": "96372, J0696 x 4",
        "b": "99211-25, 96372, J0696",
        "c": "90473, J0696",
        "d": "96365, J0696 x 4",
        "correct": "d"
    },
    {
        "question": "49. Which of the following would be paid under Medicare Part B?",
        "a": "Vitamins",
        "b": "Inpatient dialysis",
        "c": "Clinic infusion services",
        "d": "Hospital nursing care.",
        "correct": "c"
    },
    {
        "question": "50. An established patient seen two years ago presents with a cough and sore throat. The physician performs a brief HPI, an expanded problem-focused exam, and straightforward MDM. A rapid strep test is negative. How should this be coded?",
        "a": "99213, 86580",
        "b": "99201, 87880",
        "c": "99211, 87430",
        "d": "99212, 87430",
        "correct": "b"
    },
    {
        "question": "51. A patient undergoes radiation oncology treatment planning for five separate areas and simulation-aided field settings involving two separate treatment areas. How is this coded?",
        "a": "77261, 77295",
        "b": "77263, 77285",
        "c": "77263, 77290",
        "d": "77262, 77280",
        "correct": "c"
    },
    {
        "question": "52. An established patient is seen to discuss her diagnosis of gallstones. After reviewing test results, the physician recommends a laparoscopic cholecystectomy, discusses the surgery, and schedules it for the next day. How should the E/M service be coded?",
        "a": "47562-57",
        "b": "47579-59",
        "c": "99201-25",
        "d": "99212-57",
        "correct": "d"
    },
    {
        "question": "53. An established patient with migraine without aura is seen by his ophthalmologist, who conducts a visual field examination of both eyes using the Goldman perimeter with 4 isopters plotted. How is this coded?",
        "a": "92082",
        "b": "92083",
        "c": "92081",
        "d": "92014",
        "correct": "b"
    },
    {
        "question": "54. A patient is taken to the operating room for a unilateral partial thyroid lobectomy with isthmusectomy.",
        "a": "60210",
        "b": "60220-52",
        "c": "60225",
        "d": "60212",
        "correct": "a"
    },
    {
        "question": "55. A patient's Xomed electromagnetic bone conduction hearing device is removed via a post-auricular incision for repair. What is the CPT code?",
        "a": "69711",
        "b": "69710",
        "c": "69717, 69711",
        "d": "69714",
        "correct": "a"
    },
    {
        "question": "56. A physician counsels a heavy smoker on the benefits of quitting during a preventive medicine service. Which Category II code is reported for data collection?",
        "a": "4006F",
        "b": "1036F",
        "c": "4000F",
        "d": "4001F",
        "correct": "c"
    },
    {
        "question": "57. What form is used for billing physician services performed in an outpatient hospital facility?",
        "a": "UB-04",
        "b": "ABN",
        "c": "CMS-1500",
        "d": "MS-DRG",
        "correct": "c"
    },
    {
        "question": "58. A patient with idiopathic dystonia receives Botulinum injections: 3 muscles in both upper extremities; 7 muscles in the left leg and 6 in the right leg; and 7 injections in paraspinal muscles. How is this coded?",
        "a": "64642x2, 64644x2, 64646",
        "b": "64642, 64643, 64644, 64645, 64647",
        "c": "64642, 64643, 64645, 64646, 64647",
        "d": "64647, 64644, 64645, 64643x2",
        "correct": "d"
    },
    {
        "question": "59. A patient receives a custom-fabricated, flexible lumbosacral orthotic. How would you code this HCPCS Level II service?",
        "a": "L0628",
        "b": "L0637",
        "c": "L0629",
        "d": "L0630",
        "correct": "c"
    },
    {
        "question": "60. The physician performs a transabdominal ultrasound on a patient in her 11th week of gestation with twins, for fetal and maternal evaluation. How is this coded?",
        "a": "76816 x 2",
        "b": "76811, 76812",
        "c": "76801, 76802",
        "d": "76815",
        "correct": "c"
    },
    {
        "question": "61. A 26-year-old female, new to a group practice, is seen by a locum tenens physician for gastritis symptoms. How should the service be coded?",
        "a": "99212-Q6",
        "b": "99201-Q6",
        "c": "99212",
        "d": "99201",
        "correct": "b"
    },
    {
        "question": "62. After a total knee replacement, a patient in the recovery room continues to have postoperative pain. The anesthesiologist performs a left femoral block for pain relief. How should the anesthesiologist's services be coded?",
        "a": "01402, 64447",
        "b": "01400, 64447",
        "c": "01401, 64450, 01996",
        "d": "01402, 64448, 01996",
        "correct": "a"
    },
    {
        "question": "63. A patient with lung cancer undergoes a video-assisted thoracoscopic surgery (VATS) for the removal of the total right lower lobe. How should this be coded?",
        "a": "32671",
        "b": "32663",
        "c": "32663, 32601",
        "d": "32666",
        "correct": "b"
    },
    {
        "question": "64. An iridectomy with intracapsular removal of a cataract is performed on the left eye. An intraocular lens is also inserted. What are the CPT codes?",
        "a": "66761-LT, 66840-LT, 66985-LT",
        "b": "66983-LT, 66920-LT",
        "c": "66983-LT",
        "d": "66830-LT, 66985-51",
        "correct": "c"
    },
    {
        "question": "65. An 8-year-old on dialysis is seen by his urologist twice in one month (Feb 15 and 28) to evaluate nutritional intake, assess growth, and counsel parents. What is the correct CPT code for these ESRD services?",
        "a": "90961",
        "b": "90955",
        "c": "90969",
        "d": "90951",
        "correct": "b"
    },
    {
        "question": "66. Embryos are collected and cryopreserved for four days before being stored in liquid nitrogen for later insemination attempts. How should this be coded?",
        "a": "89259, 89343",
        "b": "89259, 89346",
        "c": "89258, 89342",
        "d": "89258",
        "correct": "c"
    },
    {
        "question": "67. Which of the following fraud and abuse scenarios is most certainly fraud?",
        "a": "Under-documentation by the physician leading to under-coding by the coder.",
        "b": "Intentional violation of 'incident-to' rules.",
        "c": "Requiring an ABN if the service is not considered medically necessary.",
        "d": "Following whichever set of guidelines (95 or 97) leads to the highest paid code.",
        "correct": "b"
    },
    {
        "question": "68. A 6-month-old with an undescended right testicle undergoes an orchiopexy via an inguinal incision, where the testicle is found in the abdominal cavity and moved into a sub-dartos pouch. What is the CPT code?",
        "a": "54600",
        "b": "54650",
        "c": "54640-RT",
        "d": "54620-RT",
        "correct": "c"
    },
    {
        "question": "69. A surgeon performs an open balloon angioplasty of a femoropopliteal artery and, in the same session, an open transluminal peripheral atherectomy of a visceral artery. How should this be coded?",
        "a": "37228, 37220",
        "b": "37224, 0235T",
        "c": "37228, 0238T",
        "d": "37224",
        "correct": "b"
    },
    {
        "question": "70. A geneticist develops two karyotypes with banding, involving a 20-cell count, to verify a suspected genetic anomaly. This service includes interpretation and a report. How is this coded?",
        "a": "88261, 88285",
        "b": "88262",
        "c": "88262, 88291",
        "d": "88262, 88280, 88285",
        "correct": "c"
    },
    {
        "question": "71. Lab results from a urine test show abnormally high levels of ketones. Based on this, the physician takes a blood sample to test for glucose levels. How would the lab tests be coded?",
        "a": "83036",
        "b": "84156, 82947",
        "c": "81000, 82947",
        "d": "82947",
        "correct": "b"
    },
    {
        "question": "72. A patient with an acute MI has an intra-aortic balloon pump (IABP) placed via the right common femoral artery. What is the CPT code?",
        "a": "33971",
        "b": "33970",
        "c": "33967",
        "d": "33033",
        "correct": "b"
    },
    {
        "question": "73. An anesthesiologist injects an analgesic and steroid mixture into the paravertebral facet joint on both the right and left sides at L1-L2 and L3-L4 under ultrasound guidance for pain management. How is this coded?",
        "a": "64483-50, 64484-50, 77003-26x2",
        "b": "64493, 64494, 77003-26",
        "c": "64493-50, 64494-50",
        "d": "0216T-50, 0217T-50",
        "correct": "d"
    },
    {
        "question": "74. The pathologic examination of a single bone biopsy requires a decalcification process, which is performed on two separate blocks of the specimen. How is this coded?",
        "a": "88307, 88311",
        "b": "88307x2, 88311x2",
        "c": "88307x2, 88311",
        "d": "88307, 88311x2",
        "correct": "a"
    },
    {
        "question": "75. An ophthalmologist conducts serial tonometry with multiple measurements of intraocular pressure over an extended time period. The interpretation and report are provided on the same day. What is the CPT code?",
        "a": "92100",
        "b": "99212",
        "c": "92083",
        "d": "0198T",
        "correct": "a"
    },
    {
        "question": "76. What do formal operative reports essentially contain?",
        "a": "Medical record number, Date of the operation, Anesthesia, Name of operation",
        "b": "Patient name, Primary surgeon and assistants, Anesthesia, surgeon signature.",
        "c": "Patient name, Date of operation, Anesthesia, Diagnosis.",
        "d": "Patient name, Date of operation, Anesthesia, Description of the procedure.",
        "correct": "d"
    },
    {
        "question": "77. A 65-year-old patient in cardiac arrest is seen by an ER physician for 15 minutes of critical care. The time for separate billable services like CPR and emergency endotracheal intubation is excluded. How is this coded?",
        "a": "99291-25, 92961, 31500",
        "b": "99285-25, 92950, 31500",
        "c": "99291-25, 92950, 31500",
        "d": "92950, 31500",
        "correct": "b"
    },
    {
        "question": "78. A 64-year-old patient who broke her hip requires a total hip replacement. Anesthesia is administered for the surgery. What is the anesthesia code?",
        "a": "01210, 99100",
        "b": "01215",
        "c": "01214",
        "d": "01214, 99100",
        "correct": "c"
    },
    {
        "question": "79. A couple undergoes in vitro fertilization. The embryos are aspirated into a catheter and injected into the wife's uterus. What is the CPT code for the embryo transfer?",
        "a": "58974",
        "b": "58970",
        "c": "58976",
        "d": "58970",
        "correct": "a"
    },
    {
        "question": "80. A physician performed a postmortem examination including the preparation of evidence for a law enforcement agency.",
        "a": "88025",
        "b": "88020",
        "c": "88040",
        "d": "88045",
        "correct": "c"
    },
    {
        "question": "81. An 8-day-old infant is circumcised using a clamp device and topical anesthesia. What is the correct CPT code?",
        "a": "54150, 64450",
        "b": "54150-53",
        "c": "54160, 64450",
        "d": "54150-52",
        "correct": "d"
    },
    {
        "question": "82. A patient in labor with a baby in breech position is taken to the OR for an external cephalic version, for which she receives anesthesia. What is the anesthesia code?",
        "a": "01967, 01968",
        "b": "01963",
        "c": "01958",
        "d": "01961",
        "correct": "c"
    },
    {
        "question": "83. A 75-year-old Medicare patient with no history of disease presents for a colorectal cancer screening via colonoscopy. What is the correct HCPCS code?",
        "a": "G0104",
        "b": "G0121",
        "c": "G0105",
        "d": "G0120",
        "correct": "b"
    },
    {
        "question": "84. A 56-year-old male undergoes a re-operation for coronary bypass two months after his initial surgery. A cardiopulmonary bypass machine is used. What is the anesthesia code?",
        "a": "00537",
        "b": "00530",
        "c": "00560",
        "d": "00562",
        "correct": "d"
    },
    {
        "question": "85. A new 16-year-old patient is seen for multiple problems. The E/M includes a comprehensive H&P and moderate MDM. The physician then spends an additional 45 minutes in non-face-to-face prolonged services. How should this be coded?",
        "a": "99204",
        "b": "99203",
        "c": "99205, 99358",
        "d": "99204, 99358",
        "correct": "d"
    },
    {
        "question": "86. A kidney transplant patient with hypertensive heart disease and stage IV CKD receives a duplex scan of the native kidneys to check blood flow. What is the CPT code?",
        "a": "76770",
        "b": "76775",
        "c": "93975",
        "d": "76705",
        "correct": "b"
    },
    {
        "question": "87. A patient who passed out is found to have wide complex tachycardia and undergoes an electrophysiological study and radiofrequency ablation. What is the anesthesia code?",
        "a": "00534-P1",
        "b": "00532-P1",
        "c": "01922-P1",
        "d": "00537-P1",
        "correct": "d"
    },
    {
        "question": "88. A patient undergoes a laparoscopic partial colectomy of the transverse colon, including low pelvic anastomosis, due to cancer. What is the CPT code?",
        "a": "44205",
        "b": "44207",
        "c": "44150",
        "d": "44208",
        "correct": "b"
    },
    {
        "question": "89. A patient with endometriosis has a total laparoscopic hysterectomy, including removal of the uterus and cervix (250g). The ovaries and fallopian tubes are not removed. What is the CPT code?",
        "a": "58150",
        "b": "58291",
        "c": "58573",
        "d": "58570",
        "correct": "d"
    },
    {
        "question": "90. A physician performs a transrectal ultrasound of the prostate to rule out malignancy. What is the CPT code?",
        "a": "76870",
        "b": "76872",
        "c": "76873",
        "d": "76942",
        "correct": "b"
    }
],
mockTest8: [
    {
        "question": "1. The suffix -ectomy means:",
        "a": "Cutting into",
        "b": "Surgical removal",
        "c": "A permanent opening",
        "d": "Surgical repair",
        "correct": "b"
    },
    {
        "question": "2. MRI stands for:",
        "a": "Micro-wave Recording Instrument",
        "b": "Medical Recording Instrument",
        "c": "Magnetic Resolution Image",
        "d": "Magnetic Resonance Imaging",
        "correct": "d"
    },
    {
        "question": "3. The term 'Salpingo-Oophorectomy' refers to:",
        "a": "The removal of the fallopian tubes and ovaries",
        "b": "The surgical sampling or removal of a fertilized egg",
        "c": "Cutting into the fallopian tubes and ovaries for surgical purposes",
        "d": "Cutting into a fertilized egg for surgical purposes",
        "correct": "a"
    },
    {
        "question": "4. PERRLA stands for what?",
        "a": "Pupils Equivalent, Rapid in Response to Light and Accommodation",
        "b": "Pupil Equal, Rapid in Response to Light and Accommodation",
        "c": "Pupil Equivalent, Round, Reactive to Light and Accommodation",
        "d": "Pupils Equal, Round, Reactive to Light and Accommodation",
        "correct": "d"
    },
    {
        "question": "5. Cryopreservation is a means of preserving something through:",
        "a": "Saturation",
        "b": "Heat",
        "c": "Freezing",
        "d": "Chemicals",
        "correct": "c"
    },
    {
        "question": "6. Which of the following describes the removal of fluid from a body cavity?",
        "a": "Arthrocentesis",
        "b": "Amniocentesis",
        "c": "Pericardiocentesis",
        "d": "Paracentesis",
        "correct": "d"
    },
    {
        "question": "7. If a surgeon cuts into a patient's stomach, he has performed a:",
        "a": "Gastrectomy",
        "b": "Gastrotomy",
        "c": "Gastrostomy",
        "d": "Gastrorrhaphy",
        "correct": "b"
    },
    {
        "question": "8. The terms Nephro and Renal both refer to the same organ.",
        "a": "True",
        "b": "False",
        "c": null,
        "d": null,
        "correct": "a"
    },
    {
        "question": "9. The spleen belongs to what organ system?",
        "a": "Endocrine",
        "b": "Hemic and Lymphatic",
        "c": "Digestive",
        "d": "Nervous",
        "correct": "b"
    },
    {
        "question": "10. The portion of the femur bone that helps make up the knee is considered what?",
        "a": "The posterior portion",
        "b": "The proximal portion",
        "c": "The distal portion",
        "d": "The dorsal portion",
        "correct": "c"
    },
    {
        "question": "11. The Midsagittal plane refers to what portion of the body?",
        "a": "Top",
        "b": "Middle",
        "c": "Bottom",
        "d": "Back",
        "correct": "b"
    },
    {
        "question": "12. Which of the following is not part of the small intestine?",
        "a": "Duodenum",
        "b": "Ileum",
        "c": "Jejunum",
        "d": "Cecum",
        "correct": "d"
    },
    {
        "question": "13. The point of an organ or body part nearest the point of attachment is:",
        "a": "Distal",
        "b": "Proximal",
        "c": "Lateral",
        "d": "Medial",
        "correct": "b"
    },
    {
        "question": "14. The cardia fundus is:",
        "a": "Part of the heart wall that causes contractions",
        "b": "Where the esophagus joins the stomach",
        "c": "A fungal infection that attacks the heart",
        "d": "Part of the female reproductive system",
        "correct": "b"
    },
    {
        "question": "15. The full description of CPT code 24925 is:",
        "a": "Secondary closure or scar revision",
        "b": "Amputation, secondary closure or scar revision",
        "c": "Amputation, arm through humerus; secondary closure or scar revision",
        "d": "Amputation, arm through humerus; with primary closure, secondary closure or scar revision",
        "correct": "c"
    },
    {
        "question": "16. Medical necessity means what?",
        "a": "Without treatment the patient will suffer permanent disability or death",
        "b": "The service requires medical treatment",
        "c": "The condition of the patient justifies the service provided",
        "d": "The care provided met quality standards",
        "correct": "c"
    },
    {
        "question": "17. The statement 'These codes are never stand-alone codes and never primary codes' does not apply to which code type?",
        "a": "External cause codes",
        "b": "Add on codes",
        "c": "V codes",
        "d": "Late effects codes",
        "correct": "c"
    },
    {
        "question": "18. Which of the following statements is not true regarding Medicare Part A?",
        "a": "It helps cover home health care charges",
        "b": "It helps cover skilled nursing facility charges",
        "c": "It helps cover hospice charges",
        "d": "It helps cover outpatient charges",
        "correct": "d"
    },
    {
        "question": "19. Which of the following is not one of the three components of HIPAA that is enforced by the Office for Civil Rights?",
        "a": "Protecting the privacy of individually identifiable health information",
        "b": "Setting national standards for the security of electronic protected health information",
        "c": "Protecting identifiable information being used to analyze patient safety events and improve patient safety",
        "d": "Setting national standards regarding the transmission and use of protected health information",
        "correct": "d"
    },
    {
        "question": "20. What is the correct ICD-10-CM code(s) for malignant hypertension with stage III kidney disease?",
        "a": "I10, N18.3",
        "b": "I12.9",
        "c": "I10",
        "d": "I12.9, N18.3",
        "correct": "d"
    },
    {
        "question": "21. A patient is treated for second and third-degree burns on his face, second-degree burns on his shoulders and forearms, and third-degree burns on the fronts of his thighs after falling into a bonfire. What are the correct codes?",
        "a": "T20.30XA, T24.319A, T31.42, X03.8XXA",
        "b": "T20.30XA, T24.319A, T22.299A, T31.42, X03.8XXA",
        "c": "T20.30XA, T24.319A, T22.299A, X03.8XXA",
        "d": "T20.30XD, T24.319D, T22.299D, T31.42, X03.8XXD",
        "correct": "b"
    },
    {
        "question": "22. A 35-year-old primigravida is admitted to the hospital. She experiences a prolonged first stage of labor and eventually births a healthy baby boy. What are the correct codes?",
        "a": "O63.0, O09.519, Z37.0",
        "b": "O80, Z37.0",
        "c": "O80, O63.0, O09.529, Z37.0",
        "d": "O63.0, O09.513, Z37.0",
        "correct": "d"
    },
    {
        "question": "23. A patient is diagnosed with a tuft fracture of the distal portion of his right middle finger after a baseball collision. The finger is splinted. What is the diagnosis code?",
        "a": "S62.632A",
        "b": "S62.602A",
        "c": "S62.612A",
        "d": "S62.662A",
        "correct": "a"
    },
    {
        "question": "24. A patient with uncontrolled type II diabetes is diagnosed with diabetic retinopathy. How is this coded?",
        "a": "E11.9, E11.319",
        "b": "E11.311",
        "c": "E11.319",
        "d": "E11.39",
        "correct": "c"
    },
    {
        "question": "25. A patient who is known to be HIV positive but has no documented symptoms would be assigned which code?",
        "a": "B20, Z21",
        "b": "R75",
        "c": "Z21",
        "d": "Z11.4",
        "correct": "c"
    },
    {
        "question": "26. A home health aide uses a 20 sq. cm. special absorptive, sterile dressing and a 15 sq. cm. self-adhesive sterile gauze pad to dress a burn on a patient's lower leg. What are the HCPCS codes?",
        "a": "A6204, A6403",
        "b": "A6252, A6403",
        "c": "A6252, A6219",
        "d": "A6204, A6219",
        "correct": "c"
    },
    {
        "question": "27. A 12-year-old with a hairline fracture of the distal radius has a short arm fiberglass cast applied. What is the HCPCS code for the supply?",
        "a": "Q4009",
        "b": "Q4012",
        "c": "Q4023",
        "d": "Q4024",
        "correct": "b"
    },
    {
        "question": "28. A patient with Hodgkin's disease receives 100 mg of Neosar (Cyclophosphamide) once a week via IV infusion. What is the HCPCS code for the drug?",
        "a": "J9100",
        "b": "J7502",
        "c": "J9070",
        "d": "J8999",
        "correct": "c"
    },
    {
        "question": "29. A 300lb. paraplegic needs a special sized wheelchair with fixed armrests and elevating leg rests. What is the HCPCS code?",
        "a": "E1140",
        "b": "E1222",
        "c": "K0007",
        "d": "E1087",
        "correct": "b"
    },
    {
        "question": "30. An established patient comes into the doctor's office for a weekly blood sugar check. The blood is drawn by an LPN, and the visit takes about 5 minutes. Which E/M code should be used?",
        "a": "99213",
        "b": "99212",
        "c": "99211",
        "d": "93792",
        "correct": "c"
    },
    {
        "question": "31. A 20-month-old child is admitted to the hospital with pneumonia and acute respiratory distress. The physician spends 90 minutes of Critical Care time stabilizing the patient, which includes a 3-minute intubation. How is this coded?",
        "a": "99291, 99292-25, 31500",
        "b": "99471-25, 31500",
        "c": "99291-25, 99292-25, 31500",
        "d": "99471",
        "correct": "d"
    },
    {
        "question": "32. A pediatrician is requested to be on standby during a high-risk delivery. After 30 minutes, the infant is born not breathing. The pediatrician resuscitates the infant, performs the initial E/M, and admits the healthy newborn to the nursery. What codes should the pediatrician submit?",
        "a": "99360, 99465",
        "b": "99465, 99460",
        "c": "99360, 99460",
        "d": "99360, 99465, 99460",
        "correct": "d"
    },
    {
        "question": "33. A 79-year-old established patient has his annual physical exam (detailed H&P). During the exam, a suspicious mole is found, and the physician performs a comprehensive H&P and moderate complexity MDM for that problem. What E/M codes are reported?",
        "a": "99387, 99205",
        "b": "99387, 99215",
        "c": "99397, 99205",
        "d": "99397, 99215",
        "correct": "d"
    },
    {
        "question": "34. Of the seven components of an E/M service (History, Exam, MDM, Counseling, Coordination of Care, Nature of Presenting Problem, and Time), which six help define the level of service?",
        "a": "History, Exam, MDM, Coordination of Care, Nature of Presenting Problem, and Time",
        "b": "History, Exam, MDM, Counseling, Nature of Presenting Problem, and Time",
        "c": "History, Exam, MDM, Counseling, Coordination of Care, and Nature of Presenting Problem",
        "d": "History, Exam, MDM, Counseling, Coordination of Care, and Time",
        "correct": "c"
    },
    {
        "question": "35. The correct anesthesia code for a ventral hernia repair on a 13-month-old child is:",
        "a": "00830",
        "b": "00834",
        "c": "00836",
        "d": "00832",
        "correct": "c"
    },
    {
        "question": "36. A patient is placed under anesthesia for a diagnostic arthroscopy of the wrist. What should the anesthesiologist code?",
        "a": "01829",
        "b": "01820",
        "c": "01830",
        "d": "29840",
        "correct": "a"
    },
    {
        "question": "37. A five-month-old undergoes open heart surgery to repair a small hole in the pericardium, with the assistance of an oxygenator pump. What is the anesthesia code?",
        "a": "00560, 99100",
        "b": "00561",
        "c": "00562",
        "d": "00561, 99100",
        "correct": "b"
    },
    {
        "question": "38. A 72-year-old male with severe asthma is placed under anesthesia for a tenoplasty on a long tendon in his upper arm. What is the anesthesia code?",
        "a": "01710-P3, 99100",
        "b": "01712-P3, 99100",
        "c": "01714-P3, 99100",
        "d": "01714-P4",
        "correct": "c"
    },
    {
        "question": "39. A pregnant patient at 17 weeks is rushed to the OR for a ruptured tubal pregnancy with severe hemorrhage, requiring an emergency laparoscopic tubal ligation. What is the anesthesia code?",
        "a": "00851-P5, 99140",
        "b": "01965-P4",
        "c": "01965-P5",
        "d": "00880-P5, 99140",
        "correct": "a"
    },
    {
        "question": "40. A healthy five-year-old male is placed under anesthesia to have a biopsy taken from his left ear drum (tympanum). What is the anesthesia code?",
        "a": "00120-P1",
        "b": "00124-P2",
        "c": "00170-P2",
        "d": "00126-P1",
        "correct": "d"
    },
    {
        "question": "41. A patient has a 2.5 cm layered closure on his left forearm, a 4 cm layered closure on his right shoulder, and a 3 cm simple closure on his forehead. What are the correct codes for the repairs?",
        "a": "12032-RT, 12031-LT, 12013-59",
        "b": "12032, 12013-59",
        "c": "13121, 12052-59",
        "d": "12032-RT-LT, 12013-59",
        "correct": "b"
    },
    {
        "question": "42. A dermatologist ablates three lesions: a 1.3 cm benign lesion of the scalp, a 1.5 cm premalignant lesion of the neck, and a 2.5 cm malignant lesion on the hand. How is this coded?",
        "a": "17273, 17003, 17110",
        "b": "17273, 17000, 17003",
        "c": "17273, 17000, 17110",
        "d": "17273, 17003",
        "correct": "c"
    },
    {
        "question": "43. An 18-year-old female presents with a cyst on her left breast, and her physician performs a puncture aspiration.",
        "a": "10160",
        "b": "10060",
        "c": "10021",
        "d": "19000",
        "correct": "d"
    },
    {
        "question": "44. A patient with a non-healing burn wound on her right cheek receives a 25 sq cm split-thickness skin graft. What type of graft is this?",
        "a": "Adjacent tissue transfer",
        "b": "Autograft",
        "c": "Split-thickness graft",
        "d": "Flap graft",
        "correct": "c"
    },
    {
        "question": "45. A child has a 3cm layered laceration repair on her second finger and an evacuation of a subungual hematoma on her third finger of the same hand. How should this be coded?",
        "a": "12042-F6, 11740-F7",
        "b": "64400 (x2), 20103-51, 12042-51, 11740-51,59",
        "c": "20103, 12042-F6, 11740-F7",
        "d": "20103, 12042-51, F6, 11740-51, F7",
        "correct": "a"
    },
    {
        "question": "46. True or False: A simple, single-layered laceration that requires extensive cleaning due to heavy contamination should be coded as an intermediate repair (12031-12057).",
        "a": "True",
        "b": "False",
        "c": null,
        "d": null,
        "correct": "a"
    },
    {
        "question": "47. A patient with third-degree burns on his left leg and arm (18 sq cm total) undergoes an escharotomy involving three incisions to prevent compartment syndrome. How is this coded?",
        "a": "97597",
        "b": "97602",
        "c": "16035, 16036 x2",
        "d": "16030, 16035, 16036 x2",
        "correct": "c"
    },
    {
        "question": "48. How do you code for an arthroscopic repair of both the medial and lateral meniscus?",
        "a": "27447",
        "b": "29868",
        "c": "29882",
        "d": "29883",
        "correct": "d"
    },
    {
        "question": "49. A patient with back muscle spasms receives three injections of Marcaine 0.5% into one muscle. What is the CPT code?",
        "a": "64400",
        "b": "20552",
        "c": "64520",
        "d": "20553",
        "correct": "b"
    },
    {
        "question": "50. A patient undergoes an anterior discectomy at C5-C6, an arthrodesis at C5-C6, a partial corpectomy at C5, placement of a machine bone allograft at C5-C6, and placement of an anterior plate. How is this coded?",
        "a": "63081, 63082, 22554, 22851, 20931, 22845",
        "b": "63075, 22554, 22845, 20931",
        "c": "63075, 22554",
        "d": "22554, 22845, 20931",
        "correct": "a"
    },
    {
        "question": "51. Four months after a shoulder surgery, a patient undergoes a diagnostic arthroscopy where the surgeon discovers and removes a metal clamp left from the prior surgery. How is this coded?",
        "a": "29805, 23330",
        "b": "29805, 29819",
        "c": "29819-78",
        "d": "29819",
        "correct": "d"
    },
    {
        "question": "52. A 59-year-old female undergoes a bunionectomy on her right foot. The procedure involves removing the medial eminence of the 1st metatarsal head and stabilizing the joint with a Kirschner wire. Which CPT code best describes this procedure?",
        "a": "28296",
        "b": "28292",
        "c": "28899",
        "d": "28298",
        "correct": "b"
    },
    {
        "question": "53. A patient undergoes a coronary artery bypass graft (CABG) using a harvested left internal mammary artery and a harvested femoropopliteal vein. Cardiopulmonary bypass is used. How should the grafts and harvesting be coded?",
        "a": "35600, 35572, 33533, 33517, 32551, 36825, 33926",
        "b": "33533, 33517, 35572",
        "c": "33510, 33533, 35572, 32551, 36821",
        "d": "33510, 33533, 33572",
        "correct": "b"
    },
    {
        "question": "54. A 50-year-old mechanically ventilated patient in the ICU has a non-tunneled triple lumen catheter placed in the right subclavian vein. What is the CPT code?",
        "a": "36555",
        "b": "36568",
        "c": "36558",
        "d": "36556",
        "correct": "d"
    },
    {
        "question": "55. A patient with chronic emphysema has surgery to remove both lobes of the left lung. What is this procedure called?",
        "a": "Total pneumonectomy",
        "b": "Bilobectomy",
        "c": "Lobectomy x 2",
        "d": "Pleurectomy",
        "correct": "a"
    },
    {
        "question": "56. A thoracic surgeon makes an incision at the base of the throat, introduces a scope directly into the mediastinal space, and takes two biopsies. What is this procedure?",
        "a": "Mediastinoscopy",
        "b": "Thoracoscopy",
        "c": "Mediastinotomy",
        "d": "Pleural biopsy",
        "correct": "a"
    },
    {
        "question": "57. A patient undergoes endoscopic surgery for: anterior and posterior ethmoidectomy, maxillary sinus dilation with a balloon, frontal sinus exploration, and removal of two polyps from the maxillary sinus. How is this coded?",
        "a": "31255, 31295, 31237",
        "b": "31201, 31295, 31237",
        "c": "31255, 31267",
        "d": "31255, 31295, 31267",
        "correct": "c"
    },
    {
        "question": "58. A permanent dual-chamber pacemaker system is implanted. Leads are placed transvenously in the right atrium and right ventricle, connected to a generator in a subcutaneous pocket. What are the CPT codes?",
        "a": "33240, 33225, 33202",
        "b": "33208, 33225, 33202",
        "c": "33213, 33217, 33202",
        "d": "33208",
        "correct": "d"
    },
    {
        "question": "59. During an EGD, the esophagus appears inflamed, but the stomach and duodenum are normal. A small 2cm tissue sample is taken from the esophagus for biopsy. How is this coded?",
        "a": "43202",
        "b": "43206",
        "c": "43235",
        "d": "43239",
        "correct": "d"
    },
    {
        "question": "60. A physician attempts a full colonoscopy but is unable to advance the scope past the splenic flexure due to a large fecal impaction. The procedure is terminated. How should this be coded?",
        "a": "45330-53",
        "b": "45330",
        "c": "45378-53",
        "d": "45378",
        "correct": "c"
    },
    {
        "question": "61. An open repair of a unilateral inguinal hernia is performed with placement of a Marlex patch (mesh). What is the CPT code?",
        "a": "49505",
        "b": "49505, 54520",
        "c": "49505, 49568",
        "d": "49505, 54520, 49568",
        "correct": "a"
    },
    {
        "question": "62. True or False: All endoscopies performed on the digestive system (e.g., esophagoscopy, colonoscopy) have moderate sedation bundled into the code.",
        "a": "True",
        "b": "False",
        "c": null,
        "d": null,
        "correct": "b"
    },
    {
        "question": "63. A patient who had a lap band placed over a year ago is in for an adjustment. The physician adjusts the band's diameter by injecting fluid through the subcutaneous port. What is the CPT code?",
        "a": "43771",
        "b": "43886",
        "c": "43842",
        "d": "43848",
        "correct": "a"
    },
    {
        "question": "64. A patient undergoes extracorporeal shock wave lithotripsy (ESWL) to break a 2.5cm renal calculus (kidney stone). A C-Arm image intensifier is used to apply 2500 shock waves. How is this coded?",
        "a": "50081, 74425",
        "b": "50130, 76770",
        "c": "50060",
        "d": "50590",
        "correct": "d"
    },
    {
        "question": "65. A patient who recently had a hysterectomy for metastatic ovarian cancer is having vaginal cylinder rods placed for high dose rate (HDR) brachytherapy treatment. How is this coded?",
        "a": "57155",
        "b": "57156",
        "c": "57155-58",
        "d": "57156-58",
        "correct": "b"
    },
    {
        "question": "66. A vasectomy is performed where a 3 cm segment of the vas deferens is dissected out, clipped proximally and distally, and cauterized. This is done bilaterally. What is the CPT code?",
        "a": "55250",
        "b": "55400",
        "c": "55400-50",
        "d": "55250",
        "correct": "d"
    },
    {
        "question": "67. A surgeon performs a carpal tunnel release by decompressing the median nerve at the wrist. What is the CPT code?",
        "a": "64702",
        "b": "64704",
        "c": "64719",
        "d": "64721",
        "correct": "d"
    },
    {
        "question": "68. Using an operating microscope, a surgeon repairs a fistula in the round window of both the right and left ears by packing it with fat. How is this procedure coded?",
        "a": "69666-50, 69990",
        "b": "69667-50, 69990",
        "c": "69666, 69990",
        "d": "69667-50",
        "correct": "b"
    },
    {
        "question": "69. What is a keratophakia?",
        "a": "A partial thickness corneal graft that preserves the inner layers.",
        "b": "A type of LASIK eye surgery.",
        "c": "A procedure where corneal tissue from a donor is frozen, reshaped, and implanted into the recipient's cornea.",
        "d": "Replacement of the cornea with an artificial one.",
        "correct": "c"
    },
    {
        "question": "70. A neurosurgeon performs a craniotomy to evacuate an intracerebellar hematoma. A burr hole is drilled as part of the craniotomy. How is this coded?",
        "a": "61154",
        "b": "61253, 61315",
        "c": "61315",
        "d": "61154, 61315",
        "correct": "c"
    },
    {
        "question": "71. An ophthalmologist repairs a retinal detachment using cryotherapy and scleral buckling. An operating microscope is used. How is this coded?",
        "a": "67101",
        "b": "67101, 69990",
        "c": "67107",
        "d": "67107, 69990",
        "correct": "c"
    },
    {
        "question": "72. When a physician provides only the supervision and interpretation of a radiological study (professional component), what should be appended to the CPT code?",
        "a": "The full CPT code",
        "b": "Modifier TC",
        "c": "Modifier 26",
        "d": "Modifier 52",
        "correct": "c"
    },
    {
        "question": "73. A patient has a CT of the abdomen without contrast followed by with contrast, and a CT of the pelvis without contrast in a single session. How should this be coded?",
        "a": "74178",
        "b": "74178, 74176-51",
        "c": "74178 x2, 74177",
        "d": "74176, 74178-51",
        "correct": "a"
    },
    {
        "question": "74. A radiologist takes three views (Water's, anterior-posterior, and lateral) of a patient's facial bones to check for fractures. What is the CPT code?",
        "a": "70100",
        "b": "70120",
        "c": "70150",
        "d": "70250",
        "correct": "c"
    },
    {
        "question": "75. True or False: If a prior study shows inadequate visualization, a diagnostic angiography may be reported with an interventional procedure if modifier 59 is appended to the diagnostic S&I.",
        "a": "True",
        "b": "False",
        "c": null,
        "d": null,
        "correct": "a"
    },
    {
        "question": "76. High dose rate (HDR) internal radiation is performed using a remote afterloader connected to 3 catheters. How should this be coded?",
        "a": "77762",
        "b": "77790",
        "c": "77786",
        "d": "77785",
        "correct": "c"
    },
    {
        "question": "77. A patient has a myocardial perfusion imaging study (SPECT) with a pharmacologic stress test supervised by a physician, with interpretation and report by a cardiologist. How is this coded?",
        "a": "78451, 93016",
        "b": "78453, 93016",
        "c": "78451",
        "d": "78453",
        "correct": "a"
    },
    {
        "question": "78. A physician orders a Basic Metabolic Panel (80047), a Hepatic Function Panel (80076), and a TSH (84443). What is the most accurate way to code this?",
        "a": "80053, 84443",
        "b": "80047, 80076, 84443",
        "c": "80047, 84155, 84460, 84450, 84443",
        "d": "80051, 84520, 84460, 84450, 84155, 82330, 82565, 82947, 84443",
        "correct": "c"
    },
    {
        "question": "79. A specimen labeled 'right ovarian cyst' is received for gross examination only. No microscopic examination is performed. How should this be coded?",
        "a": "88300",
        "b": "88304",
        "c": "88305",
        "d": "88307",
        "correct": "a"
    },
    {
        "question": "80. A patient with a suspected MI has myoglobin, troponin, and CK enzyme levels run once every hour for three consecutive hours. How would you code the lab tests for all three instances?",
        "a": "83874-99, 83874-76..., 84484-99...",
        "b": "83874, 83874-91 x2, 84484, 84484-91 x2, 82550, 82550-91 x2",
        "c": "83874-91 x3, 84484-91 x3, 82250-91 x3",
        "d": "83874 x3, 84484 x3, 82550 x3",
        "correct": "b"
    },
    {
        "question": "81. An employee undergoes a random drug screen using a multiplex screening kit for four drug classes. Barbiturates and opiates are positive and are confirmed with a second, quantitative test. How should this be coded?",
        "a": "80306, 80345, 80361",
        "b": "80307, 80353, 80358",
        "c": "80306, 80345-91, 80361-91",
        "d": "80307, 80345, 80361",
        "correct": "d"
    },
    {
        "question": "82. A pregnant patient has a glucose tolerance test. Due to a lab error, the entire test (pre-glucose draw, glucose drink, and three post-ingestion draws) must be repeated on the same day. How should the lab code for these services?",
        "a": "82951, 82951-91",
        "b": "82946, 82946-91",
        "c": "82947, 82950, 82950-91 x2",
        "d": "82951",
        "correct": "d"
    },
    {
        "question": "83. Carbon dioxide, total calcium, and sodium are all included in which three panels?",
        "a": "82374, 82310, 84295",
        "b": "80069, 80047, 80048",
        "c": "80048, 80053, 80069",
        "d": "80047, 80069, 80051",
        "correct": "c"
    },
    {
        "question": "84. An ED physician evaluates a patient for syncope and orders a 12-lead EKG. He also supervises a 1-hour 45-minute infusion of Normal Saline. He provides the interpretation and report for the EKG. What should the physician code for in addition to the E/M service?",
        "a": "93010, 96360, 96361",
        "b": "93010, 96360",
        "c": "93010",
        "d": "93000, 96360, 96361",
        "correct": "a"
    },
    {
        "question": "85. A physician provides ESRD-related services for a 45-year-old patient on home dialysis. Services are provided from the 15th to the 18th, and from the 25th to the 31st of the month (total 11 days), as the patient was hospitalized from the 19th-24th. How should this be coded?",
        "a": "90960",
        "b": "90966",
        "c": "90970",
        "d": "90970 x11",
        "correct": "d"
    },
    {
        "question": "88. A 73-year-old resident of a group home with ESRD has a nurse come in on Mondays, Wednesdays, and Fridays for 3-hour peritoneal dialysis sessions. On Fridays, the nurse provides additional assistance. How would the 13 visits in a month be coded?",
        "a": "99601, 99602 x25, 99509 x4",
        "b": "99601 x13, 99602 x13, 99509 x4",
        "c": "90966, 99509 x4",
        "d": "99512 x13, 99509 x4",
        "correct": "b"
    },
    {
        "question": "89. A physician performs a non-imaging study of the left leg, including ABIs, 2 levels of plethysmography, and oxygen tension readings. How should this be coded?",
        "a": "93923-52",
        "b": "93923",
        "c": "93922",
        "d": "93922-52",
        "correct": "d"
    },
    {
        "question": "90. A manometric study using nuclear medicine is performed to monitor gastric motility, including the time it takes for food to move through and empty from the stomach. What is the CPT code?",
        "a": "91010",
        "b": "91020",
        "c": "91022",
        "d": "0240T",
        "correct": "b"
    }
]
};

// --- Your application logic ---

const testSelectionContainer = document.getElementById('test-selection');
const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
const backBtn = document.getElementById('back');
const skipBtn = document.getElementById('skip');

// === NEW: GET MODAL ELEMENTS ===
const modal = document.getElementById('popup-modal');
const closeBtn = document.querySelector('.close-button');


// === DEFINE VARIABLES FOR THE QUIZ LOGIC ===
let quizData; // This will hold the questions for the selected test
let currentQuiz = 0;
let userAnswers = [];

// === ADD EVENT LISTENERS FOR TEST SELECTION BUTTONS ===
const testSelectBtns = document.querySelectorAll('.test-select-btn');

testSelectBtns.forEach(button => {
    button.addEventListener('click', () => {
        const testId = button.dataset.testid;
        quizData = allTests[testId];
        
        if (quizData) {
            currentQuiz = 0;
            userAnswers = [];
            testSelectionContainer.style.display = 'none';
            quiz.style.display = 'block';
            loadQuiz();
        }
    });
});


// Main function to load question and options
function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;

    const setupOption = (option, textElement) => {
        const listItem = textElement.parentElement;
        if (option !== null) {
            textElement.innerText = option;
            listItem.style.display = 'block';
        } else {
            textElement.innerText = '';
            listItem.style.display = 'none';
        }
    };
    
    setupOption(currentQuizData.a, a_text);
    setupOption(currentQuizData.b, b_text);
    setupOption(currentQuizData.c, c_text);
    setupOption(currentQuizData.d, d_text);

    if (userAnswers[currentQuiz]) {
        document.getElementById(userAnswers[currentQuiz]).checked = true;
    }

    backBtn.disabled = (currentQuiz === 0);

    if (currentQuiz === quizData.length - 1) {
        submitBtn.innerText = 'Finish';
    } else {
        submitBtn.innerText = 'Submit';
    }
}

// Function to clear all radio button selections
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}

// Function to get the ID of the selected radio button
function getSelected() {
    let answer;
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

// === MODIFIED FUNCTION TO SHOW RESULTS AND TRIGGER POP-UP ===
function showResults() {
    // 1. Calculate Score
    let score = 0;
    quizData.forEach((questionData, index) => {
        if (userAnswers[index] === questionData.correct) {
            score++;
        }
    });

    // 2. Build the results analysis HTML
    let resultsHTML = `
        <div class="quiz-header">
            <h2>Quiz Complete!</h2>
            <p style="text-align: center; font-size: 1.2rem; margin-top: 1rem;">
                You answered ${score} out of ${quizData.length} questions correctly.
            </p>
        </div>
        <div class="results-analysis">
            <h3>Detailed Analysis</h3>`;

    quizData.forEach((questionData, index) => {
        const userAnswerId = userAnswers[index];
        const correctAnswerId = questionData.correct;
        const correctAnswerText = questionData[correctAnswerId];
        const isCorrect = userAnswerId === correctAnswerId;
        let userAnswerHTML = '';
        if (userAnswerId) {
            const userAnswerText = questionData[userAnswerId];
            if (isCorrect) {
                userAnswerHTML = `<p>Your Answer: <span class="user-answer correct">${userAnswerText} ✅</span></p>`;
            } else {
                userAnswerHTML = `
                    <p>Your Answer: <span class="user-answer incorrect">${userAnswerText} ❌</span></p>
                    <p>Correct Answer: <span class="correct-answer">${correctAnswerText}</span></p>`;
            }
        } else {
            userAnswerHTML = `
                <p>Your Answer: <span class="user-answer skipped">Skipped</span></p>
                <p>Correct Answer: <span class="correct-answer">${correctAnswerText}</span></p>`;
        }
        resultsHTML += `
            <div class="result-item">
                <h4>${questionData.question}</h4>
                ${userAnswerHTML}
            </div>`;
    });
    resultsHTML += '</div>';
    resultsHTML += `<button class="quiz-reload-btn" onclick="window.location.reload()">Take Another Test</button>`;

    // 3. Update the DOM with the analysis
    quiz.innerHTML = resultsHTML;

    // === NEW: LOGIC FOR POP-UP ===
    // 4. Calculate percentage
    const percentage = (score / quizData.length) * 100;

    // 5. Show pop-up if score is less than 80%
    if (percentage < 80) {
        // We use 'flex' because that's how we are centering it in the CSS
        modal.style.display = 'flex'; 
    }
}

// Event Listeners for the main quiz buttons
backBtn.addEventListener('click', () => {
    if (currentQuiz > 0) {
        currentQuiz--;
        loadQuiz();
    }
});

skipBtn.addEventListener('click', () => {
    userAnswers[currentQuiz] = null;
    currentQuiz++;
    if (currentQuiz < quizData.length) {
        loadQuiz();
    } else {
        showResults();
    }
});

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if (answer) {
        userAnswers[currentQuiz] = answer;
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            showResults();
        }
    } else {
        alert("Please select an answer to submit!");
    }
});

// === NEW: EVENT LISTENERS TO CLOSE THE MODAL ===
// When the user clicks on <span> (x), close the modal
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// When the user clicks anywhere outside of the modal content, close it
window.addEventListener('click', (event) => {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});