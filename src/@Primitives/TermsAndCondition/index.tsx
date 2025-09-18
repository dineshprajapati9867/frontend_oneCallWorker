import React from 'react';
import { Box, Typography, styled } from '@mui/material';

const TOCBoxContainer = styled(Box)(({ theme }) => ({
  'table, th, td': {
    border: `1px solid ${theme.text.primary}`,
    borderCollapse: 'collapse',
  },
}));

function TermsAndCondition() {
  return (
    <TOCBoxContainer>
      <Typography variant='body1'>
        Thank You for using Wybrid. Please read this Agreement of Service carefully as it contains
        important information about your legal rights, remedies and obligations. By accessing or
        using the Wybrid Platform, you agree to comply with and be bound by this Agreement of
        Service.
      </Typography>
      <Typography variant='body1'>
        <b>Last Updated on 21.12.2022</b>
      </Typography>
      <Typography variant='body1'>Please note:</Typography>
      <ul>
        <li>
          <Typography variant='body1'>
            Wybrid is a technology company engaged in working with enterprises and workspaces to
            activate hybrid work environments;
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            Wybrid has developed a Platform for providing Services.
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            The Workspace Partner is the owner/ operator of Workspaces, and is desirous of accessing
            the Platform as a SAAS service.
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            Wybrid and the Workspace Partner are accordingly executing this Agreement recording the
            terms and conditions on which Workspace Partner will access and use the Platform.
          </Typography>
        </li>
      </ul>
      <Typography variant='body1'>
        Wybrid and The Workspace Partner are hereby referred to as ‘Parties’.
      </Typography>
      <Typography variant='body1'>
        <b>
          NOW THIS AGREEMENT WITNESSETH AND IT IS HEREBY AGREED BY AND BETWEEN THE PARTIES AS
          FOLLOWS:
        </b>
      </Typography>
      <Typography variant='body1'>
        <b>1.DEFINITIONS </b>
      </Typography>
      <ul>
        <li>
          <Typography variant='body1'>
            1.1 Capitalised terms and expressions as used in this Agreement shall have the meanings
            (a) as indicated below, (b) if not defined in this clause below, as assigned to such
            terms in the other parts of this Agreement where indicated:
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            1.1.1 <b>&quot;Access Credentials&quot;</b> means the usernames, passwords and other
            credentials enabling access to the Services on the Platform;
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            1.1.2 <b>&quot;Agreement&quot;</b> means this agreement including any Schedules, and any
            amendments to this Agreement from time to time;
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            1.1.3 <b>&quot;Business Day&quot;</b> means any weekday other than a bank or public
            holiday in India;
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            1.1.4 <b>&quot;Business Hours&quot;</b> means the hours of 09:00 to 17:00 IST on a
            Business Day;
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            1.1.5 <b>Commencement Date”</b> shall have the meaning ascribed to it in clause 4 of
            this Agreement.
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            1.1.6 <b>“Collective Content”</b> shall mean Wybrid Content and User Content
            collectively.
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            1.1.7 <b>&quot;Data Protection Laws&quot;</b> means all applicable laws, rules and
            regulations relating to the processing of data;
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            1.1.8 <b>“Expiry Date”</b> shall have the meaning ascribed to it in clause 4 of this
            Agreement.
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            1.1.9 <b>“Fees”</b> shall have the meaning ascribed to it in clause 5.1 of this
            Agreement;
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            1.1.10 <b>&quot;Force Majeure Event&quot;</b> shall have the meaning ascribed to it in
            clause 23.1 of this Agreement;
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            1.1.11 <b>“Hosted Services”</b> means and includes the services hosted and provided by
            Wybrid on the Platform to User(s).
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            1.1.12 <b>&quot;Hosted Services Specification”</b> means the technical specification for
            the Platform and the Services as set out in Schedule “III” of this Agreement;
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            1.1.13 <b>&quot;Hosted Services Subscription Model&quot;</b> shall mean the subscription
            models set out in Schedule “II” of this Agreement;
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            1.1.14 <b>“Intellectual Property Rights”</b> means all intellectual property rights
            wherever in the world, whether registrable or unregistrable, registered or unregistered,
            including any application or right of application for such rights (and these
            “intellectual property rights” include copyright and related rights, database rights,
            confidential information, trade secrets, know-how, business names, trade names,
            trademarks, service marks, passing off rights, unfair competition rights, patents, petty
            patents, utility models, semi-conductor topography rights and rights in designs);
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            1.1.15 <b>“Law(s)”</b> means and includes laws of India, including all rules,
            regulations, notifications, orders and other subordinate legislation issued thereunder
            (including but not limited to the Information Technology Act, 2000) (each such law,
            regulation, rule, circular by whatever name called as amended or supplemented or
            re-enacted from time to time);
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            1.1.16 <b>“Master Agreement”</b> shall the master agreement executed between Wybrid and
            the Workspace Partner simultaneously with the execution hereof.
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            1.1.17 <b>“Mobile Application/Mobile App&quot;</b> means the mobile application known as
            [Wybrid] that is made available by Wybrid Technology Private Limited through the Google
            Play Store and the Apple App Store.
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            1.1.18 <b>“Order Schedule”</b> means a document signed by and between Wybrid and the
            Workspace Partner in the format provided by the Workspace Partner that references this
            Agreement, and details the Services which have been availed of by the Workspace Partner
            per the Service Subscription Model selected by the Workspace Partner, the Fees payable,
            and any other transaction-specific provisions, a form whereof is annexed hereto and
            forms Schedule “I”. Such Order Schedule shall be deemed to constitute and form an
            integral part of this Agreement.
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            1.1.19 <b>“Person”</b> shall mean a natural or legal person, public authority, agency or
            body.
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            1.1.20 <b>&quot;Platform&quot;</b> means the online platform operated and managed by
            Wybrid used by it to provide the Services (including the web application, mobile
            application and the website).
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            1.1.21 <b>“Personal Data”</b> shall mean personal data as defined under applicable Law.
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            1.1.22 <b>“Services”</b> means the Hosted Services being provided by Wybrid to the
            Workspace Partner on the Platform, and availed of by the Workspace Partner, in
            accordance with the terms of this Agreement, the Order Schedule, and the Master
            Agreement, and as per the Hosted Services Subscription Model selected by the Workspace
            Partner as specified in Schedule “II” of this Agreement;
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            1.1.23 <b>&quot;Schedule&quot;</b> means any schedule attached to the main body of this
            Agreement;
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            1.1.24 <b>&quot;Support Services&quot;</b> means support in relation to the use of, and
            the identification and resolution of errors in, the Services, but shall not include the
            provision of training services;
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            1.1.25 <b>&quot;Supported Web Browser&quot;</b> means the current release from time to
            time of Microsoft Edge, Mozilla Firefox, Google Chrome or Apple Safari, or any other web
            browser that Wybrid agrees in writing shall be supported;
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            1.1.26 <b>&quot;Term&quot;</b> shall have the meaning ascribed to it in terms of clause
            4 of this Agreement;
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            1.1.27 <b>&quot;User(s)”</b> shall mean any natural or legal person who is registered on
            the Platform through Wybrid (including the Workspace Partner and/or the Client);
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            1.1.28 <b>“Client”</b> shall mean any Person which is not a Workspace Partner but an
            occupant/lessee of the Workspaces provided by the Workspace Partner on long term or
            short term basis;
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            1.1.29 <b>&quot;User Interface&quot;</b> means the interface for the Hosted Services
            designed to allow Users to access and use the Hosted Services;
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            1.1.30 <b>“User Content”</b> shall mean and include data and content (including but not
            limited to text, photos, audio, video, or other materials and information, Wybrid may,
            in its sole discretion enable Users to submit, create, upload, post, send, receive and
            store on or through the Platform (“User Content”);
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            1.1.31 <b>“Workspaces”</b> shall be deemed to mean and include physical spaces of any
            nature whatsoever (including but not limited to desks, meeting rooms, individual offices
            and partial, full or multiple floors) for use by Users, listed on the Platform;
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            1.1.32 <b>“Workspace Partner Data”</b> means any electronic data or materials uploaded
            to or stored on the Platform by the Workspace Partner, provided or submitted by the
            Workspace Partner to or through the Service for processing and/or for the purpose of
            listing the Workspace of the Workspace Partner on the Platform and/or for uploading to,
            transmission by or storage on the Platform and/or in connection with/ for the purpose of
            availing the Services, and the outputs and modifications to that data obtained from such
            processing and/or generated by the Platform as a result of the use of the Services by
            the Workspace Partner (but excluding analytics data relating to the use of the Platform
            and server log files)
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            1.1.33 <b>“Wybrid Content”</b> means and includes any content that Wybrid itself makes
            available on or through the Service on the Platform, including proprietary Wybrid
            content and any content licensed or authorized for use by or through Wybrid from a third
            party (“Wybrid Content”).
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            1.1.34 <b>“Web Application/Web App&quot;</b> means the web application known as [Wybrid]
            that is made available by Wybrid through its website which can be accessed through any
            web browser.
          </Typography>
        </li>
      </ul>
      <Typography variant='body1' />
      <Typography variant='body1'>
        <b>2. SCOPE OF SERVICES</b>
      </Typography>
      <ul>
        <li>
          <Typography variant='body1'>
            2.1 Subject to the terms and conditions of this Agreement [and the Master Agreement],
            Wybrid grants the Workspace Partner during the term of this Agreement a personal,
            non-exclusive, non-transferable, non-sublicensable, and terminable right and license to
            access and use the Services, solely for the Workspace Partner’s internal business
            operations (and not in any resale or outsourcing capacity), based on the subscription
            model selected by the Workspace Partner from amongst the models enumerated in Schedule –
            I of this Agreement (the “License”)
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            2.2 The License granted to the Workspace Partner in clause 2.1 above is subject to the
            condition that the Workspace Partner does not in any manner whatsoever (and does not
            allow any affiliate or third party to):
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            2.2.1 copy, modify, adapt, tamper with, or otherwise make any changes to the Platform
            and/or the Services or any part thereof;
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            2.2.2 exceed any usage limitations identified by Wybrid;
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            2.2.3 write or develop any derivative works based upon the Services or create internet
            “links” to/from the Service(s) (other than on the Workspace Partner’s intranet or
            otherwise for its internal business purposes as permitted by this Agreement);
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            2.2.4 reverse engineer, disassemble, decompile, translate, or otherwise attempt to
            discover any source code, algorithms, tags, specifications, architecture, structure, or
            other elements of the Services, in whole or in part, for competitive purposes or
            otherwise;
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            2.2.5 use unauthorized versions of the Services including, without limitation, for the
            purpose of building a similar or competitive product or service or for obtaining
            unauthorized access to the Services;
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            2.2.6 sell, resell, distribute, host, lease, rent, license, or sublicense, in whole or
            in part, the Services or use the Services to provide processing services to third
            parties, or otherwise use the same on a ‘service bureau’ basis;
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            2.2.7 allow access to, provide, divulge, or make available Wybrid’s intellectual
            property to any user other than authorized Users,
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            2.2.8 obliterate, alter, or remove any proprietary or intellectual property notices from
            the Hosted Services;
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            2.2.9 disclose or publish, without Wybrid’s prior written consent, performance or
            capacity statistics or the results of any benchmark test performed on the Hosted
            Services; or
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            2.2.10 otherwise use or copy the same except as expressly permitted in this Agreement.
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            2.3 In addition to the Services, Wybrid [shall] also provide to the Workspace Partner
            technical support and assistance by way of support services mentioned in Schedule “IV”
            of this Agreement, on chargeable basis.
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            2.4 Wybrid shall make commercially reasonable efforts to make the Services available for
            access by the Workspace Partner 24 hours a day, 7 days a week.
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            2.5 Wybrid may, at its sole discretion, make any changes in the Hosted Services that
            Wybrid determines to be necessary and/or desirable including, without limitation,
            changes in computer hardware, systems, and/or applications software, programming
            languages, data communications and customer identification procedures. In the event of
            any such changes that, in Wybrid’s reasonable determination, shall materially alter the
            ability of Workspace Partner to use the Services, Wybrid will notify the Workspace
            Partner of such changes. Wybrid reserves the right to charge the Workspace Partner for
            any reintegration work required to make customizations compatible with future
            versions/releases of the Services.
          </Typography>
        </li>
      </ul>
      <Typography variant='body1' />
      <Typography variant='body1'>
        <b>3. ACCESS AND USE </b>
      </Typography>
      <ul>
        <li>
          <Typography variant='body1'>
            3.1 The Workspace Partner shall upon execution of this Agreement [and the Master
            Agreement], and signing of the Order Schedule, subject to the terms of the Master
            Agreement, and payment of the Fees in the manner set out in this Agreement, the Order
            Schedule and the Master Agreement, be registered on the Platform.
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            3.2 Upon the registration of the Workspace Partner and activation of the workspace
            partner account, in terms of Clause 3.1 above, Wybrid shall provide, or shall ensure
            that the Platform provides, to the Workspace Partner the Access Credentials necessary to
            enable the Workspace Partner to access its workspace partner account and use the
            Services.
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            3.3 The License granted by Wybrid to the Workspace Partner is subject to the following
            conditions:
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            3.3.1 The User Interface shall only be used through a Supported Web Browser or the
            Mobile App or the Web App;
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            3.3.2 the User Interface must not be used at any point in time by more than a number of
            concurrent users mentioned in the Order Schedule;
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            3.3.3 The Workspace Partner shall implement and maintain reasonable security measures
            relating to the Access Credentials to ensure that no unauthorised person or application
            may gain access to the Services through or under the Workspace Partner.
          </Typography>
        </li>
      </ul>
      <Typography variant='body1' />
      <Typography variant='body1'>
        <b>4. TERM</b>
        This Agreement shall commence from the Commencement Date and expire on the Expiry Date (the{' '}
        <b>&quot;Term&quot;</b>).
      </Typography>
      <Typography variant='body1'>
        <b>5. CONSIDERATION</b>
      </Typography>
      <ul>
        <li>
          <Typography variant='body1'>
            5.1 In consideration of Wybrid granting the Workspace Partner the License, the Workspace
            Partner shall pay to Wybrid, the fees as set out in the Order Schedule, based on the
            Hosted Services Subscription Model opted for by the Workspace Partner (the <b>“Fees”</b>
            ).
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            5.2 The Fees are payable by the Workspace Partner to Wybrid on the [●]th day of every
            month, irrespective of whether the Services are availed of by the Workspace Partner or
            not.
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            5.3 Except as otherwise specified in an Order Schedule, (a) fees are quoted in US
            Dollars and payable in Indian Rupees, (b) fees are based on the Services purchased as
            indicated in an Order Schedule whether used or not, (c) payment obligations are
            non-cancellable and fees paid are non-refundable unless otherwise provided in this
            Agreement, and (d) the number of subscriptions rights purchased cannot be decreased
            during the relevant subscription term. Where the Workspace Partner designates use of a
            third-party payment processor network (such as a payment agent), the Workspace Partner
            is responsible for payment of all fees and charges associated with use of such network
            (including registration, participation, and payment processing fees) and Wybrid may
            invoice those fees with other fees due under this clause or on a separate invoice.
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            5.4 The Fees do not include taxes (including but not limited to GST, withholding taxes,
            duties, changes, assessments, or fees (collectively “Taxes”). If Wybrid is required to
            pay any Taxes then such Taxes shall be billed to and paid directly by the Workspace
            Partner.
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            5.5 GST shall be payable by the Workspace Partner, in addition.
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            5.6 The License may be suspended or terminated if the Workspace Partner fails to make
            timely payment of the Fees on the due date. Any delayed payment of Fees or any other
            amounts due and payable by the Workspace Partner under this Agreement is subject to
            interest @ 18% Typography.a. from the date such payment is due until the date of
            payment.
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            5.7 Without prejudice to any other rights and remedies available to Wybrid under this
            Agreement, [the Master Agreement], applicable law, equity, any other document/ writing
            executed between the Parties or otherwise, non-payment of the Fees and other amounts
            payable by Wybrid under this Agreement and/or the Master Agreement will entitle Wybrid
            to suspend the License/ access of the Workspace Partner to the Services/ the Services.
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            5.8 Suspension of the Services and access to the Platform by the Workspace Partner on
            account of non-payment by the Workspace Partner will not relieve the Workspace Partner
            of its payment obligations under this Agreement.
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            5.9 Without prejudice to any other rights and remedies available to Wybrid against the
            Workspace Partner under this Agreement, [the Master Agreement], law, equity or
            otherwise, the Workspace Partner shall be solely liable and responsible to pay all
            charges, fees, costs and expenses, in connection with resumption of suspended Services
            (including but not limited to applicable Fees and interest payable during the for the
            period of suspension and any reconnection fees or other costs or charges in this
            regard).
          </Typography>
        </li>
      </ul>
      <Typography variant='body1' />
      <Typography variant='body1'>
        <b>6. RESPONSIBILITIES OF THE WORKSPACE PARTNER</b>
      </Typography>
      <ul>
        <li>
          <Typography variant='body1'>
            6.1 The Workspace Partner shall not copy of attempt to copy, nor permit or require any
            third-party to copy, the proprietary software of Wybrid OR publicize, utilize or
            pass-off as its own any of the Intellectual Property Rights which belong to, and remain
            vested with Wybrid;
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            6.2 The Workspace Partner shall not republish or redistribute any content or material
            from the Services;
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            6.3 The Workspace Partner shall not make any alteration to the Platform;
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            6.4 The Workspace Partner shall not conduct or request that any other person conduct any
            loading testing or penetration testing on the Platform or the Services without prior
            written consent of Wybrid;
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            6.5 The Workspace Partner shall not sub-license its License/ its rights of access or
            usage of the Services/ benefits under this Agreement to any other person/ third party;
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            6.6 The Workspace Partner shall not permit any unauthorised person or application to
            access or use the Services;
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            6.7 The Workspace Partner shall not allow any unauthorised or improper use of the
            Platform or the Services OR access or utilize the same for objects or purposes contrary
            to this Agreement.
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            6.8 The Workspace Partner shall comply with the terms of use and privacy policy of
            Wybrid and must also ensure, at all times, that persons using the Services with the
            authority or on behalf of the Workspace Partner or by means of the Access Credentials of
            the Workspace Partner also comply with the same.
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            6.9 The Workspace Partner shall not use the Services in any way that causes, or may
            cause, damage to the Hosted Services or the Platform or impairment of the availability
            or accessibility of the Hosted Services.
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            6.10 The Workspace Partner shall not use the Services:
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            6.10.1 in any way that is unlawful, illegal, fraudulent or harmful; or
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            6.10.2 in connection with any unlawful, illegal, fraudulent or harmful purpose or
            activity.
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            6.11 For avoidance of doubt, the Workspace Partner has no right to access the software
            code (including the object code, intermediate code and source code) of the Platform,
            either during or after the Term.
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            6.12 Wybrid may suspend the provision of the Services if any amount due to be paid by
            the Workspace Partner to Wybrid under this Agreement is overdue, and Wybrid has given to
            the Workspace Partner at least 15 (fifteen) days’ written notice, following the amount
            becoming overdue, of its intention to suspend the Services on this basis.
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            6.13 Wybrid shall be entitled to suspend the provision of the Services, at its sole
            discretion and without providing any notice to the Workspace Partner, if Wybrid finds or
            has reasons to believe that the Workspace Partner is or may be using the Platform and/or
            the Services for any improper, illegal, fraudulent, or harmful purposes or is otherwise
            in breach of the terms of this Agreement.
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            6.14 The Workspace Partner shall provide assistance as requested by Wybrid in connection
            with the installation/ implementation and configuration of the Services including, if
            requested, timely providing Wybrid with access to its facilities, network, hardware and
            software, reasonably requested by Wybrid in order to provide the Services.
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            6.15 The Workspace Partner shall maintain control of, administer, and accept
            responsibility for all use of Access Credentials and/or access of the Platform by the
            Workspace Partner and/or its employees.
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            6.16 The Workspace Partner shall take reasonable precautions to protect against the
            theft, loss, or fraudulent use of the Access Credentials
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            6.17 The Workspace Partner shall promptly (within one business day) notify Wybrid of any
            unauthorized use of its Access Credentials, breach of security, and/or suspected theft,
            loss, or fraudulent use of such assigned Access Credentials.
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            6.18 In order to enable the Workspace Partner to access the Services, and for setting up
            the Services by Wybrid, the Workspace Partner shall provide Wybrid with all data
            required for the provision of the Services (including set up and configuration) in a
            timely manner.
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            6.19 The Workspace Partner acknowledges that the ability of Wybrid to provide the
            Services requires the Workspace Partner’s co-operation in providing Wybrid with timely,
            adequate, and accurate responses to requests for data, documents, information,
            materials, decisions, or approvals. Wybrid may be excused from performing the Services
            to the extent that the Workspace Partner delays or refuses to provide Wybrid with such
            co-operation. The Workspace Partner shall be responsible for the accuracy, quality,
            integrity, legality, adequacy, and reliability of all Workspace Partner Data that
            Workspace Partner furnishes to Wybrid and any results obtained therefrom.
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            6.20 The Workspace Partner shall use the Services only for proper business purposes in
            accordance with and as contemplated by this Agreement and applicable legislation
            including, without limitation, laws and regulations respecting data privacy,
            international communications, and the exporting and importing of data.
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            6.21 The Workspace Partner agrees to use its best efforts to ensure that no SaaS
            Component is displayed outside or copied outside of the Platform or distributed in any
            way to any third party except as may be permitted under the Agreement.
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            6.22 The Workspace Partner shall comply with all technical specifications and with all
            security and operating guidelines, procedures, and protocols provided to the Workspace
            Partner by Wybrid including, without limitation, pertaining to use of passwords
            including any document referenced therein.
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            6.23 The Workspace Partner agrees that it will not, and its employees will not, attempt
            to gain or allow access to any data, files, or programs to which they are not entitled
            under this Agreement, and that if such access is obtained, and Confidential Information
            has been compromised, the Workspace Partner will immediately return such materials to
            Wybrid.
          </Typography>
        </li>
      </ul>
      <Typography variant='body1' />
      <Typography variant='body1'>
        <b>7. MOBILE APPLICATION AND WEB APPLICATION</b>
      </Typography>
      <Typography variant='body1'>
        The Parties acknowledge and agree that the use of the Mobile App and the Web App, the
        parties&apos; respective rights and obligations in relation to the Mobile App and/or Web App
        and any liabilities of either party arising out of the use of the Mobile App and/or Web App
        shall additionally be subject to the terms of use and privacy policy of the Mobile App and
        Web App, and accordingly this Agreement shall not govern any such use, rights, obligations
        or liabilities.
      </Typography>
      <Typography variant='body1'>
        <b>8. CONFIDENTIAL INFORMATION</b>
      </Typography>
      <ul>
        <li>
          <Typography variant='body1'>
            8.1 Each Party shall observe, during the subsistence of the Term and thereafter,
            complete secrecy regarding any and all information which is now or hereafter in the
            possession of the other Party and which is disclosed whether orally or in any tangible
            or intangible form by either Party to the other Party and/or of which the other Party
            becomes aware of (including but not limited to this Agreement, [the Master Agreement],
            the Services, the pricing information, information and data related to the access and
            use of the Services hereunder, including all information related to Users (including
            User Content), all data related, connected with, in relation to the provision of
            Services, information relating to the general business or financial affairs or
            intellectual property of Wybrid, data, databases, knowhow, formulae, processes,
            strategies, designs, photographs, drawings, specifications, prices, sales information,
            software programs and samples, and any other material bearing or incorporating any
            information relating to the Wybrid’s business, business affairs, products, employees,
            other workspace partners, contractors, customers and marketing information, information
            on the Platform, Wybrid Content, User Content, any data and information in relation to
            the Users, and their agents, representatives and employees, (hereinafter called the{' '}
            <b>&quot;Confidential Information&quot;</b>).
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>8.2 Each Party acknowledges and agrees that:</Typography>
        </li>
        <li>
          <Typography variant='body1'>
            (a) all Confidential Information shall remain the exclusive property of the disclosing
            party;
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            (b) it shall not use Confidential Information of the other Party for any purpose except
            in furtherance of this Agreement;
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            (c) it shall not disclose Confidential Information of the other party to any third
            party, except to its employees, officers, contractors, agents and service providers
            (&quot;Permitted Persons&quot;) as necessary to perform under this Agreement, provided
            Permitted Persons are bound in writing to obligations of confidentiality and non-use of
            Confidential Information in less protective than the terms hereof; and
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            (d) it shall return or destroy all Confidential Information of the disclosing party upon
            the termination of this Agreement or at the request of the other party (subject to
            applicable law and, and its internal record-keeping requirements)
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            8.3 Notwithstanding the foregoing, Confidential Information shall not include any
            information to the extent it: (a) is or becomes part of the public domain through no act
            or omission on the part of the receiving party; (b) was possessed by the receiving party
            prior to the date of this Agreement without an obligation of confidentiality; (c) is
            disclosed to the receiving party by a third party having no obligation of
            confidentiality with respect thereto; (d) is required to be disclosed for the purpose of
            rendering Services under this Agreement or performance of this Agreement or the
            provisions of the Master Agreement, or (d) is required to be disclosed pursuant to law,
            court order, subpoena or governmental authority, provided the receiving party notifies
            the disclosing party thereof and provides the disclosing party a reasonable opportunity
            to contest or limit such required disclosure.
          </Typography>
        </li>
      </ul>
      <Typography variant='body1' />
      <Typography variant='body1'>
        <b>9. SECURITY AND INTEGRITY OF WORKSPACE PARTNER DATA</b>
      </Typography>
      <Typography variant='body1' />
      <Typography variant='body1'>
        The Workspace Partner acknowledges that it retains administrative control over and to whom
        it grants access to the Workspace Partner Data hosted/ uploaded on the Platform.
        Nonetheless, during the subscription term, the Workspace Partner shall maintain reasonable
        administrative and technical safeguards designed for the physical protection,
        confidentiality, and integrity of the Workspace Partner Data at least as rigorous as the
        measures described in the Workspace Partner’s Data and Security Policy. Wybrid will not use
        the Workspace Partner Data except in the manner as provided in this Agreement and the Master
        Agreement, or to prevent or address service or technical problems.
      </Typography>
      <Typography variant='body1'>
        <b>10. DATA PROTECTION</b>
      </Typography>
      <ul>
        <li>
          <Typography variant='body1'>
            10.1 Each Party shall comply with applicable data protection laws with respect to the
            processing of Personal Data.
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            10.2 The Workspace Partner warrants to Wybrid that it has the legal right to disclose
            all data that it does in fact disclose to the Wybrid under or in connection with this
            Agreement
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            10.3 The Workspace Partner shall only supply to Wybrid, and Wybrid shall only process,
            in each case under or in relation to this Agreement as is necessary for the effective
            provision and utilization of the Hosted Services and for the purposes of discharge of
            Wybrid’s obligations under this Agreement and the Master Agreement.
          </Typography>
        </li>
      </ul>
      <Typography variant='body1' />
      <Typography variant='body1'>
        <b>11. SUPPORT SERVICES</b>
      </Typography>
      <ul>
        <li>
          <Typography variant='body1'>
            11.1 Wybrid shall provide the Support Services to the Workspace Partner during the Term
            of this Agreement on chargeable basis and as required.
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            11.2 Without prejudice to any other rights and remedies available to Wybrid under this
            Agreement, the Master Agreement, law, equity or otherwise, Wybrid may suspend the
            provision of the Support Services if any amount due to be paid by the Workspace Partner
            to Wybrid under this Agreement or under the Master Agreement is overdue, and the
            Workspace Partner fails to make such payment after notice in this regard, if any, as
            prescribed either by this Agreement or under the Master Agreement is due.
          </Typography>
        </li>
      </ul>
      <Typography variant='body1' />
      <Typography variant='body1'>
        <b>12. SCHEDULED MAINTENANCE</b>
      </Typography>
      <ul>
        <li>
          <Typography variant='body1'>
            12.1 Wybrid may from time to time suspend the Services for the purposes of scheduled
            maintenance to the Platform, providing that such scheduled maintenance must be carried
            out in accordance with this Clause.
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            12.2 Wybrid shall, to the extent possible, ensure that all scheduled maintenance is
            carried out outside Business Hours.
          </Typography>
        </li>
      </ul>
      <Typography variant='body1'>
        <b>13. LINKS FROM THIRD PARTY WEBSITES</b>
      </Typography>
      <ul>
        <li>
          <Typography variant='body1'>
            13.1 The Platform or the Hosted Services may contain links to third-party websites or
            services (“Third-Party Services”). Such Third-Party Services are not under the control
            of Wybrid, and Wybrid is / will not be responsible for any Third-Party Services. Wybrid
            provides access to these Third-Party Services only as a convenience to the Workspace
            Partner, and does not review, approve, monitor, endorse, warrant, or make any
            representations with respect to Third-Party Services.
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            13.2 Wybrid does not endorse such Third-Party Services and content and in no event shall
            Wybrid be responsible or liable for any products or services of such third-party
            providers. The Workspace Partner shall use all Third-Party Services at its own risk, and
            should apply a suitable level of caution and discretion in doing so. When The Workspace
            Partner clicks on any of the links to Third-Party Services, the applicable third party’s
            terms and policies apply, including the third party’s privacy and data gathering
            practices. The Workspace Partner acknowledges that different terms of use and privacy
            policies may apply to its use of such Third-Party Services and content. The Workspace
            Partner shall make whatever investigation it feels necessary or appropriate before
            proceeding with any transaction in connection with such Third-Party Services, at its own
            cost.
          </Typography>
        </li>
      </ul>
      <Typography variant='body1'>
        <b> 14. SERVICE AVAILABILITY AND GUARANTEE</b>
      </Typography>
      <ul>
        <li>
          <Typography variant='body1'>
            14.1 Wybrid does not under any circumstances guarantee the availability, accessibility
            or the uptime of the Hosted Services / Services. The Workspace Partner agrees and
            acknowledges that the Platform may be unavailable at any time and for any reason
            (including but not limited to due to scheduled maintenance or network failure). Wybrid
            may restrict the availability of the Hosted Services / Services or certain areas or
            features of the Hosted Services / Services to ensure the security or integrity of its
            servers or to carry out maintenance measures that ensure the proper or improved
            functioning of the Hosted Services / Services. Wybrid may improve, enhance and modify
            the Hosted Services / Services and introduce new services from time to time. The Hosted
            Services / Services may be subject to limitations, delays, and other problems inherent
            in the use of the internet and electronic communications, and Wybrid is not responsible
            for any delays, delivery failures, or other damages, liabilities or losses resulting
            from such problems.
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            14.2 For the avoidance of doubt, downtime caused directly or indirectly by any of the
            following shall not be considered a default or deficiency by Wybrid in provision of the
            Services under this Agreement:
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>1.1.1 A Force Majeure Event;</Typography>
        </li>
        <li>
          <Typography variant='body1'>
            1.1.2 A fault or failure on the Workspace Partner’s computer systems of networks;
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            1.1.3 Any breach by the Workspace Partner of this Agreement; or
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            1.1.4 Scheduled or Unscheduled maintenance carried out in accordance with this
            Agreement.
          </Typography>
        </li>
      </ul>
      <Typography variant='body1' />
      <Typography variant='body1'>
        <b>15 DISCLAIMERS </b>
      </Typography>
      <ul>
        <li>
          <Typography variant='body1'>
            15.1 Wybrid provides and the Workspace Partner acknowledges, accepts and agrees that the
            Hosted Services/ Services (including User Content) are provided on an “as is” and “as
            available” basis, and Wybrid expressly disclaims any and all warranties and conditions
            of any kind, whether express, implied, or statutory, including all warranties or
            conditions of merchantability, fitness for a particular purpose, title, quiet enjoyment,
            accuracy, or non-infringement. Wybrid makes no warranty that the Hosted Services/
            Services and/or the Platform will meet the Workspace Partner requirements, will be
            available on an uninterrupted, timely, secure, or error-free basis, or will be accurate,
            reliable, free of viruses or other harmful code, complete, legal, or safe.
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            15.2 Wybrid makes no representations, warranties or guarantees as to the actions or
            inactions of the Users who may avail of the Workspaces, and Wybrid does not screen or
            otherwise evaluate the Users and/or its employees.
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            15.3 By using the Platform and availing of the Services, the Workspace Partner
            acknowledges and agrees that the Workspace Partner may come into contact with Users that
            may pose harm or risk to the Workspace Partner. Wybrid expressly disclaims all liability
            for any act or omission of User, its employees or any other third party.
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            15.4 Wybrid has made no representations, and have expressly disclaimed, to the maximum
            extent permitted by applicable law, all warranties or representations of every kind or
            nature, either express, implied, or statutory, as to the Services and any ancillary or
            related products or services including, without limitation, any warranties of
            merchantability, fitness for a particular purpose, title, usage or non-infringement of
            third-party rights.
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            15.5 Wybrid does not warrant that the Hosted Services / Services will meet the Workspace
            Partner requirements, and the software or third-party software or any open source
            software used in or with the software, will operate in combination with other hardware,
            software, systems, or data not provided by Wybrid (except as may expressly be specified
            in writing by Wybrid in this Agreement and the Master Agreement).
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            15.6 The use of the Services is entirely at Workspace Partner’s own risk, and that
            Wybrid has made no representations or warranties regarding (a) any data that may be
            provided to the Workspace Partner via the Services or the accuracy or quality of any
            information in such data, or (b) the quality of the Workspaces, (c) the ability of the
            User to pay for any product or service of the Workspace Partner.
          </Typography>
        </li>
      </ul>
      <Typography variant='body1' />
      <Typography variant='body1'>
        <b>16. RESPRESENTATIONS AND WARRANTIES OF WYBRID</b>
      </Typography>
      <Typography variant='body1'>Wybrid warrants to the Workspace Partner that:</Typography>
      <ul>
        <li>
          <Typography variant='body1'>
            16.1 Wybrid has the legal right and authority to enter this Agreement and to perform its
            obligations under this Agreement
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            16.2 Wybrid will comply with all applicable legal and regulatory requirements applying
            to the exercise of Wybrid’s rights and fulfilment of Wybrid’s obligations under this
            Agreement.
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            16.3 Wybrid has or has access to all necessary know-how, expertise and experience to
            perform its obligations under this Agreement.
          </Typography>
        </li>
      </ul>
      <Typography variant='body1' />
      <Typography variant='body1'>
        <b>17 REPRESENTATION AND WARRANTIES OF THE WORKSPACE PARTNER </b>
      </Typography>
      <Typography variant='body1'>
        The Workspace Partner hereby represents and warrants as follows:
      </Typography>
      <ul>
        <li>
          <Typography variant='body1'>
            17.1 The Workspace Partner has the legal right and authority to enter into this
            Agreement and to perform its obligations under this Agreement.
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            17.2 The Workspace Partner operates and conducts its business operations in compliance
            with applicable law and conforms in all respect to the applicable Law.
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            17.3 The information provided by the Workspace Partner to Wybrid, is correct and
            accurate as on date.
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            17.4 All of the parties&apos; warranties and representations in respect of the subject
            matter of this Agreement are expressly set out in this Agreement. To the maximum extent
            permitted by applicable law, no other warranties or representations concerning the
            subject matter of this Agreement will be implied into this Agreement or any related
            contract.
          </Typography>
        </li>
      </ul>
      <Typography variant='body1' />
      <Typography variant='body1'>
        <b>18. CONFIRMATIONS OF THE WORKSPACE PARTNER</b>
      </Typography>
      <Typography variant='body1'>
        The Workspace Partner hereby confirms, acknowledges and understands as follows:
      </Typography>
      <Typography variant='body1' />
      <ul>
        <li>
          <Typography variant='body1'>
            18.1 The availing of the Services requires the Workspace Partner to submit to Wybrid
            certain information, and the Workspace Partner shall maintain accurate, complete and up
            to date information at all times.
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            18.2 The Workspace Partner is responsible for all activity that occurs under its account
            and shall maintain the security and secrecy of the Access Credentials, the account
            username and password at all times.
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            18.3 Notwithstanding anything to the contrary contained herein, Wybrid is not
            responsible or liable in any manner whatsoever for the actions or inactions of the
            Workspace Partner.
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            18.4 Wybrid is not in control or and does not direct or control, direct or control any
            User of the Platform.
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            18.5 Wybrid is a mere service provider to the Workspace Partner, offering or rendering
            the Services and / or Support Services by way of a Software-as-a-Service or cloud
            service arrangement.
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            18.6 The Workspace Partner acknowledges that software is never wholly free from defects,
            errors and bugs; and subject to the other provisions of this Agreement, Wybrid gives no
            warranty or representation that the Services will be wholly free from defects, errors
            and bugs.
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            18.7 The Workspace Partner acknowledges that software is never wholly free from security
            vulnerabilities; and subject to the other provisions of this Agreement, Wybrid gives no
            warranty or representation that the Services will be entirely secure.
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            18.8 The Workspace Partner acknowledges that the Services are designed to be compatible
            only with that software and those systems specified as compatible in the Hosted Services
            Specifications; and Wybrid does not warrant or represent that the Services will be
            compatible with any other software or systems.
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            18.9 The Workspace Partner acknowledges that Wybrid will not provide any legal,
            financial, accountancy or taxation advice under this Agreement or in relation to the
            Services; and, except to the extent expressly provided otherwise in this Agreement,
            Wybrid does not warrant or represent that the Services or the use of the Services by the
            Workspace Partner will not give rise to any legal liability on the part of the Workspace
            Partner or any other person.
          </Typography>
        </li>
      </ul>
      <Typography variant='body1' />
      <Typography variant='body1'>
        <b>19. INTELLECTUAL PROPERTY</b>
      </Typography>
      <ul>
        <li>
          <Typography variant='body1'>
            19.1 Nothing in this Agreement shall operate to assign or transfer any Intellectual
            Property Rights from Wybrid to the Workspace Partner, or from the Workspace Partner to
            Wybrid.
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            19.2 The name, the logo, and all related names, logos, product and service names,
            designs, and slogans of each of the Parties are solely their trademarks. Neither Party
            shall use such marks without the prior written permission of the other Party.
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            19.3 Without prejudice to the generality of the provisions of this clause, it is hereby
            clarified that the Services, the Platform, the Wybrid Content, Intellectual Property
            Rights therein are and shall remain the property of Wybrid, its affiliates or their
            respective licensors. Neither this Agreement nor use of the Platform conveys or grants
            to the Workspace Partner any rights: (a) in or related to the Services, Mobile App, Web
            App, Website or Wybrid Content, except for the limited license granted above; or (b) to
            use or reference in any manner Wybrid, its Affiliates’, or their respective licensors’
            company names, logos, product and service names, trademarks, service marks or other
            indicia of ownership.
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            19.4 The Services and the Wybrid Content may in its entirety or in part be protected by
            copyright, trademark, and/or other applicable laws of India. The Workspace Partner
            acknowledges and agrees that the Platform, Wybrid Content and the Services, including
            all associated intellectual property rights, are the exclusive property of Wybrid and/or
            its licensors or authorizing third parties. The Workspace Partner will not remove, alter
            or obscure any copyright, trademark, service mark or other proprietary rights notices
            incorporated in or accompanying the Platform, Wybrid Content and the Services.
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            19.5 Trademarks, service marks, logos, trade names and any other proprietary
            designations of third parties used on or in connection with the Services are used for
            identification purposes only and may be the property of their respective owners.
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            19.6 The Workspace Partner shall not use, copy, adapt, modify, prepare derivative works
            of, distribute, license, sell, transfer, publicly display, publicly perform, transmit,
            broadcast or otherwise exploit the Platform or the Services or any Collective Content,
            except to the extent such the Workspace Partner is the legal owner of such User Content
            or as expressly permitted in this Agreement. No licenses or rights are granted to any
            party by implication or otherwise under any intellectual property rights owned or
            controlled by either party or its licensors, except for the licenses and rights
            expressly granted in this Agreement.
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            19.7 By creating, uploading, posting, sending, receiving, storing, or otherwise making
            available any User Content on or through the Platform, the Workspace Partner grants to
            Wybrid a non-exclusive, worldwide, royalty-free, revocable and non-transferable license
            to Wybrid to access, use, store, copy, modify, prepare derivative works of, distribute,
            publish, transmit, broadcast, and otherwise exploit in any manner such User Content to
            provide and/or promote the Hosted Service / Services and/or the Platform, in any media
            or platform.
          </Typography>
        </li>
      </ul>
      <Typography variant='body1' />
      <Typography variant='body1'>
        <b>20. TERMINATION AND SUSPENSION</b>
      </Typography>
      <ul>
        <li>
          <Typography variant='body1'>
            20.1 Without prejudice to any other provisions of this Agreement and the rights and
            remedies available to Wybrid under law, equity or otherwise, Wybrid shall have the right
            to recourse to the measures referred to in clause 20.2 of this Agreement and/or
            terminate this Agreement in any of the following circumstances:
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            20.1.1 Breach of the provisions or the terms and conditions or failure by the Workspace
            Partner to perform its obligations under this Agreement and failure by the Workspace
            Partner to remedy the same/ perform its obligations within 15 (fifteen) days of receipt
            of a written notice from Wybrid requiring the Workspace Partner to remedy the same/
            perform its obligations; and/or
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            20.1.2 If the Workspace Partner becomes bankrupt or insolvent, a petition for winding up
            of the Workspace Partner has been admitted and a liquidator or provisional liquidator
            has been appointed or an order for the winding up or dissolution of the Workspace
            Partner has been made by a court of competent jurisdiction; and/or
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            20.1.3 Failure by the Workspace Party to comply with applicable law, rules, and
            regulations, order or request of a court, law enforcement or other administrative agency
            or governmental body; and/or
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            20.1.4 If the Workspace Partner has provided Wybrid with inaccurate, fraudulent,
            outdated or incomplete information; and/or
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            20.1.5 if the Workspace Partner at any time fails to meet any applicable quality or
            eligibility criteria as may be prescribed by Wybrid from time to time; and/or
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            20.1.6 if Wybrid believes in good faith that termination of this Agreement/ the remedies
            set out in clause 20.2 below are reasonably necessary to protect the personal safety or
            property of Wybrid, its Users, or third parties, or to prevent fraud or other illegal
            activity; and
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>20.1.7 Termination of the Master Agreement.</Typography>
        </li>
        <li>
          <Typography variant='body1'>
            20.2 Without prejudice to the right of Wybrid to terminate this Agreement, on the
            occurrence of any of the events set out in clause 20.1 above, and/or in addition to
            termination of this Agreement, Wybrid shall be entitled to do all/ any of the following:
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            (a) limit the Workspace Partner’s access to or use of the Services, Platform, Website.
            Web App and/or Mobile Appl;
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            (b) temporarily or permanently suspend the Wybrid account of the Workspace Partner, and
            cease providing the Workspace Partner access to the Hosted Services or the Platform.
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            20.3 In addition, and without prejudice to the provisions of clause 20.1 and clause 20.2
            of this Agreement, each party shall be entitled to terminate this Agreement without
            assigning any reason whatsoever, by issuing a written notice of 30 (thirty) days to the
            other party in this regard. Upon the expiry of the 30 (thirty) day period, this
            Agreement shall stand terminated.
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            20.4 Upon suspension or termination of the account of the Workspace Partner, the
            Workspace Partner shall not be entitled to/ shall not register a new Wybrid Account
            either directly or indirectly and/or through any other third-party or itself and/or or
            access and use the Hosted Services/ Services or the Platform through an Wybrid Account
            of another Workspace Partner;
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            20.5 Upon expiry or termination of this Agreement or termination or expiry of the Order
            Schedule, upon termination or expiration of this Agreement, the Workspace Partner shall
            be entitled to immediately deactivate the Workspace Partner’s account(s) associated with
            the Agreement or applicable Order Schedule(s).
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            20.6 Upon the termination of the Agreement, any unpaid Fees or dues of the Workspace
            Partner shall continue to become due and payable. Any provision or covenant of this
            Agreement, which expressly, or by its nature, imposes obligations beyond the expiration,
            or termination of this Agreement, shall survive such expiration or termination
            (including but not limited to the following clauses – Intellectual Property Rights
            (Clause 19), Representations and Warranties (Clause17), Indemnification (Clause 24),
            Limitation of Liability (Clause 22), Confidential Information (Clause 8).
          </Typography>
        </li>
      </ul>
      <Typography variant='body1' />
      <Typography variant='body1'>
        <b>21. DATA PRIVACY AND RETENTION</b>
      </Typography>
      <ul>
        <li>
          <Typography variant='body1'>
            21.1 The Workspace Partner acknowledges that personal information of the Users and its
            employees will be collected by Wybrid and may be shared with the Workspace Partner only
            for the purposes of this Agreement. The Workspace Partner will also collect personal
            information of the Users upon the Users using a Workspace, and shall not utilise the
            personal information of the Users for any other purpose other than maintenance of
            records.
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            21.2 The Workspace Partner acknowledges and expressly consents that all data and content
            provided by the Workspace Partner to Wybrid and uploaded on Platform (whether or not in
            aggregated, pseudonymised and/or anonymised form) related to the Workspace Partner, the
            Workspace and other parameters collected under this Agreement may be used, transmitted,
            processed, shared and transferred by the Workspace Partner (i) for performance
            evaluation, optimization and improvement (ii) benchmarking (iii) for marketing and
            advertising ; (iv) where Wybrid has a duty to or is required to disclose such data or
            under a court/ Government order; (v) in connection with any merger, sale of company
            assets, consolidation or restructuring, financing, liquidity event or acquisition or
            (vi) any other lawful purpose.
          </Typography>
        </li>
      </ul>
      <Typography variant='body1' />
      <Typography variant='body1'>
        <b>22. LIMITATION OF LIABILITY</b>
      </Typography>
      <ul>
        <li>
          <Typography variant='body1'>
            22.1 To the maximum extent permitted by law, neither Wybrid nor any other party involved
            in creating, producing, or delivering the Collective Content will be liable to the
            Workspace Partner and/or its affiliates or any third-party for any lost profits, lost
            data, loss of goodwill, costs of procurement of substitute products or services, any
            indirect, consequential, exemplary, incidental, special, or punitive damages, or for any
            damages for personal or bodily injury or emotional distress arising from or relating to
            (a) this agreement, (b) Master Agreement, (c) the use or inability to avail of/ use the
            Services, the Platform, the Mobile App, the Web App, the Website or the Collective
            Content, (d) any inaccuracy or error in the Collective Content (or any part thereof),
            and/or (e) any communications, interactions, or meetings with Users with whom the
            Workspace Partner, its representatives, employees, and agents communicate, interact, or
            meet as a result of availing of the Services or use of the Platform.
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            22.2 Without prejudice to the provisions of clause 22.1 above, under no circumstances,
            shall Wybrid be liable for any special, indirect or consequential damages, including,
            but not limited to, loss of profit, loss of use, loss of revenues or damages to business
            or reputation of the Workspace Partner or of any third party caused by any act of
            omission/commission of Wybrid, the Users and/or the representatives and employees of the
            Users. Without prejudice to what is set out in this clause and the provisions of clause
            22.1 above, Wybrid shall not be liable for any death, damage, injury or loss (whether to
            person or property) resulting from any event, and/or act or omission of the User, or for
            any actions, claims, damages, destruction, injury litigation, loss theft, etc.,
            malicious software or malware to any of the software or hardware of the Workspace
            Partner, arising out of or in connection with the use of the Workspaces by the Users
            and/or the representatives and employees of the Users.
          </Typography>
        </li>
      </ul>
      <Typography variant='body1' />
      <Typography variant='body1'>
        <b>23. FORCE MAJEURE </b>
      </Typography>
      <ul>
        <li>
          <Typography variant='body1'>
            <Typography variant='body1'>
              23.1 Neither party to this Agreement shall be liable for any failure or delay on its
              part in performing any of its obligations under this Agreement or for any loss,
              damage, costs, charges and expenses incurred or suffered by the other party by reason
              thereof, if such failure or delay shall be as a result of or arising out of Force
              Majeure Event.
            </Typography>
            <Typography variant='body1'>
              <b>“Force Majeure Event”</b> shall mean any event beyond the control of the Party on
              account of which a Party is preventing from performing its obligations and/or
              exercising its rights under this Agreement including, any act of war, external
              aggression, terrorism, vandalism, riot, civil commotion, sabotage, fire, flood,
              explosion, epidemic, quarantine restriction, state, nation-, or industry-wide strike
              or lock-out, and act of God, malicious software or malware to any of the software or
              hardware of Wybrid/ used in connection with the Services/ used on/ in connection with
              the Platform.
            </Typography>
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            23.2 The Party affected by the Force Majeure event shall forthwith inform the other
            Party if it is prevented from performing its obligations or exercising its rights under
            this Agreement on account of a Force Majeure event. The obligations of the party(ies) so
            affected by the Force Majeure event shall stand suspended until the date of termination
            of this Agreement in accordance with the provisions of clause 20 of this Agreement, or
            the date of the cessation of the Force Majeure event/ the impact of the Force Majeure
            event ceases.
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            23.3 If the Force Majeure event/ impact of the Force Majeure event continues beyond a
            period of 180 (one hundred and eighty) days, either Party shall be entitled to terminate
            this Agreement.
          </Typography>
        </li>
      </ul>
      <Typography variant='body1' />
      <Typography variant='body1'>
        <b>24. INDEMNIFICATION</b>
      </Typography>
      <ul>
        <li>
          <Typography variant='body1'>
            24.1 [Wybrid shall defend, indemnify and hold the Workspace Partner from and against any
            damages and costs (including reasonable attorneys’ fees and costs incurred by the
            Workspace Partner) finally awarded against the Workspace Partner directly resulting from
            any claim, demand, suit or proceeding from an unaffiliated third party (“Claim”)
            specifically alleging that the Service directly infringes or misappropriates a valid
            copyright, trademark, or trade secret of a third party. Wybrid shall have no
            indemnification obligation for Claims to the extent arising from: (a) the use by the
            Workspace Partner or by any person claiming by, through or under the Workspace Partner,
            of the Services other than as permitted under this Agreement; (b) the combination of the
            Services developed by Wybrid with any data provided by the Workspace Partner with any
            User or third party products, services, hardware, data, content, or business processes;
            or (c) from the modification of the Services by any party other than Wybrid or Wybrid’s
            agents, or modification by Wybrid or Wybrid’s agents based on the instructions of
            Workspace Partner. The foregoing is Wybrid’s exclusive obligation for infringement
            claims. If Wybrid becomes aware of a Claim alleging infringement or misappropriation, or
            Wybrid reasonably believes such a Claim will occur, the Workspace Partner may, at its
            sole option: (i) obtain for Workspace Partner the right to continue use of the Services
            availed of by the Workspace Partner under this Agreement; (ii) replace or modify the
            Services availed of by the Workspace Partner so that it is no longer infringing; or,
            (iii) if neither (i) nor (ii) is reasonably available to Wybrid, terminate the Services,
            in which case Workspace Partner’s sole liability (in addition to the indemnification
            obligations set out in this clause is to refund to Client a prorated amount of prepaid
            fees for the Services applicable to the remaining period (from the date Wybrid is
            notified of the infringement claim by the Workspace Partner) based on the Hosted
            Services Model Subscription.
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            24.2 Wybrid hereby defends, indemnifies, and hold harmless the other party, and its and
            their respective officers, directors, employees, contractors, agents, licensors,
            suppliers, successors, and assigns from and against any actions, suits, claims,
            liabilities, damages, judgments, awards, losses, costs, expenses, or fees, damages,
            judgements, amounts paid in settlement and expenses (including, without limitation,
            attorneys’ fees and disbursements) arising out of, in relation to and/or in connection
            with any of the following: Breach of the provisions of this Agreement [and/or the Master
            Agreement] by the Workspace Partner; and If any of the representations made by the
            Workspace Partner in this Agreement [and/or the Master Agreement] are found to be false,
            true and/or incorrect Use/ Misuse by the Workspace Partner of the Platform, Services
            and/or any information on the Platform.
          </Typography>
        </li>
      </ul>
      <Typography variant='body1' />
      <Typography variant='body1'>
        <b>25. ARBITRATION </b>
      </Typography>
      <ul>
        <li>
          <Typography variant='body1'>
            25.1 Any dispute arising out of or in connection with or pursuant to this Agreement,
            including any question regarding its existence, validity or termination, shall be
            referred to and finally resolved by arbitration in accordance with the Arbitration Rules
            of the Mumbai Centre for International Arbitration (MCIA Rules), which rules are deemed
            to be incorporated by reference in this clause.
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>25.2 The seat of the arbitration shall be Mumbai.</Typography>
        </li>
        <li>
          <Typography variant='body1'>
            25.3 The arbitral tribunal shall consist of 3 (three) arbitrators.
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            25.4 The language of the arbitration shall be English.
          </Typography>
        </li>
      </ul>
      <Typography variant='body1' />
      <Typography variant='body1'>
        <b>26. APPLICABLE LAW AND JURISDICTION</b>
      </Typography>
      This Agreement will be interpreted in accordance with the laws of India, and all disputes and
      claims shall be subject to the exclusive jurisdiction of the courts of Mumbai at Maharashtra.
      <Typography variant='body1' />
      <Typography variant='body1'>
        <b>27. NOTICES</b>
      </Typography>
      <ul>
        <li>
          <Typography variant='body1'>
            27.1 All notices, requests, demands and other communications given by any of the parties
            hereunder shall be in writing in the English language and shall be given only by (i)
            e-mail, and (ii) personal delivery or courier service or registered mail to the
            registered business address or to such other address or e-mail addressed as the parties
            may designate by written notice. Any such communication shall be deemed duly given in
            the case of personal delivery and courier service upon delivery and receipt of written
            acknowledgment thereof, in the case of registered mail 14 (fourteen) days after posting,
            provided that if such day is not a business day or such time not a normal business hour
            then delivery shall be deemed to have occurred on the following business day, in the
            case of electronic mail, upon a confirmation of transmission being recorded on the
            server of the Party sending the communication, unless such Party receives a message
            indicating failed delivery.
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            27.2 Either of the Parties may from time to time change its address or other information
            for the purpose of notices to the other Party by giving notice specifying such change to
            the other Party hereto.
          </Typography>
        </li>
      </ul>
      <Typography variant='body1' />
      <Typography variant='body1'>
        <b>28. WAIVER </b>
      </Typography>
      <ul>
        <li>
          <Typography variant='body1'>
            28.1 No waiver by either Party of any breach of this Agreement shall be a waiver of any
            preceding or succeeding breach.
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            28.2 No waiver by either Party of any right under this Agreement shall be construed as a
            waiver of any other right.
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            28.3 Either Party shall not be required to give notice to enforce strict adherence to
            all terms of this Agreement.
          </Typography>
        </li>
      </ul>
      <Typography variant='body1' />
      <Typography variant='body1'>
        <b>29. MISCELLANEOUS RIGHTS AND OBLIGATIONS</b>
      </Typography>
      <ul>
        <li>
          <Typography variant='body1'>
            29.1 <b>Entire Agreement:</b> The terms of this Agreement are the entire agreement and
            understanding with respect to the subject matter hereof and supersedes all prior
            discussions or representations or any other agreement executed between Wybrid and the
            Workspace Partner.
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            29.2 <b>Amendments:</b> No change, modification, or termination of any of the terms,
            provisions, or conditions of this Agreement shall be effective unless made in writing
            and signed by authorized signatories to this Agreement.
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            29.3 <b>Binding Nature:</b> This Agreement shall be binding upon the Workspace Partner
            and its successors, and the Wybrid and its respective successors.
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            29.4 <b>Assignment:</b> The Workspace Partner acknowledges and agrees that Workspace
            Partner shall not assign or sub-contract any of its rights or obligations under this
            Agreement to any person or entity under any circumstances whatsoever. Any attempted
            assignment or sub-contracting in violation hereof shall be null and void. Provided
            however that the Wybrid shall be entitled to assign its rights and remedies or transfer
            its obligations under this Agreement.
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            29.5 <b>Severability:</b> If any clause, sub-clause, or provision of this Agreement, or
            the application of such clause, sub-clause, or provision, is held invalid by a court of
            competent jurisdiction, the remainder of this Agreement, and the application of such
            clause, sub-clause, or provision to the Parties, or circumstances other than those with
            respect to which it is held invalid shall not be affected.
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            29.6 <b>Counterparts:</b> This Agreement may be signed in counterparts, each of which
            shall be an original, with the same effect as if the signatures thereto and hereto were
            upon the same instrument.
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            29.7 <b>Schedules and Conflict:</b> The schedules to this Agreement form an integral
            part of this Agreement and shall not be construed in isolation. Notwithstanding the
            aforesaid or anything else to the contrary, it is the understanding of the Parties that
            if there is a conflict between the terms of this Agreement and any schedule hereto, the
            terms of the Schedules shall prevail.
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            29.8 <b>Survival:</b> Termination of this Agreement shall not affect those provisions
            hereof that by their nature are intended to survive such termination.
          </Typography>
        </li>
      </ul>
      <Typography variant='body1' />
      <Typography variant='body1'>
        <b>SCHEDULE – II</b>
        <br />
        <b>HOSTED SERVICES SUBSCRIPTION MODEL</b>
        <br />
      </Typography>
      <table>
        <tbody>
          <tr>
            <th>Subscription Model</th>
            <th>Hosted Services featured in the Model</th>
            <th>Applicable Fee</th>
          </tr>
          <tr>
            <td>
              <Typography variant='body1'>
                <b>1.SAAS Model</b>
              </Typography>
            </td>
            <td>
              <Typography variant='body1'>
                (a) Public Inventory Listing - Enables listing of Workspace Partner’s Workspace on
                Wybrid’s platform for facilitating a marketplace for Users and Workspace Partner;
              </Typography>
              <Typography variant='body1'>
                (b) Lead generation for Workspace Partner in respect of identifying and on-boarding
                potential Users;
              </Typography>
              <Typography variant='body1'>
                (c)Inventory Management and Customer Profile Management (Both Dedicated or Flexible,
                at the option of the Client) by Wybrid; (d)Ticketing system provided by Wybrid for
                tracking all tickets raised by [Clients/ Users];
              </Typography>
              <Typography variant='body1'>(e)Staff Management by Wybrid;</Typography>
              <Typography variant='body1'>
                (f)Events management and broadcast facilities provided by Wybrid for promotional
                activities;
              </Typography>
              <Typography variant='body1'>
                (g)CRM (Sales &amp; Profits) tracked by Wybrid;
              </Typography>
              <Typography variant='body1'>
                (h)Inventory Invoicing by Wybrid based on booking history of both the Dedicated as
                well as Flexible customer-base;
              </Typography>
              <Typography variant='body1'>
                (i)Clients may access the Platform and use the same for booking the Workspace listed
                by the Workspace Partner and utilizing the services of the Workspace Partner.
              </Typography>
            </td>
            <td>
              <Typography variant='body1'>
                At the discretion of Wybrid Technology Private Limited
              </Typography>
            </td>
          </tr>
        </tbody>
      </table>
      <Typography variant='body1' />
    </TOCBoxContainer>
  );
}

export default TermsAndCondition;
