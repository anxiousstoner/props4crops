import React from 'react';
import { FormattedMessage } from 'react-intl';
import './SidebarBlock.less';
import ModalSignUp from '../Modal/ModalSignUp'

const SignUp = () =>
  (<div className="SidebarBlock">
    <h3 className="SidebarBlock__title">
      <FormattedMessage id="new_to_props" defaultMessage="New to Shroomotopia.net?" />
    </h3>
    <div className="Steps Step1">
      <i className="iconfont icon-success_fill SidebarBlock__steps" />
      <FormattedMessage id="step_1" defaultMessage="Sign up to Steem" />
    </div>
    <div className="Steps Step2">
      <i className="iconfont icon-success_fill SidebarBlock__steps" />
      <FormattedMessage id="step_2" defaultMessage="Wait for confirmation" />
    </div>
    <div className="Steps Step3">
      <i className="iconfont icon-success_fill SidebarBlock__steps" />
      <FormattedMessage id="step_3" defaultMessage="Grab your posting key" />
    </div>
    <div className="Steps Step4">
      <i className="iconfont icon-success_fill SidebarBlock__steps" />
      <FormattedMessage id="step_4" defaultMessage="Log in" />
    </div>

    <ModalSignUp />

  </div>);

export default SignUp;
