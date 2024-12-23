import { Component } from "react";
import './search-box.styles.css';
class SearchBox extends Component {

    render (){
        const{onSearchEngine} = this.props;

        return ( <input
        className={`search-box ${this.props.className}`}
        type="search"
        placeholder={this.props.placeholder}
        onChange={onSearchEngine}
      />);
    }
}

export default SearchBox;
