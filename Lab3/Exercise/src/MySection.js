import *as React from 'react';
export default class MySection extends React.Component {
    render() {
        return(
            <section>
                <h2> {this.props.title}</h2>
                {this.props.children}
            </section>
        )
    }
}