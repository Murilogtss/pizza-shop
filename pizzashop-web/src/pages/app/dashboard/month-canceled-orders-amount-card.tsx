import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { DollarSignIcon } from "lucide-react";

const MonthCanceledOrdersAmountCard = () => {
    return (
        <Card>
            <CardHeader className="flex flex-row space-y-0 items-center justify-between pb-2">
                <CardTitle className="text-base font-semibold">Cancelados mês</CardTitle>
                <DollarSignIcon size={16} className="text-muted-foreground" />
            </CardHeader>
            <CardContent className="space-y-1">
                <span className="text-2xl font-bold tracking-tight">25</span>
                <p className="text-xs text-muted-foreground">
                    <span className="text-rose-500 dark:text-rose-400">+2%</span> em relação ao mês passado
                </p>
            </CardContent>
        </Card>
    );
}

export default MonthCanceledOrdersAmountCard;