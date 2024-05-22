import Image from "next/image";
import styles from "./page.module.css";
import IreiZerar from "./pageapp/page";
import GameCard from "@/components/GameCard";
import { Container } from "@mui/material";
import SectionWelcome from "@/components/SectionWelcome";
import AppTime from "./pageapp/page";
import AboutSection from "@/components/about";

export default function Home() {
  return (
    <>
    <SectionWelcome />
    <AboutSection />
    <AppTime />
    </>
  );
}
