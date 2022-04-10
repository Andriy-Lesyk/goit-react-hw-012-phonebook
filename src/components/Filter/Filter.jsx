import React from 'react';
import { Input } from './Filter.styles';
import { v4 as filterId } from 'uuid';
import PropTypes from 'prop-types';

function Filter({ filter, onChange }) {
  return (
    <div>
      <label htmlFor={filterId(filter)}>Find contacts by name</label>
      <Input
        value={filter}
        onChange={onChange}
        type="text"
        name="filter"
        id={filterId(filter)}
      />
    </div>
  );
}
Filter.propTypes = {
  onChange: PropTypes.func,
  filter: PropTypes.string.isRequired,
};
export default Filter;
