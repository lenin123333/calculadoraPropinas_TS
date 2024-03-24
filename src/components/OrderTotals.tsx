
import { useMemo } from "react"
import type { OrderItem } from "../types"
import { formatCurrency } from "../helpers"

type OrderTotalProps={
    order: OrderItem[],
    tip:number,
    placeOrder:()=>void
   
}


export default function OrderTotals({order,tip,placeOrder}:OrderTotalProps) {
    //Memo para cuando order cambia se calcula de nuevo el subtotal
    const subtotalAmount = useMemo(()=>order.reduce((total,item)=>total+(item.quantity * item.price),0),[order])
    //Se calcula cuando cambia tip o order
    const tipAmount = useMemo(()=>subtotalAmount*tip,[tip, order])
    const totalAmpunt=subtotalAmount+tipAmount
  return (
    <>
      <div className=" space-y-3">
        <h2 className=" font-black text-2xl">Total y Propinas</h2>
        <p>Subtotal a pagar:{' '}
            <span className=" font-bold">{formatCurrency(subtotalAmount)}</span>
        </p>
        <p>Propina:{' '}
            <span className=" font-bold">{formatCurrency(tipAmount)}</span>
        </p>
        <p>Total a Pagar:{' '}
            <span className=" font-bold">{formatCurrency(totalAmpunt)}</span>
        </p>
      </div>
      <button className=" w-full bg-black p-3 uppercase text-white font-bold mt-10 disabled:opacity-10 "
        disabled={totalAmpunt === 0}
        onClick={placeOrder}
      >Guardar Orden</button>
    </>
  )
}
