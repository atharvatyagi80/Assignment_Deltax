document.addEventListener("DOMContentLoaded", function() {
    const dashboardContainer = document.getElementById("dashboard");
    const leads = JSON.parse(localStorage.getItem("leads")) || [];

    const dashboardData = {
        totalLeads: leads.length,
        newLeads: leads.filter(lead => lead.status === "New").length,
        contactedLeads: leads.filter(lead => lead.status === "Contacted").length,
        notInterestedLeads: leads.filter(lead => lead.status === "Not Interested").length,
        convertedLeads: leads.filter(lead => lead.status === "Converted").length
    };

    dashboardContainer.innerHTML = `
        <div>
            <h2>Total Leads</h2>
            <p>${dashboardData.totalLeads}</p>
        </div>
        <div>
            <h2>New Leads</h2>
            <p>${dashboardData.newLeads}</p>
        </div>
        <div>
            <h2>Contacted Leads</h2>
            <p>${dashboardData.contactedLeads}</p>
        </div>
        <div>
            <h2>Not Interested</h2>
            <p>${dashboardData.notInterestedLeads}</p>
        </div>
        <div>
            <h2>Converted Leads</h2>
            <p>${dashboardData.convertedLeads}</p>
        </div>
    `;
});
