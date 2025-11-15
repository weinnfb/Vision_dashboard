export type BillingInfo = {
    id: string;
    fullName: string;
    company: string;
    email: string;
    vat: string;
};

export const billingInfoMock: BillingInfo[] = [
    {
        id: "1",
        fullName: "Oliver Liam",
        company: "Viking Burrito",
        email: "oliver@burrito.com",
        vat: "FRB1235476",
    },
    {
        id: "2",
        fullName: "Lucas Harper",
        company: "Stone Tech Zone",
        email: "lucas@stone.com",
        vat: "FRB1235477",
    },
    {
        id: "3",
        fullName: "Ethan James",
        company: "Fiber Notion",
        email: "ethan@fiber.com",
        vat: "FRB1235478",
    },
    {
        id: "4",
        fullName: "Sophia Mason",
        company: "Bright Pixels",
        email: "sophia@pixels.io",
        vat: "FRB1235479",
    },
    {
        id: "5",
        fullName: "Amelia Carter",
        company: "Nimbus Labs",
        email: "amelia@nimbus.ai",
        vat: "FRB1235480",
    },
    {
        id: "6",
        fullName: "Mia Jackson",
        company: "Blue Ocean",
        email: "mia@ocean.co",
        vat: "FRB1235481",
    },
];