import React from 'react';
import styles from './pageContainer.module.scss';

interface IProps {
  children: React.ReactNode;
}

const PageContainer: React.FC<IProps> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default PageContainer;
