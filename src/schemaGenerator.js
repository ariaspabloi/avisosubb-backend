import path from 'path'
import * as tjs from 'typescript-json-schema'
import fs from 'fs'

const settings = {
  required: true,
  ref: false
}
const compilerOptions = {
  strictNullChecks: true
}

const program = tjs.getProgramFromFiles([path.resolve('src/schema_definition.ts')], compilerOptions, './')

const schema = tjs.generateSchema(program, '*', settings)
fs.writeFileSync(
  'src/_schema.ts',
  'const schema = ' + JSON.stringify(schema) + ' as const;\nexport default schema.definitions;'
)
