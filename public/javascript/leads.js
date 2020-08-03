// eslint-disable-next-line no-unused-vars
function deleteLead(leadId) {
    $.ajax({
        url: `/lead/${leadId}/delete-json`,
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        data: JSON.stringify({leadId}),
        type: 'POST',
        success: (res => {
            console.log(`Result was: ${res}`);
            $(`#${leadId}`).remove();
        }),
        error: (error => console.log(`Error deleting lead: ${error}`))
    })
}