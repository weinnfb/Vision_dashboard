export type Invoice = {
    id: string;
    date: string;
    amount: number;
    pdfUrl?: string;
};

export const invoicesMock: Invoice[] = [
    { id: "#MS-415646", date: "2020-03-01", amount: 180, pdfUrl: "/pdf/invoice_415646.pdf" },
    { id: "#RV-126749", date: "2021-02-10", amount: 250, pdfUrl: "/pdf/invoice_126749.pdf" },
    { id: "#FB-212562", date: "2020-04-05", amount: 560, pdfUrl: "/pdf/invoice_212562.pdf" },
    { id: "#QW-103578", date: "2019-06-25", amount: 120, pdfUrl: "/pdf/invoice_103578.pdf" },
    { id: "#AR-803481", date: "2019-03-01", amount: 300, pdfUrl: "/pdf/invoice_803481.pdf" },
    
    { id: "#ZX-551122", date: "2022-07-18", amount: 420, pdfUrl: "/pdf/invoice_551122.pdf" },
    { id: "#ZX-551123", date: "2022-08-03", amount: 210, pdfUrl: "/pdf/invoice_551123.pdf" },
    { id: "#ZX-551124", date: "2022-09-12", amount: 990, pdfUrl: "/pdf/invoice_551124.pdf" },
    { id: "#ZX-551125", date: "2022-10-02", amount: 75, pdfUrl: "/pdf/invoice_551125.pdf" },
    { id: "#ZX-551126", date: "2022-11-22", amount: 430, pdfUrl: "/pdf/invoice_551126.pdf" },
];