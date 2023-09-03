import React, { useState } from "react";
import styles from "./calculatorForm.module.css";

export const CalculatorForm = (props) => {
  // Values
  const [currentSavings, setCurrentSavings] = useState("");
  const [yearlyContribution, setYearlyContribution] = useState("");
  const [expectedReturn, setexpectedReturn] = useState("");
  const [duration, setDuration] = useState("");

  // Field Handlers
  const currentSavingsHandler = (event) => {
    setCurrentSavings(event.target.value);
  };
  const yearlySavingsHandler = (event) => {
    setYearlyContribution(event.target.value);
  };
  const expectedInterestHandler = (event) => {
    setexpectedReturn(event.target.value);
  };
  const investmentDurationHandler = (event) => {
    setDuration(event.target.value);
  };

  // Buttons Handlers
  const resetClickHandler = () => {
    setCurrentSavings("");
    setYearlyContribution("");
    setexpectedReturn("");
    setDuration("");
  };

  let submittedForm = {};
  const submitClickHandler = (event) => {
    event.preventDefault();
    submittedForm = {
      currentSavings,
      yearlyContribution,
      expectedReturn,
      duration,
    };
    props.onSubmit(submittedForm);
    // resetClickHandler();
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
            value={yearlyContribution}
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
            value={expectedReturn}
            onChange={expectedInterestHandler}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            value={duration}
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
