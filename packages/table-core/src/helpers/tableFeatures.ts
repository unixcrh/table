import type { CoreTableFeatures, TableFeatures } from '../types/TableFeatures'

/**
 * A helper function to help define the features that are to be imported and applied to a table instance.
 *
 * Use this utility to make it easier to have the correct type inference for the features that are being imported.
 *
 * **Note:** It is recommended to use this utility statically outside of a component.
 *
 * @example ```tsx
 * import { tableFeatures, ColumnVisibility, RowPinning } from '@tanstack/react-table'
 * const _features = tableFeatures({ ColumnVisibility, RowPinning });
 *
 * const table = useTable({ _features, rowModels: {}, columns, data });
 * ```
 */
export function tableFeatures<TFeatures extends TableFeatures>(
  features: TFeatures,
): TFeatures {
  return features
}

// test

// const features = tableFeatures({
//   RowPinning: {},
// });