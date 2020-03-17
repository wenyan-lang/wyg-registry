import fs from 'fs'
import YAML from 'js-yaml'
import { PackageInfo } from './scripts/types'

export const packages: PackageInfo[] = YAML.safeLoad(fs.readFileSync('registry.yml', 'utf8'))
