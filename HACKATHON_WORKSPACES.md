# NDMC Public Health Policy Modelling Hackathon 2026

This branch is the shared consolidation space for the four hackathon families.

## Family branches

| Family | Public-health question | Branch |
|---|---|---|
| 1 | District-level zero-dose burden | `family-zero-dose` |
| 2 | Antimalarial medicine forecasting and allocation | `family-antimalarial` |
| 3 | Measles alert rules | `family-measles-alert` |
| 4 | Measles transmission modelling | `family-measles-transmission` |

## Expected family structure

```text
family-workspace/
├── README.md
├── manuscript/
├── code/
├── data/
│   ├── README.md
│   └── public/
├── documentation/
├── prototype/
├── dashboard/
├── outputs/
└── slides/
```

Create folders as you add the first file. Every family README should explain the public-health question, data sources, method, file order, software requirements, outputs, assumptions, limitations and next steps.

## How to contribute

1. Open or clone the repository.
2. Check out your assigned family branch.
3. Add files only under `family-workspace/`.
4. Commit with a short, clear message.
5. Push directly if you have access. Otherwise, fork the repository and open a pull request to the family branch.
6. When the family package is complete, open a pull request from the family branch to `hackathon-workspaces`.

Only approved public or de-identified data belongs in GitHub. Keep restricted data in approved storage and include a data dictionary, access note and reproducible preparation script instead.

## Final family submission

- [ ] The family README is complete.
- [ ] The manuscript-style report is included.
- [ ] Code runs in the documented order.
- [ ] Required software and packages are listed.
- [ ] Data access and variable definitions are documented.
- [ ] The final prototype can be run using the included instructions.
- [ ] Dashboard source and deployment notes are included, if developed.
- [ ] Outputs are readable and labelled.
- [ ] Assumptions and limitations are stated.
- [ ] Only approved public or de-identified data is included.
- [ ] The final presentation is included.
- [ ] The proposed programme use and next step are clear.
