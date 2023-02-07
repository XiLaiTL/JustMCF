import { test } from "vitest";
import { execute } from '../src/ManageSimplify';
import { registerOnArray } from '../src/lib/ArrayHelper';

registerOnArray()

test('Interface', () => {
    execute`
    interface test:foo n{
        Name:"",
        Age:17,
        Information:{}
    }
    
    ##data merge storage test:foo {Name:"",Age:17,Information:{}}
    
    interface test:foo::Choose n{
        Name:"",
        Age:17,
        Information:{}
    }
    
    ##data modify storage test:foo Choose set value {Name:"",Age:17,Information:{}}
    `
})

test('ImproveFunction', () => {
    execute`
    func test:fun1(a,b){
        c = local::a         ##c没有命名空间id，a带着前置local::
        yield c
    }
    func test:fun2{
        io::test = func fun1(io::a,io::b)
    }
    `
})