import React from 'react';

const CELL_SIZE = 45;

class Obstacle extends React.Component {

    render() {
        const { x, y } = this.props;
        return (
            <div className="Obstacle" style={{
                left: `${CELL_SIZE * x + 1}px`,
                top: `${CELL_SIZE * y + 1}px`,
                width: `${CELL_SIZE - 1}px`,
                height: `${CELL_SIZE - 1}px`,
            }} />
        );
    }
}
export default Obstacle