import { HomeIcon, PizzaIcon, UtensilsCrossedIcon } from "lucide-react";
import { Separator } from "./ui/separator";
import NavLInk from "./nav-link";
import { ThemeToggle } from "./theme/theme-toggle";
import AccountMenu from "./account-menu";

const Header = () => {
    return (
        <div className="border-b">
            <div className="flex h-16 items-center gap-6 px-6">
                <PizzaIcon size={20} />
                <Separator orientation="vertical" className="h-6" />

                <nav className="flex items-center space-x-4 lg:space-x-6">
                    <NavLInk to="/">
                        <HomeIcon size={16} />
                        Início
                    </NavLInk>
                    <NavLInk to="/orders">
                        <UtensilsCrossedIcon size={16} />
                        Pedidos
                    </NavLInk>
                </nav>

                <div className="ml-auto flex items-center gap-2">
                    <ThemeToggle />
                    <AccountMenu />
                </div>
            </div>
        </div>
    );
}

export default Header;