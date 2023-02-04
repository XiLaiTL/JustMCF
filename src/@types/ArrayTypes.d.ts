declare global {
    interface Array<T> {
        /**
         * 合并数组
         * @param arr 另一个数组
         */
        pushAll(arr: Array<T>): number;
        
        /**
         * 删除元素
         * @param elem 要被删除的元素
         */
        remove(elem: T): Array<T>;

        /**
         * 对数组去重
         * @param comparer 判断元素相等的方法，若为空，则使用默认的判断方法（===）
         */
        distinct<T>(comparer?: (v1: T, v2: T) => boolean): T[]

        /**
         * 两个集合的并集
         * @param comparer 判断元素相等的方法，若为空，则使用默认的判断方法（===）
         */
        union(arr: T[], comparer?: (v1: T, v2: T) => boolean): T[]

        /**
         * 两个集合的交集
         * @param arr
         * @param comparer 判断元素相等的方法，若为空，则使用默认的判断方法（===）
         */
        intersect(arr: T[], comparer?: (v1: T, v2: T) => boolean): T[]

        /**
         * 两个集合的差集
         * @param arr
         * @param comparer 判断元素相等的方法，若为空，则使用默认的判断方法（===）
         */
        except(arr: T[], comparer?: (v1: T, v2: T) => boolean): T[]

        /**
         * 集合转换
         * @param converter 转换方法
         */
        convertAll<TOutput>(converter: (v: T) => TOutput): TOutput[]
    }
}
export type { }