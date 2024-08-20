document.addEventListener("DOMContentLoaded", function() {
    const leads = [
        { id: 1, name: "John Doe", email: "john@example.com", phone: "555-1234", status: "New" },
        { id: 2, name: "Jane Smith", email: "jane@example.com", phone: "555-5678", status: "Contacted" },
        { id: 3, name: "Alice Johnson", email: "alice@example.com", phone: "555-8765", status: "Not Interested" }
    ];

    const leadList = document.getElementById("lead-list");

    leads.forEach(lead => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${lead.id}</td>
            <td>${lead.name}</td>
            <td>${lead.email}</td>
            <td>${lead.phone}</td>
            <td>${lead.status}</td>
            <td>
                <button class="view-details">View Details</button>
                <button class="edit-status">Edit Status</button>
            </td>
        `;

        leadList.appendChild(row);
    });
});



document.addEventListener("DOMContentLoaded", function() {
    const leadDetails = {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        phone: "555-1234",
        status: "New",
        notes: "Interested in a compact car."
    };

    const leadDetailsContainer = document.getElementById("lead-details");

    leadDetailsContainer.innerHTML = `
        <h2>${leadDetails.name}</h2>
        <p><strong>Email:</strong> ${leadDetails.email}</p>
        <p><strong>Phone:</strong> ${leadDetails.phone}</p>
        <p><strong>Status:</strong> ${leadDetails.status}</p>
        <p><strong>Notes:</strong> ${leadDetails.notes}</p>
        <button class="edit-status">Edit Status</button>
    `;
});



document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("lead-management-form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const status = document.getElementById("lead-status").value;
        const notes = document.getElementById("lead-notes").value;

        alert(`Lead status updated to "${status}" with notes: "${notes}"`);
    });
});




document.addEventListener("DOMContentLoaded", function() {
    const dashboardData = {
        totalLeads: 50,
        newLeads: 20,
        contactedLeads: 15,
        notInterestedLeads: 10,
        convertedLeads: 5
    };

    const dashboardContainer = document.getElementById("dashboard");

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




