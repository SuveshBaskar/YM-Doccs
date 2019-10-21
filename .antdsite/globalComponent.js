import {
  Alert,
  Button,
  Switch,
  message,
  Result,
  Anchor,
  Icon,
  Drawer
} from 'antd';
import React from 'react';

const { Link } = Anchor;

const sayTime = () => {
  let time = new Date().getHours();
  let greet =
    time < 12 ? 'Good Morning' : time < 16 ? 'Good Afternoon' : 'Good Evening';

  return (
    <div>
      <h2>{greet}</h2>
    </div>
  );
};

const CodeCopy = props => {
  let { children } = props;
  const info = () => {
    message.success('Copied with 💖');
    const el = document.createElement('textarea');

    el.value = children;
    if (children.props && children.props.children) {
      try {
        el.value = children.props.children.join('');
      } catch (error) {
        el.value = children.props.children;
      }
    }
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  };

  console.log(props);
  return (
    <div>
      <Button type="primary" icon="copy" onClick={info}>
        Copy Code
      </Button>
    </div>
  );
};

const CodeCopyMulti = props => {
  let { children } = props;
  const info = () => {
    message.success('Copied with 💖');
    const el = document.createElement('textarea');
    el.value = children.props.children.join('');
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  };

  console.log(children.props.children.join(''));
  return (
    <div>
      <Button type="primary" icon="copy" onClick={info}>
        Copy Code
      </Button>
    </div>
  );
};

const BannerMsg = () => {
  return (
    <div>
      <Result
        status="success"
        title="Successfully Purchased Cloud Server ECS!"
        subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
        extra={[
          <Button type="primary" key="console">
            Go Console
          </Button>,
          <Button key="buy">Buy Again</Button>
        ]}
      />
    </div>
  );
};

class SideMenu extends React.Component {
  state = { visible: false };

  showDrawer = () => {
    this.setState({
      visible: true
    });
  };

  onClose = () => {
    this.setState({
      visible: false
    });
  };

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showDrawer}>
          Open
        </Button>
        <Drawer
          title="Basic Drawer"
          placement="right"
          closable={false}
          width={480}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <Result
            status="success"
            title="Successfully Purchased Cloud Server ECS!"
            subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
            extra={[
              <Button type="primary" key="console">
                Go Console
              </Button>,
              <Button key="buy">Buy Again</Button>
            ]}
          />
        </Drawer>
      </div>
    );
  }
}
export default {
  Alert,
  Button,
  Switch,
  sayTime,
  CodeCopy,
  CodeCopyMulti,
  Result,
  BannerMsg,
  Link,
  Anchor,
  Icon,
  SideMenu
};
