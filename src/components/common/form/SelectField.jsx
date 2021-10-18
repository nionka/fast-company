import React from 'react';
import PropTypes from 'prop-types';

const SelectField = ({ label, name, value, onChange, defaultOption, options, error }) => {
  const getInputClasses = () => {
    return `form-select ${error ? 'is-invalid' : ''}`;
  };

  const optionsArray = !Array.isArray(options) && typeof options === 'object'
    ? Object.keys(options).map(opt => ({ name: options[opt].name, value: options[opt]._id }))
    : options.map(opt => ({ name: opt.name, value: opt._id }));

  const handleChange = ({ target }) => {
    onChange({ name: target.name, value: target.value });
  };

  return (
    <div className="mb-4">
      <label htmlFor="validationCustom04" className="form-label">{label}</label>
      <select
        className={getInputClasses()}
        id="validationCustom04"
        required
        name={name}
        value={value}
        onChange={handleChange}
      >
        <option
          disabled
          value=""
        >
          {defaultOption}
        </option>
        {optionsArray && optionsArray.map(option => (
          <option
            key={option.value}
            value={option.value}
          >
            {option.name}
          </option>
        ))
        }
      </select>
      {error && <div className="invalid-feedback">
          {error}
        </div>
      }
    </div>);
};

SelectField.defaultProps = {
  name: 'profession',
  options: []
};

SelectField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  defaultOption: PropTypes.string.isRequired,
  options: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  error: PropTypes.string
};

export default SelectField;
