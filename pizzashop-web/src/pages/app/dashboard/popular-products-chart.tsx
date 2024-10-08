import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChartIcon } from "lucide-react";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import colors from "tailwindcss/colors";

const data = [
    {product: 'Pepperoni', amount: 100},
    {product: 'Mussarela', amount: 140},
    {product: 'Marguerita', amount: 204},
    {product: 'Calabresa', amount: 104},
    {product: 'Portuguesa', amount: 529},
]

const COLORS =[
    colors.sky[500],
    colors.amber[500],
    colors.violet[500],
    colors.emerald[500],
    colors.rose[500],
]

const PopularProductsChart = () => {
    return ( 
        <Card className="col-span-3">
        <CardHeader className="pb-8">
            <div className="flex items-center justify-between">
                <CardTitle className="text-base font-medium">Produtos Populares</CardTitle>
                <BarChartIcon size={16} className="text-muted-foreground"/>
            </div>
        </CardHeader>
        <CardContent>
            <ResponsiveContainer width="100%" height={240}>
                <PieChart style={{fontsize: "12px"}}>
                    <Pie 
                        data={data} 
                        dataKey={'amount'} 
                        nameKey={'product'} 
                        cx="50%" 
                        cy='50%' 
                        innerRadius={64} 
                        outerRadius={86} 
                        strokeWidth={8}
                        labelLine={false}
                        label={({
                            cx,
                            cy,
                            midAngle,
                            innerRadius,
                            outerRadius,
                            value,
                            index,
                          }) => {
                            const RADIAN = Math.PI / 180
                            const radius = 12 + innerRadius + (outerRadius - innerRadius)
                            const x = cx + radius * Math.cos(-midAngle * RADIAN)
                            const y = cy + radius * Math.sin(-midAngle * RADIAN)
                          
                            return (
                              <text
                                x={x}
                                y={y}
                                className="fill-muted-foreground text-xs"
                                textAnchor={x > cx ? 'start' : 'end'}
                                dominantBaseline="central"
                              >
                                {data[index].product.length > 12
                                  ? data[index].product.substring(0, 12).concat('...')
                                  : data[index].product}{' '}
                                ({value})
                              </text>
                            )
                          }}
                        >
                            {data.map((_, i )=> <Cell key={`cell-${i}`} fill={COLORS[i]} className="stroke-background hover:opacity-80" /> )}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </CardContent>
    </Card> );
}
 
export default PopularProductsChart;