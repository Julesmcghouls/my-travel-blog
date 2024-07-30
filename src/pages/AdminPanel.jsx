import React from 'react';
import TripFeatureManagement from '../components/TripFeatureManagement';
import UpcomingTripManagement from '../components/UpcomingTripManagement';

function AdminPanel() {
return (
<div>
    <h1>Admin Panel</h1>
    <TripFeatureManagement />
    <UpcomingTripManagement />
</div>
);
}

export default AdminPanel;
