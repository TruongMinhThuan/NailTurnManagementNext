"use client"; // this is a client component 👈🏽

import Image from 'next/image'
import styles from './page.module.css'
import { RootRouter } from './routes'
import { Provider } from 'react-redux';
import { store } from './store/store';
import { EmployeeManagementScreen } from './screens/employee-management';

export default function Home() {

  // return (
  //   <Provider store={store}>
  //     <RootRouter />
  //   </Provider >
  // )

  return (
    <Provider store={store}>
      <main className={styles.main}>
        <EmployeeManagementScreen/>
      </main>
    </Provider>

  )
}
