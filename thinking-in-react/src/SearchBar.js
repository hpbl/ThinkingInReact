import React, { Component } from 'react'

class SearchBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form>
        <input
          type='text'
          placeholder='Search...'
          value={this.props.filterText}
          onChange={this.props.onChangeText}
        />

        <p>
          <input
            type='checkbox'
            checked={this.props.inStockOnly}
            onChange={this.props.onChangeFilter}
          />
          only show products in stock
        </p>
      </form>
    );
  }
}

export default SearchBar;
