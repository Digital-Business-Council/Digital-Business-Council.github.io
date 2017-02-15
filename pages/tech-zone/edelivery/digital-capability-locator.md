---
layout: tech-page
title: digital capability locator
permalink: /digital-capability-locator/
---

# The Digital Capability Locator (DCL) specification

The Digital Capability Locator and Digital Capability Publisher enable an Access Point to determine the destination of a message in a dynamic environment. 

The Digital Capability Locator provides an Access Point with the answer to the following question:

*"where can I find information about the e-business capabilities of business X ?"*

The Digital Capability Locator is a mapping of participant identifiers to the digital address of the participant’s Digital Capability Publisher. 

The Digital Capability Locator's lookup service is based on the OASIS Business Document Metadata Service Location Committee Specification Version 01, which provides a standardised approach to retrieval of a participant's digital capability address. The specification has been based on the successful implementation within the European Union's PEPPOL and eSENS initiatives.

The following specification documents provide further detail on the following topics: 

- The high-level business requirements;
- The quality of service requirements;
- The logical solution architecture;
- The API Definitions and associated implementation guide;
- Test assertions to support Service Providers to develop test cases to achieve accreditation.


| Specification URL | Version | Status | API Definition | Issues List |
| ----------------- | ------  | ------ | -------------- | -------- |
| [DCL Specification](https://digital-capability-locator.readthedocs.org) | 1.0 | ![Raw](http://rfc.unprotocols.org/spec:2/COSS/raw.svg)  | [DCL 1.0 API](https://tba.com.au) | [DCL 1.0 Issues](https://github.com/Digital-Business-Council/Digital-Capability-Locator/issues)   |

## Contribute to the Specification
This specification is managed and maintained by the Digital Business Council's [Technical Working Group]("/tech-working-group").  Use the links below to view our latest work, provide feedback or to raise an issue for consideration by the working group.

* [DCL Github Repository](https://github.com/Digital-Business-Council/Digital-Capability-Locator)
* [DCL Slack Channel](https://tba.com.au)

## Known Implementations

Since there is usually only one DCL for a given national economy, the DCL service is normally implemented by a statutory authority - usually the issuer and registrar of the relevant business identifier.  In the Australian case, the identifer is the ABN and the DCL operator is expected to tbe the ATO.

Known implementations (open source or otherwise) are listed here.  Please modify this page and make a pull request to add your own.

|Provider|Implementation URL|Comments|
|--------|------------------|--------|
|[Digital Business Council](http://digitalbusinesscouncil.com.au) | [DCL - Alpha](http://dcl.org.au) |  This is the Alpha version of the DCL that has been jointly implemented by the ATO and ABSIA, on behalf of the Digital Business Council. |
|[testpoint.io](http://testpoint.io/) | [dcl testpoint](http://testpoint.io/dcl)| Free test service and open source implementation |
| eSens |  | Partial implementation of BDXL compontents|

