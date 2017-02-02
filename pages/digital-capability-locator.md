---
layout: tech-page
title: digital capability locator
permalink: /digital-capability-locator/
---

# The Digital Capability Locator specification

The framework assumes that there could be multiple publishers of business meta-data and e-business capabilites.  Therefore a simple way to ask "where can I find information about the e-business capabilities of business X ?" is needed.  That is the purpose of the DCL. It is essentially a DNS lookup (NAPTR Record) using a business identifier (eg ABN) as the query and it returns the URL of the detailed metadata about that business.  In a given economy, there is usually only one DCL - often operated by a government authority.

* [DCL Github Repository](https://github.com/Digital-Business-Council/Digital-Capability-Locator)
* [DCL Slack Channel](https://tba.com.au)

| Specification URL | Version | Status | API Definition | Issues List |
| ----------------- | ------  | ------ | -------------- | -------- |
| [DCL 1.0 spec](https://digital-capability-locator.readthedocs.org) | 1.0 | ![Raw](http://rfc.unprotocols.org/spec:2/COSS/raw.svg)  | [DCL 1.0 API](https://tba.com.au) | [DCL 1.0 Issues](https://github.com/Digital-Business-Council/Digital-Capability-Locator/issues)   |

## Known Implementations

Since there is usually only one DCL for a given national economy, the DCL service is normally implemented by a statutory authority - usually the issuer and registrar of the relevant business identifier.  In the Australian case, the identifer is the ABN and the DCL operator is expected to tbe the ATO.

Known implementations (open source or otherwise) are listed here.  Please modify this page and make a pull request to add your own.

|Provider|Implementation URL|Comments|
|--------|------------------|--------|
|[Digital Business Council](http://digitalbusinesscouncil.com.au) | [DCL - Alpha](http://dcl.org.au) |  This is the Alpha version of the DCL that has been jointly implemented by the ATO and ABSIA, on behalf of the Digital Business Council. |
|[testpoint.io](http://testpoint.io/) | [dcl testpoint](http://testpoint.io/dcl)| Free test service and open source implementation |
| eSens |  | Partial implementation of BDXL compontents|

