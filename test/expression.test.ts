import { test } from "vitest";
import { execute } from '../src/Simplify';
import { registerOnArray } from '../src/lib/ArrayHelper';

registerOnArray()

test('Scb Expression', () => {
    execute(`
    
func test:scb_expression{
    {if @s }->{
        say yes2
        {if @s }->{
            scb@temp := 6*7+7*(9+scb@temp)
            scb@temp := 9*(scb@temp1 + scb@temp2)
        }
    }
}
    
    `)
})