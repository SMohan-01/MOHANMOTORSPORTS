import { createSlice } from "@reduxjs/toolkit";
import Arai from "../assets/Helmets/Arai.jpg";
import KYT from "../assets/Helmets/KYT-NZ.webp";
import Nolan from "../assets/Helmets/Nolan.jpg";
import Shark from "../assets/Helmets/Shark Motogp.jpg";
import ShoeiX14 from "../assets/Helmets/ShoeiX14.jpg";
import agvk1 from "../assets/Helmets/agvk1.jpg";
import BellRace from "../assets/Helmets/bell_race.jpg";
import HJC from "../assets/Helmets/hjc-rpha_11_carbon_solid_black.jpg";
import LS2 from "../assets/Helmets/ls2.webp";
import scorpionexo from "../assets/Helmets/scorpionexo-exo-r1-air.jpg";

const initialState = {
  helmet: [
    {
      id: 1,
      name: "AGV K1 Helmet",
      price: 15000,
      image: agvk1,
      description:
        "The AGV Pista GP RR is the ultimate racing helmet, engineered for MotoGP-level performance. With a 100% carbon fiber shell, it provides unmatched lightweight durability. The integrated ventilation system ensures superior airflow, while the optically correct visor offers a wide, distortion-free view. FIM-approved, this helmet is designed for extreme speed and safety.",
    },
    {
      id: 2,
      name: "Shoei X-Fourteen",
      price: 60000,
      image: ShoeiX14,
      description:
        "The Shoei X-Fourteen is a race-tested masterpiece built for high-speed performance. With wind-tunnel-optimized aerodynamics, this helmet reduces drag and enhances stability at high speeds. Featuring multi-density EPS liner, emergency quick-release system (E.Q.R.S.), and Pinlock-ready CWR-F visor, it ensures maximum safety, comfort, and visibility.",
    },
    {
      id: 3,
      name: "HJC RPHA 11",
      price: 25000,
      image: HJC,
      description:
        "The HJC RPHA 11 Pro is a premium sport helmet designed for aggressive riders. Featuring P.I.M. Plus shell construction (carbon, aramid, and fiberglass blend), it offers lightweight strength. The advanced airflow system and anti-fog visor keep you cool and clear, making it perfect for both track and street riding.",
    },
    {
      id: 4,
      name: "Arai Corsair-X",
      price: 30000,
      image: Arai,
      description:
        "The Arai Corsair-X is a professional-grade helmet that blends handcrafted perfection with cutting-edge safety features. Its VAS shield system improves impact resistance, while the PB-SNC2 shell ensures top-tier strength and durability. With removable Eco-Pure liner and 5-stage ventilation, it delivers a fresh and comfortable ride in any weather.",
    },
    {
      id: 5,
      name: "Bell Race Carbon Edition",
      price: 80000,
      image: BellRace,
      description:
        "The Bell Race Star Flex DLX is crafted for elite performance. The Flex Impact Liner offers a three-layer energy absorption system, reducing rotational forces upon impact. Carbon fiber shell, ProTint photochromic visor, and cooling TempFlow ventilation make this helmet a blend of style, comfort, and top-tier protection.",
    },
    {
      id: 6,
      name: "Scorpion EXO-R1 Air",
      price: 50000,
      image: scorpionexo,
      description:
        "The Scorpion EXO-R1 Air is built for precision and speed. Its Ultra-TCT composite shell provides exceptional impact absorption. Featuring AirFit cheek pad inflation system, this helmet delivers custom comfort and fit. The Ellip-Tec II quick-release visor ensures perfect vision and seamless transitions between light conditions.",
    },
    {
      id: 7,
      name: "LS2 Challenger Carbon",
      price: 70000,
      image: LS2,
      description:
        "The LS2 Challenger Carbon is a lightweight, high-performance helmet designed for riders who demand safety and comfort. The 3K carbon fiber shell ensures superior protection while maintaining a sleek, aerodynamic profile. With an advanced ventilation system, it keeps riders cool even during long rides.",
    },
    {
      id: 8,
      name: "Nolan X-803 Ultra Carbon",
      price: 90000,
      image: Nolan,
      description:
        "The Nolan X-803 Ultra Carbon is engineered for track racing. With an ultralight carbon fiber shell, it reduces weight while increasing strength. The NERS emergency release system, double-action visor lock, and race-inspired aerodynamics make it a top choice for professional riders.",
    },
    {
      id: 9,
      name: "Shark Race-R Pro GP",
      price: 130000,
      image: Shark,
      description:
        "Designed with input from MotoGP riders, the Shark Race-R Pro GP is built for extreme track performance. Its multiaxial carbon-fiber shell and optimized aerodynamic spoiler ensure high-speed stability. Optical Class 1 visor, cooling ventilation, and high-density EPS liner make it a standout choice for serious racers.",
    },
    {
      id: 10,
      name: "KYT NZ Race",
      price: 40000,
      image: KYT,
      description:
        "The KYT NZ Race offers race-level performance at an affordable price. With an aerodynamic shell, Pinlock-ready visor, and advanced ventilation system, it provides safety, comfort, and stunning aesthetics. Perfect for riders looking for a budget-friendly yet high-quality helmet.",
    },
  ],
};

const helmetSlice = createSlice({
  name: "helmets",
  initialState,
  reducers: {
    setHelmets(state, action) {
      state.helmet = action.payload;
    },
  },
});

export const { setHelmets } = helmetSlice.actions;
export default helmetSlice.reducer;
