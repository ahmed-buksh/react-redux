import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
    return { notes: state.notes };
};

const ConnectedList = ({ notes }) => (
    <ul className="list-group list-group-flush">
        {notes.map(el => (
            <li className="list-group-item" key={el.id}>
                {el.title}
            </li>
        ))}
    </ul>
);

const List = connect(mapStateToProps)(ConnectedList);
export default List;
