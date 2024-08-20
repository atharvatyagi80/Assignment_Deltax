document.addEventListener("DOMContentLoaded", function() {
    const leadDetailsContainer = document.getElementById("lead-details");
    const leads = JSON.parse(localStorage.getItem("leads")) || [];
    const currentLeadId = localStorage.getItem("currentLeadId");

    const leadDetails = leads.find(lead => lead.id == currentLeadId);

    if (leadDetails) {
        leadDetailsContainer.innerHTML = `
            <h2>${leadDetails.name}</h2>
            <p><strong>Email:</strong> ${leadDetails.email}</p>
            <p><strong>Phone:</strong> ${leadDetails.phone}</p>
            <p><strong>Status:</strong> ${leadDetails.status}</p>
            <p><strong>Notes:</strong> ${leadDetails.notes || "No notes available."}</p>
            <button class="edit-status">Edit Status</button>
        `;
    } else {
        leadDetailsContainer.innerHTML = "<p>No lead found.</p>";
    }

    document.querySelector(".edit-status").addEventListener("click", function() {
        window.location.href = "lead-management.html";
    });
});
