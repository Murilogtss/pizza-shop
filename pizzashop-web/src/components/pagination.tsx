import { ChevronLeftIcon, ChevronRightIcon, ChevronsLeftIcon, ChevronsRight } from "lucide-react"
import { Button } from "./ui/button"

type PaginationProps = {
    pageIndex: number
    totalCount: number
    perPage: number
}

const Pagination = ({ pageIndex, totalCount, perPage }: PaginationProps) => {

    const pages = Math.ceil(totalCount / perPage) || 1

    return (<div className="flex items-center justify-between">
        <span className="text-sm text-muted-foreground">Total de {totalCount} item(s)</span>

        <div className="flex items-center gap-6 lg:gap-8">
            <div className="text-sm font-medium">Página {pageIndex + 1} de {pages}</div>
            <div className="flex items-center gap-2">
                <Button variant='outline' className="h-8 w-8 p-0">
                    <ChevronsLeftIcon size={14} />
                    <span className="sr-only">Primeira página</span>
                </Button>
                <Button variant='outline' className="h-8 w-8 p-0">
                    <ChevronLeftIcon size={14} />
                    <span className="sr-only">Página Anterior</span>
                </Button>
                <Button variant='outline' className="h-8 w-8 p-0">
                    <ChevronRightIcon size={14} />
                    <span className="sr-only">Próxima página</span>
                </Button>
                <Button variant='outline' className="h-8 w-8 p-0">
                    <ChevronsRight size={14} />
                    <span className="sr-only">última página</span>
                </Button>
            </div>
        </div>
    </div>);
}

export default Pagination;