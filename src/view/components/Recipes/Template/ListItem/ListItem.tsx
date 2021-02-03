import React from 'react';
import './ListItem.scss';

interface IListItemProps {
    text : string;
}

const ListItem : React.FC<IListItemProps> = props => {
    return (
        <div className={`list-item`}>
            {props.text}
        </div>
    );
}

export default ListItem;