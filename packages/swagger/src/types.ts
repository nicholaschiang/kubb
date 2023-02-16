import type { PluginFactoryOptions, KubbConfig } from '@kubb/core'

import type Oas from 'oas'

export type Api = {
  getOas: (config: KubbConfig) => Promise<Oas>
}

export type Options = {
  /**
   * Validate your input(see kubb.config) based on @apidevtools/swagger-parser
   * @default true
   */
  validate?: boolean
  /**
   * Relative path to save the JSON models.
   * False will not generate the schema JSON's.
   * @default 'schemas'
   */
  output?: string | false
}

export type PluginOptions = PluginFactoryOptions<Options, false, Api>
