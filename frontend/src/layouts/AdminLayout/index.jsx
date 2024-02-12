import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectLocale, selectTheme } from '@containers/App/selectors';

import AdminNavbar from '@components/AdminNavbar';

const AdminLayout = ({ children, locale, theme, intl: { formatMessage } }) => (
    <div>
        <AdminNavbar title={formatMessage({ id: 'app_title_header' })} locale={locale} theme={theme} />
        {children}
    </div>
);

const mapStateToProps = createStructuredSelector({
    locale: selectLocale,
    theme: selectTheme,
});

AdminLayout.propTypes = {
    children: PropTypes.element.isRequired,
    locale: PropTypes.string,
    theme: PropTypes.string,
    intl: PropTypes.object,
};

export default injectIntl(connect(mapStateToProps)(AdminLayout));
