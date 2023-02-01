import { UUID } from '../src/lib/UUIDUtils';
import { test, expect } from 'vitest';

test('random UUID Hex', () => {
    const res = UUID.random().toHex()
    const uuid16_reg = /^[0-9a-fA-F]{1,8}-[0-9a-fA-F]{1,4}-[0-9a-fA-F]{1,4}-[0-9a-fA-F]{1,4}-[0-9a-fA-F]{1,12}|[0-9a-fA-F]{1,32}$/; 
    console.log(res)
    expect(res).toMatch(uuid16_reg)
})