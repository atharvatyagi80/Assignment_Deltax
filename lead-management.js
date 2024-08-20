document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("lead-management-form");
    const leads = JSON.parse(localStorage.getItem("leads")) || [];
    const currentLeadId = localStorage.getItem("currentLeadId");

    const lead = leads.find(lead => lead.id == currentLeadId);

    if (lead) {
        document.getElementById("lead-status").value = lead.status;
        document.getElementById("lead-notes").value = lead.notes || "";
    }

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const status = document.getElementById("lead-status").value;
        const notes = document.getElementById("lead-notes").value;

        // Update the lead
        if (lead) {
            lead.status = status;
            lead.notes = notes;
            localStorage.setItem("leads", JSON.stringify(leads));
            alert(`Lead status updated to "${status}" with notes: "${notes}"`);
        }

        window.location.href = "lead-listing.html";
    });
});
