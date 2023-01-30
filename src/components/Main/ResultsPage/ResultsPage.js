import React from "react";
import styles from './ResultsPage.module.css';
import SearchHeadline from './SearchHeadline/SearchHeadline';
import GeneralInformation from './GeneralInformation/GeneralInformation';
import DocumentsList from './DocumentsList/DocumentsList';

export default function ResultsPage() {
  return (
    <div className={styles.container}>
      <SearchHeadline />
      <GeneralInformation />
      <DocumentsList />
    </div>
  )
}
