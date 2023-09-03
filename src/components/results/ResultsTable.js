import React, { useState } from "react";
import styles from "./resultsTable.module.css";

export const ResultsTable = (props) => {
  const data = props.tableData;

  // Calcular el interés total acumulado y el capital invertido
  let totalInterest = 0;
  let investedCapital = 0;

  for (let i = 0; i < data.length; i++) {
    totalInterest += data[i].yearlyInterest;
    investedCapital += data[i].yearlyContribution;
  }

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const renderTable =
    data.length > 0 ? (
      <table className={styles.result}>
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{++index}</td>
              <td>{formatter.format(row.savingsEndOfYear)}</td>
              <td>{formatter.format(row.yearlyInterest)}</td>
              <td>{data.length === index ? formatter.format(totalInterest) : ""}</td>
              <td>{data.length === index ? formatter.format(investedCapital) : ""}</td>
            </tr>
          ))}
        </thead>
        <tbody></tbody>
      </table>
    ) : (
      <p className={styles["no-result"]}>"No data is available"</p>
    );

  return <div>{renderTable}</div>;
};
