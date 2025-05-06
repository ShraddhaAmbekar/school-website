import React from 'react';
import './PoliciesPage.css'; // Import the CSS file

const resultDocs = [
    {
      title: "Anual academic calender",
      url: "/assets/pdfs/Annual academic calendar.pdf",
  
    },
    {
      title: "Anual academic calender-1",
      url: "/assets/pdfs/Annual academic calendar-1.pdf",
  
    },
    {
      title: "Fee Structure of the school",
      url: "/assets/pdfs/fee structure of the school.pdf",
    },
    {
      title: "List of school management committee (SMC)",
      url: "/assets/pdfs/list of smc.pdf",
    },
    {
      title: "List of parents teachers association (PTA) members",
      url: "/assets/pdfs/list of  Parents teachers.pdf",
    },
    {
      title: "Last three year result of the board examination",
      url: "/assets/pdfs/Last three years board result.pdf",
    },
  
  ];

  const certificates = [
    {
      title: "Copy of Affiliation letter",
      url: "/assets/pdfs/copy of affiliation.pdf",
    },
    
    {
      title: "Copy of society - renewal",
      url: "/assets/pdfs/fee structure of the school.pdf",
    },
    {
      title: "Copy of recognition certicate",
      url: "/assets/pdfs/copy of recognition certificate.pdf",
    },
    {
      title: "Copy of self certification",
      url: "/assets/pdfs/copy of self certification.pdf",
    },
    {
      title: "Certificate of land",
      url: "/assets/pdfs/certificate of land.pdf",
    },
    {
      title: "Fire safety certificate",
      url: "/assets/pdfs/fire safety certificate.pdf",
    },
    {
      title: "Valid building safety certificate",
      url: "/assets/pdfs/valid building safety certificate.pdf",
    },
    {
      title: "Valid water certificate",
      url: "/assets/pdfs/valid water certificate.pdf",
    },
  ]

const PoliciesPage = () => {
  return (
    <div className="policies-container">
      <h1 className="page-title">Affliations and Credentials</h1>
   <div className='mb-4'>
   <h4 className='text-center'>Result and Academics</h4>
      <ul className="document-list">
        {resultDocs.map((doc, index) => (
          <li key={index} className="document-item">
            <span className="document-title">{doc.title}</span>
            <a
              href={doc.url}
              target="_blank"
              rel="noopener noreferrer"
              className="view-link"
            >
              View PDF
            </a>
          </li>
        ))}
      </ul>
   </div>
   <div><br/>
   <div className='mb-4'>
   <h4 className='text-center'>Important documents and Certificates</h4>
      <ul className="document-list">
        {certificates.map((doc, index) => (
          <li key={index} className="document-item">
            <span className="document-title">{doc.title}</span>
            <a
              href={doc.url}
              target="_blank"
              rel="noopener noreferrer"
              className="view-link"
            >
              View PDF
            </a>
          </li>
        ))}
      </ul>
   </div>
   </div>
    </div>
  );
};

export default PoliciesPage;
