import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSignIcon, UtensilsIcon } from "lucide-react";

const DayOrdersAmountCard = () => (
    <Card>
        <CardHeader className="flex flex-row space-y-0 items-center justify-between pb-2">
            <CardTitle className="text-base font-semibold">Pedidos no dia</CardTitle>
            <UtensilsIcon size={16} className="text-muted-foreground" />
        </CardHeader>
        <CardContent className="space-y-1">
            <span className="text-2xl font-bold tracking-tight">35</span>
            <p className="text-xs text-muted-foreground">
                <span className="text-rose-500 dark:text-rose-400">-2%</span> em relação a ontem
            </p>
        </CardContent>
    </Card>
)

export default DayOrdersAmountCard;