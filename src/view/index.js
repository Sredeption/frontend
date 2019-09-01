import {Home} from "./home/Home";
import {Chart} from "./chart/Chart";
import {Http} from "./http/Http";
import {WebSocket} from "./websocket/WebSocket";
import {requestHello} from "./store/Action";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
  return {
    view: state.view
  }
};

const mapDispatchToProps = dispatch => {
  return {
    requestHello: () => {
      dispatch(requestHello())
    }
  }
};

const HttpView = connect(
  mapStateToProps,
  mapDispatchToProps
)(Http);

const WebSocketView = WebSocket;

export {
  Home, Chart, HttpView, WebSocketView
}