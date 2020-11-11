import React from 'react';

export default class Loadin extends React.Component {
  render() {
    return (
        <div
            style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          <div className="spinner-grow text-primary" role="status" >
            <span className="sr-only">Loading...</span>
          </div>
          <div className="spinner-grow text-secondary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          <div className="spinner-grow text-success" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
    );
  }
}
