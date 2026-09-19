# Booking icon inventory

**Status:** Complete (source + named registry)  
**Date:** 2026-09-19  
**SoT:** `booking-redesign.html`  
**Evidence:** [`screenshots/icons/_extract.json`](./screenshots/icons/_extract.json) · [`_named.json`](./screenshots/icons/_named.json)

## Rollup

| Metric | Count |
| --- | ---: |
| Total SVG instances (static + script) | 446 |
| Unique glyphs (fingerprint) | 77 |
| Named / approved in DS registry | 76 |
| Component-owned (excluded from catalogue) | 3 |
| Unused / dead | 0 (all fingerprints appear in shipped HTML) |
| Deprecated | 0 |
| Awaiting design approval | 0 |
| Duplicates consolidated (same path → one name) | instances 446 → 77 unique |

**Component-owned (not in Icon catalogue):** Checkbox checkmark (11px / stroke 3.2); AppShell `brandMark` (32×32 fill bubble).

**Known prior DS mismatches (fixed by re-extraction):** `home` was house → now alias of **layoutGrid**; `bookings` was calendar → now open-book paths from Booking nav.

**Alias note:** `people` / `data.users` resolve to **team** (list traveller-count glyph shares the team path family).

## Table

Icon | Preview | Source | Booking screens | Usage context | Size | Stroke | Colour token | Accessibility | Status
--- | --- | --- | --- | --- | --- | --- | --- | --- | ---
| **alertTriangle** | `data-icon=alertTriangle` | booking-redesign.html L2484 · hash `765fcd5d8f` | finance | Tamara Hotel → Dubai Airport; person-cell | 15px | 1.7 | currentColor | aria-hidden decorative | approved |
| **assign** | `data-icon=assign` | booking-redesign.html L1973 · hash `c0119c943f` | services, script | Neha Kapoor; btn | 14px | 1.9 | currentColor | aria-hidden decorative | approved |
| **bell** | `data-icon=bell` | booking-redesign.html L1344 · hash `ef922553c0` | shell | Notifications, 3 unread; icon-btn | 17px | 1.7 | currentColor | Label on control when icon-only | approved |
| **bookings** | `data-icon=bookings` | booking-redesign.html L1296 · hash `581a17f726` | shell | Bookings; nav-item | 17px | 1.9 | currentColor | Label on control when icon-only | approved |
| **bookmark** | `data-icon=bookmark` | booking-redesign.html L1510 · hash `9b9f441eec` | detail | Booking reference; bk-ref | 12px | 1.9 | currentColor | aria-hidden decorative | approved |
| **bookmarkFill** | `data-icon=bookmarkFill` | booking-redesign.html L2581 · hash `c5228477e1` | activity | Booking BK-2026-000003 created from query Q-1042; cell-lead | 15px | 1.7 | currentColor | aria-hidden decorative | approved |
| **brandMark** | `data-icon=brandMark` | booking-redesign.html L1269 · hash `a7be85e6b9` | shell | brand-mark | 17px | — | currentColor | aria-hidden decorative | component-owned |
| **briefcase** | `data-icon=briefcase` | booking-redesign.html L2444 · hash `27e3d70223` | finance | Tamara Hotel · Deluxe room; Dubai Airport → Tamara Hotel; person-cell | 15px | 1.7 | currentColor | aria-hidden decorative | approved |
| **bus** | `data-icon=bus` | booking-redesign.html L1431 · hash `ca91c34f3f` | list, vouchers, services, finance, script | cell-lead; svc-main | 15px | 1.7 | currentColor | aria-hidden decorative | approved |
| **calendar** | `data-icon=calendar` | booking-redesign.html L1391 · hash `b6e6e54fb3` | list, detail, overview, services, tasks, finance, activity, script | Booking advance; Second instalment; bk-line; rec-date | 13px | 1.8 | currentColor | aria-hidden decorative | approved |
| **camera** | `data-icon=camera` | booking-redesign.html L1407 · hash `03aa882dfd` | list, vouchers, services, finance, script | cell-lead; svc-main | 15px | 1.7 | currentColor | aria-hidden decorative | approved |
| **chart** | `data-icon=chart` | booking-redesign.html L1306 · hash `58906953e1` | shell, services | Reports; nav-item; kpi-val | 15px | 1.7 | currentColor | Label on control when icon-only | approved |
| **check** | `data-icon=check` | booking-redesign.html L1383 · hash `1d476cf3b2` | list, overview, vouchers, tasks, travellers, documents, finance, activity, notes, script | Select all bookings; Open XYZ Family Dubai; cbx; btn | 11px | 3.2 | currentColor | aria-hidden decorative | approved |
| **checkCircle** | `data-icon=checkCircle` | booking-redesign.html L1443 · hash `7b0f34c36a` | list | cell-lead | 15px | 1.7 | currentColor | aria-hidden decorative | approved |
| **checkDone** | `data-icon=checkDone` | booking-redesign.html L1513 · hash `bb9708fcf9` | detail | status | 12px | 2.2 | currentColor | aria-hidden decorative | approved |
| **chevronDown** | `data-icon=chevronDown` | booking-redesign.html L1272 · hash `6a5482377e` | shell, tasks, notes, script | Account, Vrushabh Jain; Task status | 12px | 2.2 | currentColor | Label on control when icon-only | approved |
| **chevronLeft** | `data-icon=chevronLeft` | booking-redesign.html L1329 · hash `7932b799d3` | shell, list, overview, vouchers, tasks, travellers, documents, finance, activity | Back to bookings; Previous page; back-btn; pg | 13px | 2 | currentColor | Label on control when icon-only | approved |
| **chevronRight** | `data-icon=chevronRight` | booking-redesign.html L1332 · hash `4c908e7199` | shell, list, overview, vouchers, tasks, travellers, documents, finance, activity, script | Breadcrumb; Next page; pg | 13px | 2 | currentColor | Label on control when icon-only | approved |
| **clear** | `data-icon=clear` | booking-redesign.html L1481 · hash `f0d34992ab` | list, vouchers, travellers, documents, finance, activity, notes | Close; btn; nd-close | 14px | 1.9 | currentColor | Label on control when icon-only | approved |
| **clipboardCheck** | `data-icon=clipboardCheck` | booking-redesign.html L2066 · hash `7ba3db2acc` | tasks, script | cell-lead | 15px | 1.7 | currentColor | aria-hidden decorative | approved |
| **clock** | `data-icon=clock` | booking-redesign.html L1395 · hash `181b3f4e66` | list, activity | Confirm hotel with ABC DMC; Confirm water sports add-on; bk-line; act-time | 13px | 1.8 | currentColor | aria-hidden decorative | approved |
| **collapse** | `data-icon=collapse` | booking-redesign.html L1319 · hash `4a0f85bf4c` | shell | Collapse sidebar; side-collapse | 16px | 1.8 | currentColor | Label on control when icon-only | approved |
| **copy** | `data-icon=copy` | booking-redesign.html L1512 · hash `2ca23be34c` | detail | Copy booking ID; id-copy | 12px | 1.9 | currentColor | Label on control when icon-only | approved |
| **creditCard** | `data-icon=creditCard` | booking-redesign.html L2341 · hash `a4d537bc4f` | finance, activity, script | Recorded customer payment of ₹20,500 against booking advance; Recorded supplier payment of ₹16,000 to ABC DMC Dubai; kpi-val; btn | 15px | 1.9 | currentColor | aria-hidden decorative | approved |
| **credits** | `data-icon=credits` | booking-redesign.html L1311 · hash `a6989a6eff` | shell | 720 of 1,000 credits remaining this cycle; ic | 15px | 1.8 | currentColor | aria-hidden decorative | approved |
| **customers** | `data-icon=customers` | booking-redesign.html L1299 · hash `06a4e0a9b4` | shell | Customers; nav-item | 17px | 1.7 | currentColor | Label on control when icon-only | approved |
| **edit** | `data-icon=edit` | booking-redesign.html L1525 · hash `20bb14081d` | detail | Edit booking; btn | 13px | 1.9 | currentColor | Label on control when icon-only | approved |
| **export** | `data-icon=export` | booking-redesign.html L1480 · hash `6e8245f891` | list, vouchers, documents, activity | btn | 14px | 1.9 | currentColor | Label on control when icon-only | approved |
| **eye** | `data-icon=eye` | booking-redesign.html L1717 · hash `b0799ecf6d` | vouchers, documents, finance, script | Verified 7 Aug · Neha; Received 8 Aug · WhatsApp; btn | 14px | 1.9 | currentColor | Label on control when icon-only | approved |
| **file** | `data-icon=file` | booking-redesign.html L1854 · hash `71c2e66471` | services, tasks, communication, activity, script | Document requested · passport · Arjun XYZ; Document verified · passport · Priya XYZ; sf-value; kpi-val | 15px | 1.8 | currentColor | aria-hidden decorative | approved |
| **file2** | `data-icon=file2` | booking-redesign.html L1582 · hash `ee90f5d551` | overview | kpi-val | 15px | 1.8 | currentColor | aria-hidden decorative | approved |
| **file3** | `data-icon=file3` | booking-redesign.html L2308 · hash `33ad2bb7a9` | documents | cell-lead | 15px | 1.7 | currentColor | aria-hidden decorative | approved |
| **fileMinus** | `data-icon=fileMinus` | booking-redesign.html L2637 · hash `12b473b9ee` | activity | btn | 14px | 1.9 | currentColor | aria-hidden decorative | approved |
| **fileSimple** | `data-icon=fileSimple` | booking-redesign.html L3557 · hash `02f23ae846` | script | btn | 12px | 1.9 | currentColor | aria-hidden decorative | approved |
| **fileText** | `data-icon=fileText` | booking-redesign.html L1277 · hash `fa07e99762` | shell, script | Notes; notes-main; att-title | 15px | 1.8 | currentColor | aria-hidden decorative | approved |
| **fileText2** | `data-icon=fileText2` | booking-redesign.html L1294 · hash `1dde5a8a51` | shell | Queries; nav-item | 17px | 1.7 | currentColor | aria-hidden decorative | approved |
| **filter** | `data-icon=filter` | booking-redesign.html L1373 · hash `e1bd7fbbbf` | list, vouchers, services, tasks, travellers, documents, finance, activity | Search bookings; Filter by voucher state; filter-wrap | 15px | 1.9 | currentColor | Label on control when icon-only | approved |
| **finances** | `data-icon=finances` | booking-redesign.html L1303 · hash `52c4e24aca` | shell | All finances; nav-item | 17px | 1.7 | currentColor | Label on control when icon-only | approved |
| **help** | `data-icon=help` | booking-redesign.html L1342 · hash `8efa0aa605` | shell | Help and support; icon-btn | 17px | 1.7 | currentColor | Label on control when icon-only | approved |
| **hotel** | `data-icon=hotel` | booking-redesign.html L1395 · hash `3f34ef1e6b` | list, services, tasks, script | cell-lead; svc-main | 15px | 1.7 | currentColor | aria-hidden decorative | approved |
| **hotel2** | `data-icon=hotel2` | booking-redesign.html L2443 · hash `618fccf4e3` | finance | cell-lead | 15px | 1.7 | currentColor | aria-hidden decorative | approved |
| **hotelDesk** | `data-icon=hotelDesk` | booking-redesign.html L1686 · hash `400d5122a3` | vouchers | cell-lead | 15px | 1.7 | currentColor | aria-hidden decorative | approved |
| **idCard** | `data-icon=idCard` | booking-redesign.html L1695 · hash `f3d9b521b0` | vouchers, services, finance, script | cell-lead; svc-main | 15px | 1.7 | currentColor | aria-hidden decorative | approved |
| **inbox** | `data-icon=inbox` | booking-redesign.html L1289 · hash `6cb2a7dfd8` | shell | All inbox; nav-item | 17px | 1.7 | currentColor | Label on control when icon-only | approved |
| **info** | `data-icon=info` | booking-redesign.html L1780 · hash `b3d6cd2d46` | services, tasks, finance, script | kpi-val; sf-value | 15px | 1.8 | currentColor | aria-hidden decorative | approved |
| **layers** | `data-icon=layers` | booking-redesign.html L1850 · hash `c75b827c5c` | services, finance, script | sf-value; kpi-val | 15px | 1.8 | currentColor | aria-hidden decorative | approved |
| **layoutGrid** | `data-icon=layoutGrid` | booking-redesign.html L1288 · hash `ab6c022585` | shell | Home; nav-item | 17px | 1.7 | currentColor | Label on control when icon-only | approved |
| **list** | `data-icon=list` | booking-redesign.html L1591 · hash `80f28aec57` | overview, services, activity | Supplier confirmation received for UAE visa assistance; btn; kpi-val | 15px | 1.9 | currentColor | aria-hidden decorative | approved |
| **message** | `data-icon=message` | booking-redesign.html L2034 · hash `06fc570276` | tasks | kpi-val | 15px | 1.8 | currentColor | aria-hidden decorative | approved |
| **more** | `data-icon=more` | booking-redesign.html L1690 · hash `93443c2e6d` | vouchers, tasks, travellers, documents, finance, script | More; btn | 15px | — | currentColor | Label on control when icon-only | approved |
| **news** | `data-icon=news` | booking-redesign.html L1290 · hash `9f6b4c5665` | shell | News; nav-item | 17px | 1.7 | currentColor | Label on control when icon-only | approved |
| **openExternal** | `data-icon=openExternal` | booking-redesign.html L1690 · hash `51013faa53` | vouchers, tasks, travellers, finance, script | Confirm the service to prepare its voucher; Assign a vendor and confirm the service; btn | 14px | 1.9 | currentColor | Label on control when icon-only | approved |
| **package** | `data-icon=package` | booking-redesign.html L1295 · hash `1137766ade` | shell | Packages; nav-item | 17px | 1.7 | currentColor | Label on control when icon-only | approved |
| **paperclip** | `data-icon=paperclip` | booking-redesign.html L2528 · hash `b8d2b08ecb` | communication | Attach a file; btn | 15px | 1.8 | currentColor | aria-hidden decorative | approved |
| **passport** | `data-icon=passport` | booking-redesign.html L2268 · hash `8174722087` | documents | cell-lead | 15px | 1.7 | currentColor | aria-hidden decorative | approved |
| **passport2** | `data-icon=passport2` | booking-redesign.html L1419 · hash `d8d349d0a1` | list | cell-lead | 15px | 1.7 | currentColor | aria-hidden decorative | approved |
| **phone** | `data-icon=phone` | booking-redesign.html L2193 · hash `5c0cc228a5` | travellers, script | phone-cell | 15px | 1.7 | currentColor | aria-hidden decorative | approved |
| **phone2** | `data-icon=phone2` | booking-redesign.html L1343 · hash `17eea647c7` | shell | Call logs; icon-btn | 17px | 1.7 | currentColor | aria-hidden decorative | approved |
| **pin** | `data-icon=pin` | booking-redesign.html L1389 · hash `82521b13d7` | list, overview, script | cell-lead; ic | 15px | 1.7 | currentColor | aria-hidden decorative | approved |
| **plane** | `data-icon=plane` | booking-redesign.html L1562 · hash `ffd300acc3` | overview | kpi-val; cell-lead | 15px | 1.7 | currentColor | aria-hidden decorative | approved |
| **plus** | `data-icon=plus` | booking-redesign.html L1282 · hash `72578c9a3d` | shell, list, services, tasks, travellers, finance, script | Write a note; notes-add; btn | 15px | 1.9 | currentColor | Label on control when icon-only | approved |
| **pushPin** | `data-icon=pushPin` | booking-redesign.html L3403 · hash `839eb137a6` | script | nd-note-pin | 14px | — | currentColor | aria-hidden decorative | approved |
| **refresh** | `data-icon=refresh` | booking-redesign.html L1355 · hash `68df06c463` | list | btn | 14px | 1.9 | currentColor | Label on control when icon-only | approved |
| **rotateCcw** | `data-icon=rotateCcw` | booking-redesign.html L1467 · hash `d7f9229228` | list | cell-lead | 15px | 1.7 | currentColor | Label on control when icon-only | approved |
| **search** | `data-icon=search` | booking-redesign.html L1338 · hash `19a4931df6` | shell, list, overview, vouchers, services, tasks, travellers, documents, finance, activity, notes | search; kpi-val | 16px | 1.9 | currentColor | Label on control when icon-only | approved |
| **send** | `data-icon=send` | booking-redesign.html L1738 · hash `0e9693a53f` | vouchers, services, travellers, documents, communication, script | Neha Kapoor; Requested 7 Aug · WhatsApp — awaiting file; btn | 14px | 1.9 | currentColor | Label on control when icon-only | approved |
| **settings** | `data-icon=settings` | booking-redesign.html L1341 · hash `14f7d95f54` | shell | Search the workspace; icon-btn | 17px | 1.7 | currentColor | Label on control when icon-only | approved |
| **sun** | `data-icon=sun` | booking-redesign.html L1619 · hash `befe9c1a0a` | overview | cell-lead | 15px | 1.7 | currentColor | aria-hidden decorative | approved |
| **tasksNav** | `data-icon=tasksNav` | booking-redesign.html L1291 · hash `a6030780e5` | shell | All tasks; nav-item | 17px | 1.7 | currentColor | Label on control when icon-only | approved |
| **team** | `data-icon=team` | booking-redesign.html L1304 · hash `deb6db9a42` | shell, list, overview, services, tasks, documents, script | Team; Search documents; nav-item; bk-line | 15px | 1.8 | currentColor | aria-hidden decorative | approved |
| **ticket** | `data-icon=ticket` | booking-redesign.html L1833 · hash `fd64b08cea` | services, tasks, documents, activity, script | Voucher sent for Private Dubai city tour; btn; kpi-val | 14px | 1.9 | currentColor | aria-hidden decorative | approved |
| **upload** | `data-icon=upload` | booking-redesign.html L1675 · hash `70fbc8222f` | vouchers, documents | Upload the supplier voucher; btn | 15px | 1.9 | currentColor | Label on control when icon-only | approved |
| **user** | `data-icon=user` | booking-redesign.html L1421 · hash `e6e56d374a` | list | bk-owner | 15px | 1.7 | currentColor | aria-hidden decorative | approved |
| **userCircle** | `data-icon=userCircle` | booking-redesign.html L1567 · hash `435263368b` | overview | kpi-val | 15px | 1.8 | currentColor | aria-hidden decorative | approved |
| **vendors** | `data-icon=vendors` | booking-redesign.html L1300 · hash `af7e826730` | shell | Vendors; nav-item | 17px | 1.7 | currentColor | Label on control when icon-only | approved |
| **wallet** | `data-icon=wallet` | booking-redesign.html L2373 · hash `fca325ea71` | finance, script | cell-lead | 15px | 1.7 | currentColor | aria-hidden decorative | approved |
| **zap** | `data-icon=zap` | booking-redesign.html L1305 · hash `c1b70cc900` | shell | Automations; nav-item | 17px | 1.7 | currentColor | Label on control when icon-only | approved |

