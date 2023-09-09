import ProductCard from "@/components/Cards/ProductCard";
import EmblaCarousel from "@/components/EmblaCarousel";
import Home from "@/components/Home";
import LoginPopup from "@/components/UI/LoginPopup";
import { LoginContext } from "@/context/loginContext";
import { useContext } from "react";

export default function HomePage() {
    return (
        <>
            <Home />
        </>
    );
}
