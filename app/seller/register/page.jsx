import SellerRegisterForm from "@/components/UI/SellerRegisterForm";
import React from "react";

const Register = () => {
    return (
        <section className="mt-[100px]">
            <h1 className="text-center text-lg font-poppins">
                Want to continue as Customer?{" "}
                <a className="font-semibold" href="/customer/register">
                    Click here
                </a>
            </h1>
            <SellerRegisterForm />
        </section>
    );
};

export default Register;
