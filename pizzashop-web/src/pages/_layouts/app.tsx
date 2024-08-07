import Header from "@/components/header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
    return (
        <div className="min-h-screen flex flex-col antialiased">
            <Header />
            <div className="flex flex-1 flex-col gap-4 p-8 pt-6">
                <Outlet />
            </div>
        </div>
    );
}

export default AppLayout;