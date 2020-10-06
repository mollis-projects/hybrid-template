import React from 'react';
import Layout from '../../components/Layout';
import { Phar, SubTitle, Title } from '../../components/Typography';
import Box from '../../components/Box';

const Home = () => (
    <Layout columns={1} gap={40}>
        <Title align="center" bold>
            Mollis example
        </Title>
        <Layout columns={4} gap={24} responsive fitted>
            <Box transparent status="info">
                <SubTitle align="center" bold>
                    Subtitle
                </SubTitle>
                <Phar align="center">Hello world</Phar>
            </Box>
        </Layout>
    </Layout>
);

export default Home;
