import {} from '../@types/ArrayTypes'

/**
 * 数组操作函数
 */
export class ArrayHelper {

    /**
     * 合并数组
     * @param arr 要合并的数组1
     * @param arrRight 要被合并的数组2
     * @returns 合并后的数组1的长度
     */
    static pushAll <T>(arr: T[], arrRight: T[]): number {
        return arr.push(...arrRight)
    }
    /**
     * 删除元素
     * @param arr 要删除元素的数组 
     * @param elem 要删除的元素
     * @returns 删除元素后的数组
     */
    static remove <T>(arr: T[], elem: T): T[] {
        const index = arr.indexOf(elem)
        if (index > -1) { return arr.splice(index, 1) }
        return arr
    }
    /**
     * 对一个数组的元素进行去重
     * @param arr 要去重的数组
     * @param comparer 判断元素相等的方法，若为空，则使用默认的判断方法（===）
     * @returns 若数组为空（null或undefined），则返回空数组，否则返回去重后的数组
     */
    static distinct<T>(arr: T[], comparer?: (v1: T, v2: T) => boolean): T[]{
        // 数组为空
        if(!arr){
            return []
        }

        // 用于存放不重复数据的新数组
        const arrNew: T[] = []

        arr.forEach(item=>{
            // 判断数组中是否已包含相同的元素
            const value = arrNew.some(item2=>{
                if(comparer){
                    return comparer(item, item2)
                }else{
                    return item === item2
                }
            })

            // 如果不包含，则添加进去
            if(!value){
                arrNew.push(item)
            }
        })

        return arrNew
    }

    /**
     * 计算两个数组的并集
     * 例：[1, 2, 3, 4] 和 [2, 3, 5, 6] 的并集是 [1, 2, 3, 4, 5, 6]
     * 即先合并，后去重
     * @param arr1 数组1
     * @param arr2 数组2
     * @param comparer 判断元素相等的方法，若为空，则使用默认的判断方法（===）
     * @returns 若数组1和数组2都为空（null或undefined），则返回空数组，若只数组1为空（同上），则返回去重后的数组2，若只数组2为空，亦然，否则返回并集
     */
    static union<T>(arr1: T[], arr2: T[], comparer?: (v1: T, v2: T) => boolean): T[] {
        // 两个都是空
        if(!arr1 && !arr2){
            return []
        }

        // arr1是空
        if (!arr1 && arr2) {
            return ArrayHelper.distinct(arr2)
        }

        // arr2是空
        if(arr1 && !arr2){
            return ArrayHelper.distinct(arr1)
        }

        // 合并两个数组
        arr1.push(...arr2)

        // 元素去重
        const arr = ArrayHelper.distinct(arr1)

        return arr
    }

    /**
     * 计算两个数组的交集
     * 例：[1, 2, 3, 4] 和 [2, 3, 5, 6] 的交集是 [2, 3]
     * 即取两个数组同时存在的数据
     * @param arr1 数组1
     * @param arr2 数组2
     * @param comparer 判断元素相等的方法，若为空，则使用默认的判断方法（===）
     * @returns 若数组1或数组2为空（null或undefined），则返回空数组，否则返回交集
     */
    static intersect<T>(arr1: T[], arr2: T[], comparer?: (v1: T, v2: T) => boolean): T[]{
        // 若有一个为空
        if(!arr1 || !arr2){
            return []
        }

        // 从数组1中筛选出包含在数组2中的元素
        const arr = arr1.filter(item=>{
            return arr2.some(item2=>{
                if(comparer){
                    return comparer(item, item2)
                }else{
                    return item === item2
                }
            })
        })

        return arr
    }

    /**
     * 计算两个数组的差集（包含在数组1中但不包含在数组2中）
     * 例：[1, 2, 3, 4] 和 [2, 3, 5, 6] 的差集是 [1, 4]
     * @param arr1 数组1
     * @param arr2 数组2
     * @param comparer 判断元素相等的方法，若为空，则使用默认的判断方法（===）
     * @returns 若数组1为空，则返回空数组，若数组1不为空但数组2为空，则返回数组1，否则返回差集
     */
    static except<T>(arr1: T[], arr2: T[], comparer?: (v1: T, v2: T) => boolean): T[]{
        // 数组1为空
        if(!arr1){
            return []
        }

        // 数组1不为空但数组2为空
        if(arr1 && !arr2){
            return arr1
        }

        // 合并两个数组
        const arrNew = arr1.concat(arr2)

        // 从数组中筛选出包含在数组1中的但不包含在数组2中的元素
        const arr = arrNew.filter(item=>{
            return arr1.some(item2=>{
                if(comparer){
                    return comparer(item, item2)
                }else{
                    return item === item2
                }
            }) && !arr2.some(item2=>{
                if(comparer){
                    return comparer(item, item2)
                }else{
                    return item === item2
                }
            })
        })

        return arr
    }

    /**
     * 将一个类型数组转换为另一个类型的数组
     * @param source 要转换的数组
     * @param converter 转换方法
     * @returns 若源数组为空，则返回空数组，否则返回转换后的数组
     */
    static convertAll<TInput, TOutput>(source: TInput[], converter: (v: TInput) => TOutput): TOutput[]{
        // 源数组为空
        if(!source){
            return []
        }

        // 定义新数组
        const arr: TOutput[] = []

        // 进行转换
        source.forEach(item=>{
            arr.push(converter(item))
        })

        return arr
    }
}

export function registerOnArray() {
    Array.prototype.pushAll = function <T>(arr: T[]): number {
        return ArrayHelper.pushAll(this,arr)
    }
    
    Array.prototype.remove = function <T>(elem: T): T[] {
        return ArrayHelper.remove(this,elem)
    }
    
    Array.prototype.distinct = function<T>(comparer?: (v1: T, v2: T) => boolean)  {
        return ArrayHelper.distinct(this, comparer)
    }
    
    Array.prototype.union = function<T>(arr: T[], comparer?: (v1: T, v2: T) => boolean)  {
        return ArrayHelper.union(this, arr, comparer)
    }
    
    Array.prototype.intersect = function<T>(arr: T[], comparer?: (v1: T, v2: T) => boolean) {
        return ArrayHelper.intersect(this, arr, comparer)
    }
    
    Array.prototype.except = function<T>(arr: T[], comparer?: (v1: T, v2: T) => boolean)  {
        return ArrayHelper.except(this, arr, comparer)
    }
    
    Array.prototype.convertAll = function<T>(converter: (v: T) => T)  {
        return ArrayHelper.convertAll(this, converter)
    }
}