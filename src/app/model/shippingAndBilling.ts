import { StringMap } from "@angular/compiler/src/compiler_facade_interface";

export class ShippingAndBilling {
    private firstName: string
    private lastName: string
    private email: string
    private address: string
    private address2: string
    private country: string
    private state: string
    private zip: number
    private nameOnCard: String
    private ccNumber: number
    private expDate: number
    private cvv: number
    constructor(private fname: string) {
        this.firstName=fname;

    }
}