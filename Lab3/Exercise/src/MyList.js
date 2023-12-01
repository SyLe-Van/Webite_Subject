import * as React from 'react';

export default class MyList extends React.Component {
    render(){
        const {items} = this.props;
        return(
            <ul>
                {items.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        )
    }
}