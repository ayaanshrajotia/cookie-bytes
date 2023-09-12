import CustomerRegisterForm from "@/components/UI/CustomerRegisterForm";
import React from "react";

const Register = () => {
    return (
        <section className="mt-[100px]">
            <h1 className="text-center text-lg font-poppins">
                Want to be a Seller?{" "}
                <a className="font-semibold" href="/seller/register">
                    Click here
                </a>
            </h1>
            <CustomerRegisterForm />
        </section>
    );
};

export default Register;
