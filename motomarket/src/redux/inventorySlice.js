import { createSlice } from "@reduxjs/toolkit";
import PanigaleV4R from "../assets/images/PanigaleV4R.jpg";
import ApTunao from "../assets/images/ApTunao.jpg";
import DucStreetFighter from "../assets/images/Duc-Streetfighter.jpg";
import DucatiMonster from "../assets/images/DucatiMonster-SP-002.jpg";
import Fireblade from "../assets/images/Fireblade.jpg";
import H2 from "../assets/images/H2.jpg";
import H2R from "../assets/images/H2R.jpg";
import Hayabusa from "../assets/images/Hayabusa.webp";
import Hp4Race from "../assets/images/Hp4 Race.jpg";
import M1000RR from "../assets/images/M1000RR.jpg";
import R1M from "../assets/images/R1M.jpg";
import RC8 from "../assets/images/RC8.jpg";
import S1000RR from "../assets/images/S1000RR.jpg";
import SuperDuke from "../assets/images/SuperDuke.jpg";
import Superveloce from "../assets/images/Superveloce.jpg";
import CBR650R from "../assets/images/cbr650r.jpg";
import MT10 from "../assets/images/mt-10-.webp";
import SpeedTriple from "../assets/images/speed-triple-rr.jpg";
import Gixxer1000 from "../assets/images/suzuki-gsx-r1000r.jpg";
import xtrenta from "../assets/images/xtrenta.webp";

