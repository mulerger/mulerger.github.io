# NDMC Public Health Policy Modelling Hackathon 2026

This branch is the shared consolidation space for the four hackathon families.

## Family branches

| Family | Challenge | Branch |
|---|---|---|
| 1 | District-level zero-dose burden | `family-zero-dose` |
| 2 | Antimalarial medicine forecasting and allocation | `family-antimalarial` |
| 3 | Measles alert rules | `family-measles-alert` |
| 4 | Measles transmission modelling | `family-measles-transmission` |

## Expected family structure

```text
family-workspace/
├── README.md
├── code/
├── data/
│   ├── README.md
│   └── public/
├── documentation/
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

## Data protection

- Upload only public, de-identified or formally approved data.
- Never commit patient-level, personally identifiable, restricted or credential-bearing files.
- Keep restricted data in approved secure storage.
- For restricted data, commit only a data dictionary, access note and reproducible import or preparation script.
- Never commit passwords, API keys, tokens, connection strings or `.env` files.

## Final submission checklist

- [ ] The family README is complete.
- [ ] Code runs in the documented order.
- [ ] Required software and packages are listed.
- [ ] Data access and variable definitions are documented.
- [ ] Outputs are readable and labelled.
- [ ] Assumptions and limitations are stated.
- [ ] No restricted data or credentials are included.
- [ ] The final presentation is included.
- [ ] The proposed programme use and next step are clear.

