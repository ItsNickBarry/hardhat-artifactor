const { extendEnvironment } = require('hardhat/config');

const { name: sourceName } = require('./package.json');

extendEnvironment(function (hre) {
  hre.createArtifactFromTemplate = async function (
    templateContract,
    generatedContract,
    bytecode
  ) {
    const primaryArtifact = await hre.artifacts.readArtifact(templateContract);

    await hre.artifacts.saveArtifactAndDebugFile({
      ...primaryArtifact,
      sourceName,
      contractName: generatedContract,
      bytecode,
    });
  };
});
