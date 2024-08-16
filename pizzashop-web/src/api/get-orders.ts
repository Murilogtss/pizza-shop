import { api } from "@/lib/axios"

export interface GetOrdersQuery {
    pageIndex?: number | null
    orderId?: string|  null
    customerName?: string | null
    status?: string | null
}

export interface GetOrdersResponse {
    orders: {
        orderId: string;
        createdAt: Date;
        status: "pending" | "canceled" | "processing" | "delivering" | "delivered";
        customerName: string;
        total: number;
    }[];
    meta: {
        pageIndex: number;
        perPage: number;
        totalCount: number;
    };
}

export const getOrders = async ({ pageIndex = 0, orderId, customerName, status }: GetOrdersQuery) => {
    const response = await api.get<GetOrdersResponse>('/orders', {
        params: {
            pageIndex: pageIndex,
            orderId,
            customerName,
            status
        }
    })

    return response.data
}