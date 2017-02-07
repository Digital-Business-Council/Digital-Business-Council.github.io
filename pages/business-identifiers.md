---
layout: tech-page
title: Policy on the use of business identifiers
permalink: /business-identifiers/
---

# Council's policy on the use of business identifiers

Business Identifiers are information elements that establish the unique identity of Parties (organisations, businesses, locations, branches or offices, etc.) within the Digital Business Council’s (the Council) Interoperability Framework.

This document outlines the policy for using the correct Business Identifiers. Implementers failing to adhere to these policies will jeopardise the interoperability of the information being exchanged. 

Compliance with this policy is mandatory under the Access Point and DCP accreditation agreements.

| Policy URL | Version | Status | Issues List |
| ----------------- | ------  | ------ | -------- |
| [Policy Document](https://digital-capability-locator.readthedocs.org) | 1.0 | ![Stable](http://rfc.unprotocols.org/spec:2/COSS/stable.svg)  | [Policy Issues](https://github.com/Digital-Business-Council/Digital-Capability-Locator/issues)   |


## Summary
The Council Framework uses Business Identifiers in both its eDelivery infrastructure and within the business documents exchanged across that infrastructure.

Parties in the eDelivery infrastructure play the role of Participants. There are sender and receiver Participants in any exchange. These are the Parties that send and receive business documents. A business that is a legal entity may operate as more than one Participant within the eDelivery infrastructure. However each of those Participants requires its own Business Identifier.

Within the content of each business document there are also Parties taking on business roles such as Buyer and Supplier, etc. There may be relationships between these business roles and the Participants in the Delivery infrastructure. For example, sometimes the Buyer is also the receiver of the eInvoice. Sometimes an eInvoice document may specify the identifier for the receiving Party in the eDelivery infrastructure. But these are not reliable business rules. Business document specifications do not (sometimes deliberately) include any information binding the document content to the eDelivery infrastructure. The relationship between Business Identifiers within documents and Business Identifiers used in the eDelivery infrastructure is irregular.

So whilst there is generally a relationship between these various Party roles, the Council has no policy on how this should be done.

This policy relates to the common use of business identification schemes to identify the appropriate Party within the context required. In other words, Business Identifiers may have different values depending on where they are used, but the method by which they are identified should be consistent.

Many schemes already exist for identifying Parties. Some of these are:

+ Australian Business Number (ABN) governed by the Australian Business Register Program
+ Global Location Number (GLN) governed by GS1
+ Data Universal Numbering System (DUNS) governed by Dun and Bradstreet

There are also many technological, industrial, chambers of commerce and regional schemes that depend on the context of use.

None of these schemes in isolation can address the universal identification of all businesses required for the Council’s interoperability Framework.

The Council has no intention of developing another identification scheme. The Council’s strategy is to recognise a range of different business identification schemes and provide an approved list of those recognised schemes based on international standards.
