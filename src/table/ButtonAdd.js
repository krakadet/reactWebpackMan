// @flow
import * as React from 'react';
import style from '../style/buttons.css';

type Props = {|
  +addRowToTable: Function,
|}

export function ButtonAdd(props: Props) {
  const handleClick = (event: SyntheticEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const { addRowToTable } = props;
    addRowToTable();
  };

  return (
    <td>
      <button className={style.navButtons} type="button" id="theButton" onClick={handleClick}>
        {' '}
                    Add
        {' '}
      </button>
    </td>
  );
}

export default ButtonAdd;
