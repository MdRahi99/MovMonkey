import Container from "@/components/shared/Container";
import React from "react";

export default function DriversCleanersTermsPage() {
  return (
    <div className="max-sm:break-all">
      {" "}
      <div className="mb-2 mt-5 flex min-h-16 items-center justify-center bg-primary px-5 py-2 text-center text-2xl font-semibold text-black md:h-20 md:text-4xl lg:mt-20">
        MovMonkey Terms and Conditions
      </div>
      <div className="my-3 leading-[45px]">
        <Container>
          <p className="mx-auto px-5 text-xl md:text-2xl">
            {`This document outlines the terms and conditions governing MovMonkey's activities, including the Driver Agreement, Customer Agreement, policies on cancelled deliveries for drivers and customers needing removal, delivery, or cleaning services, and our refund policy. `}
          </p>
          <p className="mx-auto px-5 pt-8 text-xl md:text-2xl">
            {`Each section of these terms and conditions is tailored to different participants in our services: customers, service providers, and drivers. Therefore, each individual or entity needs to review and adhere to the parts of the terms that apply directly to their role.`}
          </p>
        </Container>
      </div>
      <div>
        <div className="mb-2 mt-2 flex min-h-16 items-center justify-center bg-secondary px-5 py-2 text-center text-2xl font-semibold text-white md:h-20 md:text-2xl">
          Drivers’ Terms of Use
        </div>
        <Container>
          <div className="space-y-2 px-5 text-xl leading-[45px] md:text-2xl">
            <p>
              {`The 'Terms' outlined here are the guidelines and conditions established by MovMonkey for utilising its platform, accessible through www.movmonkey.com. By engaging with the MovMonkey platform for removal, delivery, and cleaning services, you're entering into a binding contract with MovMonkey, signifying your agreement to adhere to these terms, including any future modifications. Accessing or using the platform grants you the status of “user” within the MovMonkey community, categorising you either as a “driver” or a “customer” based on the nature of your interaction with the platform. Our platform connects third-party drivers or service providers with customers needing removal, delivery, and cleaning services. Drivers are independent workers who decide to offer these services to customers posting jobs. It's important to note that MovMonkey doesn't control when a customer posts a job or a driver and/or service provider bids. Drivers can also work on other platforms or for different people simultaneously. The driver solely chooses to bid on and provide the removal, delivery, and cleaning services requested by the customer.`}
            </p>
          </div>
        </Container>
      </div>
      <div>
        <div className="mb-2 mt-2 flex min-h-16 items-center justify-center bg-secondary px-5 py-2 text-center text-2xl font-semibold text-white md:h-20 md:text-2xl">
          Driver verification processes
        </div>
        <Container>
          <div className="space-y-2 px-5 text-xl leading-[45px] md:text-2xl">
            <p>
              {`When signing up as a driver or service provider, you must submit a photo ID, such as a passport, your current driver's licence, a Social Security number, and insurance. As part of the sign-up agreement with MovMonkey, a third-party agency will perform a comprehensive check on your background. This review is a must before you can start placing bids on tasks requested by customers. We also reserve the right to conduct further checks whenever we see fit without asking for your permission again, as long as they align with legal standards.`}
            </p>
            <p className=" pt-8">
              {`The scope of this background review includes checking for any criminal records and reviewing your driving history through a Motor Vehicle Record (MVR) analysis. Note, however, that we do not conduct credit score checks due to this process. We expect this process to take one to two weeks if there’s no blockage.`}
            </p>
            <p className=" pt-8">
              {`To qualify as a driver or service provider, you must meet the criteria below:`}
            </p>
            <ul className="list-disc pt-8 text-xl md:text-2xl">
              <li className="ml-9">They show no consistent misdemeanours.</li>
              <li className="ml-9">
                They have no record of harming children or animals.{" "}
              </li>
              <li className="ml-9">
                {`They've avoided severe traffic violations, including repeated
              speeding, impaired driving, or operating a vehicle without a valid
              licence.`}
              </li>
              <li className="ml-9">
                {`They haven't committed any felonies in the last six years.`}
              </li>
              <li className="ml-9">
                They have had no theft or violent crime felonies in the past
                decade.
              </li>
              <li className="ml-9">
                {`They've had no DUI incidents in the past five years.`}
              </li>
              <li className="ml-9">
                {`There are no current arrest warrants against them.`}
              </li>
            </ul>
            <p className=" pt-8">
              {`MovMonkey takes the responsibility of assessing a driver's or service provider’s criminal background within the bounds of the law seriously. We do not automatically disqualify applicants based on their criminal records. Our approach is to conduct a detailed review of each applicant's background, focusing on aspects relevant to their role. The final decision on approving a driver lies with MovMonkey, as we aim to maintain a safe and secure environment for all platform users.`}
            </p>
          </div>
        </Container>
      </div>
      <div>
        <div className="mb-2 mt-2 flex min-h-16 items-center justify-center bg-secondary px-5 py-2 text-center text-2xl font-semibold text-white md:h-20 md:text-2xl">
          What Drivers and Service provider Are Expected to Do
        </div>
        <Container>
          <div className="space-y-2 px-5 text-xl leading-[45px] md:text-2xl">
            <p>
              {`Drivers or service providers must secure their vehicle insurance, health coverage, and the necessary driving licences and permits before offering work bids. To participate in tasks through the MovMonkey service, drivers and service providers need to keep their vehicle insurance up-to-date, including public liability insurance, in line with the regulations of their state and the stipulations of their insurance agreement. Not having the right insurance could lead to being barred from taking on jobs and possibly being removed from our service. Drivers and service providers are expected to have their insurance documentation on hand while working. We strongly recommend that drivers and service providers double-check with insurance and licensing experts to ensure they have all the necessary paperwork and coverage before bidding for a job. MovMonkey is not liable for any issues that arise if a driver, service provider, or customer does not have the appropriate legal documents, permits, or insurance needed for tasks arranged on our service.`}
            </p>
          </div>
        </Container>
      </div>
      <div>
        <div className="mb-2 mt-2 flex min-h-16 items-center justify-center bg-secondary px-5 py-2 text-center text-2xl font-semibold text-white md:h-20 md:text-2xl">
          Driver’s Responsibilities for Confidential Information
        </div>
        <Container>
          <div className="space-y-2 px-5 text-xl leading-[45px] md:text-2xl">
            <p>
              {`During their tasks, drivers will come across private details belonging to different groups, such as MovMonkey, our customers, and those receiving the services. This "private information" covers any data they encounter while working, regardless of its format. It can be anything from personal names, addresses, and contact details to sensitive data protected by laws like the Health Insurance Portability and Accountability Act (HIPAA), including health-related information. Drivers must protect this sensitive personal and health information. They must be fully aware of their duty to keep this information safe. If they fail to protect this data, they could be banned from the platform and face serious legal action. MovMonkey, drivers, or service providers must not misuse or share sensitive personal information (SPI), or data that can identify a person on its own or when combined with other information, except as necessary to carry out their tasks.`}
            </p>
          </div>
        </Container>
      </div>
      <div>
        <div className="mb-2 mt-2 flex min-h-16 items-center justify-center bg-secondary px-5 py-2 text-center text-2xl font-semibold text-white md:h-20 md:text-2xl">
          Restrictions on Job Content: Prohibited Items
        </div>
        <Container>
          <div className="space-y-2 px-5 text-xl leading-[45px] md:text-2xl">
            <p>
              {`Customers are forbidden from including, and drivers and service providers are prohibited from accepting, picking up, carrying, or delivering any jobs containing the following "prohibited items" :`}
            </p>
            <ul className="list-disc pt-8 text-xl md:text-2xl">
              <li className="ml-9">People</li>
              <li className="ml-9">
                Use illegal substances, including recreational drugs and
                contraband.
              </li>
              <li className="ml-9">{`Hazardous Waste `}</li>
              <li className="ml-9">
                {`Precious stones, industrial diamonds, or raw gold or platinum exceeding fifty percent by weight.`}
              </li>
              <li className="ml-9">
                Hazardous materials are not classified as limited or expected
                quantities under 49 C.F.R.
              </li>
              <li className="ml-9">
                {`Tobacco products, marijuana, alcohol, or any regulated products controlled by the United States Alcohol and Tobacco Tax and Trade Bureau (TTB).`}
              </li>
              <li className="ml-9">{`Firearms, weapons, or ammunition.`}</li>
              <li className="ml-9">{`Fireworks`}</li>
              <li className="ml-9">
                {`Replica or inert explosives or weapons resembling actual ones; `}
              </li>
              <li className="ml-9">
                {`Prescription drugs or regulated over-the-counter medication.`}
              </li>
              <li className="ml-9">
                {`Human or animal remains or body parts `}
              </li>
              <li className="ml-9">
                {`Drivers or service providers discovering any`}
              </li>
            </ul>
            <p className=" pt-8">
              {`prohibited items in a job must immediately notify the customer and relevant authorities.`}
            </p>
          </div>
        </Container>
      </div>
      <div>
        <div className="mb-2 mt-2 flex min-h-16 items-center justify-center bg-secondary px-5 py-2 text-center text-2xl font-semibold text-white md:h-20 md:text-2xl">
          Special Items or commodity
        </div>
        <Container>
          <div className="space-y-2 px-5 text-xl leading-[45px] md:text-2xl">
            <p>
              {`Customers with explicit permission from MovMonkey may offer jobs involving "Special Items" listed below on the platform. These customers must disclose each special item and comply with all relevant restrictions and laws. Oversized items exceeding 400 lbs. or individually exceeding 12 feet in any dimension Live animals (excluding euthanasia or end-of-life services) Specific jobs with special items may have age and qualification requirements for drivers. Customers are responsible for verifying a driver's qualifications before hiring. Drivers must know and comply with all rules and requirements for carrying jobs containing special items before bidding on such jobs. MovMonkey assumes no responsibility for prohibited items or undisclosed special items. MovMonkey bears no responsibility or liability for including prohibited items in any job or for a customer's failure to disclose a special item.`}
            </p>
          </div>
        </Container>
      </div>
      <div>
        <div className="mb-2 mt-2 flex min-h-16 items-center justify-center bg-secondary px-5 py-2 text-center text-2xl font-semibold text-white md:h-20 md:text-2xl">
          Pet Guidelines Policy
        </div>
        <Container>
          <div className="space-y-2 px-5 text-xl leading-[45px] md:text-2xl">
            <p>
              {`Drivers handle removal, delivery, and cleaning services, including transporting live animals. However, drivers should follow these guidelines :`}
            </p>
            <ul className="list-disc pt-8 text-xl md:text-2xl">
              <li className="ml-9">
                Understand animal safety basics and have a plan for emergencies.
              </li>
              <li className="ml-9">
                {`Know best practices for "at-risk" animals.`}
              </li>
              <li className="ml-9">{`Never leave a live animal alone in a vehicle`}</li>
              <li className="ml-9">
                {`Ensure the animal is safely and comfortably transported, including securing their crate or cage.`}
              </li>
              <li className="ml-9">
                Keep the animal leashed when not in their crate or cage.
              </li>
              <li className="ml-9">
                {`Have a method for safely managing the animal's entry and exit from their crate or cage.`}
              </li>
              <li className="ml-9">{`Don't leave vehicle windows open enough for the animal to escape.`}</li>
              <li className="ml-9">{`Cover veterinary fees and any additional transportation costs for the animal.`}</li>
              <li className="ml-9">
                {`Take full responsibility for the animal's care and well-being during the job.`}
              </li>
              <li className="ml-9">
                {`Provide adequate climate control and airflow for the animal.`}
              </li>
              <li className="ml-9">
                {`Confirm the animal has a valid health certificate from a vet and is fit for travel.`}
              </li>
              <li className="ml-9">
                {`Don't transport dogs under eight weeks old or too old to travel safely.`}
              </li>
              <li className="ml-9">
                {`Only provide food and medicine approved or provided by the customer.`}
              </li>
              <li className="ml-9">
                {`Ensure the animal has access to water regularly.`}
              </li>
              <li className="ml-9">
                {`Keep the animal's crate or cage clean during the job.`}
              </li>
              <li className="ml-9">
                {`Stay in communication with the customer and provide updates throughout the job.`}
              </li>
              <li className="ml-9">
                {`Share the location with the customer when requested.`}
              </li>
              <li className="ml-9">
                {`Acknowledge that MovMonkey is not liable for any issues arising from Jobs, including those involving live animals.`}
              </li>
              <li className="ml-9">
                {`Don't smoke with a live animal in the vehicle.`}
              </li>
              <li className="ml-9">
                {`Have all necessary permits and licences for transporting live animals and provide proof to MovMonkey within 90 days of registering on the platform.`}
              </li>
              <li className="ml-9">
                {`Ensure the vehicle is adequately insured, registered, and defect-free.`}
              </li>
              <li className="ml-9">
                {`Have the contact information for a vet readily available.`}
              </li>
              <li className="ml-9">
                {`Follow the CDC and local government guidelines during pickup and delivery.`}
              </li>
              <li className="ml-9">
                {`Never abandon an animal during a job. Contact the customer if you are unable to complete the job.`}
              </li>
            </ul>
          </div>
        </Container>
      </div>
      <div>
        <div className="mb-2 mt-2 flex min-h-16 items-center justify-center bg-secondary px-5 py-2 text-center text-2xl font-semibold text-white md:h-20 md:text-2xl">
          When posting a job involving a live animal, the customer must
        </div>
        <Container>
          <div className="space-y-2 px-5 text-xl leading-[45px] md:text-2xl">
            <ul className="list-disc pt-8 text-xl md:text-2xl">
              <li className="ml-9">
                {`Provide a valid health certificate from a vet confirming the
                animal's health and vaccinations.`}
              </li>
              <li className="ml-9">
                {`Give clear instructions on feeding and drinking, and provide the necessary food or medicine.`}
              </li>
              <li className="ml-9">{`Include a GPS-tracking device with the animal.`}</li>
              <li className="ml-9">
                {`Ensure the job contents align with discussions with the driver.`}
              </li>
              <li className="ml-9">
                {`Confirm the animal's temperament and ability to travel safely.`}
              </li>
              <li className="ml-9">
                {`Provide a secure leash for the animal and ensure the driver knows how to use it.`}
              </li>
              <li className="ml-9">{`Be available for communication throughout the job.`}</li>
              <li className="ml-9">{`Acknowledge MovMonkey's lack of liability for any issues during the job.`}</li>
              <li className="ml-9">
                {`Understand and accept potential delays due to unforeseen circumstances.`}
              </li>
              <li className="ml-9">
                {`Follow the CDC and local government guidelines.`}
              </li>
              <li className="ml-9">
                {`Confirm the driver understands animal safety basics and best practices.`}
              </li>
              <li className="ml-9">
                {`Ensure the driver won't leave the animal unattended or allow it to escape.`}
              </li>
              <li className="ml-9">
                {`Provide a clean and sanitary crate or cage with specific instructions for use and cleaning.`}
              </li>
              <li className="ml-9">
                {`Confirm the driver won't smoke with the animal in the vehicle.`}
              </li>
              <li className="ml-9">
                {`Verify the accuracy of the driver's contact information.`}
              </li>
              <li className="ml-9">
                {`Confirm that the driver has the vet's contact information readily available.`}
              </li>
            </ul>
          </div>
        </Container>
      </div>
      <div>
        <div className="mb-2 mt-5 flex min-h-16 items-center justify-center bg-secondary px-5 py-2 text-center text-2xl font-semibold text-white md:h-20 md:text-2xl ">
          Driver Awareness Note
        </div>
        <Container>
          <p className="mt-3 text-xl md:text-2xl">
            {`The "MovMonkey Driver and Service Provider Agreement" forms an integral part of MovMonkey's broader Terms and Conditions, incorporating its provisions into the larger framework by reference. By engaging with the MovMonkey Platform and accepting assignments to provide removal, delivery, and cleaning services to customers, each driver acknowledges, agrees, and affirms the following:`}
          </p>
          <ul className="mt-10 list-disc text-xl md:text-2xl">
            <li className="ml-9">
              <span className=" pr-2 font-semibold">
                Independent Contractor Status:
              </span>
              {`Drivers and service providers are recognized as third-party users of the platform and operate as independent contractors for all jobs undertaken. They expressly disclaim any status as employees, agents, or representatives of MovMonkey or any customer concerning such jobs. No contractual or service provision actions undertaken through the platform establish an employment relationship between MovMonkey, customers, and drivers.`}
            </li>
            <li className="ml-9">
              <span className=" pr-2 font-semibold">
                Control and Direction:
              </span>
              Drivers and service providers maintain independence from MovMonkey
              and customers regarding providing services. They commit to
              fulfilling jobs within specified time frames while remaining
              accessible to engage in other activities between assignments.
            </li>
            <li className="ml-9">
              <span className=" pr-2 font-semibold">Legal Requirements: </span>
              {` Drivers and service providers affirm their legal eligibility to provide contracted services, including possessing valid licences, permits, and authorizations necessary to perform assigned jobs.`}
            </li>
            <li className="ml-9">
              <span className=" pr-2 font-semibold">
                Vehicle Operation and Insurance:
              </span>
              {` Drivers certify ownership or legal authorization to operate vehicles used for jobs and maintain appropriate auto liability insurance coverage. Compliance with industry safety standards and regulatory requirements, including relevant DOT regulations, is mandatory.`}
            </li>
            <li className="ml-9">
              <span className=" pr-2 font-semibold">Criminal Background: </span>
              {` Drivers and service providers confirm they have not been convicted of criminal offences that would impede travel between the UK, Canada, and the United States. MovMonkey reserves the right to take action against drivers with allegations or proven instances of animal abuse or property damage.`}
            </li>
            <li className="ml-9">
              <span className=" pr-2 font-semibold">Liability: </span>
              {` Drivers and service providers assume full responsibility for any liabilities arising from the operation of vehicles during jobs, including personal injuries, property damage, or other related incidents.`}
            </li>
            <li className="ml-9">
              <span className=" pr-2 font-semibold">Background Checks: </span>
              {`Drivers and service providers authorise MovMonkey to conduct background checks, including driving records, references, and credit history checks, through authorised third parties in cases of financial.`}
            </li>
            <li className="ml-9">
              <span className=" pr-2 font-semibold">
                No Subscription Fee or Monthly Fee:
              </span>
              {` We only charge a small commission of 35% called the "Magnum fee” on each job from drivers or service providers, depending on the total volume of the job for advertising and website maintenance. This would be deducted from the full payment before paying the driver or service provider who completed the job. Drivers or service providers are not tiers to MovMonkey; it’s Pay as you GO. `}
            </li>
            <li className="ml-9">
              <span className=" pr-2 font-semibold">Vehicle Maintenance:</span>
              {` Drivers must comply with state laws regarding vehicle inspections and maintenance, ensuring vehicles meet operational standards without displaying service indications.`}
            </li>
            <li className="ml-9">
              <span className=" pr-2 font-semibold">Commercial Use:</span>
              {`Drivers and service providers acknowledge the commercial nature of their access to the platform, restricting usage to commercial advantage and prohibiting unauthorised access by non-registered users. `}
            </li>
            <li className="ml-9">
              <span className=" pr-2 font-semibold">
                Compliance and Conduct:
              </span>
              {` Drivers and service providers commit to compliance with laws related to substance use while driving, refrain from discrimination or harassment, and maintain confidentiality of user information.`}
            </li>
            <li className="ml-9">
              <span className=" pr-2 font-semibold">Indemnification:</span>
              {` Drivers and service providers indemnify MovMonkey against claims arising from their acts, content, or use of the platform, holding MovMonkey harmless from any third-party claims or demands.`}
            </li>
            <li className="ml-9">
              <span className=" pr-2 font-semibold">
                Defamation and Liability:
              </span>
              {` Drivers and service providers are liable for defamatory statements or actions against MovMonkey's business integrity, with MovMonkey reserving the right to pursue legal remedies beyond those outlined in the Agreement. `}
            </li>
            <li className="ml-9">
              <span className=" pr-2 font-semibold">Platform Access:</span>
              {`Drivers or service providers may not circumvent account bans or suspensions by re-registering under different names or through proxies.`}
            </li>

            <li className="ml-9">
              <span className=" pr-2 font-semibold">Legal Remedies:</span>
              {`MovMonkey retains the right to seek specific performance, injunctive relief, or other legal remedies for breaches of the agreement.`}
            </li>
            <li className="ml-9">
              <span className=" pr-2 font-semibold">
                Statute of Limitations:{" "}
              </span>
              {`Any claims arising from the agreement must be filed within one year of the cause of action.`}
            </li>
            <li className="ml-9">
              <span className=" pr-2 font-semibold">
                Reporting Obligations:
              </span>
              {`Drivers or service providers must promptly report lost, damaged, or delayed jobs to customers and subsequently inform MovMonkey, cooperating fully with all involved parties regarding any associated claims or issues.`}
            </li>
          </ul>
          <p className="mt-3 text-xl md:text-2xl">
            {`For notification purposes, please get in touch with support@movmonkey.com, providing
factual information and supporting evidence where applicable.`}
          </p>
        </Container>
      </div>
      <div>
        <div className="mb-2 mt-2 flex min-h-16 items-center justify-center bg-secondary px-5 py-2 text-center text-2xl font-semibold text-white md:h-20 md:text-2xl">
          Repeated Cancellations
        </div>
        <Container>
          <div className="space-y-2 px-5 text-xl leading-[45px] md:text-2xl">
            <p>
              {`Upon your first cancellation, we will temporarily suspend your account and email you to verify
your understanding of our cancellation policy. Your account will be reactivated once you respond to our customer support team, confirming your policy awareness.`}
            </p>
            <p className=" pt-8">
              {`Drivers or service providers with a cancellation rate below 20% within the past four weeks can
continue using MovMonkey without restriction. However, exceeding a 20% cancellation rate
results in an account suspension and a financial penalty equivalent to the Magnum fee of the
most recent cancellation, leading to the rate surpassing 20%. Payment of this fee will result in
account reactivation.`}
            </p>
            <p className=" pt-8">
              {`For drivers or service providers who repeatedly surpass the 20% threshold, additional fees are
incurred as follows:`}
            </p>
            <ul className="list-disc pt-2 text-xl md:text-2xl">
              <li className="ml-9">
                Second suspension within 4 weeks: 150% of the latest Magnum fee
                lost.
              </li>
              <li className="ml-9">
                Third suspension within 8 weeks: 200% of the latest Magnum Fee
                lost.
              </li>
              <li className="ml-9">
                Fourth suspension within 12 weeks: 300% of the latest Magnum fee
                lost.
              </li>
              <li className="ml-9">
                Fifth suspension within 16 weeks: 400% of the latest Magnum Fee
                lost.
              </li>
            </ul>
          </div>
        </Container>
      </div>
      <div>
        <div className="mb-2 mt-2 flex min-h-16 items-center justify-center bg-secondary px-5 py-2 text-center text-2xl font-semibold text-white md:h-20 md:text-2xl">
          Account Suspension
        </div>
        <Container>
          <div className="space-y-2 px-5 text-xl leading-[45px] md:text-2xl">
            <p>
              {`We also retain the authority to suspend a driver's or service provider's account further as a punitive measure. Should cancellations continue despite adherence to our policy, we may upgrade the suspension to permanent.`}
            </p>
          </div>
        </Container>
      </div>
      <div>
        <div className="mb-2 mt-2 flex min-h-16 items-center justify-center bg-secondary px-5 py-2 text-center text-2xl font-semibold text-white md:h-20 md:text-2xl">
          Legitimate cancellations and exceptions
        </div>
        <Container>
          <div className="space-y-2 px-5 text-xl leading-[45px] md:text-2xl">
            <p>
              {`If a cancellation is due to the customer altering terms or not providing complete details, leading you to cancel, please get in touch with us at support@movmonkey.com for account reinstatement without penalties. Similarly, vehicle issues or severe weather conditions that prevent job execution should be reported to us; these circumstances will not result in penalties. `}
            </p>
            <p className=" pt-8">
              {`Cancellations can affect your profile through negative reviews. Nonetheless, cancellations made within 24 hours of being assigned a job, a shipment, or more than seven days before job execution will not result in negative customer feedback. Additionally, cancellations deemed justified under our exceptions will not be penalised with negative reviews.`}
            </p>
          </div>
        </Container>
      </div>
    </div>
  );
}
