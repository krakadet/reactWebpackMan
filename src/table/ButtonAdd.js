// @flow
import * as React from 'react';
import  '../style/buttons.css';

type Props = {|
  +addRowToTable: Function,
|}

export function ButtonAdd(props: Props) {
  const handleClick = () => {
    const { addRowToTable } = props;
    addRowToTable();
  };

  return (
    <td>
      <button styleName='navButtons' type="button" id="theButton" onClick={handleClick}>
        {' '}
                    Add
        {' '}
      </button>
    </td>
  );
}

export default ButtonAdd;
