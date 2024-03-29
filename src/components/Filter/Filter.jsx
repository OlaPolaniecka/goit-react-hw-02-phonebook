import PropTypes from 'prop-types';

const Filter = ({ filter, onChange }) => {
  return (
    <input
      type="text"
      name="filter"
      value={filter}
      onChange={({ target }) => onChange(target.value)}
    />
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
};
export default Filter;
