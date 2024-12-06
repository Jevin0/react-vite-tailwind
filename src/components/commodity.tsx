import type { FC } from 'react'
import type { DataType } from '../App'

interface NewDataTypeType extends DataType {
  isMaxPrice: boolean
}

type DataTypeByGroupTypes = {
  [k in DataType['category']]: NewDataTypeType[];
}

type DataTypeByGroupType = {
  [k in DataType['category']]?: NewDataTypeType;
}

function diffPrice(v1: string, v2: string): boolean {
  const toNumber = (str: string) => {
    return Number.parseFloat(str.replace(/[^\d.-]/g, ''))
  }

  return toNumber(v1) < toNumber(v2)
}
 
const commodity: FC<{ data: DataType[] }> = ({ data }) => {
  console.log(data, 'data')

  const cacheMaxPrice: DataTypeByGroupType = {}

  const byGroupData = data.reduce((pre, next): DataTypeByGroupTypes => {
    const _next = { ...next, isMaxPrice: false }

    if (!pre[next.category]) {
      _next.isMaxPrice = true

      cacheMaxPrice[next.category] = _next
      pre[next.category] = [_next]
    }
    else {
      if (diffPrice(cacheMaxPrice[next.category]!.price, next.price)) {
        _next.isMaxPrice = true

        cacheMaxPrice[next.category]!.isMaxPrice = false
        cacheMaxPrice[next.category] = _next
      }

      pre[next.category].push(_next)
    }

    return pre
  }, {} as DataTypeByGroupTypes)

  console.log(byGroupData, 'byGroupData')

  return (
    <>
      {Object.entries(byGroupData).map(([key, list], index) => {
        return (
          <div className="w-full" key={index}>
            <h1 className="text-center font-bold">{key}</h1>

            {list.map((item, _index) => {
              return (
                <div className="flex justify-between" key={_index}>
                  <span className={`${item.isMaxPrice && 'text-red-500'}`}>
                    {item.name}
                  </span>
                  <span>{item.price}</span>
                </div>
              )
            })}
          </div>
        )
      })}
    </>
  )
}
export default commodity
