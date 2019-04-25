import React from "react";
import { connect } from "react-redux";


class ConnectedList extends React.Component {
    render() {
        return (
            <ul className="list-group list-group-flush">
                {this.props.notes.map(el => (
                    <li className="list-group-item" key={el.id}>
                        {el.title}
                    </li>
                ))}
            </ul>
        );      
    }
}

const mapStateToProps = state => {
    return { notes: state.notes };
};
const List = connect(mapStateToProps)(ConnectedList);

export default List;
