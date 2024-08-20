import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { TableCell, TableRow } from "@/components/ui/table";
import { ArrowRightIcon, SearchIcon, XIcon } from "lucide-react";
import OrderDetails from "./order-details";
import OrderStatus from "@/components/order-status";
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { useState } from "react";

export interface OrderTableRowProps {
    order: {
        orderId: string;
        createdAt: Date;
        status: "pending" | "canceled" | "processing" | "delivering" | "delivered";
        customerName: string;
        total: number;
    };
}

const OrderTableRow = ({ order }: OrderTableRowProps) => {
    const [isDetailOpen, setIsDetailOpen] = useState(false);

    return (
        <TableRow>
            <TableCell>
                <Dialog open={isDetailOpen} onOpenChange={setIsDetailOpen}>
                    <DialogTrigger asChild>
                        <Button variant='outline' size='xs'>
                            <SearchIcon size={14} />
                            <span className="sr-only">Detalhes do Pedido</span>
                        </Button>
                    </DialogTrigger>

                    <OrderDetails orderId={order.orderId} open={isDetailOpen} />
                </Dialog>
            </TableCell>
            <TableCell className="font-mono text-xs font-medium">{order.orderId}</TableCell>
            <TableCell className="text-muted-foreground">
                {formatDistanceToNow(order.createdAt, { locale: ptBR, addSuffix: true })}
            </TableCell>
            <TableCell>
                <OrderStatus status={order.status} />
            </TableCell>
            <TableCell className="font-medium">{order.customerName}</TableCell>
            <TableCell className="font-medium">
                {(order.total / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</TableCell>
            <TableCell>
                <Button variant='outline' size='xs'>
                    <ArrowRightIcon size={14} className="mr-2" />
                    Aprovar
                </Button>
            </TableCell>
            <TableCell>
                <Button variant='ghost' size='xs'>
                    <XIcon size={14} className="mr-2" />
                    Cancelar
                </Button>
            </TableCell>
        </TableRow>
    );
}

export default OrderTableRow;