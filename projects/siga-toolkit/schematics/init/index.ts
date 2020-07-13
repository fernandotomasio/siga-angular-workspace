import { Rule, SchematicContext, Tree, url, apply, mergeWith, applyTemplates, SchematicsException, move, MergeStrategy } from '@angular-devkit/schematics';
import { Schema } from './schema';
import { strings, normalize } from '@angular-devkit/core';
import {
  addModuleImportToRootModule,
  addPackageJsonDependency,
  getProjectFromWorkspace,
  getWorkspace,
  NodeDependency,
  NodeDependencyType
} from 'schematics-utilities';

export function init(_options: Schema): Rule {
  return (tree: Tree, _context: SchematicContext) => {


    addDependencies(tree, _context)

    
    addModuleToImports(tree, _context, _options)

    const workspaceConfig = tree.read('/angular.json');

    if (!workspaceConfig) {
      throw new SchematicsException('Could not find Angular workspace configuration');
    }

    const workspaceContent = workspaceConfig.toString()

    const workspace = JSON.parse(workspaceContent);

    const projectName = workspace.defaultProject;

    const project = workspace.projects[projectName];

    const path = normalize(`${project.sourceRoot}`);

    const sourceTemplates = url('./files')

    const sourceTemplatesParametrized = apply(sourceTemplates, [
      applyTemplates({
        ..._options,
        ...strings,
      }),
      move(path)
    ]);

    return mergeWith(sourceTemplatesParametrized, MergeStrategy.Default)
  };

  function addDependencies(tree:Tree, context: SchematicContext){

    const dependencies: NodeDependency[] = [
      { type: NodeDependencyType.Default, version: '^7.3.7', name: '@angular/material' },
      { type: NodeDependencyType.Default, version: '7.0.0-beta.19', name: '@angular/flex-layout' },
      { type: NodeDependencyType.Default, version: '^3.3.1', name: 'jquery' }
    ];

    dependencies.forEach(dependency => {
      addPackageJsonDependency(tree, dependency);
      context.logger.log('info', `✅️ Added "${dependency.name}" into ${dependency.type}`);
    });

   
  }


  function addModuleToImports(tree:Tree, context: SchematicContext, options: any) {
    const workspace = getWorkspace(tree);
    const project = getProjectFromWorkspace(
      workspace,
      // Takes the first project in case it's not provided by CLI
      options.project ? options.project : Object.keys(workspace['projects'])[0]
    );
    
    addModuleImportToRootModule(tree, 'SharedModule', './shared/shared.module', project);
    context.logger.log('info', `✅️ SharedModule is imported`);

    addModuleImportToRootModule(tree, 'MaterialModule', './material-module', project);
    context.logger.log('info', `✅️ MaterialModule is imported`);

    addModuleImportToRootModule(tree, 'FlexLayoutModule', '@angular/flex-layout', project);
    context.logger.log('info', `✅️ FlexLayoutModule is imported`);

    addModuleImportToRootModule(tree, 'BrowserAnimationsModule', '@angular/platform-browser/animations', project);
    context.logger.log('info', `✅️ BrowserAnimationsModule is imported`);

  }
}
