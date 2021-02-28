const { extendEnvironment } = require('hardhat/config');

const { name: sourceName } = require('./package.json');

extendEnvironment(function (hre) {
  hre.saveReplacementArtifact = async function (
    template,
    contractName,
    bytecode
  ) {
    const primaryArtifact = await hre.artifacts.readArtifact(template);

    await hre.artifacts.saveArtifactAndDebugFile({
      ...primaryArtifact,
      sourceName,
      contractName,
      bytecode,
    });
  };
});
