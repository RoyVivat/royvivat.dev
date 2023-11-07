
'use client';

import { Button, Layout, Flex, Anchor } from 'antd';
import React, { useState } from 'react';
import Navbar from '@/components/navbar';

const { Header, Footer, Content } = Layout;

const headerStyle: React.CSSProperties = {
	height: '100vh',
	color: '#fff',
	backgroundColor: '#7dbcea',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center'
};

const contentStyle: React.CSSProperties = {
	textAlign: 'center',
	minHeight: 120,
	lineHeight: '120px',
	color: '#fff',
	backgroundColor: '#108ee9',
};

const footerStyle: React.CSSProperties = {
	textAlign: 'center',
	color: '#fff',
	backgroundColor: '#7dbcea',
};

export default function Home() {
	if (typeof window !== "undefined") {
		window.onbeforeunload = function () {
			window.scrollTo(0, 0);
		}
	}

	return (
		<Layout>
			<Header style={headerStyle}>
				<Flex vertical>
					<div style={{ display: 'flex', fontWeight: 'bolder', fontSize: '1000%', transform: 'translate(0%, -150px)', }}>Hi, I'm Roy</div>
					<div style={{ display: 'flex', fontWeight: 'bold', fontSize: '520%', transform: 'translate(0%, -90px)', }}>Check out my work.</div>
					<Flex gap="small" wrap="wrap">
						<Anchor
							direction='horizontal'
							items={[
								{
									key: 'resume',
									href: '#resume',
									title: 'Résumé',
								},
								{
									key: 'part-2',
									href: '#part-2',
									title: 'Part 2',
								},
								{
									key: 'part-3',
									href: '#footer',
									title: 'Part 3',
								},
							]}
						/>
					</Flex>
				</Flex>

			</Header>
			<Content style={contentStyle}>
				<Navbar />
			</Content>
			<Footer style={footerStyle} id='footer'>Footer</Footer>
		</Layout>
	)
}