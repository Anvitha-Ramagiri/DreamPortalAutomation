# Dream Portal Automation Testing

## Project Overview
This project automates the testing of the Dream Portal website using Playwright with JavaScript.

Website Tested:
https://arjitnigam.github.io/myDreams/

---

## Tools Used
- Playwright
- JavaScript
- Node.js
- VS Code

---

## Test Cases Covered

### 1. Dream Diary Validation
- Verified total dream entries
- Validated dream types
- Checked table data

### 2. Summary Page Validation
- Verified Good Dreams count
- Verified Bad Dreams count
- Verified Total Dreams count
- Verified Recurring Dreams count

### 3. Basic Playwright Test
- Verified page title

---

## Project Structure

DreamPortalAutomation
│
├── tests
│   ├── home.spec.js
│   ├── dreamDiary.spec.js
│   ├── dreamSummary.spec.js
│   └── example.spec.js
│
├── playwright.config.js
├── package.json
├── package-lock.json
└── README.md

---

## How to Run Tests

Install dependencies:

npm install

Run tests:

npx playwright test

Run tests in headed mode:

npx playwright test --headed

---

## Generate HTML Report

Run:

npx playwright test --reporter=html

Open report:

npx playwright show-report

---

## Test Result

All tests executed successfully.

3 tests passed.
