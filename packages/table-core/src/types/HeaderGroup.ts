import type { HeaderGroup_Header } from '../core/headers/Headers.types'
import type { TableFeatures } from './TableFeatures'
import type { RowData } from './type-utils'

export interface HeaderGroup_Core<
  TFeatures extends TableFeatures,
  TData extends RowData,
> extends HeaderGroup_Header<TFeatures, TData> {}

export interface HeaderGroup<
  TFeatures extends TableFeatures,
  TData extends RowData,
> extends HeaderGroup_Core<TFeatures, TData> {}