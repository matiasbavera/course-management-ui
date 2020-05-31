import React from "react";
import InvoiceHeader from "./invoiceHeader";
import InvoiceDetail from "./invoiceDetail";



export const Invoice = () => {
    // const {handleSubmit, register, errors} = useForm();
    // const onSubmit = values => {
    //     console.log(values);
    // };
    // const onSubmit = (data) => props.onSubmit(data)

        return (
            <div>
                <InvoiceHeader/>
                <InvoiceDetail/>                
            </div>
        )
};


