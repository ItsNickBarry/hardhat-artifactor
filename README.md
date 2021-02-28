# Hardhat Artifactor

Dynamically generate deployable Hardhat contract artifacts.

## Installation

```bash
yarn add --dev hardhat-artifactor
```

## Usage

Load plugin in Hardhat config:

```javascript
require("hardhat-artifactor");
```

Call the `createArtifactFromTemplate` function available in the Hardhat Runtime Environment to create an artifact with an ABI matching an existing artifact but with custom bytecode:

```javascript
await createArtifactFromTemplate(
  'TemplateContract',
  'GeneratedContract',
  bytecode
);
```
