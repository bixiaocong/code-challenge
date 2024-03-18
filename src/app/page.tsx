"use client";

import styles from "./page.module.css";

import Modal from "./components/modal";
import TimeNote from "./components/time-note";
import ButtonGroup from "./components/button-group";
import TipGroup from "./components/tip-group";
import Transform from "./components/transform";
import SelectAmount from "./components/select-amount";
import { ThemeProvider } from "utils/themeContext";


export default function Home() {
  return (
    <main className={styles.main}>
      <ThemeProvider>
        <Modal title="Deposit ATOM">
          <Transform />
          <SelectAmount amount="2" />
          <TipGroup />
          <TimeNote minites="20" />
		  <ButtonGroup />
        </Modal>
      </ThemeProvider>
    </main>
  );
}
