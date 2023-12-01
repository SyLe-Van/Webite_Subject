import * as React from 'react';

export default class MyInput extends React.Component{
    onChange() {
        console.log("changed");
    }

    onBlur() {
        console.log("blurred");
    }

    render(){
        return <input onChange={this.onChange} onBlur={this.onBlur} />
    }
}