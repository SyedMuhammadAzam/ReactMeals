import { Fragment } from "react";

import classes from './MealsSummary.module.css'

const MealsSummary = () => {
  return (
    <Fragment>
      <section className={classes.summary}>
        <h2>
          Welcome to Pakistan's premier Coffee Shop & Cafe experience. Owned by
          Mac & Sons Enterprise.
        </h2>
        <p>
          Coffee Circus will provide a friendly, comfortable atmosphere where
          the customer can receive quality food, service and entertainment at a
          reasonable price. The coffee house will offer a variety of choices to
          the customers. Coffee and tea of all sorts will be offered. Juice,
          soda, and non-alcoholic beverages also will be available. Both wine
          and beer will be on sale. Coffee Circus will serve breakfast, lunch
          and dinner.
        </p>
      </section>
    </Fragment>
  );
};
export default MealsSummary;
