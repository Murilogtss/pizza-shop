import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectTrigger, SelectValue, SelectItem, SelectGroup } from "@/components/ui/select";
import { SearchIcon, XIcon } from "lucide-react";

const OrderTableFilters = () => {



    return (
        <form className="flex items-center gap-2">
            <span className="text-sm font-semibold">Filtros:</span>
            <Input placeholder="ID do pedido" className="h-8 w-auto" />
            <Input placeholder="Nome do Cliente" className="h-8 w-[320px]" />
            <Select defaultValue="all">
                <SelectTrigger className="h-8 w-[180px]">
                    <SelectValue />
                </SelectTrigger>
                <SelectContent >
                    <SelectGroup>
                        <SelectItem value="all">Todos status</SelectItem>
                        <SelectItem value="pending">Pendete</SelectItem>
                        <SelectItem value="canceled">Cancelado</SelectItem>
                        <SelectItem value="processing">Em preparo</SelectItem>
                        <SelectItem value="delivering">Em entrega</SelectItem>
                        <SelectItem value="delivered">Entregue</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>

            <Button type='submit' size='xs' variant='secondary'>
                <SearchIcon size={14} className="mr-2" />
                Filtrar resultados
            </Button>

            <Button type="button" size='xs' variant='outline'>
                <XIcon size={14} className="mr-2" />
                Remover filtros
            </Button>
        </form>
    );
}

export default OrderTableFilters;