frappe.ui.form.on('Customer', {
    onload: function (doc, dt, dn) {
        if (doc.is_new() != 1) {
        frappe.call({
            method: "empowery_co_op.api.get_linked_supplier",
            args: {
                custname: cur_frm.doc.customer_name,
            },
            callback: function (r) {
                if (!r.message) {
                    const html = `There is no supplier linked data for `+cur_frm.doc.customer_name
                    $(cur_frm.fields_dict.linked_supplier_data.wrapper).html(html);
                }
                const linked_supplier_data = r.message;
                console.log(r.message)
                console.log(linked_supplier_data)
                if (linked_supplier_data) {
                    const html = `
                        <table class="table table-bordered">
                            <thead><tr><th>${__("#")}</th><th>${__("Type")}</th><th>${__("Suppier Name")}</th><th>${__("Created Date")}</th></tr></thead>
                            <tbody>
                                ${linked_supplier_data.map((c,i) => `<tr><td>${i+1}</td><td>${c.parenttype}</td><td>${c.parent}</td>
                                    <td>${c.join_date}</td></tr>`
                                ).join('')}
                            </tbody>
                        </table>`
                    $(cur_frm.fields_dict.linked_supplier_data.wrapper).html(html);
                }
            }
        });
    }
    }
});