import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectTrigger, SelectValue, SelectItem, SelectGroup } from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { SearchIcon, XIcon } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import { z } from "zod";

const orderFiltersSchema = z.object({
    orderId: z.string().optional(),
    customerName: z.string().optional(),
    status: z.string().optional(),
})

type OrderFiltersSchema = z.infer<typeof orderFiltersSchema>

const OrderTableFilters = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const orderID = searchParams.get('orderId')
    const customerName = searchParams.get('customerName')
    const status = searchParams.get('status')

    const { register, handleSubmit, control, reset } = useForm<OrderFiltersSchema>({
        resolver: zodResolver(orderFiltersSchema),
        defaultValues: {
            orderId: orderID ?? '',
            customerName: customerName ?? '',
            status: status ?? 'all',
        }
    })

    const handleFilter = ({ orderId, customerName, status }: OrderFiltersSchema) => {
        setSearchParams(prev => {
            if (orderId) {
                prev.set('orderId', orderId)
            } else {
                prev.delete('orderId')
            }

            if (customerName) {
                prev.set('customerName', customerName)
            } else {
                prev.delete('customerName')
            }

            if (status) {
                prev.set('status', status)
            } else {
                prev.delete('status')
            }


            prev.set('page', '1')

            return prev
        })
    }

    const handleClearFilters = () => {
        setSearchParams(prev => {
            prev.delete('orderId')
            prev.delete('customerName')
            prev.delete('status')
            prev.set('page', '1')
            return prev
        })

        reset({ orderId: '', customerName: '', status: 'all' })
    }

    return (
        <form className="flex items-center gap-2" onSubmit={handleSubmit(handleFilter)}>
            <span className="text-sm font-semibold">Filtros:</span>
            <Input placeholder="ID do pedido" className="h-8 w-auto" {...register('orderId')} />
            <Input placeholder="Nome do Cliente" className="h-8 w-[320px]" {...register('customerName')} />


            <Controller name="status" control={control} render={({ field: { name, onChange, value, disabled } }) => {
                return (
                    <Select defaultValue="all" name={name} onValueChange={onChange} value={value} disabled={disabled}>
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
                )
            }} />



            <Button type='submit' size='xs' variant='secondary'>
                <SearchIcon size={14} className="mr-2" />
                Filtrar resultados
            </Button>

            <Button type="button" size='xs' variant='outline' onClick={() => handleClearFilters()}>
                <XIcon size={14} className="mr-2" />
                Remover filtros
            </Button>
        </form>
    );
}

export default OrderTableFilters;