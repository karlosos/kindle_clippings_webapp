import { Layout } from 'antd';
import SideMenu from './sideMenu';

const { Header, Footer, Sider, Content } = Layout;

const AppStructure = ({ content }) => {
    return (
        <>
            <Layout>
                <Header>Header</Header>
                <Layout>
                    <Sider width="232"><SideMenu /></Sider>
                    <Content>{content}</Content>
                </Layout>
                <Footer>Footer</Footer>
            </Layout>
        </>
    )
}

export default AppStructure