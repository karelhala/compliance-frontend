import React from 'react';
import CompliancePoliciesCards from '../CompliancePoliciesCards/CompliancePoliciesCards';
import ComplianceTabs from '../ComplianceTabs/ComplianceTabs';
import { PageHeader, PageHeaderTitle, Main } from '@red-hat-insights/insights-frontend-components';

const CompliancePolicies = () => {
    return (
        <React.Fragment>
            <PageHeader>
                <PageHeaderTitle title="Compliance" />
                <ComplianceTabs/>
            </PageHeader>
            <Main>
                <CompliancePoliciesCards />
            </Main>
        </React.Fragment>
    );
};

export default CompliancePolicies;
