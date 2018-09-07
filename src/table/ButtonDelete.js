// @flow
import * as React from 'react';
import style from '../style/buttons.css';


type Props = {|
  +deleteRowTable: Function,
|};

export function ButtonDelete(props: Props) {
  const handleClick = (event: SyntheticEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const { deleteRowTable } = props;
    deleteRowTable();
  };

  return (
    <td>
      <button className={style.navButtons} type="button" id="theButton" onClick={handleClick}>
        {' '}
          Delete
        {' '}
      </button>
    </td>
  );
}

export default ButtonDelete;
