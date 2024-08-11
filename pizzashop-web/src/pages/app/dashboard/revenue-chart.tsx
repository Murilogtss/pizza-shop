import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import colors from 'tailwindcss/colors'

const data = [
    {date: '10/08', revenue: 100},
    {date: '11/08', revenue: 140},
    {date: '12/08', revenue: 204},
    {date: '13/08', revenue: 104},
    {date: '14/08', revenue: 529},
    {date: '15/08', revenue: 220},
]

const RevenueChart = () => {
    return  <Card className="col-span-6">
        <CardHeader className="flex-row items-center justify-between pb-8">
            <div className="space-y-1">
                <CardTitle className="text-base font-medium">Receita no período</CardTitle>
                <CardDescription>Receita no período</CardDescription>
            </div>
        </CardHeader>
        <CardContent>
            <ResponsiveContainer width="100%" height={240}>
                <LineChart data={data} style={{fontsize: "12px"}}>
                    <XAxis dataKey='date' tickLine={false} axisLine={false} dy={16} />
                    <YAxis stroke="#888" axisLine={false} width={80} tickLine={false} tickFormatter={(value: number) => value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }/>
                    <Line type='linear' strokeWidth={2} dataKey='revenue' stroke={colors.violet[500]} />
                </LineChart>
            </ResponsiveContainer>
        </CardContent>
    </Card>;
}
 
export default RevenueChart;