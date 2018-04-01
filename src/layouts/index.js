import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import './index.css';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Restoration Seven"
      meta={[
        { name: 'description', content: 'Restoration Seven' },
        { name: 'keywords', content: 'restoration, restoration7, restoration 7, health, wellness' },
      ]}
    />
    <div>
      {children()}
    </div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
