# Sort-JSON: Contributing Guidelines

These contributing guidelines apply to the changes applied to this repo.

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Getting started](#getting-started)
  - [Pre-requisites](#pre-requisites)
  - [Installation](#installation)
- [Conventions](#conventions)
  - [Commits](#commits)
  - [Pull requests](#pull-requests)
  - [Documentation](#documentation)

## Getting started

Please follow the pre-requisites  before we get into any other steps.

### Pre-requisites

This section covers all steps that are required to contribute to this repo.

1. Install [Git](https://git-scm.com/downloads) so that you're able to run `git` commands via cli
2. Install [Node](https://nodejs.org/en/) (current LTS version) to be able to run scripts within this repo.
3. Install [Yarn](https://yarnpkg.com/getting-started/install) so that dependencies can be installed within this repo.
4. Optional: Install platform specific version NVM ([macOS/Linux](https://github.com/nvm-sh/nvm), [Windows](https://github.com/coreybutler/nvm-windows)) so that this repo can automatically control which version of Node is used.

### Installation

Once all of the pre-requisites have been setup, please execute the following commands:
```shell
git clone https://github.com/bibekluitel/sort-json.git
cd sort-json
yarn install
```

## Conventions

### Commits
When committing, please follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) format.

Examples:
* `feat: testing feature1 dev`

### Pull requests
To ensure the intent of a Pull request is clearly conveyed, its title should also follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) format. Where applicable, a description should also be provided to convey any additional context or reasoning for the change.

### Documentation
Code within this repo has the following documentation expectations:
* Decisions should be recorded within the [docs/decisions](docs/decisions) and added to the [index.md](docs/decisions/index.md).
* Exported functions & components should have documentation