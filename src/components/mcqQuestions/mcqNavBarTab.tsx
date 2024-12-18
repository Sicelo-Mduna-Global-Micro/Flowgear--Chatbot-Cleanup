import React from "react";
import McqToolbar from "./mcqToolbar";
import McqBody from "./mcqBody";

interface McqNavBarTabProps {
  handleNavigationChange: (navTarget: string, routeParams?: {}) => void;
}

interface McqNavBarTabState {}

class McqNavBarTab extends React.Component<
  McqNavBarTabProps,
  McqNavBarTabState
> {
  state = { messages: null };
  render() {
    return (
      <div className="invoices-due-container">
        <McqToolbar />
        <div
          className="app-contentarea"
          style={{ width: "auto" }}
          id="content-area"
        >
          <div className="container-fluid">
            <div className="invoices-due-container">
              <McqBody />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default McqNavBarTab;
