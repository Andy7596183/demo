import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

function PrivateRoute({ path, component, falseComponent, isLogin, ...rest }) {
  return (
    <>
      {isLogin ? (
        <Route {...rest} path={path} component={component} />
      ) : (
        <Route {...rest} path={path} component={falseComponent} />
      )}
    </>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    isLogin: state.auth.isLogin
  };
};

export default connect(mapStateToProps)(PrivateRoute);
