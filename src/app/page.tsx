"use client"; // this is a client component 👈🏽

import Image from 'next/image'
import styles from './page.module.css'
import { RootRouter } from './routes'
import { Provider } from 'react-redux';
import { store } from './store/store';
import { EmployeeManagementScreen } from './screens/employee-management';
import MenuNavigation from './components/navbar/MenuNavigation';
import ManagementMenu from './components/navbar/ManagementMenu';

export default function Home() {

  return (
    <Provider store={store}>
      <div>
        <MenuNavigation/>
        {/* <main className={styles.main}> */}
        <EmployeeManagementScreen />
        {/* </main> */}

      </div>
    </Provider>

  )
}
