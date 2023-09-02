import React, { useState } from "react";
import styles from "./calculatorForm.module.css";

export const CalculatorForm = (props) => {
  // Values
  const [currentSavings, setCurrentSavings] = useState("");
  const [yearlySavings, setYearlySavings] = useState("");
  const [expectedInterest, setExpectedInterest] = useState("");
  const [investmentDuration, setInvestmentDuration] = useState("");

  // Field Handlers
  const currentSavingsHandler = (event) => {
    setCurrentSavings(event.target.value);
  };
  const yearlySavingsHandler = (event) => {
    setYearlySavings(event.target.value);
  };
  const expectedInterestHandler = (event) => {
    setExpectedInterest(event.target.value);
  };
  const investmentDurationHandler = (event) => {
    setInvestmentDuration(event.target.value);
  };

  // Buttons Handlers
  const resetClickHandler = () => {
    setCurrentSavings("");
    setYearlySavings("");
    setExpectedInterest("");
    setInvestmentDuration("");
  };

  let submittedForm = {};
  const submitClickHandler = (event) => {
    event.preventDefault();
    console.log("submit clicked");
    submittedForm = {
      key: Math.random(),
      currentSavings,
      yearlySavings,
      expectedInterest,
      investmentDuration,
    };
    props.onSubmit(submittedForm);
    resetClickHandler();
  };
  return (
    <form className={styles.form} onSubmit={submitClickHandler}>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            value={currentSavings}
            onChange={currentSavingsHandler}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            value={yearlySavings}
            onChange={yearlySavingsHandler}
          />
        </p>
      </div>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            value={expectedInterest}
            onChange={expectedInterestHandler}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            value={investmentDuration}
            onChange={investmentDurationHandler}
          />
        </p>
      </div>
      <p className={styles.actions}>
        <button
          type="reset"
          className={styles.buttonAlt}
          onClick={resetClickHandler}
        >
          Reset
        </button>
        <button type="submit" className={styles.button}>
          Calculate
        </button>
      </p>
    </form>
  );
};
