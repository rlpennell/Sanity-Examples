import {inputs} from './inputs'
import {sandbox} from './sandbox'

//Component Dependencies
import {pageBlocks} from './componentDependencies/pageBlocks'
import {media} from './componentDependencies/media'

export const sandboxTypes = [sandbox, inputs, ...pageBlocks, media]
