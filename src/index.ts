import { name as pluginName } from '../package.json';
import { extendEnvironment } from 'hardhat/config';
import 'hardhat/types/runtime';

declare module 'hardhat/types/runtime' {
  export interface HardhatRuntimeEnvironment {
    createArtifactFromTemplate: (
      templateContract: string,
      generatedContract: string,
      bytecode: string,
    ) => Promise<void>;
    overwriteArtifact: (
      contractName: string,
      bytecode: string,
    ) => Promise<void>;
  }
}

extendEnvironment((hre) => {
  hre.createArtifactFromTemplate = async function (
    templateContract: string,
    generatedContract: string,
    bytecode: string,
  ) {
    const primaryArtifact = await hre.artifacts.readArtifact(templateContract);

    await hre.artifacts.saveArtifactAndDebugFile({
      ...primaryArtifact,
      sourceName: pluginName,
      contractName: generatedContract,
      bytecode,
    });
  };

  hre.overwriteArtifact = async (contractName: string, bytecode: string) => {
    const artifact = await hre.artifacts.readArtifact(contractName);

    await hre.artifacts.saveArtifactAndDebugFile({
      ...artifact,
      bytecode,
    });
  };
});
