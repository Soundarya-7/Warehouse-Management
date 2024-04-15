import { product } from "./product";
import { user } from "./user";
import { location } from "./location";

export interface ProductCart {
    ledgerId: number,
    inOutTime: Date,
    ledgerMode: String,
    user: user,
    product: product,
    location: location,
    supplier: string,
    quantity: number,
}
