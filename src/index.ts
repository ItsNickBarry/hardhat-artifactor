import { name as pluginName } from '../package.json';
import { extendEnvironment } from 'hardhat/config';
import 'hardhat/types/artifacts';

declare module 'hardhat/types/artifacts' {
  export interface Artifacts {
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
  hre.artifacts.createArtifactFromTemplate = async (
    templateContract: string,
    generatedContract: string,
    bytecode: string,
  ) => {
    const primaryArtifact = await hre.artifacts.readArtifact(templateContract);

    await hre.artifacts.saveArtifactAndDebugFile({
      ...primaryArtifact,
      sourceName: pluginName,
      contractName: generatedContract,
      bytecode,
    });
  };

  hre.artifacts.overwriteArtifact = async (
    contractName: string,
    bytecode: string,
  ) => {
    const artifact = await hre.artifacts.readArtifact(contractName);

    await hre.artifacts.saveArtifactAndDebugFile({
      ...artifact,
      bytecode,
    });
  };
});
