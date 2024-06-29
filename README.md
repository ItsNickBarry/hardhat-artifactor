# Hardhat Artifactor

Dynamically generate deployable Hardhat contract artifacts.

## Installation

```bash
npm install --save-dev hardhat-artifactor
# or
yarn add --dev hardhat-artifactor
```

## Usage

Load plugin in Hardhat config:

```javascript
require('hardhat-artifactor');
```

### Create Artifact from Template

Call the `createArtifactFromTemplate` function available in the Hardhat Runtime Environment to create an artifact with an ABI matching an existing artifact but with custom bytecode:

```javascript
await createArtifactFromTemplate(
  'TemplateContract',
  'GeneratedContract',
  bytecode,
);
```

### Overwrite Artifact

Call the `overwriteArtifact` function available in the Hardhat Runtime Environment to replace the bytecode of an existing artifact with custom bytecode:

```javascript
await overwriteArtifact('Contract', bytecode);
```

## Development

Install dependencies via Yarn:

```bash
yarn install
```

Setup Husky to format code on commit:

```bash
yarn prepare
```
