import { formatCurrency } from "../helpers"
import type { OrderItem,MenuItem } from "../types"

type OrderContentPorps = {
    order: OrderItem[],
    removeItem:(id:MenuItem['id'])=>void
}
export default function OderContents({ order,removeItem }: OrderContentPorps) {
    return (
        <div>
            <h2 className=' font-black text-2xl'>Consumo</h2>
            <div className=" space-y-3 mt-5">
                {order.length === 0
                    ? <p className=" text-center">La orden esta vacia</p>
                    : (
                        order.map(item => (
                            <div key={item.id}
                                className=" flex justify-between items-center border-t border-gray-200 py-5 "
                            >
                                <div>
                                    <p className=" text-lg">{item.name} - {formatCurrency(item.price)}</p>
                                    <p className=" font-black">{item.quantity} - {formatCurrency(item.price * item.quantity)}</p>
                                </div>

                                <button className=" bg-red-600 h-8 w-8 rounded-full text-white font-black"
                                    onClick={()=>removeItem(item.id)}
                                >X</button>
                            </div>
                        ))
                    )}
            </div>
        </div>
    )
}
