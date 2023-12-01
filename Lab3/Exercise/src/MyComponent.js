import * as React from 'react';

export default class MyComponent extends React.Component {

    state = {
        heading: "React Awesomecause (Busy)",
        content: "Loading...",
    };
    constructor(){
        super()
        setTimeout(() => {
            this.setState({
                heading: "React Awesomecause",
                content: "Done!",
            });
        }, 3000);
    }
    render() {
        const { heading, content } = this.state;
        return(
            <main>
                <h1>{heading}</h1>
                <p>{content}</p>
            </main>
        )
    }
}