import { styled } from '@mui/material'
import { useState } from 'react';
// import Container from '../../components/Container';
import DashboardLayout from '../../layout/DashboardLayout';
import { sidebarPages, sidebarAccount } from '../../mocks/sidebarMocks/sidebarMocks';
import { headerMetaByTab } from '../../mocks/headerMocks/HeaderMocks';
import DashboardMainPage from './components/dashboardMainPage/dashboardMainPage';
import ProfilePage from './components/profilepage/ProfilePage';
import BillingPage from './components/billingpage/BillingPage';
import TablesPage from './components/tablespage/TablesPage';

const DashboardPage = () => {
    const [activeTab, setActiveTab] = useState('dashboard');

    const renderContent = () => {
        switch (activeTab) {
            case 'dashboard':
                return <DashboardMainPage />;
            case 'tables':
                return <TablesPage />;
            case 'billing':
                return <BillingPage />;
            case 'profile':
                return <ProfilePage />
            default:
                return <div>Not found</div>;
        }
    };
    return (
        <Wrapper>
            {/* <Container> */}
                <DashboardLayout
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                    tabsPages={sidebarPages}
                    tabsAccount={sidebarAccount}
                    headerMap={headerMetaByTab}
                    userName={null}
                >
                    {renderContent()}
                </DashboardLayout>
            {/* </Container> */}
        </Wrapper>
    )
}
export default DashboardPage

const Wrapper = styled('div')({
    background: "linear-gradient(180deg, #0A1024 0%, #0D1732 60%, #0B1B3D 100%)",
    display: 'flex',
    width: '100vw',
    minHeight: '100vh',
    padding: '10px 24px 50px 10px'
});