import { Hanken_Grotesk } from "next/font/google";
import styles from "@app/styles/Home.module.css";
import { Document } from "@app/system";
const inter = Hanken_Grotesk({ subsets: ["latin"] });

export default function Home() {
  return <Document></Document>;
}
