import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import { ArrowRightIcon, SearchIcon, XIcon } from "lucide-react";

const OrderTableRow = () => {
    return (
        <TableRow>
            <TableCell>
                <Button variant='outline' size='xs'>
                    <SearchIcon size={14} />
                    <span className="sr-only">Detalhes do Pedido</span>
                </Button>
            </TableCell>
            <TableCell className="font-mono text-xs font-medium">848asd4f9</TableCell>
            <TableCell className="text-muted-foreground">Há 15 minutos</TableCell>
            <TableCell>
                <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-slate-400" />
                    <span className="font-medium text-muted-foreground">Pendente</span>
                </div>
            </TableCell>
            <TableCell className="font-medium">Murilo Leite</TableCell>
            <TableCell className="font-medium">R$149,90</TableCell>
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