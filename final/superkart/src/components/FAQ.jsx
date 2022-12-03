import FAQData from "../data/faqData";
import Accordion from "./Accordion";
import '../css/FAQ.css'

function FAQ() {

    return (
        <div className="faq">
            <h1>FAQs</h1>
            <div className="accordBlock">
                {FAQData.map((val, idx) => {
                    return (
                        <div key={idx}>
                            <Accordion id={val.id} questions={val.questions} answers={val.answers} />
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default FAQ;





