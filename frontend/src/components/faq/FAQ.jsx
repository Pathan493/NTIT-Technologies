import { useState } from "react";
import "./FAQ.css";

function FAQ() {
  const faqs = [
    {
      question: "Who can join this training program?",
      answer:
        "Our programs are suitable for both IT and Non-IT learners who want to build practical cloud skills.",
    },
    {
      question: "Are the classes live or pre-recorded?",
      answer:
        "Classes are conducted live by the trainer. Recorded sessions are uploaded later for enrolled students.",
    },
    {
      question: "Will I get interview preparation?",
      answer:
        "Yes. We provide interview guidance, resume support, and mock interview preparation as part of the program.",
    },
    {
      question: "Do I need prior cloud experience?",
      answer:
        "No. The program starts with the fundamentals and gradually moves to advanced concepts.",
    },
    {
      question: "How can I contact NTIT Technologies?",
      answer:
        "You can reach us through the Contact page or by using the enquiry form available on our website.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq">

      <div className="faq-header">
        <span>FREQUENTLY ASKED QUESTIONS</span>

        <h2>Have Questions?</h2>

        <p>
          Here are some common questions about our training programs.
        </p>
      </div>

      <div className="faq-container">

        {faqs.map((faq, index) => (
          <div className="faq-item" key={index}>

            <button
              className="faq-question"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}

              <span>
                {activeIndex === index ? "-" : "+"}
              </span>
            </button>

            {activeIndex === index && (
              <div className="faq-answer">
                {faq.answer}
              </div>
            )}

          </div>
        ))}

      </div>

    </section>
  );
}

export default FAQ;