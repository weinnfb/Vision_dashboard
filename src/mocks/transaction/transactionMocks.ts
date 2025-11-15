export type TxStatus = "in" | "out" | "pending";
export type Transaction = {
    id: string;
    title: string;
    datetime: string;
    amount?: number;
    status: TxStatus;
};
export type TransactionSection = {
    label: string;
    items: Transaction[];
};

export const transactionsMock: TransactionSection[] = [
    {
        label: "NEWEST",
        items: [
            { id: "t1", title: "Netflix", datetime: "27 March 2020, at 12:30 PM", amount: -2500, status: "out" },
            { id: "t2", title: "Apple", datetime: "27 March 2020, at 12:30 PM", amount: 2500, status: "in" },
        ],
    },
    {
        label: "YESTERDAY",
        items: [
            { id: "t3", title: "Stripe", datetime: "26 March 2020, at 13:45 PM", amount: 800, status: "in" },
            { id: "t4", title: "HubSpot", datetime: "26 March 2020, at 12:30 PM", amount: 1700, status: "in" },
            { id: "t5", title: "Webflow", datetime: "26 March 2020, at 05:00 AM", status: "pending" },
            { id: "t6", title: "Microsoft", datetime: "25 March 2020, at 16:30 PM", amount: -987, status: "out" },
        ],
    },
    {
        label: "LAST WEEk",
        items: [
            { id: "t6", title: "Microsoft", datetime: "25 March 2020, at 16:30 PM", amount: -987, status: "out" },
            { id: "t4", title: "HubSpot", datetime: "26 March 2020, at 12:30 PM", amount: 1700, status: "in" },
            { id: "t5", title: "Webflow", datetime: "26 March 2020, at 05:00 AM", status: "pending" },
            { id: "t6", title: "Microsoft", datetime: "25 March 2020, at 16:30 PM", amount: -987, status: "out" },
            { id: "t1", title: "Netflix", datetime: "27 March 2020, at 12:30 PM", amount: -2500, status: "out" },
            { id: "t2", title: "Apple", datetime: "27 March 2020, at 12:30 PM", amount: 2500, status: "in" },
        ],
    }
];