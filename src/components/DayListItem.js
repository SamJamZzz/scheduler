import classNames from "classnames";
import React from "react";
import "components/DayListItem.scss";

export default function DayListItem(props) {
  const dayClass = classNames('day-list__item', {'day-list__item--selected': props.selected}, {'day-list__item--full': props.spots === 0})

  const formatSpots = (spots) => {
    if (!props.spots) {
      return <h3 className="text--light">no spots remaining</h3>
    }
    if (props.spots === 1) {
      return <h3 className="text--light">1 spot remaining</h3>
    }
    if (props.spots > 1) {
      return <h3 className="text--light">{spots} spots remaining</h3>
    }
  };
  return (
    <li className={dayClass} onClick={event => props.setDay(props.name)} data-testid="day">
      <h2 className="text--regular">{props.name}</h2> 
      {formatSpots(props.spots)}
    </li>
  );
};