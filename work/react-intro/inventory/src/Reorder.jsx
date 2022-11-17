import "./Reorder.css"

const Count = (props) => {
    const onReorder = props.onReorder;

    return (
        <button className="Reorder button" onClick={onReorder}>
            ReOrder
        </button>
    );
};

export default Count;
