import { Rule, SchematicContext, Tree, url, apply, mergeWith, applyTemplates, SchematicsException, move } from '@angular-devkit/schematics';
import { Schema } from './schema';
import { strings, normalize } from '@angular-devkit/core';
import { Attribute } from './attribute';
import { SearchParameter } from './search-parameter';


export function crud(_options: Schema): Rule {
  return (tree: Tree, _context: SchematicContext) => {

    if (!_options.resource) {
      _options.resource = '/resource_'
    }

    let attributes: Attribute[] = []

    if (_options.attributes) {
      const items = _options.attributes.split(',')
      attributes = items.map(item => {
        {
          return {
            name: item.split(':')[0],
            type: item.split(':')[1],
            nullable: (item.split(':')[2].toLowerCase() === 'true'),
            label: item.split(':')[3]
          }
        }
      })
    }


    let searchParameters: SearchParameter[] = []

    if (_options.searchParameters) {
      const items = _options.searchParameters.split(',')
      searchParameters = items.map(item => {
        {
          return {
            name: item.split(':')[0],
            type: item.split(':')[1],
            label: item.split(':')[2]
          }
        }
      })
    }


    const workspaceConfig = tree.read('/angular.json');

    if (!workspaceConfig) {
      throw new SchematicsException('Could not find Angular workspace configuration');
    }

    const workspaceContent = workspaceConfig.toString()

    const workspace = JSON.parse(workspaceContent);


    const projectName = workspace.defaultProject;

    const project = workspace.projects[projectName];

    const projectType = project.projectType === 'application' ? 'app' : 'lib';

    const path = normalize(`${project.sourceRoot}/${projectType}`);

    const sourceTemplates = url('./files')

    const sourceTemplatesParametrized = apply(sourceTemplates, [
      applyTemplates({
        ..._options,
        ...strings,
        attributes,
        uppercase,
        lowercase,
        commaSeparatedAttributes,
        searchParameters
      }),
      move(path)
    ]);

    return mergeWith(sourceTemplatesParametrized)
  };

  function uppercase(string: string) {
    return string.toUpperCase();
  }

  function lowercase(string: string) {
    return string.toLowerCase();
  }
  function commaSeparatedAttributes(attributes:Attribute[]){
    return attributes
              .map(item => `\'${strings.camelize(item.name)}\'`)
              .join(',')
  }
}
