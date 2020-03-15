import consola from 'consola'
import { getRepoRawRoot } from '@wenyanlang/wyg'
import axios, { AxiosError } from 'axios'
import { packages } from '../registry-packages'
import { BuildIndex } from './build'

async function Verify () {
  consola.info('Checking for conflicts...')
  BuildIndex(false)
  consola.success('No conflict')

  consola.log('')

  consola.info('Checking for packages availability...')

  await Promise.all(
    packages.map(async (pkg) => {
      const indexUrl = `${getRepoRawRoot(pkg.repo)}/${encodeURIComponent('序.wy')}`
      try {
        const res = await axios.get(indexUrl)
        consola.success(`[${res.status}] ${pkg.name} passed`)
      }
      catch (e) {
        const err = e as AxiosError
        consola.error(`[${err.response?.status}] ${pkg.name} failed`)
        consola.error(err)
        throw err
      }
    }),
  )

  consola.log('')

  consola.success('All check passed')
}

if (require.main === module) {
  Verify()
    .catch(() => {
      process.exit(1)
    })
}
