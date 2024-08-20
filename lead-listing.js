document.addEventListener("DOMContentLoaded", function() {
    const leadList = document.getElementById("lead-list");
    const addLeadButton = document.getElementById("add-lead");

    // Fetch leads from local storage or initialize with an empty array
    const leads = JSON.parse(localStorage.getItem("leads")) || [];

    function displayLeads() {
        leadList.innerHTML = "";
        leads.forEach(lead => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${lead.id}</td>
                <td>${lead.name}</td>
                <td>${lead.email}</td>
                <td>${lead.phone}</td>
                <td>${lead.status}</td>
                <td>
                    <button class="view-details" data-id="${lead.id}">View Details</button>
                    <button class="edit-status" data-id="${lead.id}">Edit Status</button>
                </td>
            `;
            leadList.appendChild(row);
        });
    }

    function addLead() {
        const newLead = {
            id: leads.length + 1,
            name: prompt("Enter lead name:"),
            email: prompt("Enter lead email:"),
            phone: prompt("Enter lead phone:"),
            status: "New"
        };
        leads.push(newLead);
        localStorage.setItem("leads", JSON.stringify(leads));
        displayLeads();
    }

    // Initialize lead display
    displayLeads();

    // Event listener for adding a new lead
    addLeadButton.addEventListener("click", addLead);

    // Event listeners for buttons (View Details and Edit Status)
    leadList.addEventListener("click", function(event) {
        if (event.target.classList.contains("view-details")) {
            const id = event.target.getAttribute("data-id");
            localStorage.setItem("currentLeadId", id);
            window.location.href = "lead-details.html";
        } else if (event.target.classList.contains("edit-status")) {
            const id = event.target.getAttribute("data-id");
            localStorage.setItem("currentLeadId", id);
            window.location.href = "lead-management.html";
        }
    });
});
