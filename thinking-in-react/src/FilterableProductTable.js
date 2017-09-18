import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {filterText: '', inStockOnly: false};
  }

  handleInStockInputChange = (e) => {
    this.setState({
      inStockOnly: e.target.checked
    })
  }

  handleFilterTextInput = (e) => {
    this.setState({
      filterText: e.target.value
    })
  }

  render() {
    var PRODUCTS = [
      {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
      {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
      {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
      {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
      {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
      {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
    ];

    return (
      <div style={{padding: '10px'}}>
        <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onChangeText={this.handleFilterTextInput}
          onChangeFilter={this.handleInStockInputChange}
        />

        <ProductTable
          products={PRODUCTS}
          filterText={this.state.filterText}
          inStockOnly={ this.state.inStockOnly }
        />
      </div>
    );
  }
}



export default FilterableProductTable;