const initialState = {
  bikes: [
    {
      id: 1,
      brandName: "Ducati",
      model: "Panigale V4R",
      year: 2024,
      description:
        "The Ducati Panigale V4 R is a race-bred superbike designed for extreme performance. It features a 998cc Desmosedici Stradale R engine, producing up to 240.5 hp with a racing exhaust and specially formulated oil. Built for track dominance, it has aerodynamic winglets, a lightweight aluminum chassis, and an advanced electronics suite, including traction control, slide control, and a quick shifter. The Ohlins suspension, Brembo brakes, and carbon-fiber components ensure precision handling and top-tier performance, making it one of the fastest and most advanced superbikes available. 🚀🔥",
      price: 4600000,
      image: PanigaleV4R,
      Km: 5000,
    },
    {
      id: 2,
      brandName: "Kawasaki",
      model: "Ninja H2R",
      year: 2024,
      description:
        "The Kawasaki Ninja H2R is the ultimate track-only hyperbike, built for sheer speed and power. It features a supercharged 998cc inline-four engine, producing a mind-blowing 310 hp (326 hp with ram air), making it one of the most powerful production motorcycles ever built. Designed for aerodynamic efficiency, it comes with carbon-fiber winglets, an aggressive trellis frame, and advanced electronics, including launch control, traction control, and a quick shifter. With top speeds exceeding 400 km/h, the H2R is a true engineering marvel, crafted for adrenaline-fueled racing performance. ",
      price: 7900000,
      image: H2R,
      Km: 2000,
    },
    {
      id: 3,
      brandName: "Kawasaki",
      model: "Ninja H2",
      year: 2024,
      description:
        "The Kawasaki Ninja H2R is the ultimate track-only hyperbike, built for sheer speed and power. It features a supercharged 998cc inline-four engine, producing a mind-blowing 310 hp (326 hp with ram air), making it one of the most powerful production motorcycles ever built. Designed for aerodynamic efficiency, it comes with carbon-fiber winglets, an aggressive trellis frame, and advanced electronics, including launch control, traction control, and a quick shifter. With top speeds exceeding 400 km/h, the H2R is a true engineering marvel, crafted for adrenaline-fueled racing performance. ",
      price: 3500000,
      image: H2,
      Km: 10000,
    },
    {
      id: 4,
      brandName: "BMW",
      model: "HP4 Race",
      year: 2023,
      description:
        "The BMW HP4 Race is a limited-production, track-only superbike featuring a full carbon-fiber frame and wheels, making it one of the lightest and most advanced motorcycles ever built. Powered by a 999cc inline-four engine, it delivers 215 hp at 13,900 rpm and comes with race-spec Öhlins suspension, Brembo GP4-PR brakes, and a 2D dashboard with data logging. With only 750 units produced worldwide, the HP4 Race is a collector's dream and a track weapon, offering unparalleled power-to-weight ratio and precision handling. ",
      price: 8600000,
      image: Hp4Race,
      Km: 6000,
    },
    {
      id: 5,
      brandName: "MV Agusta",
      model: "Superveloce 1000 Oro",
      year: 2024,
      description: "A retro-futuristic superbike with Italian craftsmanship.",
      price: 4200000,
      image: Superveloce,
      Km: 7000,
    },
    {
      id: 6,
      brandName: "BMW",
      model: "M 1000 RR",
      year: 2024,
      description: "BMW’s high-performance racing machine with winglets.",
      price: 4600000,
      image: M1000RR,
      Km: 15000,
    },
    {
      id: 7,
      brandName: "Yamaha",
      model: "R1M",
      year: 2024,
      description:
        "MotoGP-inspired liter-class superbike with electronic suspension.",
      price: 3400000,
      image: R1M,
      Km: 1200,
    },
    {
      id: 8,
      brandName: "Aprilia",
      model: "RSV4 Xtrenta",
      year: 2024,
      description: "Limited edition race-ready RSV4 with extreme aero.",
      price: 5000000,
      image: xtrenta,
      Km: 1000,
    },
    {
      id: 9,
      brandName: "Honda",
      model: "CBR1000RR-R Fireblade SP",
      year: 2024,
      description: "Honda’s flagship racing machine with refined aerodynamics.",
      price: 3200000,
      image: Fireblade,
      Km: 3000,
    },
    {
      id: 10,
      brandName: "KTM",
      model: "RC 8C",
      year: 2023,
      description: "Track-focused limited edition KTM superbike.",
      price: 3500000,
      image: RC8,
      Km: 1100,
    },
    {
      id: 11,
      brandName: "KTM",
      model: "Super Duke R",
      year: 2024,
      description: "The Beast – KTM’s powerful streetfighter with 180 HP.",
      price: 2900000,
      image: SuperDuke,
      Km: 18000,
    },
    {
      id: 12,
      brandName: "Suzuki",
      model: "Hayabusa",
      year: 2024,
      description: "The legendary high-speed tourer with a 1340cc engine.",
      price: 2700000,
      image: Hayabusa,
      Km: 9000,
    },
    {
      id: 13,
      brandName: "Ducati",
      model: "Streetfighter V4 SP",
      year: 2024,
      description:
        "A naked version of the Panigale V4 with aggressive styling.",
      price: 4200000,
      image: DucStreetFighter,
      Km: 3000,
    },
    {
      id: 14,
      brandName: "Triumph",
      model: "Speed Triple 1200 RR",
      year: 2024,
      description: "A fully faired café racer with high-end Öhlins suspension.",
      price: 2900000,
      image: SpeedTriple,
      Km: 13000,
    },
    {
      id: 15,
      brandName: "Yamaha",
      model: "MT-10 SP",
      year: 2024,
      description: "A hyper-naked streetfighter with crossplane engine tech.",
      price: 2200000,
      image: MT10,
      Km: 14000,
    },
    {
      id: 16,
      brandName: "Honda",
      model: "CBR650R",
      year: 2024,
      description: "A mid-range sportbike with inline-4 refinement.",
      price: 1200000,
      image: CBR650R,
      Km: 8000,
    },
    {
      id: 17,
      brandName: "BMW",
      model: "S 1000 RR",
      year: 2024,
      description: "A race-derived superbike with ShiftCam technology.",
      price: 3300000,
      image: S1000RR,
      Km: 2000,
    },
    {
      id: 18,
      brandName: "Ducati",
      model: "Monster SP",
      year: 2024,
      description: "A lightweight naked bike with sporty performance.",
      price: 2000000,
      image: DucatiMonster,
      Km: 1000,
    },
    {
      id: 19,
      brandName: "Aprilia",
      model: "Tuono V4 1100",
      year: 2024,
      description: "A naked superbike with Aprilia’s top-tier electronics.",
      price: 2500000,
      image: ApTunao,
      Km: 6000,
    },
    {
      id: 20,
      brandName: "Suzuki",
      model: "GSX-R1000R",
      year: 2024,
      description:
        "A legendary liter-class superbike with advanced aerodynamics.",
      price: 2900000,
      image: Gixxer1000,
      Km: 1300,
    },
  ],
  searchBike: "",
  filteredData: [],
};

const inventorySlice = createSlice({
  name: "inventory",
  initialState,
  reducers: {
    setInventory(state, action) {
      state.bikes = action.payload;
      state.filteredData = action.payload;
    },
    setSearchBike(state, action) {
      state.searchBike = action.payload;
      state.filteredData = state.bikes.filter((bike) =>
        bike.brandName.toLowerCase().includes(state.searchBike.toLowerCase())
      );
    },
  },
});

export const { setInventory, setSearchBike } = inventorySlice.actions;
export default inventorySlice.reducer;
