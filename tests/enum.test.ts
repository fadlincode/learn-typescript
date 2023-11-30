import { Customer, CustomerType } from "../src/enum";

describe('Enum', function() {
    it('should get enum', function() {
        const customer: Customer = {
            id: 1,
            name: "aa",
            type: CustomerType.GOLD
        }

        console.log(customer.type)
    });
})