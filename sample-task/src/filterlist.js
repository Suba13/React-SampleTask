import React, { Component } from 'react';
import './filter.css';

class FilterList extends Component {
  constructor(props){
    super(props)
    this.state={items:[
      "Apples",
      "Broccoli",
      "Chicken",
      "Bacon",
      "Eggs",
      "Salmon",
      "Granola",
      "Bananas",
      "Beer",
      "Wine",
      "Yogurt"
    ]}
  }
  itemsmap() {
    return this.state.items.map((e) => {
      return <ul><li key={e}>{e}</li></ul>}
    );
  }
  filterList=(event)=>{
    var updatedList = this.state.items;
    updatedList = updatedList.filter(function(item){
      return item.toLowerCase().search(
        event.target.value.toLowerCase()) >=0;
    });
    this.setState({items: updatedList});
  }
  render() {
    return (
      <div>
        <input type="text" placeholder="Search" onChange={this.filterList}/>
        {this.itemsmap()}
      </div>
    );
  }
}

export default FilterList;
