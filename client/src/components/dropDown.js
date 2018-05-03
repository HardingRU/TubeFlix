import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';


export default class DropDownMenuSimpleExample extends React.Component {

 constructor(props) {
   super(props);
   this.state = {value: 1};
 }

 handleChange = (event, index, value) => {
     this.setState({value});
     console.log(this.state)
 }

 render() {
   return (
     <div>
       <DropDownMenu value={this.state.value} onChange={this.handleChange}>
         <MenuItem value={1} primaryText="Trending" />
         <MenuItem value={2} primaryText="Music" />
         <MenuItem value={3} primaryText="Trailers" />
         <MenuItem value={4} primaryText="Comedy" />
         <MenuItem value={5} primaryText="Sports" />
         <MenuItem value={6} primaryText="Gaming" />
         <MenuItem value={7} primaryText="Science/Tech" />
         <MenuItem value={8} primaryText="News/Politics" />
       </DropDownMenu>
       <br />

     </div>
   );
 }
}
