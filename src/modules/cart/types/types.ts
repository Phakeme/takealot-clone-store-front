export interface PriceFormat {
    raw: number
    formatted: string
    formatted_with_symbol: string
    formatted_with_code: string
}

export interface CartProductItem { 
        id: string
        product_id: string
        name: string
        product_name: string
        sku: null | number | string
        permalink: string
        quantity: number
        price: PriceFormat
        line_total: PriceFormat
        is_valid: boolean
        product_meta: []
        selected_options: []
        variant: []
        image: string
}

export interface Cart {
    id: string
    created: number
    updated: number
    expires: number
    total_items: number
    total_unique_items: number
    subtotal: PriceFormat
    hosted_checkout_url: string,
    line_items: CartProductItem[]
    currency: {
        code: string
        symbol: string
    },
    discount: []
    meta: string
}