## Categories

- **actions:** bell, clear, copy, edit, export, eye, help, more, openExternal, plus, refresh, rotateCcw, send, settings, upload
- **booking:** bookmark, bookmarkFill, plane, pushPin
- **communication:** message, phone, phone2
- **data:** list
- **dates:** calendar, clock, pin
- **directional:** chevronDown, chevronLeft, chevronRight, collapse
- **documents:** camera, file, file2, file3, fileMinus, fileSimple, fileText, fileText2, idCard, paperclip, passport, passport2
- **finance:** creditCard, credits, wallet
- **misc:** brandMark
- **navigation:** bookings, chart, customers, finances, inbox, layoutGrid, news, package, tasksNav, vendors, zap
- **people:** assign, team, user, userCircle
- **search:** filter, search
- **services:** briefcase, bus, hotel, hotel2, hotelDesk, layers, sun, ticket
- **status:** alertTriangle, check, checkCircle, checkDone, clipboardCheck, info

## Aliases

- `action.assign` → **assign**
- `chrome.bell` → **bell**
- `nav.bookings` → **bookings**
- `data.calendar` → **calendar**
- `nav.reports` → **chart**
- `chrome.chevron` → **chevronDown**
- `back` → **chevronLeft**
- `chrome.collapse` → **collapse**
- `data.copy` → **copy**
- `nav.customers` → **customers**
- `action.edit` → **edit**
- `nav.queries`, `note` → **fileText**
- `nav.queries`, `note` → **fileText2**
- `nav.finances` → **finances**
- `chrome.help` → **help**
- `nav.inbox` → **inbox**
- `nav.home`, `home` → **layoutGrid**
- `action.more` → **more**
- `nav.news` → **news**
- `action.open-external` → **openExternal**
- `nav.packages` → **package**
- `chrome.phone` → **phone**
- `chrome.phone` → **phone2**
- `data.pin` → **pin**
- `action.plus` → **plus**
- `pinFilled` → **pushPin**
- `action.refresh` → **refresh**
- `chrome.search` → **search**
- `action.send` → **send**
- `chrome.settings` → **settings**
- `nav.tasks` → **tasksNav**
- `nav.team` → **team**
- `action.upload` → **upload**
- `nav.vendors` → **vendors**
- `nav.automations` → **zap**

## Regeneration

```bash
node docs/audit/extract-booking-icons.mjs
node docs/audit/name-booking-icons.mjs
node docs/audit/generate-icon-registry.mjs
node docs/audit/write-icon-inventory.mjs
```
