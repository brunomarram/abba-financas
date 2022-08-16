import {
    BarChartOutlined,
    FallOutlined,
    RiseOutlined,
    CreditCardOutlined,
    ClusterOutlined,
    BankOutlined,
    SlidersOutlined,
    PieChartOutlined,
    TeamOutlined

} from '@ant-design/icons';

const menu = [
    {
        key: '0',
        icon: <BarChartOutlined />,
        label: 'Resumo',
        path: '/home'
    },
    {
        key: '1',
        icon: <FallOutlined />,
        label: 'Despesas',
        path: '/despesas'
    },
    {
        key: '2',
        icon: <RiseOutlined />,
        label: 'Receitas'
    },
    {
        key: '3',
        icon: <CreditCardOutlined />,
        label: 'Cartões'
    },
    {
        key: '4',
        icon: <BankOutlined />,
        label: 'Contas',
        path: '/contas'
    },
    {
        key: '5',
        icon: <ClusterOutlined />,
        label: 'Categorias'
    },
    {
        key: '6',
        icon: <SlidersOutlined />,
        label: 'Investimentos'
    },
    {
        key: '7',
        icon: <PieChartOutlined />,
        label: 'Relatórios'
    },
    {
        key: '8',
        icon: <TeamOutlined />,
        label: 'Família (Beta)'
    },
]

export default menu