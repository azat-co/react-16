import React from 'react';

function withHOC (OriginalComponent, data) {
    class HOCComponent extends React.Component {
      
      render() {
        return <OriginalComponent
            {...this.props}
            {...this.state}
            {...data}
            />
      }
    }
    return HOCComponent;
}
export default withHOC;