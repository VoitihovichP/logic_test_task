import { FC, memo } from 'react';

import styles from './NoDataBanner.module.scss';

export const NoDataBanner: FC = memo(() => {
  return (
    <div className={styles.noDataBanner}>
      <p>
        Looks like there are no active courses right now :(
        <br />
        <br />
        <span>Try refreshing the page</span>
      </p>
    </div>
  );
});

NoDataBanner.displayName = 'NoDataBanner';
