import {HeaderBar} from "./components/HeaderBar";
import {SiderBar} from "./components/SiderBar";
import {connect} from "react-redux";
import {switchFullScreen, switchSiderBar} from "./store/Action";

const mapStateToProps = (state) => {
  return {
    layout: state.layout
  }
};

const mapDispatchToProps = dispatch => {
  return {
    switchFullScreen: () => {
      dispatch(switchFullScreen())
    },
    switchSiderBar: (siderbarFold) => {
      dispatch(switchSiderBar(siderbarFold))
    }
  }
};

const Header = connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderBar);

const Sider = connect(
  mapStateToProps,
  mapDispatchToProps
)(SiderBar);

export {
  Header, Sider
}