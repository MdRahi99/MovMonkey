"use client";

import Container from "@/components/shared/Container";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Minus, Plus } from "lucide-react";
import React, { useState } from "react";

const faqData = [
  {
    question: "What types of services are available?",
    answer:
      "We connect users looking for removal, delivery, and cleaning services with verified service providers on our platform.",
  },
  {
    question: "How are prices Calculated?",
    answer:
      "We don’t calculate prices, but our platform has features to help service providers make accurate quotes based on your request.",
  },
  {
    question: "What about privacy?",
    answer:
      "We respect your privacy. We don't share your full details with service providers or their full details with you until you commit and make a payment.",
  },
  {
    question: "Are there any hidden costs or extra charges?",
    answer:
      "There are no hidden costs or extra charges. Our platform is free to use for both users and service providers. We only take a small commission from each job request to cover advertising and maintenance.",
  },
  {
    question: "Are all service providers insured?",
    answer:
      "We ensure all our service providers are insured and bonded to protect against damages or loss.",
  },
  {
    question: "Are there reviews for our service providers?",
    answer:
      "Please leave a review within the platform for the service provider you chose once the job is done. This helps others decide. Since we are new, be the first to add your review!",
  },
  {
    question: "What is the policy for canceling or rescheduling services?",
    answer: "See our Term and condition page about this information.",
  },
  {
    question: "What areas do your services cover?",
    answer:
      "We are available nationwide in the UK, US, Canada, and Australia. We’re expanding, so please bear with us if we don't cover your area yet.",
  },
  {
    question: "What payment methods are accepted?",
    answer: "Our secure payment system accepts both credit and debit cards.",
  },
  {
    question: "How important are users and service providers on the platform?",
    answer:
      "We value both our users and service providers. To ensure fairness, we require both parties to mark the job as complete before releasing payment. Please respect our service providers.",
  },
];

export default function FAQPage() {
  const [showFaq, setShowFaq] = useState(Array(faqData.length).fill(false));

  const toggleFaq = (index) => {
    const newShowFaq = [...showFaq];
    newShowFaq[index] = !newShowFaq[index];
    setShowFaq(newShowFaq);
  };

  return (
    <div className="mb-2 lg:mb-10">
      <div className="mb-2 mt-5 flex min-h-16 items-center justify-center bg-primary px-5 py-2 text-center text-2xl font-semibold text-black md:h-20 md:text-4xl lg:mt-20">
        Frequently Ask Questions
      </div>

      <Container>
        {faqData.map((faq, index) => (
          <React.Fragment key={index}>
            <Collapsible
              className="cursor-pointer space-y-4 rounded px-4 py-3"
              open={showFaq[index]}
              onOpenChange={() => toggleFaq(index)}
            >
              <CollapsibleTrigger className="flex w-full items-center justify-between">
                <p className="text-2xl font-medium text-secondary">
                  {faq.question}
                </p>
                <div>{showFaq[index] ? <Minus /> : <Plus />}</div>
              </CollapsibleTrigger>

              <CollapsibleContent className="mt-2 space-y-1 text-xl font-normal text-gray-600">
                {faq.answer}
              </CollapsibleContent>
            </Collapsible>
            <div className="py-2 last:hidden">
              <hr />
            </div>
          </React.Fragment>
        ))}
      </Container>
    </div>
  );
}
