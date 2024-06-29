const { extendEnvironment } = require('hardhat/config');

const { name: sourceName } = require('./package.json');

extendEnvironment(function (hre) {
  hre.createArtifactFromTemplate = async function (
    templateContract,
    generatedContract,
    bytecode,
  ) {
    const primaryArtifact = await hre.artifacts.readArtifact(templateContract);

    await hre.artifacts.saveArtifactAndDebugFile({
      ...primaryArtifact,
      sourceName,
      contractName: generatedContract,
      bytecode,
    });
  };

  hre.overwriteArtifact = async function (contractName, bytecode) {
    const artifact = await hre.artifacts.readArtifact(contractName);

    await hre.artifacts.saveArtifactAndDebugFile({
      ...artifact,
      bytecode,
    });
  };
});
