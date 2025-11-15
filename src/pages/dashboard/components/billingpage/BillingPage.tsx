import { styled } from "@mui/material";
import BillingCard from "./components/PaymentCard";
import CreditBalanceCard from "./components/creditCardBalance";
import PaymentMethods from "./components/paymentMethodsCard";
import InvoicesCard from "./components/invoicesCard";
import { invoicesMock } from "../../../../mocks/invoicesCardMocks/invoicesMocks";
import BillingInfoList from "./components/billingInfo";
import { billingInfoMock } from "../../../../mocks/billingInfomocks/billingInfo";
import TransactionsCard from "./components/Transaction";
import { transactionsMock } from "../../../../mocks/transaction/transactionMocks";

export default function BillingPage() {
    return (
        <Wrapper>
            <TopGrid>
                <TopLeft>
                    <Row>
                        <BillingCard cardNumber="7812213908231234" validThru="05/24" cvv="09X" />
                        <CreditBalanceCard balance={36980} newest={{ title: "Bill & Taxes", timestamp: "Today, 16:36", amount: -154.5 }} />
                    </Row>
                    <PaymentMethods />
                </TopLeft>

                <InvoicesCard items={invoicesMock} />
            </TopGrid>
            <Row>
                <BillingInfoList items={billingInfoMock} rowsVisible={3} />
                <TransactionsCard sections={transactionsMock} range="23 – 30 March 2020" height={420} />
            </Row>
        </Wrapper>
    )
}

const Wrapper = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
});

const TopGrid = styled('div')({
    display: 'grid',
    gridTemplateColumns: '900px 1fr',
    gap: 24,
    alignItems: 'stretch',
});

const TopLeft = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
});

const Row = styled('div')({
    display: 'flex',
    gap: 24,
    alignItems: 'stretch',
});