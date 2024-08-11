import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSignIcon } from "lucide-react";
import { Helmet } from "react-helmet-async";
import MonthRevenueCard from "./month-revenue-card";
import MonthOrdersAmountCard from "./month-order-amount-card";
import DayOrdersAmountCard from "./day-orders-amount-card";
import MonthCanceledOrdersAmountCard from "./month-canceled-orders-amount-card";
import RevenueChart from "./revenue-chart";

const Dashboard = () => {
    return (
        <>
            <Helmet title="Dashboard" />
            <div className="flex flex-col gap-4">
                <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
                <div className="grid grid-cols-4 gap-2">
                    <MonthRevenueCard />
                    <MonthOrdersAmountCard />
                    <DayOrdersAmountCard />
                    <MonthCanceledOrdersAmountCard />
                </div>

                <div className="grid grid-cols-9 gap-4">
                    <RevenueChart />
                </div>
            </div>
        </>
    );
}

export default Dashboard;