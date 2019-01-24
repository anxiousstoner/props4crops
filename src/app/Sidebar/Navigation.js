import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Topics from '../../components/Sidebar/Topics';
import Sidenav from '../../components/Navigation/Sidenav';

const Navigation = ({ trendingTopicsLoading, trendingTopics }) => (
  <div>
    <Sidenav />
    <Topics loading={trendingTopicsLoading} topics={trendingTopics} />
  </div>
);

Navigation.propTypes = {
  trendingTopicsLoading: PropTypes.bool.isRequired,
  trendingTopics: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(
  state => ({
    trendingTopicsLoading: false,
    trendingTopics: ["mushrooms", "shrooms", "mushies", "mushroomgrow", "mushroomspores"],
  }),
)(Navigation);
