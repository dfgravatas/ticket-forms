const API = "http://localhost:3000" // import.meta.env.VITE_API_URL || "https://worrisome-toga-deer.cyclic.app";

export interface DataProps {
    id?: string,
    pending?: boolean,
    document: string,
    name: string,
    phone?: string,
    email: string,
    cep: string,
    street: string,
    number: string,
    bairro: string,
    city: string,
    itemsQuantity: number,
    purchaseValue: string,
}

export interface RequestResponse {
    code?: number,
    message?: string,
    data?: DataProps[]
}

export async function getTickets(): Promise<RequestResponse> {
    const response = await fetch(`${API}/data`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })

    return await response.json();
}

export async function createTicket(data: DataProps): Promise<RequestResponse> {
    const response = await fetch(`${API}/data`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    })

    return await response.json();
}

export async function editTicket(data: DataProps): Promise<RequestResponse> { 
    const response = await fetch(`${API}/data/${data.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    })

    return await response.json();
}

export async function deleteTicket(id: string): Promise<RequestResponse> { 
    const response = await fetch(`${API}/data/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    })

    return await response.json();
}