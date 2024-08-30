import { describe, expect, it } from 'vitest'
import { Headers } from './Headers'
import { _createHeader } from './createHeader'
import type { Column } from '../../types/Column'
import type { Table } from '../../types/Table'

describe('createHeader', () => {
  it('should create a column with all core column APIs and properties', () => {
    const table = { _features: { Headers }, options: {} } as Table<any, any>
    const column = {
      id: 'test-column',
      columnDef: { id: 'test-column-def' },
    } as Column<any, any, any>
    const index = 0
    const depth = 0

    const header = _createHeader(table, column, {
      index,
      depth,
    })

    expect(header).toBeDefined()
    expect(header).toHaveProperty('colSpan')
    expect(header).toHaveProperty('column')
    expect(header).toHaveProperty('depth')
    expect(header).toHaveProperty('headerGroup')
    expect(header).toHaveProperty('id')
    expect(header).toHaveProperty('index')
    expect(header).toHaveProperty('isPlaceholder')
    expect(header).toHaveProperty('placeholderId')
    expect(header).toHaveProperty('rowSpan')
    expect(header).toHaveProperty('subHeaders')
    expect(header).toHaveProperty('getContext')
    expect(header).toHaveProperty('getLeafHeaders')

    expect(header.id).toBe(column.id)
  })
})