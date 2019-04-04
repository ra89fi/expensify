import React from 'react';
import { connect } from 'react-redux';
import CurrencyDropdown from './CurrencyDropdown';
import { setCurrency } from '../actions/settings';

export class CurrencyController extends React.Component {
  onCurrencyChange = e => {
    this.props.setCurrency(e.target.value);
  };
  render() {
    return (
      <div className="currency">
        <span className="currency__title">Show as &nbsp;: &nbsp;</span>
        <CurrencyDropdown
          cName="currency__select"
          currency={this.props.currency}
          onCurrencyChange={this.onCurrencyChange}
        />
      </div>
    );
  }
}

export default connect(
  state => ({
    currency: state.settings.currency
  }),
  dispatch => ({
    setCurrency: currency => dispatch(setCurrency(currency))
  })
)(CurrencyController);
