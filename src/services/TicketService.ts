const API = import.meta.env.VITE_API_URL || "https://glamorous-ruby-turkey.cyclic.app";

export interface DataProps {
    id?: string,
    pending?: boolean,
    filled?: boolean,
    document?: string,
    name?: string,
    phone?: string,
    email?: string,
    cep?: string,
    street?: string,
    number?: string,
    neighborhood?: string,
    city?: string,
    purchaseValue?: string,
    weight?: string,
    itemsQuantity?: number,
    shipping?: string
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

export async function getTicketById(id: string): Promise<DataProps> {
    const response = await fetch(`${API}/data/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })

    return await response.json();
}

export interface CreateTicketDataProps extends DataProps {
    code?: number,
    message?: string,
    data?: DataProps 
}

export async function createTicket(data: DataProps): Promise<CreateTicketDataProps> {
    const response = await fetch(`${API}/data`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    })

    return await response.json();
}

export async function updateTicket(id: string, data: DataProps): Promise<RequestResponse> { 
    const response = await fetch(`${API}/data/${id}`, {
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

export interface ValidationResponseProps {
    valid: boolean,
    formatted: string
}

export async function validateDocument(document: string): Promise<ValidationResponseProps> { 
    const response = await fetch(`${API}/document`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({document: document.replace(/\D/g, '').toString()})
    })

    return await response.json();
}