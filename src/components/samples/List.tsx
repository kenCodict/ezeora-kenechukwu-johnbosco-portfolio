import { ReactNode } from 'react'

interface ListProps<T> {
            items: T[],
            render:(item: T) => ReactNode
}

const List = <T,>({items, render} : ListProps<T>) => {
  return (
            <div>
{
            items.map((item,i) => (
                        <li key={i}>
                                    {render(item)}
                        </li>
            ))
}
    </div>
  )
}

export default List