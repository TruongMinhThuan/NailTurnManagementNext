"use client"; // this is a client component 👈🏽

import { AppstoreOutlined, HomeOutlined, MailOutlined, SettingOutlined, SnippetsOutlined, TeamOutlined } from '@ant-design/icons';
import { Menu, MenuProps } from 'antd'
import Link from 'next/link';
import React, { useState } from 'react'

type Props = {}

const items: MenuProps['items'] = [
    {
        label: (<Link href="/dashboard">Dashboard</Link>),
        key: 'home',
        icon: <HomeOutlined />,
    },
    {
        label: (<Link href="/employee">Employee</Link>),
        key: 'app',
        icon: <TeamOutlined />,
    },
    // {
    //     // label: (<Link to={'/employee-turn-screen'}>Turns</Link>),
    //     label: (<Link to={'/turn-calendar-screen'}>Calender's Turns</Link>),
    //     key: 'alipay',
    // },
    // {
    //     label: 'Statistic',
    //     key: 'SubMenu',
    //     icon: <SnippetsOutlined />,
    //     // children: [
    //     //     {
    //     //         type: 'group',
    //     //         label: 'Item 1',
    //     //         children: [
    //     //             {
    //     //                 label: 'Option 1',
    //     //                 key: 'setting:1',
    //     //             },
    //     //             {
    //     //                 label: 'Option 2',
    //     //                 key: 'setting:2',
    //     //             },
    //     //         ],
    //     //     },
    //     //     {
    //     //         type: 'group',
    //     //         label: 'Item 2',
    //     //         children: [
    //     //             {
    //     //                 label: 'Option 3',
    //     //                 key: 'setting:3',
    //     //             },
    //     //             {
    //     //                 label: 'Option 4',
    //     //                 key: 'setting:4',
    //     //             },
    //     //         ],
    //     //     },
    //     // ],
    // },
];


const MenuNavigation = (props: Props) => {

    const [current, setCurrent] = useState('mail');

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };


    return (
        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
    )
}

export default MenuNavigation