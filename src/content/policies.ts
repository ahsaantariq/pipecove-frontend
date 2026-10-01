export type PolicyDefault = {
  slug: string;
  title: string;
  summary: string;
  updatedLabel: string;
  body: string;
};

const UPDATED = "October 1, 2026";

export const POLICY_DEFAULTS: PolicyDefault[] = [
  {
    slug: "terms",
    title: "Terms of Service",
    summary: "The contract for a Pipecove workspace: plans, the wallet, numbers, Meta channels, and what you are responsible for.",
    updatedLabel: UPDATED,
    body: `# Terms of Service

**Last updated: ${UPDATED}**

These Terms of Service ("Terms") are the agreement between you and Pipecove for the CRM at app.pipecove.com and the public site at pipecove.com (together, the "Service"). Pipecove is the operator of those sites. If you use the Service, you agree to these Terms, the [Privacy Policy](/legal/privacy), the [Acceptable Use & Messaging Policy](/legal/acceptable-use), and the [Refund & Cancellation Policy](/legal/refunds). Partners also agree to the [Partner Program Terms](/legal/partners).

These Terms are written in plain language so a workspace can see what it is buying. They are not legal advice about your campaigns.

## 1. Who can use Pipecove

You must be at least 18 and able to enter a contract. You use the Service for a business, practice, or other organization, not as a consumer toy. If you are in Australia or the United Kingdom, nothing here removes a guarantee or right that the law says we cannot remove, including under the Australian Consumer Law or the Consumer Rights Act 2015 where those laws apply to you.

## 2. The account

You give accurate information when you create a workspace, and you keep it current. You are responsible for the people you invite, the credentials you issue, and everything done with them until you tell us the credentials are compromised. Email support@pipecove.com if you suspect misuse.

A workspace has one owner. On Growth and Agency the owner may invite agents and set what each agent can open. Free and Solo include one seat. The owner is responsible for agents the same way they are responsible for their own use.

## 3. Plans

The live catalog is four plans. Prices are in US dollars, per workspace subscription, billed monthly, and exclude tax:

- **Free** — $0. It stays free. It does not require a card and it does not convert into a paid plan. It includes 1 seat, 1 workspace, 100 contacts, 25 opportunities, 1 pipeline, 1 automation, the dashboard, email, templates, and two-factor sign-in.
- **Solo** — $19 per month. 1 seat, 1 workspace, 2,000 contacts, unlimited opportunities, 3 pipelines, 5 automations, plus custom fields, calendar, booking, appointments, the public API, SMS, voice calling, and phone numbers.
- **Growth** — $49 per month. 5 seats, 1 workspace, 10,000 contacts, unlimited opportunities, unlimited pipelines, 25 automations, plus everything in Solo, WhatsApp, Facebook Messenger, Instagram direct messages, custom objects, and agents and roles.
- **Agency** — $99 per month. 15 seats, 3 workspaces, unlimited contacts, unlimited opportunities, unlimited pipelines, unlimited automations, plus everything in Growth.

If the checkout screen shows a different price, interval, or cap, the checkout screen is the one that bills. We do not sell extra seats beyond the cap on the plan. If you downgrade, the lower cap applies and you must remove seats, records, or channels the lower plan does not include. We may refuse a downgrade until you do.

There is no automatic free trial that turns into a charge. Moving from Free to a paid plan is a choice you make in the app.

Subscriptions renew each month until you cancel. Cancellation takes effect at the end of the period you have already paid for. We may change prices or caps for existing subscribers with at least 30 days' notice by email or an in-app notice. Tax is added where the law requires it.

## 4. The usage wallet

SMS, voice calling, WhatsApp usage, and phone-number rental are not included in the monthly price. They spend a prepaid wallet at the rates shown in the workspace before you send, call, or buy. You authorize us to debit that balance as you use those features.

Wallet funds are not a subscription. They do not expire while the account is in good standing. They are not refundable except as the [Refund & Cancellation Policy](/legal/refunds) says, or where the law requires a refund. If the account is terminated for a breach, unused wallet funds may be forfeited to the extent the law allows.

Facebook Messenger and Instagram direct messages are included in Growth and Agency. They are not drawn from the wallet. Meta may still apply its own eligibility rules, and those rules are not ours to waive.

## 5. Phone numbers: Australia and the United Kingdom

Today you may buy numbers only for **Australia** and the **United Kingdom**, and only for SMS, voice calling, and WhatsApp. Other countries are not available. When we add a country, it will be listed in the app before you can buy it. A page on this site that is older than the app does not add a country.

Before a number can be purchased, the workspace must submit the identity, address, and business details Twilio requires for that country (a regulatory bundle). You enter those details in Pipecove. We transmit them to Twilio so Twilio can apply the country's requirements. Twilio, not Pipecove, approves or rejects the bundle. We may store a copy so you do not have to retype it for the next number in the same country.

You promise that the details are accurate and that you have the right to provide them, including any personal information about a director, authorized representative, or address. We do not guarantee that a bundle will be approved, that a number will be available, or that a carrier will keep delivering to it. Number rental already paid for the current cycle is handled in the refund policy. When you release a number, it is released at the end of that number's current rental period unless the carrier requires a sooner release.

## 6. WhatsApp, Facebook Messenger, and Instagram

On Growth and Agency a workspace can connect:

- a WhatsApp-capable number provisioned through Twilio, subject to WhatsApp's business rules and Twilio's approval, and
- a Facebook Page and an Instagram professional account that the workspace administers, so the team can read and reply to Messenger and Instagram direct messages inside the CRM.

Pipecove is the tool. You are the business those people are talking to. You will follow Meta's Platform Terms, Developer Policies, Community Standards, Instagram messaging rules, and the WhatsApp Business Policy and Commerce Policy, including rules about who you may message, the messaging window, and what you may not do with platform data. You will not use unofficial clients, scrapers, or automation that Meta forbids. You will not ask us to bypass a block, a closed window, or a failed review.

We may suspend a channel, without refund of the time it was unavailable, if Twilio, a carrier, or Meta tells us to, or if your use puts other workspaces' deliverability at risk.

## 7. Email

You may connect your own mailbox with IMAP and SMTP. Messages sent through that mailbox use that mailbox's limits. They are not wallet usage.

Email that Pipecove itself sends — sign-in, billing, support, and service notices — comes from a mail server we operate (Mailcow). That is our mail, not a mailbox we share with other customers' marketing.

## 8. Acceptable use

You will not use the Service to break the law, to send messages without a lawful basis, to impersonate someone else, to distribute malware, or to probe the Service. The [Acceptable Use & Messaging Policy](/legal/acceptable-use) is part of these Terms. We may suspend messaging, the wallet, or the whole workspace if you break it, including where complaint rates or carrier feedback say the account is harming the shared phone numbers or domains.

You will not copy the Service to build a competing product, and you will not reverse engineer it except to the extent the law says that limit is unenforceable.

## 9. Your data

You keep ownership of the contacts, messages, files, and other content you submit ("Customer Data"). You give us a limited right to host, process, transmit, and back up Customer Data only to provide, secure, and support the Service, and to meet the law.

You are responsible for having a lawful basis to store and contact those people, and for the accuracy of what you upload. For Customer Data you are the controller (or the equivalent under local law) and we are the processor. The [Data Processing Addendum](/legal/dpa) applies to that processing and is part of these Terms. The [Privacy Policy](/legal/privacy) explains the rest.

## 10. Our infrastructure and third parties

We run the Service on a virtual private server we administer. Workspace data is stored in PostgreSQL on that infrastructure. Product email is sent from our Mailcow server.

We use a short list of third parties, described in the Privacy Policy: Stripe for card payments, Twilio for SMS, voice, WhatsApp numbers, and delivery, Meta for Messenger and Instagram when you connect them, and Google only if you connect Google Calendar or a Google sign-in. Their terms also apply to the part of the Service they power. We are not responsible for their outages. We do not promise that a third-party channel will stay available in its current form.

## 11. Intellectual property

The Service, the software, and the Pipecove name and mark belong to us. These Terms do not give you our brand, except the right to say you are a customer. Partners may use the name only as the Partner Program Terms allow.

## 12. Availability

We aim to keep the workspace up. We do not promise uninterrupted service. We may take the Service down for maintenance, security, or a failure outside our control. Prepaid subscription time is not refunded for ordinary maintenance.

## 13. Suspension and ending the agreement

You may cancel as the refund policy describes. We may suspend or close a workspace if you do not pay, if you break these Terms, if a carrier or Meta requires it, or if keeping the account would put other customers or the Service at risk. Where we can do it without adding to the harm, we will tell you the reason and give you a chance to fix a curable breach.

When the agreement ends, your right to use the Service ends. Sections that should survive — payment for amounts already due, ownership, disclaimers, liability limits, indemnity, and the law that governs — survive.

## 14. Disclaimers

The Service is provided as it is and as it is available. To the extent the law allows, we disclaim implied warranties of merchantability, fitness for a particular purpose, and non-infringement. We do not warrant that a message will be delivered, that a number will be approved, that a Meta channel will pass review, or that the Service will produce sales. Where a non-excludable guarantee applies (including under the Australian Consumer Law), our liability for a failure to meet it is limited, to the extent the law allows, to resupplying the Service or paying the cost of resupply.

## 15. Liability

To the extent the law allows, we are not liable for indirect, incidental, special, consequential, or punitive loss, or for lost profits, lost data, or lost opportunities, even if we were told they were possible. Our total liability for claims arising out of the Service in any 12-month period is limited to the fees you paid us for the Service in that period, not counting wallet amounts that we have already spent with a carrier or Meta on your instructions. These limits do not apply to liability that the law says we cannot limit, including fraud, or death or personal injury caused by negligence.

## 16. Your indemnity

You will defend and indemnify Pipecove against claims, losses, and reasonable legal fees arising from your Customer Data, your messages, your regulatory submissions, your breach of these Terms, or your breach of Meta's, Twilio's, or a carrier's rules, except to the extent the claim is caused by our own breach of these Terms.

## 17. Law

These Terms are governed by the laws of the place where Pipecove is established, without regard to conflict-of-law rules. Courts in that place have exclusive jurisdiction, except that either of us may seek an injunction anywhere for misuse of intellectual property or confidential information. If you are a consumer or small business with a non-waivable right to sue at home, including in Australia or the United Kingdom, that right remains.

## 18. Changes

We may update these Terms. If a change is material we will give notice by email or in the product before it applies to you. If you keep using the Service after the effective date, you accept the update. If you do not accept it, cancel before that date.

## 19. Contact

Pipecove
Email: support@pipecove.com
Privacy: privacy@pipecove.com
Billing: billing@pipecove.com

A postal address for formal notices is available on request to support@pipecove.com.`,
  },
  {
    slug: "privacy",
    title: "Privacy Policy",
    summary: "What Pipecove collects, where it lives (our server, PostgreSQL, Mailcow), and how Facebook, Instagram, Google, Twilio, and Stripe data is limited.",
    updatedLabel: UPDATED,
    body: `# Privacy Policy

**Last updated: ${UPDATED}**

This policy explains how Pipecove ("we", "us") handles personal information when you use pipecove.com and app.pipecove.com. It is written so a workspace, an agent, a person in a lead list, and a reviewer at Meta or Google can see the same facts.

We do not sell personal information. We do not use information from Facebook, Instagram, WhatsApp, or Google APIs to advertise, and we do not transfer it to data brokers.

## 1. Who this covers

- **Workspace customers** — the person or business that opens a workspace and pays, if they pay.
- **Agents** — people a workspace invites in.
- **Partners** — people with a partner account. See the [Partner Program Terms](/legal/partners).
- **Visitors** — people who only read this site.
- **Contacts** — people whose details a workspace stores or messages. For that data the workspace is the controller and we are the processor. Section 10 and the [Data Processing Addendum](/legal/dpa) cover that role. This policy still explains the mechanics, because those people deserve a plain answer.

## 2. Information we collect

**You give us:** name, email, password hash, business name, billing contact, and the content of the workspace (contacts, notes, files, messages, calendar events, custom fields, regulatory details for a phone number).

**The product records:** sign-in times, IP address, browser type, pages and features used, message status (sent, delivered, failed), and audit events such as a stage change or an export.

**Payments:** Stripe processes cards. We store a customer reference, the last four digits and brand when Stripe provides them, the plan, invoices, and wallet balance. We do not store full card numbers.

**Phone numbers:** to buy an Australia or United Kingdom number we collect the identity and address details Twilio requires for that country and send them to Twilio. We keep a copy with the workspace so the bundle can be reused and so we can answer a carrier question.

**Facebook Messenger and Instagram:** if a workspace connects a Page or an Instagram professional account, we receive the account and Page identifiers, the messages and attachments in those threads, and the basic profile details Meta includes with a message (such as a name or username). We use that only to show the thread in the CRM and to send the reply the agent writes.

**WhatsApp:** message content, phone numbers, and delivery status needed to carry the conversation, via Twilio and WhatsApp.

**Google:** if you connect Google Calendar, we receive the calendar events and account identifiers needed to create, update, and display those events. If you use a Google sign-in, we receive the basic profile Google shares for that sign-in (typically name, email, and a subject identifier).

**Pipecove's use and transfer to any other app of information received from Google APIs will adhere to the Google API Services User Data Policy, including the Limited Use requirements.**

**Mail:** product email (verification, billing, support) is sent from a Mailcow server we operate. If you connect your own mailbox, we store the credentials or tokens needed to read and send as that mailbox, and we store the messages that belong on the contact timeline.

## 3. Where it is stored

The Service runs on a virtual private server we administer. The database is PostgreSQL on that infrastructure. We operate the mail server ourselves with Mailcow. We do not park the CRM inside another vendor's CRM.

The company that provides the virtual server is an infrastructure host. We do not publish a data-center city on this page. If a contract needs the location, email privacy@pipecove.com before you subscribe and we will tell you the current region in writing.

We take backups so we can restore the service. Backups are kept only as long as needed for that purpose and are then overwritten or deleted.

## 4. Why we use it

- To provide the CRM you signed up for: records, search, inbox, calendar, automations, billing, and support.
- To send messages and place calls you initiate, and to buy or release numbers you request.
- To apply Twilio's country requirements before a number is sold.
- To show and send Facebook, Instagram, and WhatsApp conversations you connect.
- To sync a calendar you connect.
- To secure the Service, prevent abuse, and keep the shared numbers and domains deliverable.
- To meet law, including tax and a lawful request from a regulator or court.
- To tell existing customers about changes to the Service. You can opt out of product news that is not a service notice.

We do not use Customer Data, Meta platform data, or Google user data to train public models, to build advertising audiences, or to sell lookalike lists.

## 5. Legal bases

Where the UK GDPR or the EU GDPR applies, we rely on:

- **Contract** — running the workspace you asked for, and (as processor) the instructions in the Data Processing Addendum.
- **Legitimate interests** — securing the Service, preventing fraud, understanding which product pages are used, and limited mail to existing customers about the Service, balanced against your rights. You can object as Section 8 describes.
- **Consent** — where we ask for it, including non-essential cookies and optional marketing. You can withdraw it at any time.
- **Legal obligation** — tax, accounting, and lawful requests.

Australian Privacy Principles, the UK GDPR, and PIPEDA-style duties are honored for the people they cover. The phone product is sold for Australia and the United Kingdom today. A workspace may still store a contact who lives somewhere else, and the law of that person's country can still apply to the workspace.

## 6. Who we share it with

We share personal information with:

- **Stripe** — payments and invoicing.
- **Twilio** — SMS, voice, WhatsApp numbers and delivery, and the regulatory bundle for Australia or the United Kingdom.
- **Meta** — Facebook Messenger and Instagram messaging, only when the workspace connects those channels, and only to deliver the conversation.
- **Google** — only when you connect Google Calendar or use Google sign-in, and only for that feature.
- **The infrastructure host** of the virtual server we administer.
- **Advisers** — accountants or lawyers, under confidentiality, when we need them.
- **Authorities** — when the law, a court, or a regulator requires it, or when we must protect someone from serious harm.
- **A buyer** — if we sell or reorganize the business, under a duty to use the data only as this policy allows. We will tell workspace customers if their data moves to a new operator.

We do not share personal information with third parties for their own marketing. We do not sell it. We do not "share" it for cross-context behavioral advertising as the California Privacy Rights Act uses that word.

A workspace's own agents see the records the owner allows. That disclosure is the workspace's, not ours.

## 7. How long we keep it

We keep workspace data while the account is open. After cancellation we keep it for **60 days** so you can reactivate, then we delete or anonymize it. We keep invoices and tax records for the period the law requires, which is often several years. Regulatory bundle documents are kept while you hold a number that depends on them, and then for as long as Twilio or the carrier requires, or 60 days after the number is released, whichever is longer.

Server logs are kept for a shorter operational period, generally not more than 12 months, unless we are investigating abuse.

Message content from Facebook, Instagram, or WhatsApp is deleted on the same schedule as the rest of the workspace, and sooner if you disconnect the channel and ask us to delete those threads.

## 8. Your rights

Depending on where you live, you may have the right to access, correct, delete, restrict, or object to processing, to portability, to withdraw consent, and to complain to a regulator. You can opt out of marketing mail at any time. Service mail (receipts, security, changes to the Terms) is not marketing.

- **Australia** — Privacy Act 1988. Complaints can go to the Office of the Australian Information Commissioner (OAIC).
- **United Kingdom** — UK GDPR and the Data Protection Act 2018. Complaints can go to the Information Commissioner's Office (ICO).
- **European Economic Area** — GDPR. You may complain to your local supervisory authority.
- **California** — CCPA/CPRA rights to know, delete, and correct, and to opt out of sale or sharing. We do not sell or share personal information as those terms are defined. We will not discriminate against you for exercising a right.
- **Canada** — access and correction rights under PIPEDA where it applies, and a complaint to the Office of the Privacy Commissioner.

Email privacy@pipecove.com. We will verify the request, respond within 30 days (or sooner if the law requires), and tell you if we need more time. If we process the data as a processor, we will pass the request to the workspace or help the workspace answer it.

**Deleting Facebook or Instagram data.** You can disconnect the Page or Instagram account in workspace settings, delete the contact, or close the workspace. You can also email privacy@pipecove.com with the workspace email and the Page name or Instagram username. We will delete or disconnect that platform data within 30 days unless the law requires us to keep a record (for example an invoice). Disconnecting stops new messages. Deletion removes the threads we stored.

**Deleting Google data.** Disconnect Google Calendar in settings, or email privacy@pipecove.com. We will delete the synced events and tokens within 30 days, subject to the same legal holds.

## 9. Security

We use TLS for data in transit, restrict access to the servers and the database to people who operate the Service, and support two-factor sign-in on every plan. Five failed sign-ins lock an account. We do not claim a SOC 2 or ISO certificate we do not hold. No method of storage is perfectly secure. If we learn of a breach that the law says we must announce, we will notify the people the law requires us to notify.

## 10. When we are the processor

For contacts, leads, and messages a workspace uploads or receives, the workspace decides the purposes. We process that data on its instructions to provide the Service. Workspaces must have a lawful basis, must not ask us to message someone unlawfully, and must honor opt-outs. The [Data Processing Addendum](/legal/dpa) is the contract for that processing.

## 11. International transfers

Because we operate our own server, data may sit in a country that is not the country you or your contact live in. Where the UK GDPR or EU GDPR requires a transfer tool, we use an approved mechanism such as the International Data Transfer Agreement or standard contractual clauses, plus the supplementary measures those regimes expect. Ask privacy@pipecove.com if you need the current location and the transfer tool named in a contract.

## 12. Children

The Service is not for anyone under 18. We do not knowingly collect personal information from children. If you believe a child has an account, email privacy@pipecove.com and we will delete it.

## 13. Cookies

Cookies are described in the [Cookie Policy](/legal/cookies).

## 14. Changes

We will post changes on this page and change the date above. If a change is material we will also email workspace owners or show a notice in the product.

## 15. Contact

Pipecove
Email: privacy@pipecove.com
Support: support@pipecove.com

A postal address for privacy requests is available on request. We would rather answer the request than make you wait on a street address, so email is the working channel.`,
  },
  {
    slug: "cookies",
    title: "Cookie Policy",
    summary: "The cookies the marketing site and the workspace actually set, and how to refuse the ones that are not required.",
    updatedLabel: UPDATED,
    body: `# Cookie Policy

**Last updated: ${UPDATED}**

This policy says which cookies and similar technologies Pipecove uses on pipecove.com and app.pipecove.com.

## 1. What a cookie is

A cookie is a small text file a site stores on your device. We also use local storage for the same kinds of jobs: keeping a session, remembering a preference. This policy covers both.

## 2. What we use

**Strictly necessary.** These keep you signed in, protect the form against cross-site requests, remember a cookie choice, and load the workspace. The product does not work without them. We do not ask permission for these, because the law treats them as essential.

**Preferences.** If you collapse a panel or pick a display setting, we may store that on the device so it survives a refresh. This is optional in the sense that the CRM still opens without it.

**Measurement.** We may measure which public pages are read (for example pricing versus partners) so we can tell what is useful. If we use a third-party analytics tool, it will be named in the cookie banner before it runs, and it will not run for UK or EEA visitors until they accept it. We do not use advertising cookies and we do not build remarketing audiences.

**Payment.** Stripe may set cookies when you open a checkout it hosts. Stripe's own policy describes those.

We do not set Facebook Pixel, Google Ads, or similar advertising cookies as part of the product. If that ever changes, this policy and the banner will change first, and UK and EEA visitors will be asked before those cookies are set.

## 3. Your choices

The banner on the public site, where it is shown, lets you accept or refuse non-essential cookies. You can also block or delete cookies in the browser. Blocking strictly necessary cookies will sign you out and may break checkout.

- **United Kingdom and EEA.** Non-essential cookies wait for consent, under PECR and the UK GDPR (and the ePrivacy rules in the EEA).
- **Australia.** We apply the same choice, even where the Spam Act and the Privacy Act do not require a banner in the European form.
- **Everyone else.** Necessary cookies only, until you opt in to measurement, if measurement is offered.

## 4. How long they last

Session cookies end when you close the browser or sign out. A "remember this device" or preference cookie, if set, lasts no longer than 12 months. Consent records last long enough to show what you chose, and no longer than 12 months before we ask again.

## 5. Changes

We will update this page when the list changes. The date at the top is the date of the last change.

## 6. Contact

privacy@pipecove.com`,
  },
  {
    slug: "refunds",
    title: "Refund & Cancellation Policy",
    summary: "Free stays free. Paid plans cancel at period end. Wallet balances and number rentals are separate from the subscription.",
    updatedLabel: UPDATED,
    body: `# Refund & Cancellation Policy

**Last updated: ${UPDATED}**

## 1. Free

The Free plan is $0. It does not take a card. It does not expire into a paid plan. There is nothing to refund. You can close a Free workspace in the app, or by emailing billing@pipecove.com.

## 2. Cancelling a paid plan

Solo, Growth, and Agency renew monthly until you cancel. You can cancel in the workspace billing settings or by emailing billing@pipecove.com from an admin address. Cancellation takes effect at the **end of the period you have already paid**. You keep access until that date. We do not bill the next month.

## 3. Subscription refunds

- **Monthly fees** are not refunded for the unused part of a month. You chose a month, and you keep that month.
- If we ever offer an annual price, the price at checkout applies. Annual fees already paid are not refunded for unused months. You keep access until the end of the paid year.
- If we billed you twice, billed the wrong plan, or billed after a cancellation that we had already confirmed, we will refund the mistaken amount.
- Nothing in this policy limits a non-excludable right, including a remedy under the Australian Consumer Law or a UK consumer right where one applies. Most workspaces buy Pipecove for business use. If a consumer guarantee applies, we will honor it.

## 4. Wallet

Money you add to the usage wallet pays for SMS, voice, WhatsApp usage, and number rental. It is separate from the subscription.

Wallet funds are **not refundable**, except:

- the law requires it,
- we or a carrier made a verified billing error, or charged the wallet for a message the product did not send because of a fault on our side,
- we agree, in writing, in a particular case.

An unused balance stays on the workspace while the account is open and in good standing. It does not expire on a clock. If we close the account for a serious breach of the Terms or the Acceptable Use Policy, unused wallet funds may be forfeited to the extent the law allows. Closing the account yourself does not automatically cash the balance out.

## 5. Number rental

A number's rental fee is paid for the current rental cycle from the wallet. If you release the number, it is released at the end of that cycle unless the carrier releases it sooner. The fee for the cycle already started is not refunded. We do not charge a later cycle once the release is in.

If Twilio rejects a regulatory bundle before a number is sold, you are not charged the rental. Details you already submitted stay on the workspace until you delete them or close the account, as the Privacy Policy describes.

## 6. Meta channels

Facebook Messenger and Instagram DMs are part of Growth and Agency, not a separate rental. If Meta suspends your Page, your Instagram account, or our ability to carry a thread, that is not a subscription refund. You still have the rest of the plan. If the failure is ours and the workspace cannot use the CRM at all for a material part of a paid month, write to billing@pipecove.com and we will look at a credit.

## 7. Chargebacks

If you dispute a charge with the bank before you write to billing@pipecove.com, we may suspend the workspace until the dispute is resolved. A chargeback on a subscription does not erase messages already sent or carrier fees already incurred.

## 8. How to ask

Use billing settings in the app, or email billing@pipecove.com from the workspace owner's address. Include the workspace name, the invoice, and what you believe is wrong. We answer billing mail within 5 business days.

## 9. Changes

We may update this policy. A change does not rewrite a charge we have already made. Material changes are notified by email or in the product.

## 10. Contact

Pipecove
Email: billing@pipecove.com`,
  },
  {
    slug: "acceptable-use",
    title: "Acceptable Use & Messaging Policy",
    summary: "Consent, identification, and opt-out for email, SMS, calls, WhatsApp, Messenger, and Instagram. Australia and the UK are the phone markets today.",
    updatedLabel: UPDATED,
    body: `# Acceptable Use & Messaging Policy

**Last updated: ${UPDATED}**

This policy binds every workspace and agent that sends email, SMS, or WhatsApp, places a call, or replies on Facebook Messenger or Instagram through Pipecove. It exists so the messages are lawful, so Meta and the carriers will keep the channels open, and so one workspace cannot burn deliverability for everyone else.

**If you break it, we can pause messaging, hold or forfeit the wallet to the extent the law allows, or close the workspace.**

This is a product rule. It is not a legal opinion about your list. If you are unsure, ask a lawyer before you send.

## 1. Consent, or another lawful basis, comes first

You may send a commercial email, SMS, or WhatsApp message, or place a marketing call, only if:

- the person has given a valid consent that covers that channel and that sender, or
- a law that applies to that person clearly allows the message without fresh consent (for example some existing-customer rules).

You may not:

- buy, rent, scrape, or guess a list and load it into the CRM,
- message someone who has not dealt with your business, because a number happens to be in a spreadsheet,
- hide who is sending,
- use Pipecove, Twilio, WhatsApp, Facebook, or Instagram in a way their own terms forbid.

"Consent" means the standard the recipient's law uses, not a pre-ticked box and not a consent buried in a paragraph the person did not see.

## 2. What every commercial message must show

- **Who you are.** Your real business name.
- **How to reach you.** A reply path that works.
- **How to stop.** A working unsubscribe for email. For SMS, the keywords in Section 3.
- **A physical address** on commercial email where CAN-SPAM, CASL, or a similar rule requires it.

Templates in the product do not add this for you. You put it in the template.

## 3. Opt-out

**SMS.** Honor STOP, UNSUBSCRIBE, CANCEL, END, and QUIT. The first marketing SMS to a person should say they can reply STOP. After they do, you do not message them again on that number, except a single confirmation that you stopped if the carrier expects one.

**Email.** Every commercial email needs a working unsubscribe. Honor it within 5 business days, and sooner where the law is stricter. The Australian Spam Act expects unsubscribe action within 5 business days. CASL, where it applies, expects 10 business days. Do not wait for the longer number if the shorter one applies.

**Calls.** If someone asks you not to call, you stop. In the United Kingdom you do not make unsolicited marketing calls to numbers on the Telephone Preference Service unless the law's narrow exception actually fits. In Australia you follow the Do Not Call Register Act where it applies.

**WhatsApp, Messenger, and Instagram.** A person who blocks you, asks you to stop, or cannot be messaged under Meta's rules is not messaged again. Do not move them to SMS to dodge a block.

## 4. Australia and the United Kingdom, because that is where the numbers are

Phone numbers in Pipecove are sold only for **Australia** and the **United Kingdom**, for SMS, calling, and WhatsApp. The law of the person you contact still applies even if you hold a local number.

**Australia — Spam Act 2003 (ACMA), Do Not Call Register Act, and the Privacy Act.** Commercial electronic messages need consent (express, or inferred where the Act allows it), identification, and a working unsubscribe honored within 5 business days. Inferred consent from a published address is narrow. Do not treat a scraped website as consent.

**United Kingdom — PECR and the UK GDPR.** Marketing email and SMS to individuals generally need consent. The soft opt-in is narrow: you obtained the details in a sale or negotiation, you are marketing your own similar product, and you offered an opt-out at collection and in every message. Live marketing calls must respect the Telephone Preference Service and any notification the person has given you. You need a lawful basis under the UK GDPR for the personal data, not just a PECR excuse.

**WhatsApp** is not a loophole around those laws. It adds the WhatsApp Business Policy: people should expect your message, you identify the business, and you do not send what WhatsApp prohibits.

If we later add countries, this section will grow. Until then, do not route foreign marketing through an Australian or UK number to dodge another country's rules. Carriers treat that as abuse, and so do we.

## 5. Other regions, if your contact lives there

Holding an AU or UK number does not legalize a message to someone in the United States, Canada, New Zealand, or anywhere else.

- **United States.** The TCPA can require prior express written consent for marketing texts and autodialed or prerecorded marketing calls to mobiles. CAN-SPAM applies to commercial email. The National Do Not Call Registry applies to many sales calls.
- **Canada.** CASL requires express or implied consent before a commercial electronic message. Implied consent expires. Penalties are large.
- **New Zealand.** The Unsolicited Electronic Messages Act requires consent, identification, and a working unsubscribe.

If you are not sure the message is lawful in the recipient's country, do not send it.

## 6. Facebook Messenger and Instagram

Growth and Agency can connect a Facebook Page and an Instagram professional account so agents reply from the CRM. That is a convenience, not a new right to message strangers.

You will:

- Connect only a Page and an Instagram account your business administers.
- Follow Meta's Platform Terms, Developer Policies, Community Standards, and Instagram's messaging rules.
- Respect the messaging window and any requirement that the person contacted you first, or that a permitted message tag applies. We will not build a switch that ignores those rules.
- Use the conversation only to serve that person for your business. You will not export Messenger or Instagram data to an ad network, a data broker, or another product that is not this CRM.
- Not scrape profiles, not automate outreach Meta forbids, and not use unofficial APIs.

We use Meta platform data only to provide the inbox you asked for. We do not sell it, and we do not use it to advertise. If Meta asks us to remove a use, we will.

## 7. Content you may not send

You may not use the Service for:

- fraud, phishing, or a fake identity,
- malware or malicious links,
- content that is illegal in the place you send it or the place the recipient reads it,
- harassment, threats, or hate,
- anything Twilio's acceptable use, WhatsApp's commerce and business policies, or Meta's community standards prohibit, including categories those policies ban even when local law is silent.

## 8. Keep a record of consent

Store, on the contact, how and when consent was collected (for example "website form, 12 March 2026, unticked box, SMS and email"). If we receive a complaint, we may ask you for that record. If you cannot produce it, we may pause the campaign while we look. We may also pause on complaint rate, bounce rate, or a carrier or Meta notice, without waiting for a perfect case.

## 9. Regulatory details for numbers

The identity and address details you submit for an Australian or UK number must be true. Do not reuse another business's documents. Do not buy a number for a purpose you will not disclose to Twilio. A rejected or revoked bundle means the number does not go live, or it is taken back. That is not a reason to open a second workspace and try the same documents.

## 10. Your job, not ours

You are solely responsible for the lawfulness of your campaigns in every country where a recipient sits. We provide the desk, the number path, and the channel connection. We do not review each message before it sends, and our decision to deliver one is not a statement that it was lawful.

## 11. Reporting

Abuse of the Service: abuse@pipecove.com. Questions about this policy: support@pipecove.com.

## 12. Contact

Pipecove
Email: support@pipecove.com`,
  },
  {
    slug: "dpa",
    title: "Data Processing Addendum",
    summary: "The processor terms for lead and message data: instructions, our server, subprocessors, deletion, and help with privacy requests.",
    updatedLabel: UPDATED,
    body: `# Data Processing Addendum

**Last updated: ${UPDATED}**

This Data Processing Addendum ("DPA") is part of the [Terms of Service](/legal/terms). It applies when Pipecove processes personal data about a workspace's contacts, leads, and correspondents on the workspace's instructions. The workspace is the controller (or a processor acting for its own customer). Pipecove is the processor.

It is written so it can be used as the processor contract a business, and a Meta or Google review, expects to find. If you need it signed as a PDF, email privacy@pipecove.com and we will countersign this text.

## 1. What we process

Personal data the workspace submits or that arrives because the workspace connected a channel: names, email addresses, phone numbers, message content, notes, files, calendar details, and the regulatory identity details the workspace submits to buy a number.

We do not sell that data. We do not use it for our own marketing to those people. We do not use Facebook, Instagram, WhatsApp, or Google data except to provide the feature the workspace turned on.

## 2. Instructions

We process Customer Data only to provide, secure, and support the Service as the Terms describe, and on documented instructions from the workspace. The Terms, this DPA, and the settings you choose in the product (which channel to connect, which message to send, which contact to delete) are those instructions.

If a law forces us to process differently, we will tell you unless the law forbids the notice. If we believe an instruction breaks applicable privacy law, we will tell you and we may pause that instruction.

## 3. Our people

Access to production data is limited to people who operate the Service and who need it for support, security, or delivery. They are bound by confidentiality. We do not give support contractors a standing copy of your database.

## 4. Security

The measures we actually use:

- The application and database run on a virtual private server we administer, not inside a third-party CRM.
- The database is PostgreSQL, with access restricted to the application and to operators.
- TLS protects traffic between the browser and the Service, and between the Service and Stripe, Twilio, Meta, and Google.
- Product email is sent from a Mailcow server we operate.
- Passwords are stored hashed. Two-factor authentication is available on every plan. Repeated failed sign-ins lock the account.
- We keep operational backups and test that we can restore.
- We do not claim SOC 2 or ISO/IEC 27001 certification. If we obtain one, we will say so on the security page, not before.

We will notify the workspace without undue delay after becoming aware of a personal-data breach affecting its Customer Data, and we will include the information the UK GDPR or GDPR requires a processor to give a controller, to the extent we have it.

## 5. Subprocessors

We use the following. Infrastructure we run ourselves (the virtual server's software, PostgreSQL, Mailcow) is not a third-party subprocessor. The company that rents us the server is.

- **Stripe** — card payments and invoicing.
- **Twilio** — SMS, voice, WhatsApp number provisioning and delivery, and country regulatory checks for Australia and the United Kingdom.
- **Meta Platforms** — Facebook Messenger and Instagram messaging, only if the workspace connects them.
- **Google** — Google Calendar or Google sign-in, only if the workspace connects them.
- **The infrastructure host** of our virtual server.

We will update this list before we add a subprocessor that will handle Customer Data in a new category, by changing this page at least 15 days in advance, except where the change is urgent to keep the Service secure. If you object on reasonable data-protection grounds, you may cancel the affected workspace before the change takes effect. That cancellation follows the refund policy.

Subprocessors are bound by written terms that require protection of personal data consistent with this DPA.

## 6. International transfers

Customer Data is stored on infrastructure we control. The country may not be the workspace's country or the contact's country. Where UK or EU law requires a transfer mechanism, we use an approved one (the International Data Transfer Agreement or the EU standard contractual clauses, and the UK addendum where needed). Ask privacy@pipecove.com for the current hosting country if you need it in your own record of processing.

## 7. Help with requests

We will, taking into account the nature of the processing, assist the workspace with access, deletion, correction, and objection requests, and with a data-protection impact assessment that the Service specifically gives rise to. Most deletion can be done in the product: delete the contact, disconnect the channel, or close the workspace. Email privacy@pipecove.com if the product control is not enough.

We will not answer a contact's request by handing over the whole workspace. We will either point the contact to you or help you answer, unless the law requires us to answer directly.

## 8. Deletion and return

During the subscription you can export contacts by the tools the plan includes (including CSV). After cancellation we retain Customer Data for 60 days so you can reactivate, then we delete or anonymize it, including backups on their normal overwrite cycle. We keep what tax, accounting, or a carrier's regulatory rule requires us to keep, and only for that purpose. You may email privacy@pipecove.com to ask us to delete sooner. We will do so within 30 days unless a legal hold applies.

Disconnecting Facebook, Instagram, WhatsApp, or Google deletes or disconnects that channel's tokens. Stored threads follow the deletion schedule above, or a sooner request.

## 9. Audits

Once in any 12-month period, on 30 days' notice, a workspace may ask for a written description of the controls in Section 4 and the subprocessors in Section 5. We do not allow unescorted access to the production server, because it holds other customers' data. If the law gives you a stronger audit right, we will meet it in a way that does not expose other workspaces.

## 10. Liability

Liability under this DPA follows the liability section of the Terms. Where the GDPR or UK GDPR says the parties are jointly liable to a person, the law's allocation applies between the person and us, and this sentence does not rewrite it.

## 11. Order of documents

If this DPA conflicts with the Terms on a privacy-processing point, this DPA wins. If it conflicts with Meta's or Google's required terms for data we receive from them, the stricter protection for that platform data wins.

## 12. Contact

privacy@pipecove.com`,
  },
  {
    slug: "partners",
    title: "Partner Program Terms",
    summary: "60% of the first subscription payment from a referred workspace, then 20% of that workspace’s subscription payments for 12 months.",
    updatedLabel: UPDATED,
    body: `# Partner Program Terms

**Last updated: ${UPDATED}**

These terms cover the Pipecove partner program. A partner account is separate from a CRM workspace. You open it at app.pipecove.com. The public overview is on the partners page of pipecove.com. If these terms conflict with a custom rate we have confirmed to you in writing, the written custom rate wins for the referrals it names. Otherwise these terms win.

## 1. The offer

When a new workspace signs up through your partner link or code, and that signup is valid under Section 3, you earn:

- **60% of the first subscription payment** we successfully collect from that workspace, and
- **20% of each later subscription payment** we successfully collect from that same workspace, for **12 months** after the date of that first successful subscription payment.

After those 12 months, commission on that workspace stops. The Free plan is $0, so it pays nothing until the workspace actually pays for Solo, Growth, or Agency.

"Subscription payment" means the plan fee (Solo, Growth, or Agency), excluding tax. It does not mean anything in Section 4.

Example, if the numbers stay as published. A workspace's first payment is Growth at $49. You earn **$29.40**. Each later $49 payment inside the 12-month window earns **$9.80**. A $20 wallet top-up earns **$0**.

Commission is calculated on the amount we actually collect, after any credit applied to that invoice. If the first payment is fully refunded or charged back, the 60% is reversed and the 12-month window does not start. If a later payment is refunded or charged back, the 20% on that payment is reversed, including by deduction from your unpaid balance.

## 2. What does not earn

No commission on:

- usage wallet top-ups,
- SMS, voice, or WhatsApp usage,
- phone-number rental,
- taxes, GST, VAT, or similar charges,
- refunds, chargebacks, and unpaid invoices,
- a workspace that was already a Pipecove customer,
- a signup that does not carry your code, unless we have confirmed the attribution in the partner desk,
- any amount collected after the 12-month window for that workspace.

One workspace has one partner. If two codes are present, the code recorded at the creation of the workspace is the one that counts. We will not split a commission.

## 3. Valid referrals, and self-referral

A referral is valid only if the workspace is a real, separate business that chose Pipecove, and the signup is not you.

You do not earn on a workspace that is yours, your employer's, or controlled by you. We treat a match on email, payment method, legal name, or a clear shared operator as a self-referral. We may also refuse a referral that exists only to manufacture a commission, including a signup that never uses the product, or a stack of Free workspaces created to wait for a paid upgrade under your code.

You will not:

- bid on Pipecove's name, or on misspellings of it, in paid search,
- send unsolicited bulk email or SMS about Pipecove,
- pretend to be Pipecove, or to be an employee,
- promise a discount, a feature, or a country for phone numbers that the pricing page does not offer,
- cookie-stuff, typosquat, or pre-fill someone else's signup,
- use the marks of Meta, Google, Twilio, or anyone else in a way those companies do not allow.

You may link to pipecove.com and describe the published prices accurately. That is the promotion we want.

## 4. When we pay

Commission appears in the partner desk after the referred payment has cleared. The desk shows what is pending, what has cleared, and what has been paid. If the desk shows a hold before a withdrawal opens, that hold is part of these terms. We use it to cover refunds.

Payouts follow the method and the minimum shown in the partner desk. You are responsible for the accuracy of the payout details you save. You are responsible for income tax, GST, VAT, and any other tax on your commission. We do not withhold tax unless the law forces us to. If it does, we will withhold and tell you.

We may delay or refuse a payout while we investigate a suspected breach, a chargeback wave, or a self-referral. If we confirm a breach, we may reverse related commission and close the partner account.

## 5. The relationship

You are an independent contractor, not an employee, agent, or partner in the legal sense, and not able to bind Pipecove. You do not get a workspace seat because you have a partner account. If you also buy the CRM, that subscription is separate and does not earn commission on itself.

## 6. Our marks

You may use the name "Pipecove" and the public logo to identify the product you recommend, in a way that does not imply we endorsed you personally. You will not register a domain, a social handle, or an ad that is likely to be mistaken for us. We may require you to change a page that is misleading. On request, or when these terms end, you will stop using the marks.

## 7. Ending the program

You may close the partner account at any time. We may close it, or withhold new referrals, if you break these terms, if your traffic is fraudulent, or if we discontinue the program. We will give 30 days' notice if we discontinue the program for partners who are not in breach.

Commission already validly accrued, and not reversed under Section 1, remains payable. Commission does not accrue on payments collected after the account is closed for breach. If we discontinue the program without cause, commission on workspaces already attributed continues for the rest of each workspace's 12-month window.

A change to the 60% or 20% rate, or to the 12-month window, applies to workspaces that sign up after the change. A workspace already attributed keeps the rate and window that applied on the day it was created, for that window.

## 8. Liability

The liability limits in the [Terms of Service](/legal/terms) apply. We do not guarantee that a referred workspace will stay, pay, or pass a Twilio or Meta review. Your only payment right is the commission this page describes, on amounts we actually collect.

## 9. Law

The governing-law section of the Terms applies to these partner terms.

## 10. Contact

partners@pipecove.com`,
  },
];

export const POLICY_SLUGS = POLICY_DEFAULTS.map((item) => item.slug);

export function policyDefault(slug: string) {
  return POLICY_DEFAULTS.find((item) => item.slug === slug) ?? null;
}
