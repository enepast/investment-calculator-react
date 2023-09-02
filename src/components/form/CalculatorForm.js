import React from "react";
import styles from "./calculatorForm.module.css";

export const CalculatorForm = () => {
  const resetClickHandler = () => {
    console.log('reset clicked');
  }
  const submitClickHandler = (event) => {
    event.preventDefault();
    console.log('submit clicked');
  }
  return (
    <form className={styles.form} onSubmit={submitClickHandler}>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input type="number" id="current-savings" />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input type="number" id="yearly-contribution" />
        </p>
      </div>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input type="number" id="expected-return" />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input type="number" id="duration" />
        </p>
      </div>
      <p className={styles.actions}>
        <button type="reset" className={styles.buttonAlt} onClick={resetClickHandler}>
          Reset
        </button>
        <button type="submit" className={styles.button}>
          Calculate
        </button>
      </p>
    </form>
  );
};
