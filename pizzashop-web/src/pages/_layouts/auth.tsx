import { PizzaIcon } from "lucide-react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
    return (
        <div className="min-h-screen grid grid-cols-2">
            <div className="h-full border-r border-foreground/5 bg-muted p-10 text-muted-foreground flex flex-col justify-between">
                <div className="flex items-center gap-2 text-lg font-medium text-foreground">
                    <PizzaIcon size={20} />
                    <span className="font-semibold">Pizza Shop</span>
                </div>
                <footer className="text-sm">
                    Painel do Parceiro &copy; Pizza Shop - {new Date().getFullYear()}
                </footer>
            </div>

            <div className="flex flex-col items-center justify-center relative">
                <Outlet />
            </div>
        </div>
    );
}

export default AuthLayout;